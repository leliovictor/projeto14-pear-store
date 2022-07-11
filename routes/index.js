import { Router } from "express";

import registerRouter from "./registerRouter.js"
import authRouter from "./authRouter.js";
import productsRouter from "./productsRouter.js"
import cartRouter from "./cartRouter.js";

const router = Router();

router.use(registerRouter);
router.use(authRouter);
router.use(productsRouter);
router.use(cartRouter);

export default router;