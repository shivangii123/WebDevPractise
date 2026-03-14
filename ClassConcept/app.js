
/* before ES6 , no class were there ..
to create private members -> using closure..

Class-> syntatical sugar( makkhan laganna) of Constructor function  
     -> Eesier way to write code
*/


// constructor function
// function Person(naam, ag){
//     this.name = naam;
//     this.age = ag ;
// }

// Person.prototype.getAge = function (){
//     return `Age is ${this.age}` ;
// }
// Person.prototype.printFullName = function(){
//     console.log(`My full name is ${this.name}`);
// }

// let person1 = new Person("Sam", 22);
// console.log(person1);
// console.log(person1.getAge());
// console.log(person1.printFullName());

//--------------------------------------------------
// class

// class Person{
//     constructor(naam, umar){
//         this.name = naam;//this->refers to object
//         this.age = umar ;
//     }
    
//     getAge(){
//         return `My age is ${this.age}`; 
//     }
//     printFullName(){
//         console.log(`My full name is ${this.name}`);
//     }

// }

// let person2 = new Person("riya", 24);
// console.log(person2);
//------------------------------------------------------

/* class -> Inheritance : using properties /methods of parent class by child 


*/

class Person{
    constructor(naam, umar){
        this.name = naam ;
        this.age = umar ;
    }

    getAge(){ return `Age is : ${this.age}` ; }

    printFullName(){ return `Name is ${this.name }`; }
}

class student extends Person{
    constructor(naam,umar, roll){
        super(naam, umar ); // parent se jo jo chahiye wo super mein likho
        this.rollNo = roll ; // extra property in child 
    }

    printFullName(){
        console.log(`kya hua ${this.name}`) ;
    }
    alag(){
        console.log(`Mai hu alagg`);
    }
}

let std1 = new student("Kriti" , 22, 102) ;
// console.log(std1) ;
console.log(std1.printFullName ()); // kya hua kriti
console.log(std1.alag());  // Mai hu alagg

