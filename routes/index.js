import { Router } from "express";

import authRouter from "./authRouter.js";
import postRegister from "../controllers/authController.js"

router.use("/register", postRegister);
router.use(authRouter);

export default router;