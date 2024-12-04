const orders = require("../data/orders");

// Simulate Order Status Updates
const updateOrderStatuses = () => {
  orders.forEach((order) => {
    if (order.status === "Preparing") order.status = "Out for Delivery";
    else if (order.status === "Out for Delivery") order.status = "Delivered";
  });
};

module.exports = { updateOrderStatuses };
