
const express = require('express');
const app = express() ;
const PORT = 3000;
const path = require ('path');


//--------------------------------------------------------------------
//Every inclusion of CSS or Js file is a new request to the server->
// so css, Js file ka full path define karna hoga-> path.join(__dirname,'style.css')

// app.get('/',(req,res)=>{
//     console.log("heloo");
//     res.sendFile(path.join(__dirname, "index.html"))
// })

// app.get('/style.css', (req,res)=>{
//     res.sendFile(path.join(__dirname, 'style.css'));
// })

// app.get('/script.js', (req,res)=>{
//     res.sendFile(path.join(__dirname, 'script.js'));
// })
//********No separate route for each file-> Group in folder(public)-> app.use() Middleware***********
//--------------------------------------------------------------------

// //Middleware:- (1) built-in Middleware
// // By default this will work for '/' request and it will load index.html on browser...
// //app.use(express.static(path.join(__dirname,'public')))
// app.use('/',express.static(path.join(__dirname, 'public')));



// // if there is index.html inside Public folder,then html content displayed
// // this '/' route response ("hiii..") not shown, app.use-> block kar diya ,app.get will not work
// app.get('/', (req, res)=>{
//     res.send("hiii..")
// })

// ---------------------------------------------------------
//Middleware-> function that runs prior doing anything ->check login before any payment, any task..
//***(1)Generic middleware*** ->run for every request on express server
//run for "/" and "/greet" both console.log(runing middleware 1 & 2)..
app.use(function(req,res,next){
    console.log(`Running middleware-1`);
    next();// to go ahead and move towards next function we call this
})

app.use(function(req,res,next){
    console.log(`Running middleware-2`);
    next();
})


//(2)Path Start match middleware, starting with user/abc/..xyz
app.use('/greet', (req,res,next)=>{
    console.log("Running middleware -3");
    next();// go to next matching route 
})


//(3)Path fixed :-(app.get())
app.get('/',(req,res)=>{
    res.send("hello world");
})

app.get('/greet',(req,res)=>{
    res.send("Aaiyee !! welcome..");
})

//Middleware->Make data visible on backend during POST Req
app.use(express.urlencoded()); // make req.body readable

//POST request
app.post('/greet', (req,res)=>{
    const {name} = req.body ;
    console.log(name);
})

app.listen(PORT, ()=>{
    console.log(`Server listening :http://localhost:${PORT}`);
})
