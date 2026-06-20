const mongoose = require('mongoose');

//1. Schema
const UserSchema = new mongoose.Schema({
    name : String ,
    date : {type:Date, default :Date.now },
})


// 2. model
const Users = mongoose.model('Users', UserSchema)

module.exports = Users ;