import express from "express";
import { getProducts } from "../controllers/getProductsController.js";

const router = express.Router();

router.get("/getProducts", getProducts);

export default router;
