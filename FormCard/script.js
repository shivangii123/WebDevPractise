// // 1) get form elm-> e.preventDefault()
// Submission  ->get all 4 inputs in querySelALl , apply forEach loop:
// // 2)Make card- createElm-> 


let submitBtn = document.querySelector("#submitBtn");
let inp = document.querySelectorAll("input") ;
let descp = document.querySelector("#description");

console.log(inp[0].value);
console.log(inp[1].value);
console.log(descp.value);

submitBtn.addEventListener("click", function(e){
    e.preventDefault(); //else card disaapar after each refersh 

    // make new card
    let card = document.createElement('div');

    card.innerHTML = `
           <div class ='profile'> 
                <img src ="" alt="prfle_img"> 
            </div>
            <h3> ${ inp[0] .value} </h3>
            <h4> ${inp[1].value} </h4>
            <h5> ${descp.value} </h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit consequatur facilis, dolores
            aspernatur laudantium repellendus placeat aut explicabo voluptatum numquam corporis a.
            </p>    `

    card.classList.add('card');

    document.querySelector("#main").append(card) ;
    
}) ;
