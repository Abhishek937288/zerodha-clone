import { Router } from "express";
import Position from "../models/positionsModel.js";
const router = Router();
import { getPosition } from "../controllers/postionsController.js";

router.get("/", getPosition);

export default router;
