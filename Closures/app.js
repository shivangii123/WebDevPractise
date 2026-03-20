//************** CLOSURE (inner func + parent Lexical envir) *************************/
// /* Create a function createCounter() that returns an object with three methods:
// increment() → + 1  ,decrement() → -1 , getCount() → current counter value

// Counter variable must be private (not directly accessible).
// Use closures to maintain state across function calls.
// */

// let createCounter = function(){

//     let count = 0 ;

//     function increment (){ 
//         return ++count ;
//     }

//     function decrement(){
//         return --count;
//     }

//     function getCount (){ 
//         return count ;
//     }
//     return { increment, decrement, getCount } ;
// }

// let result = createCounter() ;
// console.log(result.increment()); // 1
// console.log(result.increment()); // 2
// console.log(result.decrement()); // 1
// console.log(result.getCount());  // 1
// console.log(result.count) ;  // unefined


// //=======================================================
// //*****Function Curring ->Closure + Currying +Function Chaining****** */
// function add(num){
//     if(!num) return 0 ;
//     return function helper(v){
//         if(!v) return num ;

//         num += v ;
//         return helper ;
//     }
// }

// console.log(add());
// console.log(add(1)());
// console.log(add(1)(2)());
// console.log(add(1)(2)(3)());


// //========================Factorial==========================
// function fact(n){
//     let ans = 1; // else calculate 
//     for(let i=1; i<=n; i++){
//         ans *= i ;
//     } 
//     return ans ;
// }



// function memoize(fn){
//     let cache ={} ;
//     return function(n){
//         if(cache[n]){ // if present return the value
//             return cache[n] ;
//         }
//         console.log("Calculating the answer for ", n);
//         cache[n]= fn(n); //else store value for future..
//         return cache[n] ;
//     }  
// }

// let myfunc = memoize(fact);
// console.log(myfunc(4));
// console.log(myfunc(4));




// //========================Fibonacci==========================

// function Fibonacci(n){
//     if(n==0) {return 0 ;}
//     else if(n== 1|| n== 2){ return 1;} 

//     let a = 0, b=1;
//     let c ;
    
//     for(let i=3;i<=n;i++){
//         c = a+b;
//         a = b;
//         b = c;
//     }
//     return c ;
// }

// function memoize(){ // generic wrapper works for all Quest of closure..

//     let cache ={};

//     return function(n){
//         if(cache[n]) {
//             console.log("Returning from Cache ..");
//             return cache[n] ;}

//         console.log(`Calculating the value of ${n} :`);    
//         cache[n] = Fibonacci(n) ;
//         return cache[n];
//     }
// }

// let myfib = memoize();
// // console.log(myfib(3));
// console.log(myfib(6));//once it store  in Cache
// console.log(myfib(6));//it will not calculate again-> "SAVE TIME"

//==================================================================

// //*******Practise Question for -> Closure****** */
// //Q1 Create a func that initialize a private balance and only allows deposit, withdrawal,checkBalance

// function secureBankAccount(){

//     let balance = 0;

//     function deposit(val1){ 
//         balance += val1 ;
//         return `After Deposit : ${balance}`;
//     }

//     function withdrawal(val2){
//         balance -= val2 ;
//         return `After Withdrawal : ${balance}`;
//     }

//     function checkBalance(){
//         return `Balance : ${balance}` ;
//     }
//     return {
//         deposit, withdrawal,checkBalance ;
//     }
// }

// // Balance : 0
// let account = secureBankAccount () ; 
//Closure ->>Inner func remembers outer Scope Variables 
// console.log(account.deposit(200)); // Balance: 200
// console.log(account.withdrawal(50));//Balance: 150
// console.log(account.checkBalance()); //Output: 150

// //=========================================================

// console.log(helloWorld); //->only varble hoisted with 'undefined'

// var helloWorld = function(){// 'let'-> will give Refrnc Error
//     console.log("Hii");
// }

// console.log(helloWorld); // Function


// ////
// console.log("Say hello before func calling:", sayHello);//here entire func move to top

// function sayHello(){
//     console.log("Hello");
// }

// console.log("Say hello after func calling:", sayHello);//function


// //=====================================
//'let'->hoisted, but uninitialized,go to DTZ(dead temprol zone) until initialized====================================

// var x = -10;

// function solve(){
//     // console.log(x); //ERROR
//     let x = "world" ;
//     console.log(x); //World
// }
// solve() ;
// console.log(x); //-10

// //-----------------------------------------
//Factorial Memoization

// function fact(n){
//     let cache ={} ;
//     if(!cache(n)){
//          let ans =1;
//         for(let i=1;i<=n;i++){
//             ans *= i ;
//         }
//         cache[n]= fact(n);
//     }
//     else{
//         return cache[n] ;
//     }
//     return ans ;
// }

// console.log(fact(5)); 
// console.log(fact(6)); 

//-------------------------------------
