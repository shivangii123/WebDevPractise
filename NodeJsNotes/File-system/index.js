//Library-> we use it's function in our code
//Framework-> it uses our code

//fs-File-system, only interview theory,for CRUD, older way(now DBase)
// Module/Package->3rd party code already written,
// to use that package -> "require('module-name')"
//we get Object/String/function depends on that package 

//nodejs already have fs(file-system)
const fs = require('fs');// returns object

// fs.(whatever we need to get from fs module)->>access anything from fs

let data = "it's me shivangii !!"

//CREATE -> writeFile() ->overwrite previous text
//4 arguments :
// fs.writeFile('abc.txt', data,{}, ()=>{})

// fs.writeFile('abc.txt', data,
//     { //optional part
//         encoding:'utf-8',
//         flag :'w'
//     }, 
//     (err)=>{
//         if(err) {throw err}
//         console.log('file written succesfully');
//     }
// )


//READ --> readFile() 
//3 arguments-> just read data,not inserting
fs.readFile('def.txt', 
    {
        encoding : 'utf-8',//shows in string format or use ->toString()
        flag : 'r'
    },
    (err, data)=>{
        if(err){throw err}
        console.log(data);
        // console.log(data.toString());//buffer(stream of data) ->string
    }
)


//UPDATE --> 
//

//DELETE