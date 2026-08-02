const express = require('express');
const app = express();
const PORT = 4444;
var jwt = require('jsonwebtoken');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const JWT_SECRET = "this is my scerect code , heee heeee" ;

app.get('/get-token', (req, res) => {
  let token = jwt.sign({ // create a token
    name : "shivangi",
    date : '5 Aug 2026' ,
    description :"AI is coming.."

  }, JWT_SECRET)

  res.send(token) ;
});

app.get('/check-token', (req, res)=>{
  let {token} = req.query ;
  let ans = jwt.verify(token, JWT_SECRET) ; // verify if token is valid

  if(ans) return res.send({
    msg : "Token is valid"
  })
   res.send({
    msg : "invalid Token"
   })
})

app.listen(PORT, () => {
  console.log('Listening to http://localhost:' + PORT);
});