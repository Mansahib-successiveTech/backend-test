import express from "express"
import { register } from "../controller/register";
import { login } from "../controller/login";
import { auth } from "../middleware/auth";
import { getall, getByAge, getById } from "../controller/getStudents";
import { add, addById } from "../controller/addStudent";
import { deleteById } from "../controller/deleteStudent";
import { loginValidate, registerValidate } from "../middleware/joiMiddleware";

const studentRouter=express.Router();

studentRouter.post("/register",registerValidate,register);
studentRouter.post("/login",loginValidate,login);
studentRouter.get("/",auth,getall);
studentRouter.post("/",auth,register,add);
studentRouter.get("/:id",auth,getById);
studentRouter.put("/:id",auth,addById);
studentRouter.delete("/:id",auth,deleteById);
studentRouter.get("/age",auth,getByAge);

export {studentRouter}