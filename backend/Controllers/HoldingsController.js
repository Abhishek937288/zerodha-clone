const  HoldingsModel  = require("../model/HoldingsModel");

exports.getAllHoldings = async (req, res) => {
  try {
    let holdings = await HoldingsModel.find({userId: req.user.id});
    res.json(holdings);
  } catch (error) {
    console.error("Error in getAllHoldings:", error); 
    res.status(500).json({ message: "Server error", error });
  }
};
