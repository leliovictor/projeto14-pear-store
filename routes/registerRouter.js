import { Router } from "express";

import postRegister from "../controllers/authController.js";


const registerRouter = Router();

registerRouter.use("/register", postRegister);

export default registerRouter;
