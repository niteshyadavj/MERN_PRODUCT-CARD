const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchema = new Schema({
  title: { type: String, required: true ,unique:true},
  description: String,
  price: { type: Number, required: true,required:true },
  discountPercentage: { type: Number ,min:0,max:50},
  rating: { type: Number, min:0,max:5,default:0 },
  stock: Number,
  brand: String,
  category: String,
  thumbnail: String,
  images: [String],
});

exports.Product = mongoose.model("Product", productSchema);
