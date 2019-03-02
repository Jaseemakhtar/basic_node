var express = require("express"),
    bodyParser =require("body-parser"),
    mongoose = require("mongoose");
    
var app = express();

mongoose.connect("mongodb://localhost/restful_blog_app");
app.set("view engine","ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

var BlogSchema = new mongoose.Schema({
    title: String,
    image: String,
    body: String,
    created: {type: Date, default: Date.now}
});

var Blog = mongoose.model("Blog",BlogSchema);


app.get("/blog",function(req,res){
    
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server started");
});