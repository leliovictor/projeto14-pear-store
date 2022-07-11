import { ObjectId } from "mongodb"
import db from "../db.js"


export async function getProducts (req, res) {
    const { headers } = req
    try {
        const products = await db.collection("produtos").find({}).toArray();
        const user = await db.collection("users").findOne({ email: headers.email})
        
        res.status(200).send(products, user);
    } catch {
        res.sendStatus(500);
    }
}
