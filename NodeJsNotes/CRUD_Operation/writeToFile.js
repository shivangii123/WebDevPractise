// //====================================================================
// // --------------------- Create file using :- Callback----------------------

// let fs = require('fs'); //'fs' module comes with NodeJs

// let path = require('path') ; // path module to join 2 paths correctly
// // let fileName = __dirname+'/'+ 'song.txt' ; // better way is below
// let filePath = path.join(__dirname ,'song.txt'); // "\" comes in between

// let data = ["cpp" , "Java", "python"];

// //1. fs.writeFile is asynchronous (non-blocking)
// fs.writeFile(filePath, JSON.stringify(data), (err)=>{  
//     if(err) throw err ; // error thrown at console, Program STOPS..

//     console.log("Data written succesfully in file");
// }) ;

// console.log("Hi I am another piece of Code"); //prints before "data written.."


// ====================================================================
//--------------------- Create file using :- promise----------------------
let fs = require('fs/promises') ;

const path = require('path') ;
let filePath = path.join(__dirname, 'song.txt' );

fs.writeFile(filePath, " HEY !! HEY !!" ,{flag :'a'})
.then( ()=>
    console.log("data succesfully written "))
.catch(err =>
     console.log(err)
)
console.log("hello i am simple print statment");//yeh pehle chalegi->bcoz writefile asynchronous h

   

// // ====================================================================
// //--------------------- Create file using :- Async/Await----------------------
// const fs = require('fs/promises') ;
// const path = require('path');

// let content = ["asnmdlks", "sdsds", "asdasd"] ;

// async function writeData(fileName) {
//     let filePath = path.join(__dirname, '..','database', fileName) ;
//     await fs.writeFile(filePath, JSON.stringify(content));
//     console.log("write sucess");
// }

// writeData('course.json');
// console.log("end of program")


// // //====================================================================
// //--------- Create file using :- WritefileSync(synchronous)  ------------------------

// const fs = require('fs');

// const path = require('path');
// let filePath = path.join(__dirname,'song.txt');

// fs.writeFileSync(filePath, "Mera Sync data") ;// unless its not executed 
//         // nothing will run below this-> synchronous (i.e blocking the I/O )

// console.log("I am different statement");


