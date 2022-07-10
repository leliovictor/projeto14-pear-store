import jwt from "jsonwebtoken";
import db from "../config/db.js";

export async function checkToken(req, res, next) {
  const { authorization } = req.headers;
  const token = authorization?.replace("Bearer ", "");

  if (!token) return res.status(401).send("Miss token from headers");

  try {
    const data = jwt.verify(token, process.env.JWT_SECRET);

    res.locals.data = data;
  } catch (err) {
    return res.status(401).send("Invalid token");
  }

  next();
}

export async function findUserCart(_req, res, next) {
  const { email } = res.locals.data;
  
  const { cart } = await db.collection("users").findOne({ email });
  
  if (!cart) return res.status(404).send("Cart not found");

  res.locals.cart = cart;

  next();
}
