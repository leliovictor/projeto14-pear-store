import { Router } from "express";

import registerRouter from "./registerRouter"
import authRouter from "./authRouter.js";
import cartRouter from "./cartRouter.js";


const router = Router();

router.use(registerRouter);
router.use(authRouter);
router.use(cartRouter);

export default router;