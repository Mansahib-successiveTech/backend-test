import { Request, Response } from "express";
import { students } from "../models/students";
import jwt from "jsonwebtoken"
const MYpassword="123"
export const login=async(req:Request,res:Response)=>{
const {email,password}=req.body;
try{
const exist = await students.findOne({email});
if(!exist){
    return res.status(400).json({
       message:"no user existed" 
    })
}
if(password!==MYpassword){
     return res.status(400).json({
       message:"password not matched" 
    })
}

const token = jwt.sign({email:exist.email},"SECRET",{expiresIn:"30h"});
res.json({
    message:"token generated",
    data:token
})

}
catch(err){
    throw err
}
}