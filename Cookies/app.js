const express = require('express');
const app = express();
const path = require('path');
const PORT = 4444;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/login', (req, res) => {
  console.log("Login succesfull, Welcome  ");
});
 
app.get('/profile',(req,res)=>{
  console.log("first login");
  console.log('redirecting to login page');
  res.redirect('/login')
})

app.listen(PORT, () => {
  console.log('Listening to http://localhost:' + PORT);
});
