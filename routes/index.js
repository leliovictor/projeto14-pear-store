import { Router } from "express";

import authRouter from "./authRouter.js";
import cartRouter from "./cartRouter.js";
import postRegister from "../controllers/authController.js";

const router = Router();

router.use("/register", postRegister);
router.use(authRouter);
router.use(cartRouter);

export default router;