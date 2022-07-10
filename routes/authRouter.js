import { Router } from "express";

import { postLogin, adminUser } from "../controllers/authController.js";
import { findUser, checkPassword } from "../middlewares/authMiddlewares.js";

const authRouter = Router();

authRouter.post("/login", findUser, checkPassword, postLogin);
authRouter.post("/admin", adminUser);

export default authRouter;
