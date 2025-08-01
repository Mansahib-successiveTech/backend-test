import mongoose from "mongoose";

const studentSchema=new mongoose.Schema({
  name:{type:String,required:true},
  age: {type:Number,required:true},
  grade:{type:String,required:true},
  email: {type:String,reqiued:true,unique:true},
  createdAt:{type:Date,default:Date.now()}

})

export const students=mongoose.model("students",studentSchema);