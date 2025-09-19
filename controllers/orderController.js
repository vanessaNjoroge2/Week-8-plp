// controllers/orderController.js
const db = require('../db');

// Create Order
exports.createOrder = (req, res) => {
  const { user_id, total } = req.body;
  const sql = "INSERT INTO orders (user_id, total) VALUES (?, ?)";
  db.query(sql, [user_id, total], (err, result) => {
    if (err) return res.status(500).json(err);
    res.status(201).json({ id: result.insertId, user_id, total });
  });
};

// Read All Orders
exports.getOrders = (req, res) => {
  db.query("SELECT * FROM orders", (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
};

// Update Order
exports.updateOrder = (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  const sql = "UPDATE orders SET status=? WHERE id=?";
  db.query(sql, [status, id], (err, result) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "✅ Order updated" });
  });
};

// Delete Order
exports.deleteOrder = (req, res) => {
  const { id } = req.params;
  db.query("DELETE FROM orders WHERE id=?", [id], (err, result) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "🗑️ Order deleted" });
  });
};
