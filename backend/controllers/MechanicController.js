import Mechanic from "../model/Mechanic.js";
export const addMeachanic=async(req,res) => {
    try{
        const data=req.body;
        const mechanic=new Mechanic(data);
        await mechanic.save();
        console.log(data,"data");
        res.status(200).send(mechanic);

    }catch(error){
        res.status(500).send({error:error})
    }
}

export const login =async(req,res)=>{
  try{
    const data = req.body;
    console.log(data)
    const mechanic = await Mechanic.findOne({email:data.email})
    if(mechanic){
      res.status(200).send(mechanic)
    }else{
      res.status(400).send("msg","Please check your details")
    }
  }catch(error){
    res.status(500).send({"msg":"Invalid credentials"})
  }
}

export const allMechanics = async (req, res) => {
    try {
      const data = await Mechanic.find();
      console.log(data)
      res.status(200).send(data);
    } catch (error) {
      res.status(500).send(error);
    }
  };

export const mechanicGetByEmail = async (req, res) => {
    try {
      const email = req.params.email;
      const data = await Mechanic.findById(email);
      res.status(200).send(data);
    } catch (error) {
      res.status(500).send(error);
    }
  };

  export const updateMechanic = async (req, res) => {
    try {
      const id = req.params.id;
      const data = await Mechanic.findByIdAndUpdate(id,req.body,{new:true});
      res.status(200).send(data);
    } catch (error) {
      res.status(500).send(error);
    }
  };

  export const deleteMechanic = async (req, res) => {
    try {
      const id = req.params.id;
      const data = await Mechanic.findById(id);
      res.status(200).send({"msg":"Deleted"});
    } catch (error) {
      res.status(500).send(error);
    }
  };