import express from "express";
import { getproducts } from "../controllers/product.controller.js";

const productRoute = express.Router();

productRoute.get("/:merchantId/product", getproducts);

export default productRoute;
