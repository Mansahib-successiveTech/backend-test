import express, { NextFunction, Request, Response } from "express"
import dotenv from "dotenv"
import { connectionDB } from "./db/db";
import { errorMiddleware } from "./middleware/error";
import createError from "http-errors";
import { studentRouter } from "./routes/studentsRoutes";
const app=express();
dotenv.config();
connectionDB();
app.use(express.json());
app.use("/students",studentRouter)

//health check route
app.get("/health",(req,res)=>{
    res.json({
        message:"working fine"
    })
})
//error if no matching route found
app.use((req:Request,res:Response,next:NextFunction)=>{
next(createError(404,"not route found"));
})
//custom error route
app.use(errorMiddleware);
app.listen(process.env.PORT,()=>{
    console.log(`server running at http://localhost:${process.env.PORT}`);
})