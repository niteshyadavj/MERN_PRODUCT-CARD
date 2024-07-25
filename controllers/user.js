const fs = require("fs");
const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
const user = data.users;

exports.getProduct = (req, res) => {
  const id = +req.params.id;
  const product = user.find((p) => p.id === id);
  res.json(product);
};

exports.getAllProducts = (req, res) => {
  res.json(user);
  
};

exports.addProducts = (req, res) => {
  console.log(req.body);
  user.push(req.body);
  res.json(req.body);
};

exports.replaceProduct = (req, res) => {
  const id = +req.params.id;
  const productIndex = user.findIndex((p) => p.id === id);
  const removedProducts = user.splice(productIndex, 1, {
    ...req.body,
    id: id,
  });
  res.status(201).json(removedProducts);
};

exports.updateProduct = (req, res) => {
  const id = +req.params.id;
  const productIndex = user.findIndex((p) => p.id === id);
  let product = user[productIndex];
  const removedProducts = user.splice(productIndex, 1, {
    ...product,
    ...req.body,
  });
  res.status(201).json(removedProducts);
};

exports.deleteProduct = (req, res) => {
  const id = +req.params.id;
  const productIndex = user.findIndex((p) => p.id === id);
  const removedProducts = user.splice(productIndex, 1);
  res.status(201).json(removedProducts);
};
