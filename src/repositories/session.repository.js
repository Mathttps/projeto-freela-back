import { db } from "../database/dbconnect.js";

export const crSession = (userId, token) => {
  return db.query(`INSERT INTO sessions (user_id, token) VALUES($1, $2)`, [userId, token]);
};

export const getSession = (token) => {
  return db.query(`SELECT * FROM sessions WHERE token = $1`, [token]);
};
