const mongoose = require('mongoose');
const uniqueValidator = require("mongoose-unique-validator");
const userSchema = new mongoose.Schema(
  {
    userName: { type: String,unique:true },
    password: { type: String },
    isActive:{type:Boolean,default:true},
  }, { timestamps: true })
userSchema.plugin(uniqueValidator);
module.exports = mongoose.model('User', userSchema);
