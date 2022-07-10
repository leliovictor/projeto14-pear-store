import jwt from "jsonwebtoken";

export function postLogin(_req, res) {
  const { name, email, cpf } = res.locals.user;

  const data = { name, email, cpf };
  const secretKey = process.env.JWT_SECRET;

  const TIME_30M = 30*60;
  const token = jwt.sign(data, secretKey,{ expiresIn: TIME_30M });

  const response = {
    name,
    token: token,
  };

  res.status(201).send(response);
}
