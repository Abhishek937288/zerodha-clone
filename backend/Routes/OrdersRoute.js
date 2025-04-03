const { getAllOrders, newOrder } = require("../Controllers/OrdersController");
const router = require("express").Router();

router.route("/Orders").get(getAllOrders).post(newOrder);

module.exports = router;