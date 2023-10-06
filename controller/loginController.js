const generateAccessToken = require("../constants/generateToken");
const {STATUS}=require('../constants/CONST');
const bcrypt= require('../constants/bcrypt');
const user=require('../models/user');
exports.register=async(req,res)=>{
    try{
        let {userName,password}=req.body
        console.log(userName,password);
        password =await bcrypt.bcryptPassword(password)
        let saveUser = new user({userName:userName,password:password})
        await saveUser.save()
        return res.status(STATUS.OK).send({ "message": "Registered Successfully" })
    } catch (err) {
        return res.status(STATUS.BAD_REQUEST).send(err.message);
    }
}
exports.login=async(req,res)=>{
    try{
        let {userName,password}=req.body
        let userExist = await user.findOne({userName:userName})
        if(!userExist){
            return res.status(STATUS.BAD_REQUEST).send({msg:'User not found'});
        }
        let verifyUserPwd =await bcrypt.verifybcryptPassword(password,userExist.password)
        if(!verifyUserPwd){
            return res.status(STATUS.BAD_REQUEST).send({msg:'Invalid Password'});
        }
        let token = generateAccessToken({userName: userExist.userName});
        return res.status(STATUS.OK).send({ "message": "Login Successfully",token:token})
    } catch (err) {
        return res.status(STATUS.BAD_REQUEST).send(err.message);
    }
}