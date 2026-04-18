
// //====================================================================
// // --------------------- READ FILE using :- Callback----------------------

// let fs = require('fs');
// const path = require('path');
// let filePath = path.join(__dirname, 'song.txt');


// fs.readFile(filePath,{encoding :'utf-8'}, (err, data)=>{
//     if(err) throw err ;

//     console.log(data);
//     }
// ) ;

// // fs.readFile(filePath, (err, data)=>{
// //     if(err) throw err ;

// //     // console.log(data);//binary data
// //     console.log(data.toString()); String data
// // }) ;

// //====================================================================
// //---------------- READ FILE using :- promise----------------------


// let fs = require('fs/promises');
// const path = require('path');
// let filePath = path.join(__dirname, 'song.txt');

// fs.readFile(filePath , {
//     encoding :'utf-8'
// })
// .then(data =>{ 
//     console.log(data)
// })
// .catch( err => 
//     console.log(err)
// )


// //====================================================================
// // ---------- READ FILE using :-:- readfileSync(synchronous) ----------------------

// let fs = require('fs');
// const path = require('path');
// let filePath = path.join(__dirname, 'song.txt');

// const data = fs.readFileSync(filePath, 'utf-8');

// console.log(data);
// console.log("I m 2nd statement");



// //====================================================================
// // ---------- READ FILE using :- Async- Await ----------------------


const fs = require('fs/promises') ;
const path = require('path');
let fileName = path.join(__dirname, "courses.json") ;

async function readFile(fileName) {
    let data = await fs.readFile(fileName, {encoding: 'utf-8'});
    data = JSON.parse(data );
    console.log(data);
}

readFile(fileName);
console.log("end of program");