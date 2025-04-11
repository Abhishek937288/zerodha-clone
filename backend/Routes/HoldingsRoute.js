const express = require('express');
const router = express.Router();
const Holding = require('../model/HoldingsModel');
const authMiddleware = require('../Middlewares/AuthMiddleware'); 

router.get('/', authMiddleware.userVerification, async (req, res) => { 
    try {
        const holdings = await Holding.find({ userId: req.user.id });
        res.status(200).json(holdings);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;