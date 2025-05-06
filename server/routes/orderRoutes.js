import {Router} from "express";
const router = Router();
import protectRoute from "../middleware/protectRoute.js";
import { getOrders,buy,sell } from "../controllers/ordersController.js";

router.get("/", protectRoute, getOrders);
router.post("/buy", protectRoute, buy);
router.post("/sell", protectRoute,sell);

export default router;