const storeModel=require("./model");
const getProductsStatic=async (req,res)=>{
    const staticProducts=await storeModel.find({});
    res.status(200).json({data:staticProducts});
}
const getProducts=async (req,res)=>{
    const {featured}=req.query;
    const queryObject={};
    if(featured) queryObject.featured=(featured==='true')?true:false;
    const product=await storeModel.find(queryObject);
    res.status(200).json({data:product});
}
module.exports={getProductsStatic,getProducts};