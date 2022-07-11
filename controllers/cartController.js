import db from "../config/db";

export function getCart(_req, res) {
  const { cart } = res.locals;

  return res.status(202).send(cart);
}

export function deleteCartItem(req, res) {
  const { email } = req.locals.data;
  const { cart } = req.locals;

  const index = req.params;

  cart.splice(index,1);

  try {
    await db.collection("users").updateOne({email}, {$set: {cart}});

    res.sendStatus(202);
  } catch(err) {
    res.sendStatus(500);
  }
}

export async function deleteStatement(req, res) {
  const { walletStatement, user_id } = res.locals.walletStatement;

  const { index } = req.params;

  walletStatement.splice(index, 1);

  try {
    await db
      .collection("statements")
      .updateOne({ user_id: user_id }, { $set: { walletStatement } });

    res.sendStatus(202);
  } catch (err) {
    res.sendStatus(500);
  }
}
