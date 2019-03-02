var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/objectreference_demo");

var postSchema = new mongoose.Schema({
    title: String,
    content: String
});

var Post = mongoose.model("Post",postSchema);

module.exports = Post;