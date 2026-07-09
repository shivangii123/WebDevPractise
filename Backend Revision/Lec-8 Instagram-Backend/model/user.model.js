
const mongoose = require('mongoose') ;

//schema;
const userSchema = new mongoose.Schema({
    name : String ,
    email :{
        type :String,
        require :true
    },
    password : String ,
    //post is multiple so create array, [ parameters]
    // {} -> define how each post look like(define strcture of each element of array)
    // 1. type of id.  2.refrence model
    postsId: [{
        type :mongoose.Types.ObjectId ,  //(mongodb store in this form)
        ref :"Post"
    }]
})

//model
const User = mongoose.model("User" , userSchema) ;

module.exports = User ;