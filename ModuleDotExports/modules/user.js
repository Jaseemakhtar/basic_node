var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/objectreference_demo");

var userSchema = new mongoose.Schema({
    name: String,
    email: String,
    posts: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Post"
        }]
});

var User = mongoose.model("Users",userSchema);

module.exports = User;