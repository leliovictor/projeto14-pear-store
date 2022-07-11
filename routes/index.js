import { Router } from "express";

import registerRouter from "./registerRouter.js"
import authRouter from "./authRouter.js";
import cartRouter from "./cartRouter.js";
import productsRouter from "./productsRouter.js"

const router = Router();

router.use(productsRouter);
router.use(registerRouter);
router.use(authRouter);
router.use(cartRouter);

export default router;