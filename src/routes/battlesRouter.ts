import { Router } from "express"
import battleControllers from "../controllers/battleControllers.js";
import battleValidation from "../middlewares/battleValidation.js";

const router = Router();

router.post("/battle", battleValidation, battleControllers);

export default router;