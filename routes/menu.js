const express = require("express");
const menu = require("../data/menu");
const router = express.Router();

// Add Menu Item
router.post("/", (req, res) => {
  const { name, price, category } = req.body;

  // Validation
  if (!name || price <= 0 || !category) {
    return res.status(400).json({ message: "Invalid input data" });
  }

  const newItem = { id: menu.length + 1, name, price, category };
  menu.push(newItem);
  res.status(201).json(newItem);
});

// Get Menu
router.get("/", (req, res) => {
  res.json(menu);
});

module.exports = router;
