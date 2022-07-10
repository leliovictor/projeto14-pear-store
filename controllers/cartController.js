export function getCart(_req, res) {
  const { cart } = res.locals;

  return res.status(202).send(cart);
}
