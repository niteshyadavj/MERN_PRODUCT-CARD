const express = require('express')
const router = express.Router(); //created a route 
const productController = require("../controllers/product");


router
  .get("/", productController.getAllProducts)
  .get('/ssr', productController.getAllProductsSSR)
  .get('/add', productController.getAddForm)
  .get("/:id", productController.getProduct)
  .post("/", productController.addProducts)
  .put("/:id", productController.replaceProduct)
  .patch("/:id", productController.updateProduct)
  .delete("/:id", productController.deleteProduct);

  exports.router = router;