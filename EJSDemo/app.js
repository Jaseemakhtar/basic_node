var express = require("express");
var app = express();


app.get("/",function(req,res){
    res.send("Welcome to homepage..");
});

app.get("/fellinlovewith/:thing",function(req,res){
    var thing = req.params.thing;
    
   res.render("home.ejs", {varThing : thing}); 
});

app.get("/posts",function(req, res) {
   var post = [
       {
           title: "Testing is a good practice.",
           author: "Desikan"
       },{
           title: "Not all treasures are good and silver.",
           author: "Jack Sparrow"
       },{
           title: "With great power comes, great responsiblities.",
           author: "Desikan"
       },{
           title: "Knowledge is Power.",
           author: "English Proverb"
       }
       
       ]; 
       
       res.render("posts.ejs",{posts: post})
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server started...");
});