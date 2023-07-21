import mongoose from "mongoose";

const requestSchema = new mongoose.Schema({
  customerEmail: String,
  mechanicName: String,
  mechanicEmail: String,
  mechanicNumber: Number,
  mechanicExperience: String,
  mechanicSkill: String,
  mechanicLocation: String,
  isAccepted: String,
  isRejected:String,
  isPaymentDone:String
});
export const Request = mongoose.model("requests", requestSchema);
export default Request;
