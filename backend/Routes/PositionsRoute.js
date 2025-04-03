const { getAllPositions } = require("../Controllers/PositionsController");
const router = require("express").Router();

router.get("/allPositions", getAllPositions);

module.exports = router;