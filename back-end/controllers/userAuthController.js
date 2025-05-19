import Admin from '../models/adminModel.js';
import Citizen from '../models/userModel.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

//Register new citizen

export const registerCitizen = async (req,res)=>{
    try{
        const {name, email, password} = req.body;
   // check if citizen already registered!!
    const exist =  await Citizen.findOne({email});
    if(exist)
        return res.status(400).json({message:"Email already exist"});
//encrypt password
const hashedPass =  await bcrypt.hash(password);

//register new citizen
const newCitizen = new Citizen({name, email, password: hashedPass});
await newCitizen.save();
res.status(201).json({message:"Citizen registered Successfull", newCitizen});

    }
    catch(err){
  res.status(500).json({ error: err.message });
    }
}

//login for admin & citizen
