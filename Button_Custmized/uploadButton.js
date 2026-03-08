///******Its of page: UploadBtnCustomised*********///

let btn = document.querySelector("#btn");
let fileinp = document.querySelector("#fileinp");

btn.addEventListener("click", function(e){
    fileinp.click() ;
    // on div click ,we make click to File Input 
}) ;



fileinp.addEventListener("change", function(e){
    console.log(`${e.target.files[0].name} File Selected `) ;
    
    const fl= e.target.files[0] ;
    if(fl){ // non empty
        btn.textContent = fl.name ;//Display file name 
    }
})

///********************************************///