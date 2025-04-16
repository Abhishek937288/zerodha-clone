const express = require('express');
const router = express.Router();
const Position = require('../model/PositionsModel');

router.get('/', async (req, res) => { 
    try {
        const positions = await Position.find(); 
        res.status(200).json(positions);
    } catch (error) {
        res.status(500).json({ message: error.message });
    
    }
});

module.exports = router;