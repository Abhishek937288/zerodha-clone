import {Router} from "express";
import {signup,login,profile} from "../controllers/authCotroller.js"
const router = Router();
import protectRoute from "../middleware/protectRoute.js";

router.post("/signup",signup);
router.post("/signin",login);
router.get("/profile",protectRoute,profile);

export default router;