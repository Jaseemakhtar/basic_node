var express     = require("express"),
    mongoose    = require("mongoose"),
    bodyParser  = require("body-parser"),
    passport    = require("passport"),
    User        = require("./models/user");
    
var app = express();
app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(passport.initialize());
app.use(passport.session());
app.use(require("express-session")({
    secret: "Fake people everywhere",
    resave: false,
    saveUninitialized: false
}));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// ========================
// Routes
// ========================

app.get("/",function(req, res){
   res.send("<h1> Welcome Home </h1>"); 
});

app.get("/login",function(req, res){
   res.render("login"); 
});

app.post("/login",function(req, res) {
    res.send("Login successfully");
})

app.get("/register",function(req, res){
   res.render("register"); 
});

app.post("/register",function(req, res){
    res.send("Register successfully");
});

app.listen(process.env.PORT, process.env.IP, function(){
   console.log("Server started"); 
});
    
    