const verifyToken = require("../Middlewares/verifyToken"); 
const { getAllOrders, newOrder } = require("../Controllers/OrdersController");
const router = require("express").Router();

router
  .route("/orders")
  .get(verifyToken, getAllOrders)
  .post(verifyToken, newOrder);

module.exports = router;
