const storeModel=require("./model");

const getProductsStatic=async (req,res)=>{
    const staticProducts=await storeModel.find({});
    res.status(200).json({data:staticProducts});
}

const getProducts=async (req,res)=>{
    const {featured,name,price,company,sort,field}=req.query;
    const queryObject={};
    
    if(featured) queryObject.featured=(featured==='true')?true:false;
    if(name) queryObject.name={$regex:name,$options:'i'};
    if(price) queryObject.price=price;
    if(company) queryObject.company=company;
    
    const result=storeModel.find(queryObject);
    if(sort){
        const sortArray=sort.split(',').join(' ');
        result.sort(sortArray);
    }
    if(field){
        const fieldArray=field.split(',').join(' ');
        result.select(fieldArray);
    }
    const limit=parseInt(req.query.limit)||10;
    const page=parseInt(req.query.page)||1;
    const skip=(page-1)*limit;
    result.skip(skip).limit(limit);
    
    const products=await result;
    res.status(200).json({noOfProducts:products.length,pageNo:page,data:products});
}
module.exports={getProductsStatic,getProducts};