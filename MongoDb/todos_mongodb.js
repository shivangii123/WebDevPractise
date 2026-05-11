const express = require('express');
const app = express();
const path = require('path') ;
const PORT = 4444;

app.use(express.json());
app.use(express.static(path.join(__dirname,'public'))) ;
app.use(express.urlencoded({extended :true}));

const { MongoClient, ObjectId } = require('mongodb');

// Connection URL
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

//DB Name
const dbName ='Test' ; 
let db = null ;
// db->test , collection-> todos


async function main() {
    await client.connect(); //1. Connect Nodejs with Mongodb
    console.log('Connected successfully to server');
    db = client.db(dbName); //2. Create Database
   
    //Read all todo->> findOne()/insertMany()
    app.get('/todos', async(req,res)=>{
            //get req-> finad all data..
      try {
          let Todos = db.collection('Todos');   // 1.Todos Collection ko utha lao
          const allTodos= await Todos.find({}).toArray(); //2. DB commands se fetch data..
          //find()->returns cursor obj, toArray()->> to get actual array data
          console.log("Current todos are:", allTodos);
          res.send({allTodos })
      } catch (err) {
            res.status(500).json({msg :err.message}) ;        
      }
    })

    //Add new todo->> insertOne()/insertMany()
    app.post('/todos', async(req,res)=>{
         //post req-> insert data..
        const {task} = req.body;
        let Todos = db.collection('Todos'); //if todos collectn h use it ,else create new one
        const insertedTodos= await Todos.insertOne({task, status: false});
        console.log("inserted todos are:", insertedTodos);
        res.send({
            msg :'Insertion Done' ,
            task
        })
    }) 

    //Update status ->
    app.put('/todos', async(req,res)=>{
        const{id} = req.body ;//postman mein "id" is sent
        let Todos = db.collection('Todos');

        //find current todo
        let todo= await Todos.findOne({
            _id :new ObjectId(id)  //"_id" in Mongo match with "id" in postman then update karo
        }) ;

        // Toggle status
        await Todos.updateOne( //_id in MongoDB is ObjectId, not string(Postman)
            {_id : new ObjectId(id)},
            { $set : { status : !todo.status}}
        )
        res.status(200).json({
            msg:'Status updated'
        })
    })

    // Delete todo -->
    app.delete('/todos', async(req,res)=>{
        const{id} = req.body ;
        let Todos = db.collection('Todos');
        let deletedResult= await Todos.deleteOne(
            {_id : new ObjectId(id)}
        )
        // console.log(deletedResult.deletedCount);

        res.status(200).json({
            msg: 'todo Deleted successfully'
        })
    })

    // Clear Completed Todos from List
    app.put('/clear-completed', async(req,res)=>{
        let Todos = db.collection('Todos') ;
        // delete from Mongodb where Todos completed
        await Todos.deleteMany({status : true})

        res.send({
            msg : 'Completed Todos cleared...' ,
        })
    })

    return 'done' ;
}
   

main()
.then(()=>{
    app.listen(PORT,()=>{
    console.log(`listening on http://localhost:${PORT}`);
    })
})
.catch(err=>{
    throw new Error(err.message);
})
