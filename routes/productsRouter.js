import { Router } from "express";

import { getProducts, postProductItem } from "../controllers/productsController.js";
import { findUser, findProduct } from "../middlewares/productsMiddlewares.js";
import { checkToken } from "../middlewares/cartMiddlewares.js";

const productsRouter = Router();

productsRouter.get("/produtos", checkToken, getProducts);
productsRouter.post("/produtos", checkToken, findUser, findProduct, postProductItem);


export default productsRouter;