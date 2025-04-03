const { HoldingsModel } = require("../model/HoldingsModel");

exports.getAllHoldings = async (req, res) => {
  try {
    let allHoldings = await HoldingsModel.find({});
    res.json(allHoldings);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};