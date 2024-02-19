import { Router } from "express";
import schemaValid from "../middlewares/schemaMid.js";
import { signIn, signUp } from "../controllers/users.controller.js";
import { schemaSignIn, schemaSignUp } from "../schemas/userSchema.js";


const userRoutes = Router();

userRoutes.post('/sign-up', schemaValid(schemaSignUp), signUp);
userRoutes.post('/sign-in', schemaValid(schemaSignIn), signIn);

export default userRoutes;