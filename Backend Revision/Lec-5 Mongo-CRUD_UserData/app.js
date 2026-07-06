const express = require('express');
const app = express();
const mongoose = require('mongoose');

const userRouter = require("./routes/user.router")
const PORT = 4444;

app.use(express.json());
app.use("/users", userRouter); // mount router in app.js jisse re-direct 
                          // ho jaye request to router file
                          

// app.get('/', (req, res) => {
//   console.log('Home page');
//   res.send('welcome all of you ..!!!\n how are you');
// });


// 27017-> mongoDb ka server PORT
mongoose.connect('mongodb://127.0.0.1:27017/projectDB')
.then(()=> console.log('db connected'))

app.listen(PORT, () => {
  console.log('Listening to http://localhost:' + PORT);
});

