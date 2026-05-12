let inpElm = document.querySelector('input');
let btns = document.querySelectorAll('button');

let evaluated = false; // tracks if "=" was pressed


for(let button of btns){

    button.addEventListener('click', function(e){

        let btnVl = e.target.textContent;

        if(btnVl === 'AC'){
            inpElm.value = "";
            evaluated = false;
        }

        else if(btnVl === 'D'){
            inpElm.value = inpElm.value.slice(0,-1);
        }

        else if(btnVl === '='){
            try{
                inpElm.value = eval(inpElm.value);
                evaluated = true; // result displayed
            }
            catch(e){
                inpElm.value = "Invalid";
            }
        }

        else{

            // if result already shown and user presses number
            // start fresh calculation
            if(evaluated){ //if "=" pressed
                if(!isNaN(btnVl)){ //if number pressed
                    inpElm.value = ""; //starts calculation fresh
                }
                evaluated = false;
            }

            inpElm.value += btnVl;
        }

    })

}