const form = document.getElementById("todo-form");
const todoContainer = document.querySelector("#todo-container");

const todos = localStorage.getItem("todos");
if(!todos){
    let newtodos = [];//if no todos set empty array
    localStorage.setItem("todos", JSON.stringify(newtodos)) ;
} 
else{
    renderTodos(JSON.parse(todos)) ;
}


todoContainer.addEventListener("click",(e)=>{
    const elemClicked = e.target ;
    const alltodos = JSON.parse(localStorage.getItem("todos"));
    const value = elemClicked.parentElement.previousElementSibling.innerText ;
   
    if(elemClicked.classList.contains("delete-btn")){
        elemClicked.parentElement.parentElement.remove();
    } 

    let newtodos ;

    // When I click "Complete" on one todo,update only that todo’s status in localStorage,
    if (elemClicked.classList.contains("complete-btn")){
        elemClicked.innerHTML ="Undo";
        elemClicked.classList.remove("complete-btn");
        elemClicked.classList.add("undo-btn");
        console.log(elemClicked.outerHTML);

        newtodos = alltodos.map( (elm)=>{
            if(elm.task == value){
                return{
                    ...el ,
                    status :true
                }
            }
            return elm ;
        })

        localStorage.setItem("todos",JSON.stringify(newtodos));
    } 
    else if(elemClicked.classList.contains("undo-btn")){
        elemClicked.innerHTML ="Complete";
        elemClicked.classList.add("complete-btn");
        elemClicked.classList.remove("undo-btn");
    }

});

function renderTodos(alltodos){// //show all todos to UI
    todoContainer.innerHTML = "" ;
    for(let i =0;i<alltodos.length;i++){ // multiple todos hai
        const todo = document.createElement("div");
        todo.className = "task" ; // or
        // todo.classList.add(".task") ;


    todo.innerHTML = `<h3> ${alltodos[i]}</h3>
                    <div class="btn">
                        <button class="complete-btn">Complete</button>
                        <button class="delete-btn">Delete</button>
                    </div>` ;

    // console.log(todo) ;
    todoContainer.append(todo); //arr mein unshift()lagaya h so no need of prepend
    }
}


form.addEventListener("submit", (e)=> {
    e.preventDefault();

    // console.log(form.children[0].value);
    const task = form.children[0].value ;

    const alltodos = JSON.parse(localStorage.getItem("todos") );
    // console.log(alltodos);
    alltodos.unshift(task);
    localStorage.setItem("todos", JSON.stringify(alltodos) );
    renderTodos(alltodos) ;
    form.children[0].value = "" ; // empty the input box
});