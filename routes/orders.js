const express = require("express");
const orders = require("../data/orders");
const menu = require("../data/menu");
const router = express.Router();

// Place Order
router.post("/", (req, res) => {
  const { items } = req.body;

  // Validate items
  const invalidItems = items.filter((id) => !menu.find((item) => item.id === id));
  if (invalidItems.length > 0) {
    return res.status(400).json({ message: "Invalid menu item IDs", invalidItems });
  }

  const newOrder = {
    id: orders.length + 1,
    items,
    status: "Preparing",
    createdAt: new Date(),
  };

  orders.push(newOrder);
  res.status(201).json(newOrder);
});

// Get Order
router.get("/:id", (req, res) => {
  const order = orders.find((o) => o.id === parseInt(req.params.id));
  if (!order) {
    return res.status(404).json({ message: "Order not found" });
  }
  res.json(order);
});

module.exports = router;
