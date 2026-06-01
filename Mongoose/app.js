const express = require('express');
const app = express();
const path = require('path');
const PORT = 4444;
const mongoose = require('mongoose') ;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public'))) ;


mongoose.connect('mongodb://127.0.0.1:27017/Test')
  .then((data)=>{
    console.log("DB conected");
  })
  .catch((err)=>{
    console.log(err.message);
  })

app.get('/', (req, res) => {
  console.log('Home page');
  res.send('welcome all of you ..!!!\n how are you all');

});

app.listen(PORT, () => {
  console.log('Listening to http://localhost:' + PORT);
});