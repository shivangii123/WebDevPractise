
let taskForm = document.querySelector('#task-form');
let taskInput = document.querySelector('#task-input');
let taskList = document.querySelector('.taskList') ;
let filterButtons = document.querySelector('.filter-btns');
let clearCompletedBtn = document.querySelector('#clear-completed');

let currentTodos = [] ;
let currentFilter = 'all'; // tracks active filter

// Add a New Todo in list...
taskForm.addEventListener('submit', (e)=>{
    e.preventDefault();

    let task = taskInput.value ;

    axios.post('/todos', {
        "task" : task
        })
        .then(({ data }) => {   // 'data' = response.data (actual data sent by backend)
            // Without destructuring, we would write: response.data
            taskInput.value = '';   // clear input box after adding new Todo
            refreshTodos();   //show on frontend
        })
        .catch(err=>{
            alert(err.message);
        })
})

// Filter buttons(All, Active, Complted)...
filterButtons.addEventListener('click', (e)=>{
    let btn = e.target ;

    //remove 'active' class(green color) from all buttons
    let allBtns = document.querySelectorAll('.filter-btns button');
    allBtns.forEach(b => b.classList.remove('active')) ;

    //Add 'active' class to clicked buttons
    btn.classList.add('active') ;

    if(btn.id == 'filter-all'){// Filter All Todos button
        
        renderTodosOnUI(currentTodos) ;
    }
    else if (btn.id == 'filter-active'){// Filter Active Todos button
        let activeTask =  currentTodos.filter(d => d.status === false);
        renderTodosOnUI(activeTask);
    }
    else if(btn.id == 'filter-completed'){// Filter Complete Todos button
        let completedTask =  currentTodos.filter(d => d.status === true);
        renderTodosOnUI(completedTask);
    }
})

///////////////////////////////////////////////////////////////////
// Problem:-I m on "active" filter, -> todo status changed to completed-> then shosa ll todos both pending, completed
//Reason ->> Every action (delete, toggle) calls refreshTodos() which always shows all todos, ignoring whatever filter is active.
//solution-> re-apply current filter instead of showing all, again call applyfilter(), not renderTodos..

/*let currentTodos = [];
let currentFilter = 'all'; // ✅ NEW — tracks active filter

// Filter buttons...
filterButtons.addEventListener('click', (e)=>{
    let btn = e.target;

    let allBtns = document.querySelectorAll('.filter-btns button');
    allBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    // ✅ Save which filter is active
    if(btn.id == 'filter-all')        currentFilter = 'all';
    else if(btn.id == 'filter-active')    currentFilter = 'active';
    else if(btn.id == 'filter-completed') currentFilter = 'completed';

    applyFilter(); // ✅ render based on saved filter
})

// ✅ NEW function — renders based on currentFilter
function applyFilter(){
    if(currentFilter === 'all'){
        renderTodosOnUI(currentTodos);
    }
    else if(currentFilter === 'active'){
        renderTodosOnUI(currentTodos.filter(d => d.status === false));
    }
    else if(currentFilter === 'completed'){
        renderTodosOnUI(currentTodos.filter(d => d.status === true));
    }
}

// ✅ refreshTodos now calls applyFilter() instead of renderTodosOnUI directly
function refreshTodos(){
    axios.get('/todos')
        .then(({data})=>{
            currentTodos = data.allTodos;
            applyFilter(); // ✅ respects current filter
        })
} */


///////////////////////////////////////////////////////////////////

//Clear the completed Todos from List...
clearCompletedBtn.addEventListener('click', (e)=>{
    axios.put('/clear-completed')
    .then(({data})=>{
        console.log(`data from clear-completed btn :`,data.todos);
        console.log(data);
        refreshTodos();
    })
    .catch(err => alert(err.message))
})

// Modify a Todo(Completed,Edit,Delete)...
taskList.addEventListener('click', (e)=>{
    let elm = e.target ;

    if(elm.classList.contains('completed-btn')){
        let id = elm.dataset.id;// todo_task ki id
        axios.put('/todos', {id})
            .then(({data})=>{
                console.log("data is :" , data);
                refreshTodos();
            })
            .catch(err=>{ alert(err.message) 
            })
    }
    else if(elm.classList.contains('edit-btn')){
        console.log(`edit btn clicked`);
        
    }
      // **** axios.delete(url[, config_obj])  -> syntax of Axios.delete()  ****
    else if(elm.classList.contains('delete-btn')){
        let id = elm.dataset.id ;
        axios.delete('/todos', {
            data:{id} 
            })
            .then(({data})=>{
                console.log(data);
                refreshTodos();
            })
            .catch(err=> {alert(err.message)
            })
    }
})

// Dispaly all todos ...
function refreshTodos(){
    
    //Fetch all the tasks,then load it again on taskList
    axios.get('/todos')
        .then(({data})=>{
            console.log('all todos data is : ', data.task);
            currentTodos = data.task; //update data
            
            // Now show all todos on UI..
            renderTodosOnUI(data.task) ;   
        })
}

// Display Todos as reqired...
function renderTodosOnUI(data){
    taskList.innerHTML = ''; //empty the existing taskList

    data.forEach(d =>{               

        let li = document.createElement('li');
        li.innerHTML = `
        <span class="task-text"> ${d.task}</span>
        <div class="task-actions">
                    <!--**** store ID using (data-* attribute) ***-->
            <button class="completed-btn" data-id ="${d._id}"> 
                ${d.status ?'✅Completed' : '⏳Pending'}   </button>
                <!-- button class="edit-btn">Edit </button> -->
            <button class="delete-btn" data-id = "${d._id}">Delete</button>
        </div>
        `
        taskList.appendChild(li);
    })
}



//TO LOAD INITIAL TODOS ON PAGE
refreshTodos();

