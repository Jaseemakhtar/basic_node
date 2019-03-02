var express = require("express");
var app = express();


app.get("/",function(req, res) {
    res.send("Hi there!, Welcome to my assignment");
})

app.get("/speak/:animal",function(req, res) {
   var animal = req.params.animal;
   console.log(animal);
   animal = animal.toLowerCase();
   if (animal == "dog") {
       res.send("woof...");
   }else if(animal == "cat"){
       res.send("meow...");
   }else if(animal == "pig"){
       res.send("oink...");
   }else{
       res.send("Animal not found");
   }
});

app.get("/repeat/:word/:times",function(req, res) {
    console.log(req.params);
    var word = req.params.word;
    var times = req.params.times * 1;
    console.log(times);
    
    var result = "";
    for(var i = 0; i < times; i++){
        result += word + "<br>";
    }
    res.send(result);
    
});

app.get("*",function(req,res){
    res.send("Sorry page not found. What are you doing with your life?");
});

app.listen(process.env.PORT, process.env.IP,function(){
    console.log("Server started!");
});