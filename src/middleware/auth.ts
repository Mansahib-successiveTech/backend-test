import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken"
export const auth=(req:Request,res:Response,next:NextFunction)=>{
    console.log("in auth");
const headers=req.headers.authorization;
try{

if(!headers){
    return res.status(404).json({
        message:"no token provided"
    })
}
const token=headers.split(" ")[1];
if(!token){
     return res.status(404).json({
        message:"no token found"
    })
}

const decoded=jwt.verify(token,"SECRET") as JwtPayload;
console.log(decoded);
if(!decoded.email){
 return res.status(403).json({
        message:"not authorized"
    })
}
next();

}catch(err){
    throw err;
}
}