const http = require("http");
const fs = require("fs");

const index = fs.readFileSync("index.html", "utf-8");
const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
const prd = data.products[0];

if(req.url.startsWith('/product')){
    const id = req.url.split('/')[2]
    const product = products.find(p=>p.id===(+id))
    res.setHeader('Content-Type','text/html');
    let modifiedIndex= index.replace('**Product 1**',product.title).replace('**url**',product.thumbnail);
     return res.end(modifiedIndex );  
   
  } 
// console.log(index)
const server = http.createServer((req, res) => {
  console.log("server created");
  switch (req.url) {
    case "/":
      res.setHeader("Content-Type", "text/html");
      res.end(index);
      break;
    case "/api":
      res.setHeader("Content-Type", "application/json");
      res.end(data);
      break; 
    case "/product":   
      res.setHeader("Content-Type", "text/html");
    //   let modifiedIndex = index
    //     .replace("**Product 1**", prd.title)
    //     .replace("**price**", prd.price)
    //     .replace("**brand**", prd.brand);  
      res.end(modifiedIndex);
      break;
      
    default:
      res.writeHead(404, "nt found");
      res.end();
  }
});

server.listen(8000);
