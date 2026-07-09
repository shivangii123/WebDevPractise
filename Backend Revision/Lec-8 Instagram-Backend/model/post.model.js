
const mongoose = require('mongoose') ;

//schema
const postSchema = new mongoose.Schema({
    title :String ,
    description : String ,
    userId :{
        type :mongoose.Types.ObjectId ,
        ref : "User"  // reference table is->User
    }
})

const Post = mongoose.model("Post",postSchema) ;

module.exports = Post ;

