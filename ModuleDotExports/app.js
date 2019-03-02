var User = require("./modules/user");
var Post = require("./modules/post");

User.findOne({email:"tony@gmail.com"}).populate("posts").exec(function(err,res){
    if(err){
        console.log(err);
    }else{
        console.log(res);
    }
});