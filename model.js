const mongoose=require("mongoose");
const schema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Name field cannot be left empty"]
    },
    price:{
        type:Number,
        required:[true,"Price field cannot be left empty"]
    },
    featured:{
        type:Boolean,
        default:false
    },
    company:{
        type:String,
        enum:{
            values:['ikea','liddy','caressa','marcos'],
            message:"{VALUE} is not a valid company name"
        }
    },
    rating:{
        type:Number
    }
})
module.exports=mongoose.model("Store-Model",schema);