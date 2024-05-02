import express from "express";
import {
  createCustomer,
  deleteCustomer,
  getCustomers,
  updateCustomer,
} from "../controllers/customer.controller.js";
import { verifyToken } from "../middleware/verifyToken.js";

const customerRoute = express.Router();

customerRoute.get("/customer", verifyToken, getCustomers);
customerRoute.post("/customer", verifyToken, createCustomer);
customerRoute.delete("/customer/:id", verifyToken, deleteCustomer);
customerRoute.patch("/customer/:id", verifyToken, updateCustomer);

export default customerRoute;
