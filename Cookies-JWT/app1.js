//cookie- using BROWSER

const { error } = require('console');
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const path = require('path');
const PORT = 4444;
const cookieParser = require('cookie-parser')

app.use(cookieParser())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')) ) ;

mongoose.connect('mongodb://localhost:27017/testing123').then(()=>{
  app.listen(PORT, () => {
    console.log('Listening to http://localhost:' + PORT);
  });
}).catch(error=>{
  console.log(error);
})

const userSchema = new mongoose.Schema({
    name :String ,
    email :String ,
    password: String
}) ;

const User = mongoose.model('User', userSchema) ;

app.post('/signup', async (req, res)=>{
  const {name, email, password} = req.body ;

  let user = await User.findOne({email}) ;
//   if(user) return res.status(400).send("Email already exits")
    if(user) return res.redirect('/signup.html')

  let data = await User.create({name, email, password})
//   res.status(200).json({ msg :"User created succesfully" })
    res.redirect('/login.html')

})

app.post('/login',async (req,res)=>{
    console.log(req.body) ;
    const {email, password} = req.body ;

    let user = await User.findOne({email}) ;

    if(!user) return res.status(400).json({
        msg : "Email does not exits, Please signup first " 
    }) ;

    if(password != user.password) {
        return res.status(400).json({
            msg :"Incorrect password !"
        })
    }

    let myCookieData ={
        id :user._id
    }
    res.cookie("cookieData",JSON.stringify(myCookieData), {
        httpOnly : true //disable JS to access the cookie
    }) ;

    // return res.status(200).json({
    //     msg : "Login succesfull" ,
    //     user
    // })
    return res.redirect('/dashboard.html')

})

app.get('/dashboard', async(req, res)=>{

    try {
        let cookie = JSON.parse(req.cookies.cookieData);
        console.log("no cookie:", cookie);
    
        let id = cookie.id ;// jo user cookie ll raha h waha se hi details utha lo
                    // no need to ask user for password everytime..
    
        let user = await User.findOne({_id :id}) ;
        if(!user) return res.status(400).json({
            msg : "login again .."
        })
    
        // res.json({ msg : "Welcome to dashboard" })
        res.redirect('/dashboard.html')
    } catch (error) {
        res.redirect('/login.html')
;        
    }
})

app.get('/isloggedin', async(req, res)=>{

    try {
        let cookie = JSON.parse(req.cookies.cookieData);
        console.log("no cookie:", cookie);
    
        let id = cookie.id ;
    
        let user = await User.findOne({_id :id}) ;
        if(!user) return res.status(400).json({
            msg : "login again ..",
            isLoggedIn : false
        })
    
        return res.status(200).json({
            msg : "login success .." ,
            isLoggedIn : true

        })
    } catch (error) {
        res.send('<h1> Login NOW to view website <a href="login.html"> LOGIN </a></h1>')
        
    }
})
