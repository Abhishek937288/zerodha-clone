const { HoldingsModel } = require("../model/HoldingsModel");

exports.getAllHoldings = async (req, res) => {
  try {
    const userId = req.user.id; 
    const holdings = await HoldingsModel.find({ userId });
    res.json(holdings);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};
