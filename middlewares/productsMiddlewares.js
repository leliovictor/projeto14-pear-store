import db from "../config/db.js";
import { ObjectId } from "mongodb";

export async function findUser(_req, res, next) {
    const { email } = res.locals.data;
    
    const user = await db.collection("users").findOne({ email });
    
    if (!user) return res.status(404).send("User not found");
  
    res.locals.user = user;
  
    next();
  }

export async function findProduct(req, res, next) { 
  const { _id } = req.body;
  
    const productItem = await db.collection("produtos").findOne({ _id: ObjectId(_id)});
 
    if(!productItem) return res.status(404).send("Product not found");

    res.locals.product = productItem;

    next();
}
  