import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import customerRouter from "./router/CustomerRouter.js";
import mechanicRouter from "./router/MechanicRouter.js";
import requestRouter from "./router/RequestRouter.js";
import paymentRouter from "./router/PaymentRouter.js";
import reviewRouter from "./router/ReviewRouter.js";
const app = express();
app.use(cors());
app.use(express.json());
const BASEURL = "mongodb://127.0.0.1:27017/mechanic";
async function startServer() {
  try {
    await mongoose.connect(BASEURL);
    console.log("database connected successfully");
    app.listen(5000, () => {
      console.log("server started on port :5000");
    });
  } catch (error) {
    console.log(error);
  }
}
startServer();
app.use("/customer", customerRouter);
app.use("/mechanic", mechanicRouter);
app.use("/request", requestRouter);
app.use("/payment",paymentRouter);
app.use("/review",reviewRouter)


