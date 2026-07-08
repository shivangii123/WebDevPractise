const express = require('express');
const app = express();
const PORT = 4455;

const cookieParser = require('cookie-parser') ;//parse cookies to get cookie data
const session = require("express-session") ;
app.use(cookieParser()) ;
app.use(session({        //generate session-id
    secret:"dfghjkl;",
    cookie :{maxAge:4000}
}))

function protect(req,res, next){
    let isLogedin = req.session.isLogin ;
    if(!isLogedin){
        return res.send("PLease login")    
    }
    next();// aage bhejo request ko

}

// "/"par req ayi ,check karo ,islogedIn? show WelcomePage : Else LoginPage
app.get('/', protect,(req, res)=>{
    res.send("Welcome to my blog website") ;

})

//Post req browser se nhi jati isliye use get request
// don't want email ,passorsd, now,just want "login"par hit ho..
app.get('/login', (req,res)=>{
    req.session.isLogin = true ; // abhi ke liye isse true kar do(ki login ho gaya)
    res.send("Login succesfull");
})



// app.get('/gg', (req, res) => {
//   console.log('Home page');
//   res.send('welcome all of you ..!!!\n how are you');
// });

app.listen(PORT, () => {
  console.log('Listening to http://localhost:' + PORT);
});