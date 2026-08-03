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
  if(user) return res.status(400).send("Email already exits")

  let data = await User.create({name, email, password})
  res.status(200).json({
    msg :"User created succesfully"
  })

})

app.post('/login',async (req,res)=>{
    const {email, password} = req.body ;

    let user = await User.findOne({email}) ;

    if(!user) return res.status(400).json({
        msg : "User does not exits, Please signup first " 
    }) ;

    if(password != user.password) {
        return res.status(400).json({
            msg :"Incorrect password !"
        })
    }

    let myCookieData ={
        id :user._id
    }
    res.cookie("cookieData",JSON.stringify(myCookieData)) ;

    return res.status(200).json({
        msg : "Login succesfull" ,
        user
    })

})

app.get('/dashboard', async(req, res)=>{

    let cookie = JSON.parse(req.cookies.cookieData);
    console.log("no cookie:", cookie);

    let id = cookie.id ;// jo user cookie ll raha h waha se hi details utha lo
                // no need to ask user for password everytime..

    let user = await User.findOne({_id :id}) ;
    if(!user) return res.status(400).json({
        msg : "login again .."
    })

    res.json({
        msg : "Welcome to dashboard"
    })

})

