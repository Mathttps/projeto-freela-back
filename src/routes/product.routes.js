import { Router } from "express";
import schemaValid from "../middlewares/schemaMid.js";
import { authValid } from "../middlewares/authMid.js";
import { creatProduct } from "../schemas/prodSchemas.js";
import { getTest, getProduct, prodRegister } from "../controllers/prod.controller.js";


const prodRoutes = Router();

prodRoutes.get('/products/:id', getProduct);
prodRoutes.get('/products/categories', getTest);
prodRoutes.post('/products/new', authValid, schemaValid(creatProduct), prodRegister);



export default prodRoutes;