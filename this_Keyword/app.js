

/* "this" keyword are of 5 types...
    (1)regular function invocation
    (2) method invocation
    (3) constructor invocation
    (4) indirect calling
    (5) arrow function
*/

//  ***************************//
// //  ********  (1)regular function invocation(direct func calling..) ***************//

// let obj ={
//     number :100,
//     fn : function(){ // func inside obj is 'method'
//         console.log(this);
//     }
// }

// //--------------------------------------------
// // --> 'this' keyord exits without object also..
// // --> this always depends upon how it(this) is been called..(v.imp)
// // --> in case of reg func calling , 'this' always pt to "Window Object"

// function fn(){
//     console.log(this);// window object
// }

// fn();


// /***********(2) Method invocation ***************************/

// //eg 1 -------------------------------------------------
// let obj ={
//     num : 20 ,
//     fn : function(){ //'fun' method run bcoz of "obj" object , so it points to 'obj'
//         console.log(this); // points to 'obj'object
//     }
// }

// obj.fn(); // it's method invocation(func not called directly..) returns entire Object

// //method innvocation --> "this" points to object it's being called upon.

// //-----------------------------------------------------------
// //eg 2 :
// let obj2 ={
//     a :100,
//     fn:function(){
//         console.log(this);
//         console.log(this == window);

//     }
// }

// let bhaukal = obj2.fn ;//not calling 'sam'function
// bhaukal() ; //this is direct func calling --> so return window obj

// "this" chalega if 'fn' work ->When bhaukal chalega.. n bhaukal() caled directly..->window object
// //** I don't want to know "this" kahan likha h, just know "this" calling kaise ho rhi h ?? **

// //------------------------------------------------------------------
// eg 3 :

// let obj3 ={
//     a :10,
//     fn : function(){
//         console.log(this);// 1->obj3 ; method invocation
//         function sam (){
//             console.log(this);// 2-> window ;direct fn calling
//         }
//         sam() ;
//     }
// }

// obj3.fn() ;

//=======================================================================
// /***********(3) Constructor invocation ***************************/
// Constructor : "new", 1st letter capital, similar to "class",create neww objects.....
// "this" always points to newly created object

// function CreateObj(){
//     this.x = 200 ;
// }

// let obj1 = new CreateObj() ;//create new object
// console.log(obj1.x); // obj

//=======================================================================
// // /***********(4) Indirect invocation ***************************/
// // 3types:
// // (1) call()  (2) apply()  (3)bind   -->  call() & apply():-same(changes context(refernce) of 'this'..)
// call():- arguments are comma separated
// apply():- arguments passed in array..

// let obj = {
//     num:20,
//     fn :function(a,b,c){
//         console.log(this,a,b,c);//this points ->obj object
//     }
// }

// let obj2 ={
//     num:50 
// }
// obj.fn(1,2,3); //method invocation

// can we call 'fn' inside obj2 ? -->yes  :how ? ---> using call()

// obj.fn.call(obj2)// 'fn' ka refernc goes to 'obj2' ..
// obj.fn.call(obj2,1,2,3)  // this-> obj2 --> changes the context of 'this  ;('this' points to obj2 )

//-----------------------------------------------
// //***** apply()  [arguments passed in form of array..] ******
// //call and apply are same->changes reference of 'this'
// obj.fn.apply(obj2,[1,2,3]); // arguments sent in form of 'Array'

// //---------------------------------------------------------
// // ********* bind() **********

// let obj3 ={
//     fn: function(){
//         console.log(this);
//     }
// }

// let myfun = obj3.fn.bind(obj3); //not calling, cretes copy of func, assign to variable
// console.log(myfun);
// myfun() ; // 'this' points to fn

// //----------------------
// let obj3 ={
//     fn: function(){
//         console.log(this);
//     }
// }

// function fn3(){
//     console.log(this);
// }
// fn3();// window
// let fn4 = fn3.bind(100); //bind don't call, it assigns new value ,--> f3 fnc ko new ref ke sath binded to f4...
// fn4(); // number {100}


//=======================================================================
// /*********************(4) Arrow functions ***************************/
// arrow function : ()=>{ }
//eg 1: 
// let obj2 ={
//     fn:function(){
//         console.log(this); // obj5
//         let sam = ()=>{
//             console.log(this);//points to parent ka 'this' ie:- obj5
//         }
//         sam(); //arrow fnc
//     }
// }
// obj2.fn() ;
//--------------------------
//eg 2 :
let obj2 ={
    fn:()=> {
        console.log(this); // window (points to parent ka 'this' , i.e:-window)
        let sam = ()=>{
            console.log(this);//window (points to parent ->fn-->obj5 'this'-> window)
        }
        sam(); //arrow fnc
    }
}
obj2.fn() ;





