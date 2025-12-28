# React_Project

🛒 ShopEZ – E-Commerce Web Application

A fully responsive e-commerce web application built using React.js, featuring product listings, global search, filters, cart system, authentication, and checkout flow.

🚀 Live Demo

https://astounding-melba-ef75d8.netlify.app/

📌 Features
🔍 Product Browsing

Fetches real-time products from FakeStore API

Product listing grid with image, title, price & rating

Individual Product Details page

🧭 Smart Filtering & Sorting

Category filter (Men, Women, Jewelry, Electronics)

Price sorting (Low → High, High → Low)

Rating filter (2★, 3★, 4★ & above)

🔎 Global Search Bar (Navbar)

Works across all pages

Uses URL query parameters (/?search=shoes)

Matches product titles

🛒 Cart Management (Context API)

Add to cart

Increase/decrease quantity

Remove item

Auto price calculation

Cart saved in state

🔐 User Authentication

Simple login system using AuthContext + localStorage

Shows username on navbar

Logout button

Protects checkout page (redirects to login)

💳 Checkout Page

Fully validated form

Order summary

Displays total amount

Success message on completion

📱 Responsive UI

Mobile-first design

Responsive navbar, grid cards, and pages

Looks clean on all screens

🛠️ Tech Stack
Technology	Purpose
React.js	Frontend Framework
React Router	Page Navigation
Context API	Cart + Auth State Management
CSS (Flexbox + Grid)	Responsive UI
FakeStore API	Product Data
LocalStorage	Save login state


📂 Project Structure
src/
 ├── components/
 │     ├── Navbar.jsx
 │     └── ProductCard.jsx
 ├── context/
 │     ├── AuthContext.jsx
 │     └── CartContext.jsx
 ├── pages/
 │     ├── Home.jsx
 │     ├── ProductDetails.jsx
 │     ├── Cart.jsx
 │     ├── Checkout.jsx
 │     └── Login.jsx
 ├── styles/
 │     ├── navbar.css
 │     ├── product.css
 │     ├── cart.css
 │     ├── ProductDetails.css
 │     └── login.css
 ├── App.jsx
 └── main.jsx



👨‍💻 Author

Vicknesh K
Java Full Stack Developer | React Developer
