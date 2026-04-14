
/************* require() *********** */

// let math = require('./index') ;//".js" is understood
//                       //**->runs entire index.js file automatically

// console.log(math); //o/p-> values from index file,then {}

//               //**'index.js'-> ne kuchh nhi bheja -> empty object

// console.log(math.PI);
// console.log(math.ans1(3));
// console.log(math.ans2(2,3));



// //-----Short way of writing ----
// let {PI :hello, ans1, ans2} = require('./index') ;
// // console.log(PII); //new name se destructure
// console.log(hello);
// console.log(ans1(3));
// console.log(ans2(2,3));

//--------Import string------------------
let name = require('./index') ;
console.log(name);




