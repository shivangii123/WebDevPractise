

// function user(){

//   }

// let user1 = user();// when nothing returns , Js returns "undefined "
// console.log(user1); //undefined

//======================

// *********constructor function (blueprint) -> returns Object****
// Convection -> 1st letter Capital
// calling func with "new" keyword

// function user(){

// }
// let user2 =new  user();
// console.log(user2); // user object

//==============================
//======= create Multiple objects with same  prperty-> using 'this' ============

// function User(nm,ag,cl ){ // create template and call using constructor func(new keyword)
//     this.name = nm;
//     this.age = ag ;
//     this.color =cl ;

// }
// let user1 = new User("bhumika" , 20, "red");
// let user2= new User("Siya", 22, "green");

// console.log(user1);
// console.log(user2);
// console.log(user2.name);


//----------------------------------------------

// function User(nm,ag,cl ){ 
//     this.name = nm;
//     this.age = ag ;
//     this.color =cl ;

//     this.desc = function(){  //where it will attached to each Object
//         return `my name is ${this.name}` ;
//     }
// }

// let user1 = new User("shivangi" , 20, "red");

// console.log(user1);
// console.log(user1.desc());
// console.log(user1.__proto__); // constructor func  is prototype of user obj as its made of constrc func
// user1 --> User.prototype(constr func) -->Object.prototype --> null

//-------------------------------------------------
/* desc func not in Obj  still used bcoz it's in prototype */
//create desc function in User prototype to avoid repeatedness/space
// function User(nm,ag,cl ){ 
//     this.name = nm;
//     this.age = ag ;
//     this.color =cl ;
// }

// User.prototype.desc = function(){ //func created inside parent  so all child can access
//     return `my name is ${this.name}`;
// }

// let user1 = new User("shivangi" , 20, "red");

// console.log(user1);
// console.log(user1.desc());
// //----------------------------------------------
// //----------------------------------------------


// /***Normal func **/
// function multiply (a,b){
//     return a*b ;
// }
// console.log(multiply(3,4));
// //-------------------------//
// //******************** ARROWW Functions ******************** //

// // dif and compact Ways to write Arrow func
//// ----Way-1 Normal ------
// let add = (a,b)=>{
//     return a+b ;
// }
// console.log(add(3,4));

// //-----------------------//
//  // ------ Way -2--------
// //(When only 1 statement present in func-> u can remove return keyword, {})

// let multiply = (num)=>  num *num ;
// console.log(multiply(8));

// //-------------------------//
//  //----- Way-3 ----(only 1 parameter -> u can omit parenthesis())
// let multiply2 = num => num *num ;
// console.log(multiply2(9)) ;

//===================================================================






