const express = require('express');
const router = express.Router();

const authMiddleware = require('../Middlewares/AuthMiddleware'); 
const OrdersController = require("../Controllers/HoldingsController");

router.get("/",authMiddleware.userVerification,OrdersController.getAllHoldings);

module.exports = router;