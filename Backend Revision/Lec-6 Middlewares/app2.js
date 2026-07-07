const express = require('express');
const app = express();
const PORT = 4433;


app.use(m1);
// app.use(m2) ;


app.use(express.json());

app.get('/', (req, res) => {
  console.log('Home page');
  res.send('welcome all of you ..!!!\n how are you');
});

// function m1(req,res, next){

//     let {idCard} = req.query ;    
//     console.log("idCard =", idCard);
//     console.log("M1 chl rh h");
//     if(idCard == "false"){
//         return res.send("Id card lekar aoo");
//     }
//     else{
//         console.log("aaaaaaaaaaaa")
//         req.appointment = false ;
//         next() ;
//     }
    
// }

function m1(req,res,next){
    console.log("URL:", req.url);
    console.log("Query:", req.query);

    let { idCard } = req.query;
    console.log("idCard =", idCard);
    if(idCard == "false"){
        return res.send("Id card lekar aoo");
    }

    next();
}


function m2(req, res, next){

    console.log("M2 chal rh");
    if(!req.appointment){
        return res.send("appointment lekar aaoo")
    }
    next() ;
}


app.listen(PORT, () => {
  console.log('Listening to http://localhost:' + PORT);
});