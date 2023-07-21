import express from "express";
import * as CustomerController from "../controllers/CustomerController.js"

const customerRouter=express.Router();
customerRouter.post("/", CustomerController.addCustomer);
customerRouter.get("/",CustomerController.allCustomers)
customerRouter.get("/:id",CustomerController.customerGetById)
customerRouter.get('/:id',CustomerController.customerGetByEmail)
customerRouter.patch("/:id",CustomerController.updateCustomer)
customerRouter.post("/login",CustomerController.login);
export default customerRouter; 