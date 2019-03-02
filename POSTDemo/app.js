var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.set("view engine","ejs");

app.use(bodyParser.urlencoded({extended: true}));

var friends = ["Sareen", "Abdul", "Aayush", "Ajay", "Tony"];

app.get("/",function(req,res){
   res.render("home",{friends: friends}); 
});

app.post("/addFriend",function(req,res){
    
    friends.push(req.body.newFriend);
   res.redirect("/");
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server started...");
});