



let inpElm = document.querySelector('input');
let btns = document.querySelectorAll('button');


for(let button of btns){
    button.addEventListener('click', function(e){
        // console.log(e.target.innerText);
        let btnVl = e.target.textContent;

        if(btnVl === 'AC'){
            inpElm.value ="" ;
        }

        //inpElm.value -> string , string are immuatble
        else if(btnVl === 'D'){
            inpElm.value = inpElm.value.slice(0,-1);// so we reassign value to string..
        }
        else if(btnVl === '='){
            try{ // sahi kaam mein--> evalaute expression
                inpElm.value = eval(inpElm.value);
            }
            catch(e){
                inpElm.value = "Invalid" ;
            }

        }
        else{
            inpElm.value += btnVl ;
        }

    })
}