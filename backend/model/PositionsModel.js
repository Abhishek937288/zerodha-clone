const { model } = require("mongoose");

const { PositionsSchema } = require("../Schemas/PositionsSchema");

const PositionsModel = new model("position", PositionsSchema);

module.exports = { PositionsModel };