// This is Concept of sessions

const express = require('express');
const app = express();
const PORT = 4444 ;
const cookieParser = require('cookie-parser') ;//parse cookies to get cookie data
const session = require("express-session")
app.use(cookieParser()) ;

// app.use(session({  //generate session-id
//     secret : "knock knock",
//     cookie :{maxAge: 900000 , httpOnly:true} //Js disabled-> prevent Cross site Atack
// }))
app.use(session({
    name: "BlogSession",
    secret:"knock knock",
    resave:false,
    saveUninitialized:true
}))

//httpOnly-> Prevent Js to read cookie, only read when http request is send


app.get("/set-session", (req,res)=>{
   req.session.name = "shivangiGupta" ;
   res.send("session is set")
})

app.get("/get-session", (req, res)=>{
    let name = req.session.name ;
    console.log(name);
    res.send(`Hii ${name}`) ;

})

app.get("/", (req, res)=>{
    res.send("hello session page") ;
    
})


app.listen(PORT, ()=>{
    console.log(`Server started at : http://localhost:${PORT}`);
})