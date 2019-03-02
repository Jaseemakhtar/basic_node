var express = require("express");
var app = express();
 
app.get("/",function(req,res){
    res.send("Hi there!");
});

app.get("/cats",function(req,res){
    res.send("Cats here!");
});

app.get("/dogs",function(req,res){
    res.send("Dogs here!");
});

app.listen(process.env.PORT,process.env.IP,function(){
    console.log("Server started! PORT: " + process.env.PORT + "IP: " + process.env.IP);
});