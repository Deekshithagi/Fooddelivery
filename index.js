const express = require("express");
const bodyParser = require("body-parser");
const cron = require("node-cron");
const menuRoutes = require("./routes/menu");
const orderRoutes = require("./routes/orders");
const { updateOrderStatuses } = require("./services/orderStatusService");

const app = express();
app.use(bodyParser.json());

// Routes
app.use("/menu", menuRoutes);
app.use("/orders", orderRoutes);

// Cron Job for Status Updates
cron.schedule("*/1 * * * *", () => {
  updateOrderStatuses();
  console.log("Order statuses updated");
});

// Start Server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
