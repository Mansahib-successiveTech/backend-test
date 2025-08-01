import { Request, Response } from "express";
import { students } from "../models/students";

export const register=async(req:Request,res:Response)=>{
const {name,age,grade,email}=req.body;
try{
const exist=await students.findOne({email});
if(exist){
    return res.status(409).json({
        message:"user already present"
    })
}    
const savedUser=new students({name,age,grade,email});
const result=await savedUser.save();
if(!result){
    return res.status(400).json({
        message:"error creating user"
    })
}
res.status(201).json({
    message:"user created",
    data:{
        name:name,
        age:age,
        grade:grade,
        email:email
    }
})
}
catch(err){
    throw err;
}
}