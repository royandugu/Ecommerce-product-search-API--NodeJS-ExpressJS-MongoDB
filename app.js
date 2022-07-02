require("dotenv").config();

//Main Modules
const express=require("express");
const app=express();


const dbConnect=require("./connect");

const portNo=process.env.PORT||3000;
const start=async ()=>{
    await dbConnect(process.env.MONGO_URI);
    app.listen(portNo,()=>console.log(`The API is listening to port ${portNo}`));
}
start();