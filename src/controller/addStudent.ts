import { Request, Response } from "express";
import { students } from "../models/students";
import { resourceUsage } from "process";

export const add=async(req:Request,res:Response)=>{
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


export const addById=async(req:Request,res:Response)=>{
const {id}=req.params;
const {grade}=req.body;
try{
   const result=await students.findByIdAndUpdate(id,{grade},{new:true}) ;
   res.status(201).json({
    message:"user created",
    data:result
})
}catch(err){
    throw err;
}
}