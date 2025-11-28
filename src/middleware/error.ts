import { NextFunction, Request, Response } from "express";


//error handel middelware will run for all error try catch or what we throw
interface ErrorInterface extends Error{  // iterface as no property of err.message
status?:number
}
export const errorMiddleware=(err:ErrorInterface,req:Request,res:Response,next:NextFunction)=>{
const errStatus=err.status || 400;
const errMessage=err.message || "error in code";
return res.status(errStatus).json({
    message:errMessage
})
}