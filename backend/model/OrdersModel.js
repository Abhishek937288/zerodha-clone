const { model } = require("mongoose");
const OrdersSchema = require("../Schemas/OdersSchema");

module.exports = model("order", OrdersSchema);