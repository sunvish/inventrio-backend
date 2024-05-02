import express from "express";
import {
  createProduct,
  deleteProduct,
  getproducts,
} from "../controllers/product.controller.js";
import { verifyToken } from "../middleware/verifyToken.js";

const productRoute = express.Router();

productRoute.get("/product", verifyToken, getproducts);

export default productRoute;

productRoute.post("/product", verifyToken, createProduct);
productRoute.delete("/product/:id", verifyToken, deleteProduct);
