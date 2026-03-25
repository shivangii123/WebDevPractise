

// async- await  -->> Saves us from  ".then()" or "promise" chaining....

// function something (){

// }
// console.log(something()); //undefined

// //------------------------------

// // ******** "async" always written with a Function..(returns a Promise)***********8
// async function some1(){

// }
// console.log(some1()); //now it returns a "Promise" with "undefined"

// //-------------------------------------

// async function some2(){
//     return 10;
// }
// console.log(some2()); // returns promise with resoled value of "10"

// //==================================================================
// async function calc(){
//     return 3+5 ;
// }

// calc().   // this calc func returns a Promise ith resoled value of 8
// then(function(data){
//     console.log(data);
// })

// //=========================================================================

/******** Await : intezaar karooo**********/

async function abc() {
    
    let data =await "server..";
    console.log(data); //till await going, func not executes.. it goes outside func.. 

}

console.log("plz wait");