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
1. **Clone the repository**
```bash
git clone https://github.com/LilianNwacukwu/cafe-fausse.git
cd cafe-fausse

Backend Setup

cd backend
python -m venv venv
venv\Scripts\activate       # Windows
pip install -r requirements.txt
python app.py


Frontend Setup

cd frontend
npm install
npm start


Open your browser at http://localhost:3000 to access the site.

Database Setup

Customers Table: Stores subscriber and reservation customer info.

Reservations Table: Stores reservation details including table number, time, and guests.

Ensure PostgreSQL is running and the database cafe_fausse exists before running the app.

Usage

Users can navigate between Home, Menu, Reservations, About, and Gallery pages.

Users can subscribe to the newsletter, which is validated to prevent duplicate emails.

Users can make a reservation, which is validated against table availability.

Admin or developer can view database contents via PostgreSQL.

Author

Name: Lilian Chimaobi Nwacukwu

Email: lilydiamond100@gmail.com

GitHub: LilianNwacukwu

Notes

The project was developed following Quantic's Web Application & Interface Design requirements.

AI tools were used to assist in code generation and UI improvements.
