var mongoose = require("mongoose");
var userSchema= new mongoose.Schema({
    name:String,
    email:String,
    provider:String,
    google:Object,
});

module.exports = mongoose.model("User",userSchema);