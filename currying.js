/*currying :Currying in JavaScript is the technique of transforming a function with
multiple arguments into a sequence of functions, each taking one argument at a time.
Instead of calling a function like sum(a, b, c), currying lets you call it as 
sum(a)(b)(c). Same result, different structure. It’s like feeding arguments one by one 
instead of all at once — a polite, orderly queue rather than a chaotic crowd.

************** Real-world mental model ***********:
Think of a coffee machine.
Normal function → you choose size, sugar, milk every time.
Curried function → you save a preset: “My usual: medium + no sugar”. Press once, reuse forever.

**** Normal function *** :
function multiply(a, b) {
  return a * b;
}
console.log(multiply(2, 5)); // 10
*/

// *** Curried version ***
function tableOf2(a){
    return function(b){
        return a*b ;
    }
}

let double= tableOf2(2);

for(let i=1; i<=10;i++){
    console.log(`2* ${i} = ${double(i)}`);
}
