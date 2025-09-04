# app.py
from flask import Flask, request, jsonify
from flask_cors import CORS
import psycopg2
from psycopg2.extras import RealDictCursor

app = Flask(__name__)
CORS(app)

# PostgreSQL connection
conn = psycopg2.connect(
    host="localhost",
    dbname="cafe_fausse",
    user="postgres",
    password="Postgressql100b$",
    port=5432
)

# ---------------------------
# Newsletter subscription
# ---------------------------
@app.route("/api/newsletter", methods=["POST"])
def newsletter():
    data = request.json
    name = data.get("name")
    email = data.get("email")
    phone = data.get("phone")

    try:
        cur = conn.cursor()
        # Check if email already exists
        cur.execute("SELECT id FROM Customers WHERE email=%s", (email,))
        if cur.fetchone():
            cur.close()
            return jsonify({"error": "Email already subscribed!"}), 400

        # Insert new subscriber
        cur.execute(
            "INSERT INTO Customers (name, email, phone, newsletter_signup) VALUES (%s, %s, %s, TRUE)",
            (name, email, phone)
        )
        conn.commit()
        cur.close()
        return jsonify({"message": "Successfully subscribed!"}), 201
    except Exception as e:
        return jsonify({"error": str(e)}), 500

# ---------------------------
# Table reservations
# ---------------------------
@app.route("/api/reservations", methods=["POST"])
def reservations():
    data = request.json
    name = data.get("name")
    email = data.get("email")
    phone = data.get("phone")
    guests = data.get("guests")
    time_slot = data.get("time_slot")  # Expected format: "YYYY-MM-DD HH:MM"

    try:
        cur = conn.cursor(cursor_factory=RealDictCursor)

        # Add customer if not exists
        cur.execute("SELECT id FROM Customers WHERE email=%s", (email,))
        customer = cur.fetchone()
        if customer:
            customer_id = customer["id"]
        else:
            cur.execute(
                "INSERT INTO Customers (name, email, phone) VALUES (%s, %s, %s) RETURNING id",
                (name, email, phone)
            )
            customer_id = cur.fetchone()["id"]

        # Check for available table
        cur.execute(
            "SELECT COUNT(*) FROM Reservations WHERE time_slot=%s",
            (time_slot,)
        )
        count = cur.fetchone()["count"]
        if count >= 30:
            cur.close()
            return jsonify({"error": "No tables available for this time. Please choose another slot."}), 400

        # Assign table number (first available)
        table_number = count + 1

        # Insert reservation
        cur.execute(
            "INSERT INTO Reservations (customer_id, time_slot, table_number, guests) VALUES (%s, %s, %s, %s)",
            (customer_id, time_slot, table_number, guests)
        )
        conn.commit()
        cur.close()

        return jsonify({"message": f"Reservation confirmed for table {table_number}"}), 201
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(debug=True)
