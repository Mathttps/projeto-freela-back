import { Router } from "express";
import userRoutes from "./user.routes.js";
import prodRoutes from "./product.routes.js";


const router = Router();

router.use(userRoutes);
router.use(prodRoutes);

export default router;