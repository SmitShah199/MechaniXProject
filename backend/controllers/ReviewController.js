import Review from "../model/Review.js";

export const addReview=async(req,res)=>{
    try{
        const data=req.body;
     
        const payment = new Review(data);
      
        await payment.save();
        res.status(200).send(payment);

    }catch(error){
        res.status(500).send(error)
    }
}

export const all=async(req,res)=>{
    try{
        const data = await Review.find()
        res.status(200).send(data)
    }catch(error){
        console.log(error)
    }
}

export const mechanicReviews=async(req,res)=>{
    try{
        const email =req.params.email;
        const data = await Review.find({mechanicEmail:email})
        res.status(200).send(data)
    }catch(error){
        console.log(error)
    }
}
export const customerReviews=async(req,res)=>{
    try{
        const email =req.params.email;
        const data = await Review.find({customerEmail:email})
        res.status(200).send(data)
    }catch(error){
        console.log(error)
    }
}