import { Router } from "express"

import { getProducts } from "../controllers/productsController.js"
import { productCheckToken } from "../middlewares/productMiddleware.js"
const productsRouter = Router()

productsRouter.get('/produtos', productCheckToken, getProducts)


export default productsRouter