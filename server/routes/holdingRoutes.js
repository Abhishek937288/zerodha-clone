import {Router} from "express";
const router = Router();
import protectRoute from "../middleware/protectRoute.js";
import { getHoldings } from "../controllers/holdingsController.js";


router.get("/", protectRoute, getHoldings);

export default router;