from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
import random
from datetime import datetime

app = Flask(__name__)

# Database config (PostgreSQL)
app.config['SQLALCHEMY_DATABASE_URI'] = "postgresql://postgres:yourpassword@localhost/cafe_fausse"
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)


# ------------------------
# Database Models
# ------------------------
class Customer(db.Model):
    __tablename__ = "customers"
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    phone = db.Column(db.String(20), nullable=True)
    newsletter_signup = db.Column(db.Boolean, default=False)

    reservations = db.relationship("Reservation", backref="customer", lazy=True)


class Reservation(db.Model):
    __tablename__ = "reservations"
    id = db.Column(db.Integer, primary_key=True)
    customer_id = db.Column(db.Integer, db.ForeignKey("customers.id"), nullable=False)
    timeslot = db.Column(db.DateTime, nullable=False)
    guests = db.Column(db.Integer, nullable=False)
    table_number = db.Column(db.Integer, nullable=False)


# ------------------------
# Routes
# ------------------------

@app.route("/")
def home():
    return jsonify({"message": "Welcome to Café Fausse API"})


@app.route("/reservations", methods=["GET"])
def get_reservations():
    reservations = Reservation.query.all()
    result = []
    for r in reservations:
        result.append({
            "id": r.id,
            "customer": r.customer.name,
            "email": r.customer.email,
            "phone": r.customer.phone,
            "timeslot": r.timeslot.strftime("%Y-%m-%d %H:%M:%S"),
            "guests": r.guests,
            "table_number": r.table_number
        })
    return jsonify({"status": "success", "reservations": result})


@app.route("/reservations/<int:reservation_id>", methods=["GET"])
def get_reservation(reservation_id):
    reservation = Reservation.query.get(reservation_id)
    if not reservation:
        return jsonify({"status": "error", "message": "Reservation not found"}), 404
    return jsonify({
        "status": "success",
        "reservation": {
            "id": reservation.id,
            "customer": reservation.customer.name,
            "email": reservation.customer.email,
            "phone": reservation.customer.phone,
            "timeslot": reservation.timeslot.strftime("%Y-%m-%d %H:%M:%S"),
            "guests": reservation.guests,
            "table_number": reservation.table_number
        }
    })


@app.route("/reserve", methods=["POST"])
def make_reservation():
    data = request.json
    name = data.get("name")
    email = data.get("email")
    phone = data.get("phone")
    guests = data.get("guests")
    timeslot = data.get("timeslot")

    if not all([name, email, guests, timeslot]):
        return jsonify({"status": "error", "message": "Missing required fields"}), 400

    try:
        timeslot_dt = datetime.strptime(timeslot, "%Y-%m-%d %H:%M:%S")
    except ValueError:
        return jsonify({"status": "error", "message": "Invalid timeslot format"}), 400

    # Find or create customer
    customer = Customer.query.filter_by(email=email).first()
    if not customer:
        customer = Customer(name=name, email=email, phone=phone)
        db.session.add(customer)
        db.session.commit()

    # Check if timeslot is full (30 tables max)
    existing_reservations = Reservation.query.filter_by(timeslot=timeslot_dt).count()
    if existing_reservations >= 30:
        return jsonify({"status": "error", "message": "Timeslot is fully booked"}), 400

    # Assign table (random between 1-30, avoiding duplicates)
    assigned_tables = [r.table_number for r in Reservation.query.filter_by(timeslot=timeslot_dt).all()]
    available_tables = [t for t in range(1, 31) if t not in assigned_tables]
    if not available_tables:
        return jsonify({"status": "error", "message": "No tables available"}), 400

    table_number = random.choice(available_tables)

    # Create reservation
    reservation = Reservation(
        customer_id=customer.id,
        timeslot=timeslot_dt,
        guests=guests,
        table_number=table_number
    )
    db.session.add(reservation)
    db.session.commit()

    return jsonify({"status": "success", "message": "Reservation created", "table_number": table_number})


@app.route("/newsletter", methods=["POST"])
def newsletter_signup():
    data = request.json
    email = data.get("email")
    name = data.get("name")
    phone = data.get("phone")

    if not email:
        return jsonify({"status": "error", "message": "Email is required"}), 400

    customer = Customer.query.filter_by(email=email).first()
    if not customer:
        customer = Customer(name=name or "Guest", email=email, phone=phone, newsletter_signup=True)
        db.session.add(customer)
    else:
        customer.newsletter_signup = True

    db.session.commit()

    return jsonify({"status": "success", "message": "Signed up for newsletter"})


if __name__ == "__main__":
    app.run(debug=True)
