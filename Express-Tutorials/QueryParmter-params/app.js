// // //Creating SERVER (server listen request, check if request come or not)
// //here : (CLIENT)->Browser  , (SERVER)-> VS code par NodeJs runs applictn
// //======================================================================

const express = require('express'); //Load Express module into this file
const app = express(); //Create Express application object

const path = require('path');
const PORT = 3000;

// app.use(express.static("public"));// public folder

app.get('/', (req,res)=>{
    console.log("Home page");
    res.send("welcome all of you ..!!!\n how are you") ;
    // res.sendFile(path.join(__dirname , "public", "index.html"));

});

//DATA Access through: (1) Query Parameter
app.get('/greetings' , (req,res)=>{
    console.log(req.query);
    const name = req.query.name ;
    res.send(`Welcome to App, ${name}`) ;
})

// (2) Params
// URL type: http://localhost:4444/greet/shivangi
app.get('/greet/:name/:lastname', (req,res)=>{
    console.log(req.params);
    const name = req.params.name ;
    res.send(`Hamari app mein apka swagat h, ${name} `);
})


//------------------------------------------------------------------------
app.get( '/hello', (req,res)=>{
    // res.send("hello route is working ...!!!") ;//text
    res.send('<h1 style = "background-color:black; color: white"> Hello i am computer</h1>'); //html

    // res.redirect('/test'); // re-direct client to another route
    res.end();
    // res.set('Content-Type', 'text/plain');
})

app.get('/test', (req, res) => {
    res.status(201).json({
        message: "All good",
        data: [1,2,3]
    });
});

app.listen(PORT , ()=>{ // start server
    console.log("Listening to http://localhost:"+PORT) ;
})