const mongoose = require("mongoose");
const { HoldingsSchema } = require("../schemas/HoldingsSchema"); 

const HoldingsModel = mongoose.model("Holdings", HoldingsSchema);

module.exports = { HoldingsModel };
