const { readFile } = require('fs');
let fs = require('fs/promises');
const path = require('path');
let filePath = path.join(__dirname ,'data', 'todos.json');


class Todos{    
    static addTask(taskName){
        
        // (1)Read the file :-  fs.readFile() returns STRING,so JSON.parse()
        return fs.readFile(filePath, 'utf-8')
        .then(data =>{
            //"push()- array par work karega, so convert to Array using parse() "
            // push()/filter/map :- work on Array , so always PARSE DATA...
            // JSON -> should be upper case (syntax)
            data = JSON.parse(data) ;//string->se object convert
            data.push(taskName) ;// data-> is an array 
            
            // "data" varbl mein we store added data
            // (2)now write this new data in file
            return fs.writeFile(filePath, JSON.stringify(data));
        }) 
        .then( ()=> {console.log("Data added successfully"); })
        .catch( (err)=> console.log(err))    
    }


    static deleteTask(taskName){
        fs.readFile(filePath,'utf-8')
        .then( data => {
            data = JSON.parse(data) ;
            //filter data ,data to be deleted shuld not go further..
            data = data.filter(el =>el != taskName);

            //Now write to the file
            fs.writeFile(filePath, JSON.stringify(data)) ;
        })
        .then( ()=>{ console.log("Task deleted"); })
        .catch( (err)=>{
            console.log(err);
        })
    }

    static updateTask(origName, newName){

        fs.readFile(filePath, 'utf-8')
        .then( (data)=> {
            data = JSON.parse(data);
            data = data.map( el=> el=== origName ? newName :el)

            fs.writeFile(filePath,JSON.stringify(data))
        })
        .then(()=> console.log("Task Update"))
        .catch(err => console.log(err))
    }

    static  getAllTask(){
        return fs.readFile(filePath, 'utf-8')
        .then( (data)=>{
            data = JSON.parse(data);
            return data ;
        })
        .catch(err => console.log(err) )
    }    
}



//-------- Wromg way-> concurency issue, accesing same file at same time----------------
// Todos.addTask("Cricket");
// Todos.addTask("Football");// overwrites the data ,both tries to acces at same time
//-------------------------------------------------------------------------------

//so do chaining...
// Todos.addTask("Football")
// .then( ()=> Todos.addTask("Hockey"))
// .then( ()=> Todos.addTask("Cricket") ) ;


// Todos.updateTask('Hockey', "Women's Hockey");

// Todos.deleteTask('Football')
console.log(Todos.getAllTask());
