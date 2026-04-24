// //====================================================================
// // --------------------- DELETE FILE using :- Callback----------------------
// let fs = require('fs');
// const path = require('path');
// let filePath = path.join(__dirname, 'song.txt');

// fs.unlink(filePath, (err)=>{
//     if(err) 
//        throw err ;

//     console.log('song.txt was deleted' );
// })


// //====================================================================
// // ---------------- DELETE FILE using :- PROMISES----------------------
// let fs = require('fs/promises');
// const path = require('path');
// let filePath = path.join(__dirname, 'song.txt') ;

// fs.unlink(filePath)
// .then(()=>{ console.log('File deleted succesfully')})
// .catch((err)=>{
//     if(err.code ='ENOENT'){
//         console.log("File doesn't exits");
//     }
//     else{
//         console.log("Error in deleting file ", err.message);
//     }
// }) ;



// //======================================================================
// // ------------- DELETE FILE using :- Async - Await----------------------

let fs = require('fs/promises');
const path = require('path');
let filePath = path.join(__dirname, 'song.txt') ;

async function deleteFile(filePath) {
    try {
      await fs.unlink(filePath)
      console.log("file deleted !!");
    } catch (error) {
      console.log(`Error in deleting : ${error.message}`);
    }     
}

deleteFile(filePath)

// //====================================================================
// // ------------- DELETE FILE using :- Synchronous----------------------

// let fs = require('fs');
// const path = require('path');
// let filePath = path.join(__dirname, 'song.txt') ;

// try{
//   // Option 1: Standard file deletion
//     fs.unlinkSync(filePath);
//     console.log("file deleted succesfullly");

//     // (2): Using rmSync with optional force flag
//     fs.rmSync(filePath,{force:true });
// }
// catch(err){
//     console.log("error in deleting file:",err.message);
// }

