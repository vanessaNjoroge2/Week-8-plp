# E-commerce CRUD API

## Overview

This is a **Node.js + Express** CRUD application connected to a MySQL database.
It supports **Products** and **Orders** with full Create, Read, Update, Delete operations.

Database used: `ecommerce_db` (from Assignment Question 1).

---

## Installation

```bash
git clone <repo-url>
cd ecommerce-crud
npm install
```

## Run the App

```bash
node server.js
# or use nodemon
npx nodemon server.js
```

Server runs at: `http://localhost:5000`

---

## API Endpoints

### Products

* **POST** `/api/products` → Create a new product
* **GET** `/api/products` → Get all products
* **PUT** `/api/products/:id` → Update a product
* **DELETE** `/api/products/:id` → Delete a product

### Orders

* **POST** `/api/orders` → Create a new order
* **GET** `/api/orders` → Get all orders
* **PUT** `/api/orders/:id` → Update order status
* **DELETE** `/api/orders/:id` → Delete an order

---

## Notes

* Ensure MySQL is running and `ecommerce_db` exists.
* Update DB credentials in `db.js`.
* Use Postman, Thunder Client, or curl to test endpoints.
