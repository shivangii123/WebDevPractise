const express = require('express');
const app = express();
const path = require('path');
const PORT = 4444;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/login', (req, res) => {
  console.log('Home page');

  res.send('welcome , you are loginnedIn');
});

app.get('/profile',(req,res)=>{
  console.log("first login");
})

app.listen(PORT, () => {
  console.log('Listening to http://localhost:' + PORT);
});
