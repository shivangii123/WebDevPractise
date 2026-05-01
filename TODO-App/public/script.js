
let taskForm = document.querySelector('#task-form');
let taskInput = document.querySelector('#task-input');
let taskList = document.querySelector('.taskList') ;


taskList.addEventListener('click', (e)=>{
    console.log('clicked', e.target);
})

function refreshTodos(){
    //empty the existing taskList
    taskList.innerText = '';

    //Fetch all the tasks,then load it again on taskList
    axios.get('/todos')
        .then(({data})=>{
            console.log(data);
            data.forEach(d =>{               
                let li = document.createElement('li');
                li.innerHTML = `
                <span class="task-text"> ${d.taskName}</span>
                <div class="task-actions">
                    <button class="completed-btn"> ${d.status ?'Pending': 'Completed'}</button>
                    <button class="edit-btn">Edit</button>
                    <button class="delete-btn">Delete</button>
                </div>
                `
                taskList.appendChild(li);
            })    
        })
}

taskForm.addEventListener('submit', (e)=>{
    e.preventDefault();

    let taskName = taskInput.value ;

    axios.post('/todos', {
        "task" : taskName
    })
        .then(({data})=>{
            //clear input box after adding new Todo
            taskInput.value = '';
            refreshTodos();
        })
        .catch(err=>{
            alert(err.message);
        })

})


