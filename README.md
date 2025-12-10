# MY CAFE

A complete, multi-page website for a fictional restaurant featuring a menu, customer reviews, contact details, and a simulated reservation system with authentication.

## 📋 Project Overview

This project demonstrates a front-end web application using **HTML5**, **CSS3**, and **Vanilla JavaScript**. It mimics a real-world application by including:

* **Responsive Design:** Looks good on desktop and mobile.
* **Dynamic DOM Manipulation:** Reviews are added to the page instantly without refreshing.
* **Simulated Authentication:** A logic-based login/signup system that protects specific pages.
* **Data Persistence:** Uses the browser's `localStorage` to remember if a user is logged in and to auto-fill their name.

## 📂 File Structure

Ensure your project folder looks exactly like this:

```text
/TheSavoryFork
│
├── index.html         # Landing page with hero section
├── menu.html          # List of food items and prices
├── reservation.html   # Booking form (Protected Page)
├── reviews.html       # Customer reviews and submission form
├── contact.html       # Location, hours, and contact form
├── login.html         # Login and Sign Up toggle forms
├── style.css          # Global styling for all pages
└── script.js          # Main logic for auth, forms, and redirection
