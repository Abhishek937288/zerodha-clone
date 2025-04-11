const { model } = require("mongoose");

const PositionsSchema = require("../Schemas/PositionsSchema");

module.exports = model("position", PositionsSchema);
