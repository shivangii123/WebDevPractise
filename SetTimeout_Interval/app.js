// /************** SET-TIMEOUT ()******************************/

// console.log("start");
// console.log("run after 4 second");
// console.log("end");

// // ---------------------

// // SetTimeout ->

// console.log("start");
// setTimeout(()=> console.log("run") , 2000);
// console.log("end");
//      // or
// // --------------------//
// console.log("start");

// setTimeout(function(){
//     console.log("run after 4 seconds");
// }, 4000)// millisec (1sec= 1000 ms)

// console.log("end");

// /********************************************/
// /*************** INTERVIEW QUES *****************************/
// // // Ques1 :
// console.log("start");

// setTimeout(function(){
//     console.log("after 4 seconds ");
// }, 4000)
// setTimeout( function(){
//     console.log("after 2 seconds");
// } , 2000 )
// console.log("end");


/*output :- start
            end
            after 2 seconds
            after 4 seconds */

// //-> Total time taken = 4 sec
// //--------------------

// //Ques 2:
// JavaScript is single-threaded.
// It executes synchronous code first. Always.

// "setTimeout" does NOT pause execution.It schedules a callback to run later.
console.log("start");

setTimeout(function(){ // till the time,call stack is not empty 
    console.log("after 0 seconds ");//CallBack Queue ka SetTimeout func will not run
},0)

console.log("end");
// /*Output :- start
//             end
//             after 0 seconds 
// */

//=======================================


// /********** SetInterval :-> repeats itself after particular Interval**************************/

// // setInterval(function(){
// //     console.log("Lets code..");
// // }, 3000)

// //  //After every 3 sec ,It repeats infinite times...
// // //---------------------------------------

// //--> to stop use: clearInterval(id) : it accepts an Id returned by setInterval funcl
// //             -> clearInterval : - stops execution after particular interval


// let idd = setInterval(function(){
//     console.log("Let's code.. ");
// }, 3000)

// setTimeout(function(){ 
//     clearInterval(idd);
// }, 15000)
 



