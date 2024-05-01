import express from "express";
import {
  createCustomer,
  getCustomers,
} from "../controllers/customer.controller.js";
import { verifyToken } from "../middleware/verifyToken.js";

const customerRoute = express.Router();

customerRoute.get("/customer", verifyToken, getCustomers);
customerRoute.post("/customer",verifyToken,  createCustomer);

export default customerRoute;
