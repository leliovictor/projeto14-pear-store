import bcrypt from "bcrypt";
import db from "../config/db.js";
import { loginSchema } from "../schemas/authSchema.js";

export async function findUser(req, res, next) {
  const userValidation = loginSchema.validate(req.body);

  if (userValidation.error) {
    return res.status(422).send({
      message: "Invalid format login",
      detail: userValidation.error.details[0].message,
    });
  }
  
  const { email } = req.body;

  const user = await db.collection("users").findOne({ email });

  if (!user) return res.status(401).send("E-mail or Password incorrect!");

  res.locals.user = user;

  next();
}

export async function checkPassword(req, res, next) {
    const { password } = req.body;
  
    const confirmPassword = bcrypt.compareSync(
      password,
      res.locals.user.password
    );
  
    if (!confirmPassword)
      return res.status(401).send("E-mail or Password incorrect!");
  
    next();
  }
