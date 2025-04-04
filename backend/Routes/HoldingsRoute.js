const { getAllHoldings } = require("../Controllers/HoldingsController");
const verifyToken = require("../Middlewares/verifyToken");

const router = require("express").Router();

router.get("/allHoldings", verifyToken, getAllHoldings);

module.exports = router;
