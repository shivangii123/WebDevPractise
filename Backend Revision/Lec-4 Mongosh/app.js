const express = require('express');
const app = express();
const path = require('path');
const PORT = 4444;
const mongoose = require('mongoose');
const User = require("./model/user.model");

app.use(express.json());

//all function on database is Asynchronous so use-> async/await

// create a func which inserts a new User ith Name, age and Email
async function addUser(name, age, email){
    // add new User thr mongoose
    // 1. crete new object
    let newUser = new User({
      name : name ,
      age : age ,
      email :email
    })
    await newUser.save() ;
}

//
addUser("Shivangi", 21, "shivangi123@gmail.com")
.then(()=> console.log("User added"))
.catch( e => console.log(e))

// 27017-> Mongodb ka srver chalta h locally
mongoose.connect("mongodb://localhost:27017/mongooseDb")
.then(()=> console.log("db connected"))
.catch( (e)=> console.log(e))


app.get('/', (req, res) => {
  console.log('Home page');
  res.send('welcome all of you ..!!!\n how are you');
});

app.listen(PORT, () => {
  console.log('Listening to http://localhost:' + PORT);
});


