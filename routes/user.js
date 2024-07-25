const express = require("express");
const router = express.Router(); //created a route
const userController = require("../controllers/user");

router
  .get("/", userController.getAllProducts)
  .get("/:id", userController.getProduct)
  .post("/", userController.addProducts)
  .put("/:id", userController.replaceProduct)
  .patch("/:id", userController.updateProduct)
  .delete("/:id", userController.deleteProduct);

exports.router = router;
