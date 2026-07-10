
const mongoose = require('mongoose') ;

//schema;
const userSchema = new mongoose.Schema({
    name : String ,
    email :{
        type :String,
        require :true
    },
    password : String 
})

//model
const User = mongoose.model("User" , userSchema) ;

module.exports = User ;