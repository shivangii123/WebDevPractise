const express = require('express');
const app = express();
const PORT = 4444;

app.use(express.json()); // "Built-In Middleware"
app.use(m1) ; // "Application Level" par run hua ye midleware
app.use(m2) ;


app.get('/', (req, res, next) => {  
  console.log('/Get request ayi');

  
  req.id = 3 ;

  res.send('welcome all of you ');

  next() ;  //if something wrong happen here we can move the request forward to some other middlerware

});

app.use(m3) ; // now M3 will not run as m1->m2->get('/') -> not move forward


app.get('/about',m4,(req, res, next)=>{
    let flag = true ; // if false-> next() call nhi hoga-> line 30 nhi chalegi
    if(flag){
        return next("Request mein problem hai")
    }
    console.log("about run hua");
    res.send("About Page");

})

// app.get('/home', (req,res,next )=>{
//     })

app.use((err, req, res, next)=>{ // Error -handling Middleware
    console.log(err);
    res.send("Internal server error")
})


app.listen(PORT, () => {
  console.log('Listening to http://localhost:' + PORT);
});



function m1(req,res, next){
    console.log("Middleware1") ;
    console.log("M1 mein Req id is : ",req.id);

    next() ;
}

function m2(req,res,next){
    console.log("Middleware2");
    req.id = "3" ; //ye req obj ke chnages not visible in above middleare(m1)
                //but will persist for middelware m3, m4, aage ke saare..
    next() ;
}

function m3(req,res,next){  
    console.log("Middleware3");
    console.log("M3 mein Req id is : ",req.id);

    next() ;
}

function m4(req,res,next){
    console.log("Middleware4");
    console.log("M4 mein Req id is : ",req.id);

    next(); 
}