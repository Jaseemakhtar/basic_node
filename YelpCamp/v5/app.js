var express = require("express");
var app = express();
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var Campground = require("./models/campground");
var Comment = require("./models/comment");
var seedDB = require("./seed");

app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use( express.static( __dirname + "/public/") );
mongoose.connect('mongodb://localhost/yelp_camp_v5');

seedDB();


/*Campground.create({
    title: "Scott Harder",
    image: "https://c1.staticflickr.com/5/4090/5035314676_f73859350e_z.jpg",
    description: "It's create by Scott Harder not mutants."
}, function(err,newlyCreated){
    if (err) {
        console.log(err);
    }else{
        console.log("Added data successfully: ");
        console.log(newlyCreated);
    }
});
*/
/*
var campgrounds = [
    {
        title: "Sperical Art",
        image: "https://farm2.staticflickr.com/1739/41686239925_139c920e1c_z_d.jpg"
    },
    {
        title: "Steve Moore",
        image: "https://farm6.staticflickr.com/5097/5569777909_32ff554a1a_z_d.jpg"
    },
    {
        title: "Scott Harder",
        image: "https://c1.staticflickr.com/5/4090/5035314676_f73859350e_z.jpg"
    },
    {
        title: "Steve Sheriv",
        image: "https://farm2.staticflickr.com/1372/907039327_5e0d2ab0a2_z_d.jpg"
    },
    {
        title: "Saul Greenberg",
        image: "https://farm4.staticflickr.com/3741/9586943706_b22f00e403_z_d.jpg"
    },
    {
        title: "Thomas Schrantz",
        image: "https://farm4.staticflickr.com/3447/3241780791_6f2d9967b7_z_d.jpg"
    },
    {
        title: "Scott W",
        image: "https://farm5.staticflickr.com/4093/4825133435_ff8de5c0e2_z_d.jpg"
    },
    {
        title: "Old n In Way",
        image: "https://farm5.staticflickr.com/4145/5039882859_819ff1bc16_z_d.jpg"
    }
    ];
*/
app.get("/",function(req,res){
    res.render("landing");
});

app.get("/campgrounds",function(req,res){
    
    Campground.find({},function(err,campgrounds){
        if(err){
            console.log(err);
        }else{
            res.render("campground/campgrounds",{campgrounds: campgrounds});        
        }
    });
    
});

app.get("/campgrounds/new",function(req,res){
    res.render("campground/new");
});

app.get("/campgrounds/:id",function(req, res) {
    
    Campground.findById(req.params.id).populate("comments").exec(function(err,result){
        if(err){
            console.log(err);
        }else{
            // res.send("This is: " + result.title + " - " + result.image + " - " + result.description);
            res.render("campground/show",{campground: result});
        }
    });
   
});

app.get("/campgrounds/:id/comment/new",function(req, res) {
   Campground.findById(req.params.id,function(err,fCampground){
       if(err){
           console.log("Error: " + err);
       }else{
           res.render("comment/new",{campground: fCampground});
       }
   }); 
});

app.post("/campgrounds/:id/comment",function(req, res) {
    Campground.findById(req.params.id,function(err,newCampground){
       if(err){
           console.log("Error: " + err);
       }else{
           
           Comment.create(req.body.comment,function(err, newComment) {
               if(err){
                    console.log("Error saving comment");
               }else{
                   newCampground.comments.push(newComment);
                   newCampground.save();
                   res.redirect("/campgrounds/" + req.params.id);
               }
           });
           
       }
   }); 
});

app.post("/campgrounds",function(req,res){
    var title = req.body.title;
    var image = req.body.image;
    var desc = req.body.description;
    
    Campground.create({
        title: title,
        image: image,
        description: desc
        }, function(err,newlyCreated){
            if (err) {
                console.log(err);
            }else{
                console.log("Added data successfully: ");
                console.log(newlyCreated);
                res.redirect("/campground");
            }
    });
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Yelp camp started");
});