import Payment from "../model/Payment.js";

export const addPayment=async(req,res)=>{
    try{
        const data=req.body;
   
        const payment = new Payment(data);
       
        await payment.save();
        res.status(200).send(payment);

    }catch(error){
        res.status(500).send({error:error})
    }
}

export const all=async(req,res)=>{
    try{
        const data = await Payment.find()
        res.status(200).send(data)
    }catch(error){
        console.log(error)
    }
}

export const mechanicPayments=async(req,res)=>{
    try{
        const email =req.params.email;
        const data = await Payment.find({mechanicEmail:email})
        res.status(200).send(data)
    }catch(error){
        console.log(error)
    }
}
export const customerPayments=async(req,res)=>{
    try{
        const email =req.params.email;
        const data = await Payment.find({customerEmail:email})
        res.status(200).send(data)
    }catch(error){
        console.log(error)
    }
}