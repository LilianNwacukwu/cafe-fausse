# Café Fausse - Web Application & Interface Design Project

## Overview
Café Fausse is an elegant fine-dining restaurant. This project is a full-stack web application built as part of my MSSE program at Quantic. The website was developed to provide an online presence for the restaurant, including menu display, reservations, and newsletter signups.

The application uses **React** for the frontend, **Flask** for the backend, and **PostgreSQL** as the database.

## Features
- **Home Page:** Welcome message, restaurant description, and newsletter signup form.
- **Menu Page:** Displays menu items by category.
- **Reservations Page:** Allows customers to make table reservations, specifying date, time, and number of guests.
- **About Page:** Introduces the restaurant owners and story.
- **Gallery Page:** Showcases photos of the restaurant and dishes.
- **Newsletter Signup:** Validates unique emails and stores subscriber information in the database.
- **Reservation System:** Assigns available tables and prevents overbooking.
- **Responsive Design:** Optimized for desktop, tablet, and mobile devices.

## Technologies Used
- **Frontend:** React, JSX, CSS, Flexbox/Grid
- **Backend:** Flask, Python, Flask-CORS
- **Database:** PostgreSQL
- **API Requests:** Axios
- **AI Tools:** Used AI-assisted development to speed up coding and ensure clean architecture

## Installation and Running Locally
# Café Fausse Web Application

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

## Installation / Running Locally

1. **Clone the repository**  
   ```bash
   git clone https://github.com/LilianNwacukwu/cafe-fausse.git
   cd cafe-fausse


2.Backend setup

cd backend
python -m venv venv
venv\Scripts\activate      # Windows
pip install -r requirements.txt
python app.py

3.Frontend setup

cd ../frontend
npm install
npm start


4.Visit the app
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
