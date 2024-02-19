import Jwt from "jsonwebtoken";
import { AUTH_KEY } from "../config.js";
import { getSession } from "../repositories/session.repository.js";

export const createToken = (data) => {
  return Jwt.sign(data, AUTH_KEY);
};

export const authValid = async (req, res, next) => {
  try {
    const authorizationHeader = req.headers.authorization;
    if (!authorizationHeader) {
      return res.status(401).send("Token de autorização necessário!");
    }

    const token = authorizationHeader.replace('Bearer ', '');
    res.locals.token = Jwt.verify(token, AUTH_KEY);

    const isTokenExist = await getSession(token);
    if (isTokenExist.rowCount === 0) {
      return res.status(401).send("Sessão inválida! Faça login novamente!");
    }

    next();
  } catch (error) {
    console.error(error);
    return res.status(401).send("Login necessário para realizar operação!");
  }
};
