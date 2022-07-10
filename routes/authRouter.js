import { Router } from "express";

import { postLogin} from "../controllers/authController.js";
import { findUser, checkPassword } from "../middlewares/authMiddlewares.js";

const authRouter = Router();

authRouter.post("/login", findUser, checkPassword, postLogin);

export default authRouter;
