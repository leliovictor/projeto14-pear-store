import { Router } from "express";

import { getCart, deleteCartItem } from "../controllers/cartController.js";
import { checkToken, findUserCart } from "../middlewares/cartMiddlewares.js";

const cartRouter = Router();

cartRouter.get("/cart", checkToken, findUserCart, getCart);
cartRouter.delete("/cart/:index", checkToken, findUserCart, deleteCartItem);

export default cartRouter;
