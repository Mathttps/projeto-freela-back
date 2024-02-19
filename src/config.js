import dotenv from "dotenv";
dotenv.config();

export const AUTH_KEY = process.env.SECRET_KEY || "AUTHSESSIONTOKEN"