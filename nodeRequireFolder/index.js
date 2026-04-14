// //********* process.cwd() , __dirname****************** */
// // Both "process.cwd()" and "__dirname"-> returns a path of folder, not file:


// console.log(process.cwd()); //Currently standing where
// console.log(__dirname);   // Project kahan se chl raha h
// //----------------------------------------------------------

// // //*************** Requiring a file *******************/

const PI = 3.145;

// const ans1= (num)=>{
//     return num*num ;
// }  
//          // or
const ans1 = num=> num*num ; //square function

const ans2 = (a,b)=> a+b ; //add function

console.log(PI);
console.log(ans1(4));
console.log(ans2(3,5));

// // when we don't export anything from your file,by default empty object is sent

//--------------To send something-------------

// module.exports = {} //by default empty object is sent, if we write this or not
// we  can send anything instead of this empty objects..

// module.exports = {
//     PI :PI,
//     ans1:ans1,
//     ans2 :ans2       
// }

// if key and value name same, skip (value & ':') 
// module.exports = {
//     PI ,
//     ans1,
//     ans2 :ans2       
// }

// module.exports ={
// // key    value
//     PII : PI,
//     ans1 : ans1,
//     ans2 : ans2
// }

//send anything other tha Objects->yes
module.exports = "shivangii"



