const express = require('express'); //Load Express module into this file
const app = express(); //Create Express application object
const PORT = 3000;

app.use(express.json()); // axios send json  data
app.use(express.urlencoded({extended :true}));

//MongoDb and NodeJs connection code
const { MongoClient } = require('mongodb'); // import mongoClient

// Connection URL
const url = 'mongodb://localhost:27017'; //By default port of MongoDb
const client = new MongoClient(url); //Create MongoDB client object

// Database Name
const dbName = 'testDb';//if DB exists use it , else create new one

async function main() {
    
    await client.connect() ; //Connect Node.js app to MongoDB server.
    console.log("NODEJs successfully connected to Mongodb");

    const db = client.db(dbName) ; //db()->Select database 
    const users = db.collection('users'); //collection()-> Select Collection

    // users.find({}).toArray()//DB se data nikalme mein time lagega so it's a Promise
    //     .then( (data)=>{
    //         console.log( data);
    //     })
    //     .catch(err => 
    //         console.log(err)
    //     )

    // const currResult = await users.find({}).toArray() ;
    // console.log(`Current documents :`,currResult);
            
    //find
    users.find({name :'shivangi'}).toArray()
        .then((data)=> console.log(data))
        .catch(err =>console.log(err))

    // Insert one document (row)
    users.insertOne({name: 'shivangi', age: 21, location:'pune'  })  
    
    // update
    const updateInfo = await users.updateOne({name:'siya'} , {$set :{ name :'tina'}})
    console.log('Updated info is =>', updateInfo);


    // const deleteResult = await users.deleteMany({name:"shivangi" });
    // console.log(`Deleted documents :`, deleteResult);

    return 'done' ;   
}

main()
    .then(()=>{
        app.listen(PORT , ()=>{ // start server
            console.log("Listening to http://localhost:"+PORT) ;
        })
    })
    .catch(err=>{
        console.log(err.message);
    })
