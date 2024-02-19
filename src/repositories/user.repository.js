import { db } from "../database/dbconnect.js";

export const createUser = (name, cpf, email, password, phone) => {
  return db.query(`
    INSERT INTO users (name, cpf, email, password, phone) VALUES ($1, $2, $3, $4, $5);
  `, [name, cpf, email, password, phone]);
};

export const getUser = (email) => {
  return db.query(`SELECT * FROM users WHERE email = $1`, [email]);
};
