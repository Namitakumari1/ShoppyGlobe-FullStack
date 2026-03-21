# ShoppyGlobe - Full Stack E-commerce Application

ShoppyGlobe is a full-stack e-commerce application where users can browse products, search items, view product details, add products to cart, and perform backend operations like authentication and cart management.

---

## Project Description

This project is built using React for frontend, Node.js and Express for backend, and MongoDB for database.

---

## Technologies Used

Frontend:

* React (Vite)
* React Router
* Redux Toolkit
* CSS

Backend:

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT Authentication
* CORS

---

## Features

Frontend:

* View list of products
* Search products by title
* View product details
* Add to cart
* Update/remove cart items
* Checkout (dummy order)
* Responsive UI

Backend:

* Product CRUD APIs
* Cart APIs (Add, Update, Delete)
* User Registration and Login
* JWT Authentication
* Protected Routes (Cart APIs)
* Error Handling

---

## Project Structure

Frontend (React):
src
├── components
├── hooks
├── pages
├── redux
├── App.jsx
└── main.jsx

Backend (Node.js):
NodeJS
├── Controller
├── Model
├── Routes
├── Middleware
└── server.js

---

## API Endpoints

Authentication:

* POST /api/register → Register user
* POST /api/login → Login and get token

Products:

* POST /api/products → Create product
* GET /api/products → Get all products
* GET /api/products/:id → Get product by ID
* PUT /api/products/:id → Update product
* DELETE /api/products/:id → Delete product

Cart (Protected Routes):

* POST /api/cart → Add to cart
* PUT /api/cart/:id → Update cart
* DELETE /api/cart/:id → Delete cart item

Note: Cart APIs require token in header:
Authorization: Bearer <token>

---

## Database Collections

* Products
* Users
* Cart

---

## API Testing

All APIs are tested using ThunderClient. Screenshots are included in documentation.

---

## How to Run Project

1. Clone Repository:
   git clone https://github.com/Namitakumari1/ShoppyGlobe-FullStack

2. Frontend Setup:
   cd ShoppyGlobe
   npm install
   npm run dev

Frontend runs on:
http://localhost:5173

3. Backend Setup:
   cd NodeJS
   npm install
   node server.js

Backend runs on:
http://localhost:3030

---

## Screenshots

* Authentication APIs
* Product APIs
* Cart APIs
* MongoDB Collections

---

## Author

Namita Kumari
