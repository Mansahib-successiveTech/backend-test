import { NextFunction, Request, Response } from "express"
import joi from "joi"

const studentSchema=joi.object({
 name:joi.string().required(),
  age:joi.number().required(),
  grade:joi.string().required(),
  email:joi.string().email().required()
})

const loginSchema=joi.object({
  email:joi.string().email().required(),
  password:joi.string().alphanum().required()
})


export const registerValidate=(req:Request,res:Response,next:NextFunction)=>{
const {error}=studentSchema.validate(req.body);
if(error){
    next(error);
}
next();
}


export const loginValidate=(req:Request,res:Response,next:NextFunction)=>{
const {error}=loginSchema.validate(req.body);
if(error){
    next(error);
}
next();
}