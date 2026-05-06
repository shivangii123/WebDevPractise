

# **todo**

1. Click Add Todo(form submit) -->> Post request on server
2. Push data in todos Array 
3. response mein msg aya->succesfully added a new todo 
4. If Success->> refreshTodo()->Get all Data..
` axios.get('/todos')
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
`
5. Else ->> print Error message..

----------------------------------------------------------------------------
code :
`
axios.put('/todos', {id})
    .then(({data})=>{
        refreshTodos();
    })
    .catch(err=>{ alert(err.message) 
    })
`
👉 Backend sends { msg, todos }
👉 Axios wraps whateer backend sends → { data: { msg, todos } }

# **App flow:**

User → POST → Backend saves
         ↓
     refreshTodos()
         ↓
       GET → UI update