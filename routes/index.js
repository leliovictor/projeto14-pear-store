import {Router} from "express";
import postRegister from "../controllers/authController"
//import controller from "./controllerFuturo"

const router = Router();

//router.use(controllerUsado);
router.use("/register", postRegister)

export default router;