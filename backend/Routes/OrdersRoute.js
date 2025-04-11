const express = require('express');
const router = express.Router();
const Order = require('../model/OrdersModel');
const authMiddleware = require('../Middlewares/AuthMiddleware');
const OrdersController = require('../Controllers/OrdersController'); 

router.get('/', authMiddleware.userVerification, async (req, res) => {
    try {
        const orders = await Order.find({ userId: req.user.id }).sort({ orderTime: -1 });
        res.status(200).json(orders);
    } catch (error) {
        console.error("Error fetching orders:", error);
        res.status(500).json({ message: error.message });
    }
});

router.post('/', authMiddleware.userVerification, OrdersController.newOrder);

module.exports = router;