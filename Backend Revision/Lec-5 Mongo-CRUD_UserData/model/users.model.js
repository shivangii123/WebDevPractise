
const mongoose = require('mongoose');

//1. Schema
const userSchema = new mongoose.Schema({
    name : String, 
    phone: Number ,
    email: { 
        type: String ,
        require : true
    } ,
    isSubscribed : {
        type: Boolean,
        default : false
    },
    password :String

})

/// model
const Users = mongoose.model("Users", userSchema) ;


module.exports = Users ;