import { ObjectId } from "mongodb";
import db from "../db.js";


export async function getProducts(_req, res) {
    try {
        const products = await db.collection("produtos").find({}).toArray();

        console.log(products);
        res.status(200).send(products);
    } catch {
        res.sendStatus(500);
    }
}

export async function postProductItem(_req, res) {
    const { user } = res.locals;
    const { cart } = user;

    productItem = res.locals.product;
    cart.push(productItem);

    console.log(user, cart, productItem);

    try {
        await db.collection("users").updateOne({ user: user.email }, { $set: { cart } });
        return res.sendStatus(200);
    } catch (err) {
        return res.sendStatus(400);
    }
}
