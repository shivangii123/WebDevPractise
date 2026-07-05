const mongoose = require('mongoose');

//Schema
const userSchema = new mongoose.Schema({
    name : String ,
    age : Number ,
    email: {
        type: String ,
        require :true
    }
})



//Model
const User = mongoose.model("User", userSchema) ;

module.exports = User ; // User Model export hoga..
