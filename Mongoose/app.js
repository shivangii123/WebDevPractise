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
const TodosSchema = new mongoose.Schema({
    task : String,
    status : {type : Boolean, default :false} ,
    date :{type :Date,default :Date.now}  
})

// 2. Create a Model (i.e Collection, in which we insert documents)
// this collection has Constraints on it
const Todos = mongoose.model('Todos', TodosSchema) ;

// 3. Inserting a document
app.post('/todos',(req,res)=>{
    const todo = req.body ;
    
    const newTodo = new Todos({task})
    newTodo.save() ;

    res.send({
      msg :"Insertion done" ,
      task
    })
})

// Read 
app.get('/todos', (req,res)=>{
  Todos.find()
    .then(data =>{
      res.send({
        msg: "Todos fetch success " ,
        task : data
      })
    })
    .catch(err =>{
      res.send({
        msg : err.message
      })
    })  
})

// Update 
app.put('/todos', async(req,res)=>{
  const {id} = req.body ;
  let todo = await Todos.find({_id : id} ) ;

  todo.status = !todo.status ;
  await todo.save();

  res.json({
    msg: "Status Updated Succesfully"  
    
  })
})

// Delete a document
app.delete('/todos', (req,res)=>{
  const {id} = req.body ;

  Todos.delete({
    _id : id 
  })
  res.send("delete a todo")

})


app.put('/clear-completed', (req,res)=>{
  Todos.delete({
    status : true
  })
  res.send("Cleared the completed todos")

})


app.listen(PORT, () => {
  console.log('Listening to http://localhost:' + PORT);
});