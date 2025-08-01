import { Request, Response } from "express";
import { students } from "../models/students";

export const deleteById=async(req:Request,res:Response)=>{
const {id}=req.params;
try{
const result = await students.findByIdAndDelete(id);
if(!result){
    res.status(400).json({
    message:"issue while deleting"
})
}
res.json({
    message:"user deleted"
})
}catch(err){
    throw err
}
}