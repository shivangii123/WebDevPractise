
// // //================ CLick Event (click buttton)==========================================

// let btn = document.querySelector('button');
// let body = document.querySelector('body');

// btn.addEventListener("click", (e)=>{
//     // body.style.backgroundColor= 'red' ;
//     console.log(`Type of event  : ${e.type}`);
//     console.log(`Target of event  : ${e.target}`);

// })

// // //=================== Input Events ===============================

// const inp = document.querySelector('input');

// inp.addEventListener('input', function(e){
//     // console.log("input event triggered.." );
//     // console.log(` ${e.data} `);
//     // console.log(`Target type : ${e.target}`);
//     // console.log(e.target.value);
//     console.log(e.data);
// })

// // /============================ Submit Event(Form) ====================================== /


// let formEl = document.querySelector('form');

// formEl.addEventListener('submit' , (e)=>{
//     e.preventDefault();
//     console.log("form submitted");
//     console.log(`Username is : ${formEl.elements[0].value}`);
//     console.log(`Password is : ${formEl.elements[1].value}`);

// })

// // /*********************************************************************** /
// // /*****************  Sum of 2 numbers  ********************************** /

let num1 =document.getElementById("1num");
let num2 = document.getElementById("2num");

let btn = document.getElementById("add-btn");

btn.addEventListener('click', ()=>{
    // console.log(num1.value + num2.value);//string Concat..
    let sum = (+num1.value + +num2.value) ;// write "+" infront of num1, num2
    let h1 = document.createElement('h1');

    h1.innerText = `Sum is ${sum}` ;
    // console.log(`Value of sum is ${ans.value}`);
    document.body.appendChild(h1) ;
})