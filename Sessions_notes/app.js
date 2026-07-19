const express = require('express');
const app = express();
const path = require('path');
const PORT = 4444;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  console.log('Home page');
  res.send('welcome all of you ..!!!\n how are you');
});

// res.session; 

app.listen(PORT, () => {
  console.log('Listening to http://localhost:' + PORT);
});