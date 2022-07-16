require("dotenv").config();
require("express-async-errors");

//Modules
const express=require("express");
const dbConnect=require("./connect");
const router=require("./route");
const errorHandler=require("./errorHandlers");

const app=express();

//Middlewares
app.use("/api/v1/products",router);
app.use(express.json());
app.use((req,res)=>res.status(404).json({msg:"Invalid route"}));
app.use(errorHandler);

const portNo=process.env.PORT||3000;

const start=async ()=>{
    await dbConnect(process.env.MONGO_URI);
    app.listen(portNo,()=>console.log(`The API is listening to port ${portNo}`));
}
start();