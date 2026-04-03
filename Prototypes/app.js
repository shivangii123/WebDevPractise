
let todo = {
    title : "therapist " ,
    desc : function (){
        // return `You have to go to ${todo.title}` ;
        return `You have to go to ${this.title}` ;
    }
}

// console.log(todo.title) ;
// console.log(todo.desc());

////------> check if some random property or function(shivangi) exists ??
// console.log(todo.shivangi); // a property-> returns undefined
// console.log(todo.shivangi()) ; //a method-> error(it will run, func not found, so throw error)

// console.log(todo.toString()); // [object, object]
// console.log(todo.toShivangi()); //error, not a function

// in Js , object allows to use its methods n properties 
// by :  todo.title, todo.desc()...
//Prototype:- when js fails to find a property/method in the object,it searches in its prototype 

//-> any property/method find in frst object -> then in prototype- then in NULL


// console.log(todo);
// console.log(todo.__proto__) ; //to find prototype of object:-"todo"
// console.log(todo.__proto__ == Object.prototype) ;// true :so todo object ka prototype is Object
// console.log(todo.__proto__.__proto__) ; // ans - null ;;find parent ka prototype
// console.log(todo.__proto__.__proto__  == null) ; //true // prototypal chaining..
// console.log(todo.__proto__ == Object) ;//false



//==================

// let arr = ["my" , "name","is", "shivaa"];
// console.log(arr);

// // console.log(arr.__proto__ == Object.prototype); // false
// // console.log(arr.__proto__ == Array.prototype);// true
// console.log(arr.__proto__.__proto__ == Object.prototype) ; //true
// console.log(arr.__proto__.__proto__.__proto__== null); //true

//===================

// let str = "anybody can dance";
// console.log(str.__proto__ == String.prototype);
// console.log(str.__proto__.__proto__== Object.prototype);
// console.log(str.__proto__.__proto__.__proto__== null);

//===========================

//Prototype se wapas constructor function par jana...
console.log( Number.prototype.constructor == Number); //true

console.log(Number.prototype.constructor('10')); //10(returns a number)
// same as below 
console.log(Number('10')); //10(number)



