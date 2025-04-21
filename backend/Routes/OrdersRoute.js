const express = require("express");
const router = express.Router();

const authMiddleware = require("../Middlewares/AuthMiddleware");
const OrdersController = require("../Controllers/OrdersController");

router.get("/", authMiddleware.userVerification, OrdersController.getAllOrders);

router.post("/", authMiddleware.userVerification, OrdersController.newOrder);

module.exports = router;
