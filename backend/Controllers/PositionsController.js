const  PositionsModel  = require("../model/PositionsModel");

exports.getAllPositions = async (req, res) => {
  try {
    let allPositions = await PositionsModel.find({userId: req.user.id});
    res.json(allPositions);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};