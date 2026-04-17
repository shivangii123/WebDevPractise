
// const jaanwar = require('./animal');
// console.log(jaanwar); //object


// let {cat, dog} = require('./animal');
let {cat:catty, dog:doggy} = require('./animal');//name change kar diya

// console.log(catty);// give cat object
// console.log(doggy);// dog object

console.log(catty.cat());//meow meow
console.log(doggy.dog());//woof woof


