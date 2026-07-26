const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name :{
        type : String,
        required :true
    } ,
    email :{
        type : String,
        required :true,
        unique :true
    },
    password :{
        type : String,
        required :true
    }

})

userSchema.pre('save', function(next){
    console.log("inside pre-save" , this);
})

module.exports = mongoose.model("users", userSchema)