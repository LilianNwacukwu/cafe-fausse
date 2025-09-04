# Café Fausse Web Application And Interface Designs

**Author:** Lilian Chimaobi Nwacukwu  
**Email:** lilydiamond100@gmail.com  

## Overview
Café Fausse is a fine-dining restaurant web application built using **React** (frontend) and **Flask + PostgreSQL** (backend). The site provides a modern and elegant user interface, allowing customers to:

- View the restaurant menu
- Make table reservations
- Sign up for a newsletter
- Explore a photo gallery
- Learn about the restaurant via an “About Us” page

This project demonstrates a complete **full-stack application** with working backend logic and database integration.

---

## Features
1. **Home Page:**  
   - Welcome message  
   - Newsletter subscription form with duplicate email handling  

2. **Menu Page:**  
   - Categorized menu items  

3. **Reservations Page:**  
   - Form for booking tables  
   - Handles guest count, time slots, and table assignment  
   - Validates availability  

4. **About Page:**  
   - Information about the restaurant and owners  

5. **Gallery Page:**  
   - Displays images of dishes and restaurant ambiance  

---

## Tech Stack
- **Frontend:** React, JSX, CSS  
- **Backend:** Python, Flask, Flask-CORS  
- **Database:** PostgreSQL  

---

## Database Setup
The application uses **PostgreSQL** with the following tables:

### Customers
| Column             | Type        | Notes                        |
|-------------------|------------|-------------------------------|
| id                 | SERIAL     | Primary Key                  |
| name               | VARCHAR(100)| Customer full name           |
| email              | VARCHAR(100)| Unique email for login/newsletter |
| phone              | VARCHAR(20) | Customer phone number        |
| newsletter_signup  | BOOLEAN    | Default FALSE                |

### Reservations
| Column      | Type       | Notes                              |
|------------|-----------|-----------------------------------|
| id          | SERIAL    | Primary Key                        |
| customer_id | INT       | Foreign key referencing Customers(id) |
| time_slot   | TIMESTAMP | Date and time of reservation      |
| table_number| INT       | Assigned table number             |
| guests      | INT       | Number of guests                  |

**Example SQL commands:**
```sql
CREATE TABLE Customers (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100) UNIQUE,
    phone VARCHAR(20),
    newsletter_signup BOOLEAN DEFAULT FALSE
);

CREATE TABLE Reservations (
    id SERIAL PRIMARY KEY,
    customer_id INT REFERENCES Customers(id),
    time_slot TIMESTAMP,
    table_number INT,
    guests INT
);

Installation / Running Locally

Clone the repository

git clone https://github.com/LilianNwacukwu/cafe-fausse.git
cd cafe-fausse


Backend setup

cd backend
python -m venv venv
venv\Scripts\activate      # Windows
pip install -r requirements.txt
python app.py


Frontend setup

cd ../frontend
npm install
npm start


Visit the app
Open your browser and go to http://localhost:3000.

AI Tools Used

Used AI-assisted coding to generate boilerplate React components.

Used AI to help structure the backend API and integrate PostgreSQL logic.

Notes

Ensure PostgreSQL is running locally and the database cafe_fausse exists.

Newsletter and reservation forms validate inputs and handle duplicates.

The app uses CORS to allow frontend-backend communication.

License

This project is for academic purposes and was submitted as part of Quantic’s Web Application & Interface Design course.



