import Customer from "../model/Customer.js";
import Mechanic from "../model/Mechanic.js";
export const addCustomer = async (req, res) => {
  try {
    const data = req.body;
    const customer = new Customer(data);
    await customer.save();
    res.status(200).send(customer);
    // }
  } catch (error) {
    res.status(500).send({ error: error });
  }
};
export const login = async (req, res) => {
  try {
    console.log(req.body, "body");
    
    const email = req.body.email;
   
    const password = req.body.password;
    const customer = await Customer.findOne({email:email})
    console.log(customer, "customer");
    if (customer != null) {
      console.log(req.body.password, "password");
      const valid = req.body.password === customer.password;
      if (valid) {
        res.status(200).send(customer);
      } else  {
        res.status(400).send({ msg: "password does not matched" });
      }
    }else{
      res.status(400).send({ msg: "User not exists" });
    }
  } catch (error) {
    res.status(500).send({ error: error });
  }
};

export const allCustomers = async (req, res) => {
  try {
    const data = await Customer.find();
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send(error);
  }
};
export const customerGetById = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await Customer.findById(id);
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send(error);
  }
};
export const customerGetByEmail = async (req, res) => {
  try {
    const email = req.params.email;
    const data = await Customer.findById(email);
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const updateCustomer = async (req, res) => {
  try {
    const id = req.params.id;
    const update = req.body;
    console.log(id);
    const data = await Customer.findByIdAndUpdate(id, update, { new: true });
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send(error);
  }
};
export const deleteCustomer = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await Customer.findById(id);
    res.status(200).send({ msg: "Deleted" });
  } catch (error) {
    res.status(500).send(error);
  }
};
