import express from 'express'
import * as ReviewController from '../controllers/ReviewController.js'
const reviewRouter=express.Router();
reviewRouter.get("/",ReviewController.all)
reviewRouter.post("/",ReviewController.addReview)
reviewRouter.get("/mechanic/:email",ReviewController.mechanicReviews)
reviewRouter.get("/customer",ReviewController.customerReviews)
export default reviewRouter;