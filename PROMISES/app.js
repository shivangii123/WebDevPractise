
// function getData(fn){
//     setTimeout(function(){
//         // let data = "Welcome all of you " ;
//         // fn(data, null);// server decides  
//         fn(null);// here it goes to else wala part
//     }, 4000)  //4sec Delay to bring data from server 
// }

// getData(function(data, error){
//     if(error){
//         console.log(error, 'if');
//     }else{
//     console.log(data, 'else');
//     }
// })
// // Error handling creates a confusion,Callback Hell probem , so we use " PROMISE "..

//  //========================================================================================= //

//  /******************* PROMISE**********************/
// why use Promise ? --> to tackle problem caused by CallBack Hell..
// /*  (1) It's a constructor Function
//     (2) It's a in-built Constructor
//     (3) 1st letter of Promise is Capital 
//     (4) "new" keyword use to call Promise(as promise is constructor Func)
//     (5) Promise ->always accepts a CallBack function as Argument..
// */
// //---------------------------------------
// //Step 1
// let promise1 = new Promise(); //"new" keyword:, (Return an object)

//   new Promise() //--> " Promise" is a constructor Function, create a new promise
// //______________________________________________________________________

// //Step 2
// let promise1 = new Promise(function(){ // Accepts Callback func
// })
// //_______________________________________________________________________

// //Step 3
// let promise1 = new Promise(function( resolve,reject){  // resolve (fulfill), reject(break)
// })
// //-----------------------------------------------------
// //=======  Promise fulfil, server sends data :-->resolve(data), .then() ====================================
// let mypromise = new Promise(function(resolve, reject){

//     setTimeout(function(){ //4sec baad server data de de..
//         // let data = "Hello my Promise family.. " ;
//         let err = "mai serer hu , nhi de raha data.." ;

//         // resolve(data) ;// fulfil promise
//         reject(err);
//     } ,4000 )
// });
 
//     // if promise is resolve--> data goes in ".then()"..
// mypromise.then(function(data){  // ".then() " -->accepts callback Func
//     console.log(data);
// }) ;

// //========== Promise break, error -> resolve(err) , ================================================

let mypromise = new Promise(function(resolve, reject){

    setTimeout(function(){ //4sec baad server data de de..
        let data = "Hello my Promise family.. " ;
        let err = "mai serer hu , nhi de raha data.." ;

        resolve(data) ;
        reject(err);
    } ,4000 )
});

// mypromise.then().catch() ;// syntax
mypromise
.then(function(data){  // ".then() " -->accepts callback Func
    console.log(data, 'resolve');
})
.catch(function(err){  // ".then()" & ".catch()" independently work , if anyone not present , other will work fine..
    console.log(err, 'reject');
}) 
//ans :- When both resolve(), reject() present :- resolve wala pehle likha to wo pehle chalega,if reject pehle hota to wo chalta

///*******************Real World example********************** */

function fetchData() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve("Data received");
        }, 2000);
    });
}

fetchData()
    .then(function(data) {
        console.log(data);
    })
    .catch(function(err) {
        console.log(err);
    });

///***************************************** */
