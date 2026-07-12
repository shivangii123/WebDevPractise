const express = require('express');
const app = express();
const path = require('path');
const PORT = 5555;
const mongoose = require('mongoose');
const Jwt = require("jsonwebtoken");
const User = require("./model/user.model");
const cookieParser = require("cookie-parser");


app.use(cookieParser()) ;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', isLogin,async(req, res) => {
    let id = req.id ;
    let user = await User.findById(id);
    // console.log("userName : ", user.name);
    res.send("hello world ==>"+ user.name);
});


app.post('/register', async(req, res)=>{
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
})

app.post('/login', async(req, res)=>{
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

    //JWT token
    let token = Jwt.sign({id:userExists._id}, "Anything");
    //Jwt.sign(payload , secretKey(anyRandom key ))

    res.cookie("token", token) ; //cookie store kari with {Key:Value}

    return res.json({
        success : true,
        msg :"user loggedIn successfully",
        token :token
    })
})

mongoose.connect('mongodb://127.0.0.1:27017/jwt')
.then( ()=>{
    console.log("MongoDb connected !!");
    app.listen(PORT, () => {
        console.log('Listening to http://localhost:' + PORT);
    });
})


async function isLogin(req, res, next){
    // token from either in cookies or in local storage
    let token = req.cookies.token || req.headers.authorization ;
    console.log(token);
    if(!token){
        return res.json({
            message :"please login"
        })
    }
    // verify token
    let decode =Jwt.verify(token , "Anything") ;
    console.log("decoded is :", decode) ;
    if(!decode){
        return res.json({
            message : "Invalid token"
        })
    }
    let userId = decode.id ;
    req.id = userId ;
    next() ;
}
