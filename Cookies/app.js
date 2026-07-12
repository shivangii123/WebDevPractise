const express = require('express');
const app = express();
const path = require('path');
const PORT = 4444;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

 
app.get('/profile',(req,res)=>{
  console.log("first login");
  console.log('redirecting to login page');
  
  res.redirect('/login')
})
// app.get('/profile', (req,res)=>{
//     let cookies = new Cookies(req, res);
//     if(!cookies.get("details")){
//         return res.send("You need to login first");
//     }
//     let details = JSON.parse(cookies.get("details"));
//     details.visit++;
//     cookies.set("details", JSON.stringify(details));
//     res.send(`Welcome back ${details.name} - ${details.visit}`) ;
// })

app.get('/login', (req,res)=>{
    let cookies = new Cookies(req, res);
    let details ={
        name : "shivangi",
        visit :1
    }
    cookies.set("details", JSON.stringify(details, {httpOnly :false}));
    res.send("You aare loggedIn")
})

app.listen(PORT, () => {
  console.log('Listening to http://localhost:' + PORT);
});
