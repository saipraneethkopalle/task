const mongoose = require('mongoose');
const Double = mongoose.Decimal128;
const uniqueValidator = require("mongoose-unique-validator");
const productSchema = new mongoose.Schema(
  {
    productName: { type: String,unique:true },
    productDescription: { type: String },
    quantity:{type:Number},
    price:{type:Double},
  },  { timestamps: true })
productSchema.plugin(uniqueValidator);
module.exports = mongoose.model('Product', productSchema);
