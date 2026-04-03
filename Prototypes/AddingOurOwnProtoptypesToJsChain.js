// // Creating object from Object.create() 
// let obj1 = {
//     a:1, 
//     details :"I am parent Object"
// }

// let newObj = Object.create(obj1); // newObj ka parent is obj1
// console.log(newObj.__proto__ == obj1); //true

// console.log(newObj);// {} ->// now its empty

// console.log(newObj.details);//"I am.." -> access proprty/func/data from parent
//-------------------------------------------------
//***********Make our own Prototype chain (Prototype Inheritance) ***** */

    //           Object Prototype
    //                 |
    //           Person Prototype
    //              /        \
    //  Student Prototype     Teacher Prototype


function Person(){

}

function Student(){

}
function Teacher(){

}

//Useful in real world ->customized functions,data access limit
// if we want a Function to be used by everone->teaher, student, management, staff
// put that function in Person.prototype , not in object.Prototype as we dont
//want ki arrays, Strings, boolean bhi use karee uss Employee wale function ko

Person.prototype = Object.create(Object.prototype);
Student.prototype = Object.create(Person.prototype);
Teacher.prototype = Object.create(Person.prototype);

//new keyword-> use our function as constructor
let s = new Student(); // create object

console.log(s);  //{} empty object
console.log(typeof(s)); //object

console.log(s.__proto__== Student.prototype); //true
console.log(s.__proto__.__proto__ == Person.prototype); //true
