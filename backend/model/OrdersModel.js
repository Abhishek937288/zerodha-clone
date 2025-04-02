const { model } = require("mongoose");

const { OrdersSchema } = require("../Schemas/OdersSchema");

const OrdersModel = new model("order", OrdersSchema);

module.exports = { OrdersModel };