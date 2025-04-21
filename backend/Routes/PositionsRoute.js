const express = require("express");
const router = express.Router();
const authMiddleware = require("../Middlewares/AuthMiddleware");
const PositionsController = require("../Controllers/PositionsController");

router.get(
  "/",
  authMiddleware.userVerification,
  PositionsController.getAllPositions
);

module.exports = router;
