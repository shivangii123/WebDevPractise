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

  
// 1.Create Schema(blueprint of Model looks like)
const todosSchema = new mongoose.Schema({
    task : String,
    status : {typs : Bboolean, default :false} ,
    date :{type :Date,default :Date.now}  
})

// 2. Create a Model (.e Collection, in which we insert documents)
// this collection has Constraints on it
const Todos = mongoose.model('Todos', todosSchema) ;

app.get('/hello', (req, res) => {
  console.log('Home page');
  res.send('Hello \n welcome all of you ..!!! ');

});

app.post('/orders', async (req, res) => {
    const {productName, price, customerId} = req.body;
    let newOrder = await order.insertOne({
        productName,
        customerId,
        price
    })
    res.status(200).json({
        message: 'Order is Created Successfully',
        newOrder
    })
})

app.listen(PORT, () => {
  console.log('Listening to http://localhost:' + PORT);
});