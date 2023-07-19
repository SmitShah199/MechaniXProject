
import Request from "../model/Request.js";


export const accept =async(req,res)=>{
  try{
   const id =req.params.id;
   const request = await Request.findById(id)
   request.isAccepted="accepted"
   await request.save();
   res.status(200).send(request)
  }catch(error){
    res.status(500).send("msg","Error");
  }
}
export const reject =async(req,res)=>{
  try{
   const id =req.params.id;
   console.log(id)
   const request = await Request.findById(id)
   request.isRejected=true
   await request.save();
   res.status(200).send(request)
  }catch(error){
    res.status(500).send("msg","Error");
  }
}

export const addRequest = async (req, res) => {
  try {
    const data = req.body;
    const abc="requested"
    const request = new Request(data);
    request.isAccepted="reqested"
    await request.save();
    res.status(200).send(request);
  } catch (error) {
    res.status(500).send({ error: error });
  }
};
export const all  = async (req, res) => {
  try {
    
    const data = await Request.find();
   
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send(error);
  }
};
export const allRequests = async (req, res) => {
  try {
    const email = req.params.email;
    console.log(email, "email");
    const data = await Request.find({ customerEmail: email });
    console.log(data);
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send(error);
  }
};
export const mechanicRequests = async (req, res) => {
    try {
      const name = req.params.name;
      console.log(name, "email");
      const data = await Request.find({ mechanicName: name });
      console.log(data);
      res.status(200).send(data);
    } catch (error) {
      res.status(500).send(error);
    }
  };
export const requestGetById = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await Request.findById(id);
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send(error);
  }
};
export const requestGetByEmail = async (req, res) => {
  try {
    const email = req.params.email;
    const data = await Request.find({ email: email });
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const updateRequest = async (req, res) => {
  try {
    const id = req.params.id;
    const update = req.body;
    console.log(id);
    const data = await Request.findByIdAndUpdate(id, update, { new: true });
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send(error);
  }
};
export const deleteRequest = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await Request.findById(id);
    res.status(200).send({ msg: "Deleted" });
  } catch (error) {
    res.status(500).send(error);
  }
};
