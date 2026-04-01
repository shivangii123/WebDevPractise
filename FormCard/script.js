///****** Form submit-> Card Show *********///

let form = document.querySelector('form');
let inputs = document.querySelectorAll('.inp');


form.addEventListener('submit',function(e){
    e.preventDefault();

    // Check for empty field
    let hasError = false ;
    inputs.forEach( i=>{
        if(i.value.trim() === ""){
            i.style.border ="2px solid red" ;
            hasError = true ;
        }
        i.addEventListener('input', ()=>{
            if(i.value.trim() != "")
                i.style.border ="" ;
        })        
    });
    if(hasError){ 
        alert("Please fill all fields!") ;
        return ;
    }


    let card = document.createElement('div');
    card.classList.add('card') ;

    let profile = document.createElement('div') ;
    profile.classList.add('profile');

    let img = document.createElement('img');
    // img.setAttribute('src',inputs[0].value)
    img.src = inputs[0].value || "https://cdn-icons-png.flaticon.com/512/847/847969.png";
    img.onerror = ()=>{
        img.src = "https://cdn-icons-png.flaticon.com/512/847/847969.png";
    }

    let name = document.createElement('h3');
    name.textContent = inputs[1].value ;

    let profn = document.createElement('h5');
    profn.textContent = inputs[2].value ;

    let info = document.createElement('p');
    info.textContent = inputs[3].value ;

    
    profile.append(img);
    card.append(profile,name,profn, info);
    

    let mainContainer = document.querySelector('.cardContainer');
    mainContainer.append(card);

    inputs.forEach(elm => {
        elm.value = "" ; // empty value of each input box
    });
    
    
})


// //------------- LIVE PREVIEW -----------------
// // let inputs = document.querySelectorAll(".ip");
// // let main = document.querySelector("#main");

// // create preview card once
// let previewCard = document.createElement("div");
// previewCard.classList.add("card");

// previewCard.innerHTML = `
//     <div class="profile">
//         <img id="previewImg" src="">
//     </div>
//     <h3 id="previewName"></h3>
//     <h5 id="previewJob"></h5>
//     <p id="previewInfo"></p>
// `;

// main.appendChild(previewCard);

// // select preview fields
// let pImg = document.querySelector("#previewImg");
// let pName = document.querySelector("#previewName");
// let pJob = document.querySelector("#previewJob");
// let pInfo = document.querySelector("#previewInfo");

// // update on typing
// inputs.forEach((input, index) => {
//     input.addEventListener("input", () => {

//         pImg.src = inputs[0].value || "https://via.placeholder.com/40";
//         pName.textContent = inputs[1].value;
//         pJob.textContent = inputs[2].value;
//         pInfo.textContent = inputs[3].value;

//     });
// });
// //--------------------------------------------------------

