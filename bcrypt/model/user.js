const mongoose = require('mongoose');
const bcrypt = require('bcrypt') ;

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

userSchema.pre('save', async function(){
    console.log("inside pre-save is : " , this);

    const hash = await bcrypt.hash(this.password, 10); //generate hash
    console.log(hash) ;
    this.password = hash ;   //password update karo
})

module.exports = mongoose.model("users", userSchema)