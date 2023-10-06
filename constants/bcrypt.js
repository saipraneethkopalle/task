const bcrypt = require("bcrypt");
const {saltRounds}=require("../constants/CONST");
const SECRET_KEY = "Test13579"
exports.bcryptPassword = async(password)=>{
    try{
        const salt = bcrypt.genSaltSync(saltRounds);
        const hash = bcrypt.hashSync(password, salt);
        return hash;
    }catch(err){
        return err.message
    }
}
exports.verifybcryptPassword = async(password,hashValue)=>{
    try{
        return bcrypt.compareSync(password, hashValue);        
    }catch(err){
        return "b=="+err.message
    }
}