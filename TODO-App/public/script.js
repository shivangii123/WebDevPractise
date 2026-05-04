
let taskForm = document.querySelector('#task-form');
let taskInput = document.querySelector('#task-input');
let taskList = document.querySelector('.taskList') ;
let filterButtons = document.querySelector('.filter-btns');
let clearCompletedBtn = document.querySelector('#clear-completed');

// Filter Todos buttons...
filterButtons.addEventListener('click', (e)=>{
    if(e.target.id == 'filter-all'){// Filter All Todos button
        refreshTodos();
    }
    else if (e.target.id == 'filter-active'){// Filter Active Todos button
        axios.get('/todos')
        .then(({data})=>{
            let pendingData = data.filter(d=>{
                return d.status != true ;
            })
            console.log('Pening data is :', pendingData);
            renderTodosOnUI(pendingData);
        })
        .catch(err => alert(err.message))
    }
    else if(e.target.id == 'filter-completed'){// Filter Complete Todos button
        axios.get('/todos')
        .then(({data})=>{
            let completedData = data.filter(d =>{
                return d.status === true ;
            })
            console.log('New data',completedData);
            renderTodosOnUI(completedData) ;
        })
        .catch(err=> alert(err.message))
    }
})

//Clear the completed Todos from List...
clearCompletedBtn.addEventListener('click', (e)=>{
    axios.put('/clear-completed', (req,res)=>{})
        .then(({data})=>{ 
            renderTodosOnUI(data);
        })
        .catch(err=> alert(err.message))

})

// Modify a Todo(complete/pending,edit,delete)...
taskList.addEventListener('click', (e)=>{
    let elm = e.target ;
    if(elm.classList.contains('completed-btn')){
        // let id = elm.children[0].innerText ;
        let id = elm.dataset.id;// todo_task ki id
        axios.put('/todos', {id})
            .then(({data})=>{
                refreshTodos();
            })
            .catch(err=>{ alert(err.message) 
            })
    }
    else if(elm.classList.contains('edit-btn')){
        // console.log(`edit btn clicked`); 
    }
    // axios.delete(url[, config_obj])  -> syntax of Axios.delete() 
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
    
    taskList.innerHTML = ''; //empty the existing taskList

    //Fetch all the tasks,then load it again on taskList
    axios.get('/todos')
        .then(({data})=>{
            console.log(data);
            
            // Now show all todos on UI..
            renderTodosOnUI(data) ;
            // data.forEach(d =>{               
            //     let li = document.createElement('li');
            //     li.innerHTML = `
            //     <span class="task-text"> ${d.taskName}</span>
            //     <div class="task-actions">
            //              <!-- store ID using (data-* attribute) -->
            //         <button class="completed-btn" data-id ="${d.id}"> 
            //          ${d.status ?'Pending': 'Completed'}       </button>
            //         <button class="edit-btn">Edit</button> 
            //         <button class="delete-btn" data-id = "${d.id}">Delete</button>
            //     </div>
            //     `
            //     taskList.appendChild(li);
            // })    
        })
}

// Display Todos as reqired...
function renderTodosOnUI(data){
    taskList.innerHTML = '';

    data.forEach(d =>{               
        let li = document.createElement('li');
        li.innerHTML = `
        <span class="task-text"> ${d.taskName}</span>
        <div class="task-actions">
                    <!-- store ID using (data-* attribute) -->
            <button class="completed-btn" data-id ="${d.id}"> 
                ${d.status ?'Pending': 'Completed'}   </button>
            <button class="edit-btn">Edit</button>
            <button class="delete-btn" data-id = "${d.id}">Delete</button>
        </div>
        `
        taskList.appendChild(li);
    })
}

// Add a New Todo in list...
taskForm.addEventListener('submit', (e)=>{
    e.preventDefault();

    let taskName = taskInput.value ;

    axios.post('/todos', {
        "task" : taskName
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


//TO LOAD INITIAL TODOS ON PAGE
refreshTodos();

