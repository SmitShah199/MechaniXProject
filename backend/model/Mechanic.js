import mongoose from "mongoose";
const mechanicSchema= new mongoose.Schema(
    {
        name:String,
        email:{
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        },
        password:String,
        phoneNumber:Number,
        address:String,
        location:String,
        skill:String,
        experience:String
    }
)
export  const Mechanic= mongoose.model("Mechanic",mechanicSchema);
export default Mechanic;