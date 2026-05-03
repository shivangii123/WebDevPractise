const express = require('express');
const app = express();
const path = require('path');
const { v4: uuid } = require('uuid');//package to generate UNIQUE ID..

const PORT = 5555;

app.use(express.static(path.join(__dirname, 'public'))) ;
app.use(express.json()); // axios send json  data
app.use(express.urlencoded());

let todos =[] ;

app.get('/todos', (req,res)=>{
    res.send(todos);
});

app.post('/todos', (req,res)=>{
    const {task} = req.body;
    todos.push({
        taskName : task ,id :uuid() ,status :false 
    })
    res.send({
        msg: 'Task added successfully ' ,
        todos
    }) 
})


app.put( '/todos', (req,res)=>{
    const {id} = req.body ;
    todos = todos.map(item =>{
        if(id == item.id){
            return {
                ...item ,
                status : !item.status 
            }
        }
        else return item ;
    })
    res.send({
        msg :'Todos status updated successfully ',
        todos
    });
})

app.delete('/todos', (req,res)=>{
    const {id} = req.body ;
    todos = todos.filter(item =>{
        return id !==item.id
    })
    res.send({
        msg:'Todos deleted successfully ',
        todos 
    })
});


app.listen(PORT, ()=>{
    console.log(`listening to :http://localhost:${PORT}`);
})