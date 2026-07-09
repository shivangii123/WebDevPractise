const mongoose = require('mongoose') ;
const User = require('../model/user.model')

module.exports.registerUser = async(req,res)=>{
    let {name,email,password} = req.body ;
    let newUser =await User.create({
        name :name, 
        email: email,
        password:password
    }) 
    res.json({
        msg :"New user added" ,
        data :newUser 
    })
}

module.exports.loginUser = async(req, res)=>{
    let {email, password} = req.body ;
    if(!email || !password){
        res.send("Email and Password are required") ;
    }

    let userExists = await User.findOne({email :email});

    if(!userExists){
        return res.send("User does not exists!!");
    }
    
    else if(userExists.password != password){
        return res.send("Incorrect password !!")
    }

    //express-session (store state of user,i.e info of  user)
    //"key : UserId"  , "value:userExists._id"
    req.session.userid = userExists._id ;
    return res.json({
        success : true,
        msg :"user loggedIn successfully"
    })
}