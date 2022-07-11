import db from "../config/db.js";

export function getCart(_req, res) {
  const { cart } = res.locals;

  return res.status(202).send(cart);
}

export async function deleteCartItem(req, res) {
  const { email } = res.locals.data;
  const { cart } = res.locals;

  const index = req.params;

  cart.splice(index, 1);

  try {
    await db.collection("users").updateOne({ email }, { $set: { cart } });

    res.sendStatus(202);
  } catch(err) {
    res.sendStatus(500);
  }
}
