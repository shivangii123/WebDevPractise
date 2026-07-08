// This is Concept of cookie

const express = require('express');
const app = express();
const PORT = 4433 ;
const cookieParser = require('cookie-parser') ;//parse cookies to get cookie data

app.use(cookieParser()) ;//ye middleware h ,sari req par chalega and parse request

app.get("/", (req,res)=>{
    res.send("hello world") ;
})


app.get("/set-cookie", (req,res)=>{
    res.cookie("Name" , "Shivangi") ; // set cookie
    res.cookie("Email", "shivangi1234@gmail.com") ;
    res.send("cookie has been sent") ;
})

//.toString() -> can't get back string,(netwrk par ham string bhejenge, so convrt to string)
//JSON.stringify() -> Convert Obj-> string, string to obj, 2 ways, Can't access it using dot operator


app.get('/setUser-cookie', (req,res)=>{
    //We must convert JS object --> JSON String
    // res.cookie( "User" , {"id":1 ,"name" :"shivangi" ,"email" :"shivangi123@gmail.com"}) ;
    

    res.cookie("user", JSON.stringify({"id" : 1, "name" :"john" , "email" :"john123@gmail.com"})) ;

    res.send("User info stored in cookie") ;
})

app.get("/get-cookie", (req, res)=>{
    let cookieName = req.cookies.Name ;
    let cookieEmail = req.cookies.Email ;

    console.log(cookieName);
    console.log(cookieEmail);
    console.log("User Cookie: " ,req.cookies.user );
    let user = JSON.parse(req.cookies.user) ;
    console.log("name is : ", user.name);
    console.log("email is : ", user.email);

    res.send("Hii =>> "+ user.name + " , Email ==>>" + user.email );

})

app.listen(PORT, ()=>{
    console.log(`Server started at : http://localhost:${PORT}`);
})