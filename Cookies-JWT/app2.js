//JWT- using POSTMAN

require("dotenv").config();
console.log(process.env.JWT_SECRET);
const express = require('express');
const app = express();
const PORT = 4444;
const jwt = require('jsonwebtoken');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const JWT_SECRET = process.env.JWT_SECRET ;

console.log("JWT_SECRET =", JWT_SECRET);


app.get('/get-token', (req, res) => {
    
  let token = jwt.sign({ // create a token
    name : "shivangi",
    date : "5 Aug 2026" ,
    superAdmin : false
  }, JWT_SECRET)

  console.log("token is : " ,token);
  res.send(token) ;
});

app.get('/check-token', (req, res)=>{
  let {token} = req.query ;
  try {
    let data = jwt.verify(token, JWT_SECRET) ; // verify if token is valid
  
    res.send({
      msg : "Token is valid",
      data
    })

  } catch (error) {
    res.send({
      msg : "invalid Token, enter correct!!",
      err: error.message
     })
  }
})

app.get('/delete-database', function(req,res,next){
    let {token}  = req.query ;
    
    let data = jwt.verify(token,JWT_SECRET) ;
    
    if (data.superAdmin) return next() ;
    else res.status(404).send({
        msg: "Invalid request"
    })

    }, (req,res)=>{
    res.send({
        msg : "Poora database udda diya"
    })

})

app.listen(PORT, () => {
  console.log('Listening to http://localhost:' + PORT);
});