const express = require('express');
const router = express.Router();
const Position = require('../model/PositionsModel');
const authMiddleware = require('../Middlewares/AuthMiddleware');

router.get('/', authMiddleware.userVerification , async (req, res) => { 
    try {
        const positions = await Position.find({ userId: req.user.id }); 
        res.status(200).json(positions);
    } catch (error) {
        res.status(500).json({ message: error.message });
        
    }
});

module.exports = router;