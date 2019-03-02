var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/embeded_database");

var postSchema = new mongoose.Schema({
    title: String,
    content: String
});

/*var Post = mongoose.model("Posts",postSchema);*/

var userSchema = new mongoose.Schema({
    name: String,
    email: String,
    posts: [postSchema]
});

var User = mongoose.model("Users",userSchema);

var newUser = new User({
    name:"Jaseemakhtar",
    email: "jaseema@gmail.com"
});

newUser.posts.push({
    title: "How to love someone",
    content: "No reason to love someone"
});

newUser.save(function(err,ress){
    if(err){
        console.log(err);
    }else{
        console.log(ress);
    }
});


/*
User.create({
    name: "Jaseem",
    email: "jaseem@gmail.com"
},function(err,created){
    if(err){
        console.log(err);
    }else{
        created.posts.push({
            title: "Create a blog with me",
            content: "By using blogger or Wordpress you can create a Blog along me"
        });
        console.log(created.posts);
    }
});*/

/*Post.create({
    title: "How to create a shell",
    content: "To create a shell, you have to know it first"
}, newlyCreated)
*/


