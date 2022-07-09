const storeModel=require("./model");

const getProductsStatic=async (req,res)=>{
    const staticProducts=await storeModel.find({});
    res.status(200).json({data:staticProducts});
}

const getProducts=async (req,res)=>{
    const {featured,name,price,company,sort,field,numericFilters}=req.query;
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
    const skip=(page-1)*limit;//10, page no.2 (2-1)*10, skip 10
    result.skip(skip).limit(limit);
    
    const operatorMap={
        ">":"$gt",
        "<":"$lt",
        ">=":"$gte",
        "<=":"$lte",
        "=":"$eq"
    }

    const regEx=/\b(<|>|<=|>=|=)/g;
    const filters=numericFilters.replace(regEx,(match)=>{
        return `-${operatorMap[match]}-`;
    });
    console.log(filters);

    const products=await result;
    res.status(200).json({noOfProducts:products.length,pageNo:page,data:products});
}
module.exports={getProductsStatic,getProducts};