import { Router } from "express";

import { getCart } from "../controllers/cartController.js";
import { checkToken, findUserCart } from "../middlewares/cartMiddlewares.js";

const cartRouter = Router();

cartRouter.get("/cart", checkToken, findUserCart, getCart);

export default cartRouter;
