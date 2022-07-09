export function getCart(_req, res) {
  const { cart } = res.locals;

  res.status(202).send(cart);
}
