

const fs = require('fs') ;
const path = require('path') ;
let filePath = path.join(__dirname, 'song.txt') ;


// //=================s Path module, join() ======================================
// const path = require('path') ;//Object
// // let ans =path.join('shivangi', 'gupta')//shivangi/gupta(join with slash)
// // let ans = path.join('I','am', 'not', 'teaching');

// let ans = path.join('I//','//', '//am//', '//not//','//kidding');
// //same ans as above (Always single slash, extra slash ignored)

// console.log(ans);
// //==============================================================
// //==============================================================


// // --------------------- APPEND FILE using :- Callback ----------------------

// fs.appendFile(filePath, '\nNew data is appended through callback...' , function(err){
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log("Contents of file after append:",fs.readFileSync(filePath, 'utf-8'));
//     }
// }) ;


// // --------------------- APPEND FILE using :- Promises ----------------------

// const fsPrm = require('fs/promises') ;
// fsPrm.appendFile(filePath, '\nNew data is appended by promises..')
// .then(() => console.log("data append succesfully!"))
// .catch(err => console.log(err))


// // --------------------- APPEND FILE using :- Synchronous ----------------------

// fs.appendFileSync(filePath, "\nNew data through synchronous append...")

// console.log("The file contents after append : ", fs.readFileSync(filePath,'utf-8'));


// // --------------------- APPEND FILE using :- Async-Await ----------------------

const fsPrm = require('fs/promises');

async function appendData(filePath, content) {
    try{
        await fsPrm.appendFile(filePath, content) ;
        console.log("Data appended succesfully !!");
    }
    catch(err){
        console.log("Error appending the file :", err.message);
    }
}

appendData(filePath, "New log entry at "+new Date()+'\n') ;
