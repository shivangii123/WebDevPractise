const express = require('express');
const app = express();
const path = require('path');
const PORT = 4444;
const mongoose = require('mongoose');
const User = require('./model/user.model') ;
const Post = require('./model/post.model');
const cookieParser = require('cookie-parser');
const session = require('express-session');

app.use(cookieParser()) ;
app.use(session({
    secret: "abcde",
    resave: false,
    saveUninitialized: false
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/auth', require("./routes/auth.router"));
app.use('/post', require("./routes/post.router")) ;
app.use("/user", require("./routes/user.router"));

//check register ke baad login hua, to wo id session mein store hui ya nhi..
app.get("/", (req, res)=>{
    res.send(req.session.userid) ;
})



mongoose.connect('mongodb://127.0.0.1:27017/test')
.then( ()=>{
    console.log("MongoDb connected !!");
})

app.listen(PORT, () => {
    console.log('Listening to http://localhost:' + PORT);
});

