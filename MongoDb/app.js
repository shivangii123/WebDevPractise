const express = require('express');
const app = express();
const path = require('path');
const PORT = 4444;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const {MongoClient} =require('mongodb') ; 

const url = 'mongodb://localhost:27017'; //Mongodb url
const client = new MongoClient(url) ;

const dbName = 'testDb' ;

async function main(){
    await client.connect(); // connect to mongodb server
    console.log("succesfully connected to mongodb");
    const db = client.db('testDb') ;
    const users = db.collection('users');


    // //insert
    // const insertResult = await users.insertOne({name:'riya',age:22,location:'pune'})
    // console.log(`Inserted documents => ${insertResult}`);

    // //upate
    // const updateResult = await users.updateOne({name:"maya"},{$set: {name:"siya"}})
    // console.log('Updated document=>', updateResult);

    // // delete
    // await users.deleteOne({name:'riya'});

    //read
    const findResult = await users.find({}).toArray() ;
    console.log('found documents =>' ,findResult);

    await users.insertOne({task: 'dance' , status:'false', id = uuid()});

    await users.find({}).toArray() ;

    await users.updateMany({ id :'given_id'}, {$set:{status:'false'}} ) ;

    await users.deleteOne({id: 'given_id'});

    return 'done' ;
}

app.get('/', (req, res) => {
  console.log('Home page');
  res.send('welcome all of you ..!!!\n how are you');
});


main()
  .then(()=>{
    app.listen(PORT, ()=>{
      console.log('Listening to http://localhost:'+PORT);
    }) ;
  })
  .catch(err => console.log(err)) 


