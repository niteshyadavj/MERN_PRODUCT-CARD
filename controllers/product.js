const fs = require("fs");
// const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
// const products = data.products;
const model = require("../model/product");
const { error } = require("console");
const Product = model.Product;

exports.addProducts = (req, res) => {
  // console.log(req.body);
  // products.push(req.body); 
  const product = new Product(req.body);
  product.save();
  res.status(201).json(req.body);
};

exports.getProduct = (req, res) => {
  const id = +req.params.id;
  try{
    const product = Product.find((p) => p.id === id);
  res.status(200).json(product);
  }
  catch(error){
    console.log(error);
    res.status(500).json(error);
    
  }
};

exports.getAllProducts = async (req, res) => {
  try{
    const products = await Product.find();
    // console.log(products);
    res.status(200).json(products);

  }catch(error){
    console.log(error);
    res.status(500).json(error);
    
  }
};

exports.replaceProduct = async (req, res) => {
  const id = req.params.id;
  try {
    const product = await Product.findOneAndReplace({_id:id}, req.body,{new:true})
    res.status(200).json(product);

  } catch (error) {
    console.log(error);
    res.status(500).json(error);
    
  }
  

  // const productIndex = products.findIndex((p) => p.id === id);
  // const removedProducts = products.splice(productIndex, 1, {
  //   ...req.body,
  //   id: id,
  // });
  // res.status(201).json(removedProducts);
};

exports.updateProduct = async (req, res) => {
  const id = req.params.id;
  try {
    const product = await Product.findOneAndUpdate({_id:id}, req.body,{new:true})
    res.status(200).json(product);

  } catch (error) {
    console.log(error);
    res.status(500).json(error);
    
  }






  // const id =req.params.id;
  // const productIndex = products.findIndex((p) => p.id === id);
  // let product = products[productIndex];
  // const removedProducts = products.splice(productIndex, 1, {
  //   ...product,
  //   ...req.body,
  // });
  // res.status(201).json(removedProducts); 
};

exports.deleteProduct =async (req, res) => {
  const id = req.params.id;
  try {
    const product = await Product.findOneAndDelete({_id:id})
    res.status(200).json(product);

  } catch (error) {
    console.log(error);
    res.status(500).json(error); 
    
  }

  // const id = req.params.id;
  // const productIndex = products.findIndex((p) => p.id === id);
  // const removedProducts = products.splice(productIndex, 1);
  // res.status(201).json(removedProducts);
};
