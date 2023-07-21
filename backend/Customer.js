import mongoose from "mongoose";

const customerSchema=new mongoose.Schema({
    name:String,
    email:{
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    password:String,
    phoneNumber:Number,
    address:String

})
export const Customer=mongoose.model("Customer",customerSchema);
export default Customer;