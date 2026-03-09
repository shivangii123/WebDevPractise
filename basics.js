// ////// (1) Var- Let - Const , SCOPE..  ////////////
// var a =10;
// //let a;// SyntaxError: Identifier 'a' has already been declared
// var a =5; // no error (re-declaration allowed)
// console.log(a); //5
// let b;//
// console.log(b); // undefined

// for(let i=0; i<5; i++){
//     console.log(i);
// }

// //console.log(i); //(outside block) REFERENCE ERROR


// ///////(2) CALCULATOR ///////////
// function calculator(a,b,operator){
//     switch(operator){
//         case '+' : console.log(a + b); break ;
//         case '-' : console.log(a - b); break ;
//         case '*' : console.log(a * b); break ;
//         case '/' : console.log(a / b); break ;
//         case '%' : console.log(a % b); break ;
//         case '**' : console.log(a ** b); break ;
//         default : console.log("Invalid operator !! ");
//     }
// }

// //Js doesn’t throw errors for weird math—it returns special values(infinity, NaN) instead of crashing.
// calculator(5, 2, "**"); //25
// calculator(10, 8, "?"); //Invalid operator
// calculator(5, 2, "%"); //1
// calculator(10, 0, "/"); //Infinity
// calculator(0, 0, "/"); //Nan
// calculator(5, 0, "%"); //NaN
// calculator(5, 0, "**"); //1
// calculator(5, -2, "**"); //0.04
// calculator(5, -2, "%"); // 5 % -2 = 1 → modulo keeps the sign of the first number.



// //////// (3) Slicing vs  Splicing ///////////

// let fruits=["apple", "grape","cherry","mango", "kiwi"];

// console.log("Original array:",fruits);
// console.log("\nSlicing gives : " ,fruits.slice(1,3)); //[ 'grape', 'cherry' ] 
// console.log("After slicing:",fruits); // orignal remains same

// console.log("\nSplicing gives :", fruits.splice(1,3));//[ 'grape', 'cherry', 'mango' ]
// console.log("After splicing :",fruits); // orignl arr changes ; [ 'apple', 'kiwi' ] 


// //******(4) DOM Selector n Manipulation **********//
// let h1= document.querySelector("h1"); // return NodeList
// console.dir(h1);   // output as Js object ->h1
// console.log(h1);  // ouput as HTML Elm
// h1.textContent= "Hello shivaa !!, kaise ho ?";


// let h2= document.getElementsByTagName("h2");
// h2.textContent= "Welcome to Sheryians !";
// console.log(`h2 text is now : ${h2.textContent} `);
// console.log(h2);  //text conntent has changed

// let lis= document.querySelectorAll("li");
// for(let i=0;i<lis.length;i++){
//     console.log(lis[i].textContent); // printing all h1 
// }

// lis.forEach(function(val){
//     console.log(val.textContent);// printing all h1 using "forEach" loop
// });

// let h1=document.querySelector("h1");
// console.log(h1);
// console.log(h1.textContent);




// let btn2= document.querySelector(".one");
// btn2.removeAttribute("disabled");

// let img= document.createElement("img");//→ creates in memory
// img.setAttribute("src","https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d");
// img.classList.add("placeholder"); //Add a CSS class
// document.body.appendChild(img); // makes it visible

// document.querySelector("div").prepend(img)

// let ul=document.querySelector("ul");
// let li=document.querySelector("li");
// ul.removeChild(li);


///********EVENTS *******///

// let sb=document.querySelector("button.sb");
// sb.addEventListener("click",function(){
//     sb.classList.toggle("active");
//     console.log(`Submit button clicked ..`)
// })


// document.querySelectorAll("p").style.fontSize="18px"; // ERROR!:Nodelist return hoga
//     // and nodeList par direct style property apply nahi kar sakte

//  //vs 
// let p= document.querySelectorAll("p");// this apply CSS to all p tags one by one
// p.forEach(function(val){
//     val.style.fontSize="25px";
// });

// let pdl=document.querySelector("#e");
// function changeColor(){
//     pdl.style.color="green";
// }
// pdl.addEventListener("dblclick",changeColor);

// // pdl.removeEventListener("dblclick",changeColor);



// let device =document.querySelector(".device");
// let sel= document.querySelector("select");

// sel.addEventListener("change",function(e){
//     device.textContent=`${e.target.value} Device selected`;
// })

/******** INPUT EVENT ******/
// let inp= document.getElementById('inp');

// inp.addEventListener("input",function(e){
//     console.log(` You typed : ${e.data}`) ; 
//     console.log(`ip value is : ${inp.value}`) // same as above
//     console.log(`Input box has value : ${e.target.value }`);
   
// });




    