const { getAllHoldings } = require("../Controllers/HoldingsController");
const router = require("express").Router();

router.get("/allHoldings", getAllHoldings);

module.exports = router;