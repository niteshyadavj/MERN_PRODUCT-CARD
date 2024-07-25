require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const cors = require('cors')
const path = require('path');

const server = express();
const productRouter = require("./routes/product");
const userRouter = require("./routes/user");

//db connection    
main().catch((err) => console.log(err));  
async function main() { 
  await mongoose.connect(process.env.MONGO_DB);
  console.log("database connected");
}
  
server.use(cors());
server.use(morgan("default"));   
server.use(express.json());
server.use(express.static(path.resolve(__dirname,process.env.PUBLIC_DIR)));
server.use("/product", productRouter.router); //new route
server.use("/user", userRouter.router); //new route
server.use('*',(req,res)=>{
  res.sendFile(path.resolve(__dirname,'dist','index.html'))
});

server.listen(process.env.PORT, () => {
  console.log("server started"); 
});
   