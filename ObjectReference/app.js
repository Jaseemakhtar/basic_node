var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/objectreference_demo");

var postSchema = new mongoose.Schema({
    title: String,
    content: String
});

var Post = mongoose.model("Post",postSchema);

var userSchema = new mongoose.Schema({
    name: String,
    email: String,
    posts: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Post"
        }]
});

var User = mongoose.model("Users",userSchema);

/*User.create({
    name: "Tony Stark",
    email: "tony@gmail.com"
});
*/
/*Post.create({
    title: "Billionaire.",
    content: "Genius, billionaire, playboy, philontrophist."
},function(err,res){
    if(err){
        console.log(err);
    }else{
        User.findOne({email:"tony@gmail.com"},function(er,re){
            if(er){
                console.log(er);
            }else{
                re.posts.push(res);
                re.save(function(error,user){
                    if(error){
                        console.log(error);
                    }else{
                        console.log(user);
                    }
                })
            }
        })
    }
})*/

User.findOne({email:"tony@gmail.com"}).populate("posts").exec(function(err,res){
    if(err){
        console.log(err);
    }else{
        console.log(res);
    }
});