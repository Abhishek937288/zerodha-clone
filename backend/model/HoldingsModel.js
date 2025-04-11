const { model } = require("mongoose");
const  HoldingsSchema  = require("../Schemas/HoldingsSchema");

module.exports = model("holding", HoldingsSchema);