/*******Its of page :- ShowLetterOnPage.hml file ka Javascript*********///

let heading = document.querySelector("#heading") ;
window.addEventListener("keydown", function(e){
    console.log(e.key) ;
    if(e.key == " "){
        heading.textContent = "Space"; // internally it shows empty string(" ")
    }
    else{
        heading.textContent = e.key ;
    }
})
