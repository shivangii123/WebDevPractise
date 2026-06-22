const express = require('express');
const app = express();
const path = require('path');
const PORT = 4444;
const mongoose = require('mongoose') ;
const Todos= require('./models/Todos.model');
const Users = require('./models/Users.model');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public'))) ;

//fetching User, for now ,only one user until we make Login/sign up


app.use(async (req,res,next)=>{
  let User = await Users.findOne({
    name: 'Vaibhav' 
  })

  req.user = User ; //Add user inside the req Object
  next() ;
})


mongoose.connect('mongodb://127.0.0.1:27017/Test').then((data)=>{
    console.log("DB conected");
  })

  

// 3. Inserting a document
app.post('/todos', async (req,res)=>{
    const {task} = req.body ;
    console.log(req.user) ;//We can now use the Users via req.user(that we added inside req Object)
    
    // const newTodo = new Todos({task, user_id: req.users._id})
    // newTodo.save() ;

    // or
    const newTodo = await Todos.create({task , user_id: req.user._id }) 
    console.log(newTodo) ;

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
  let todo = await Todos.findById(id) ;

  todo.status = !todo.status ;
  await todo.save();

  res.json({
    msg: "Status Updated Succesfully"  
    
  })
})

// Delete a document
app.delete('/todos', async(req,res)=>{
  const {id} = req.body ;

  await Todos.deleteOne({
    _id : id 
  })
  res.send("delete a todo")

})


app.put('/clear-completed', async(req,res)=>{
  await Todos.deleteMany({
    status : true
  })
  res.send("Cleared the completed todos")

})


app.listen(PORT, () => {
  console.log('Listening to http://localhost:' + PORT);
});