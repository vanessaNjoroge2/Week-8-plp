// controllers/productController.js
const db = require('../db');

// Create Product
exports.createProduct = (req, res) => {
  const { sku, name, description, price } = req.body;
  const sql = "INSERT INTO products (sku, name, description, price) VALUES (?, ?, ?, ?)";
  db.query(sql, [sku, name, description, price], (err, result) => {
    if (err) return res.status(500).json(err);
    res.status(201).json({ id: result.insertId, sku, name, description, price });
  });
};

// Read All Products
exports.getProducts = (req, res) => {
  db.query("SELECT * FROM products", (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
};

// Update Product
exports.updateProduct = (req, res) => {
  const { id } = req.params;
  const { name, price } = req.body;
  const sql = "UPDATE products SET name=?, price=? WHERE id=?";
  db.query(sql, [name, price, id], (err, result) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "✅ Product updated" });
  });
};

// Delete Product
exports.deleteProduct = (req, res) => {
  const { id } = req.params;
  db.query("DELETE FROM products WHERE id=?", [id], (err, result) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "🗑️ Product deleted" });
  });
};
