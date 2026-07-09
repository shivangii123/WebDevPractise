const mongoose = require('mongoose')
const Post = require('../model/post.model');
const User = require('../model/user.model') ;

module.exports.addPosts = async (req, res)=>{
    let {title,description} = req.body ;
    let newPost = await Post.create({
        title : title,
        description :description,
        userId: req.id
    })

    // Update postId field in User Collection
    // Model.findByIdAndUpdate(id, update, options, callback);
    let user = await User.findByIdAndUpdate(req.id , {
        $push: {postsId: newPost._id}, 
        } ,
       {returnDocument: "after"}
        // {new :true} 
       
    )

    res.json({
        succes:true,
        data :newPost , 
        msg :"Post added succesfully" ,
        userData :user 
    })

}


module.exports.deletePost = async(req, res)=>{
    let {id} = req.params ;
    let deletedPost = await Post.findByIdAndDelete(id);

    res.json({
        success: true ,
        msg : "post deleted successfully " ,
        data: deletedPost
    })
}


module.exports.getAllPosts = async(req, res)=>{

    let allPost = await Post.find().populate("userId");
    res.json({
        success:true,
        data: allPost
    })

}