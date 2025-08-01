import { Request, Response } from "express";
import { students } from "../models/students";

export const getall=async(req:Request,res:Response)=>{

try{
const result=await students.find();
return res.status(200).json({
    data:result
})
}catch(err){
    throw err
}
}


export  const getById=async(req:Request,res:Response)=>{
const {id}=req.params;
try{
    const result=await students.findById(id);
return res.status(200).json({
    data:result
})

}catch(err){
    throw err;
}
}

export const getByAge=async(req:Request,res:Response)=>{
    const {maxAge,minAge}=req.query;
    try{
const result=await students.find({ age: { $lte: minAge,$gte:maxAge } });
return res.status(200).json({
    data:result
})
    }catch(err){
        throw err;
    }
}