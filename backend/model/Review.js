import mongoose from "mongoose";

const reviewSchema= new mongoose.Schema({
    description:String,
    rating:String,
    customerEmail:String,
    mechanicEmail:String
})
export const Review=mongoose.model("Review",reviewSchema)
export default Review;