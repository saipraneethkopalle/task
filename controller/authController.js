const {STATUS}=require('../constants/CONST');
const products=require('../models/products')
const user=require('../models/user');

exports.fetchUsers=async(req,res)=>{
    try{
        let result = await user.find().lean()
        return res.status(STATUS.OK).send({ "message": "Result Fetched!",result:result })
    } catch (err) {
        return res.status(STATUS.BAD_REQUEST).send(err.message);
    }
}
exports.addProducts=async(req,res)=>{
    try{
        let {productName,productDescription,quantity,price} =req.body
        if(!productName || !productDescription || !quantity || !price){
            return res.status(STATUS.BAD_REQUEST).send({msg:"Required fields are empty"});
        }
        let prodExist=await products.findOne({productName:productName})
        if(prodExist){
            return res.status(STATUS.BAD_REQUEST).send({msg:"Product already exist!"});
        }
        if(typeof(quantity)=="string"){
            return res.status(STATUS.BAD_REQUEST).send({msg:"quantity must be number"});
        }
        if(typeof(price)=="string"){
            return res.status(STATUS.BAD_REQUEST).send({msg:"price must be number"});
        }

        let prod = new products({productName:productName,productDescription:productDescription,quantity:quantity,price,price})
        await prod.save()
        return res.status(STATUS.OK).send({ "message": "Product added Successfully!" })
    } catch (err) {
        return res.status(STATUS.BAD_REQUEST).send(err.message);
    }
}
exports.getProducts=async(req,res)=>{
    try{
        let result = await products.find().lean()
        return res.status(STATUS.OK).send({ "message": "Result Fetched!",result:result })
    } catch (err) {
        return res.status(STATUS.BAD_REQUEST).send(err.message);
    }
}
exports.updateProduct=async(req,res)=>{
    try{
        let {prodId,productDescription,quantity,price} =req.body
        await products.updateOne({_id:prodId},{$set:{productDescription:productDescription,quantity:quantity,price:price}})        
        return res.status(STATUS.OK).send({ "message": "Product updated Successfully" })
    } catch (err) {
        return res.status(STATUS.BAD_REQUEST).send(err.message);
    }
}
exports.deleteProduct=async(req,res)=>{
    try{
        let exist =await products.findOne({_id:req.params.pid})
        if(!exist){
            return res.status(STATUS.BAD_REQUEST).send({msg:"Product doesn't exist!"});
        }
        await products.deleteOne({_id:req.params.pid})
        return res.status(STATUS.OK).send({ "message": "Deleted Successfully" })
    } catch (err) {
        return res.status(STATUS.BAD_REQUEST).send(err.message);
    }
}