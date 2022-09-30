var express = require("express");
var router = express.Router();
const https = require('https');



router.get("/",function(req,res,next){
  let data = '';
  https.get('https://fakestoreapi.com/products', (resp) => {
  
    // A chunk of data has been received.
    resp.on('data', (chunk) => {
      data += chunk;
    });
    
    // The whole response has been received. Print out the result.
    resp.on('end', () => {
     
      res.send(JSON.parse(data));
      console.log(JSON.parse(data));
  
    });
  
  }).on("error", (err) => {
    console.log("Error: " + err.message);
    res.send(err)
  });
  // res.send();
});

module.exports =router;