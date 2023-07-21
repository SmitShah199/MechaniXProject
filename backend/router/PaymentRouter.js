import express from 'express';
import* as PaymentController from '../controllers/PaymentController.js'
const paymentRouter= express.Router();
paymentRouter.post("/",PaymentController.addPayment)
paymentRouter.get("/",PaymentController.all)
paymentRouter.get("/mechanic/:email",PaymentController.mechanicPayments)
paymentRouter.get("/customer/:email",PaymentController.customerPayments)
export default paymentRouter;