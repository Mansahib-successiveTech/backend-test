import mongoose from "mongoose";

export const connectionDB=async()=>{
try{
await mongoose.connect("mongodb://localhost:27017/users")
console.log("DB connected");
}catch(err){
    console.log(err)
}
}