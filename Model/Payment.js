import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema({
    holderName:String,
    cardNumber:Number,
    expiryMonth:String,
    expiryYear:String,
    customerEmail:String,
    mechanicEmail:String,
    cvv:Number,
    amount:Number
});
export const Payment =mongoose.model("payment",paymentSchema)
export default Payment; 
