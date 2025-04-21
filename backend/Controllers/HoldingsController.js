const Holding = require('../model/HoldingsModel');

exports.getAllHoldings = async (req, res) => {
  try {
    const holdings = await Holding.find({ userId: req.user.id });
    res.status(200).json(holdings);
  } catch (error) {
    res.status(500).json({message : error.message})
  }
};
