const express = require('express');
const app = express();
const path = require('path') ;
const PORT = 3000 ;
app.use(express.json()) ;// req.body ka json data ko parse karega
// now abb ispar function laga sakte h , operations perform kar sakte h..

let blogs = [ {id :1, title :'tiltle1', desc :"description1" },
                { id :2, title :'tiltle2', desc :"description2" },
                {id :3, title :'tiltle3', desc :"description3" },
                {id :4, title :'tiltle4', desc :"description4" } ]

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.get('/post', (req,res)=>{
    res.json({
        id: 1,
        title : "My Title",
        desc : "Hey this is description"
    });
})


app.get('/blogs', (req,res)=>{

    res.json(blogs) ;
})

app.get('/getOneBlog', (req,res)=>{
    let {id} = req.query;
    console.log(id);

    blogs.forEach((d)=>{
        console.log("data is ", d);
        if(d.id == id){
            res.json(d);
        }
    })
    // res.json("No blog with given Id exits !!");
})

app.get('/endpoint', (req, res)=>{
    //3 query parameter
    const {id, title,desc} = req.query ;
    console.log(`Id is ${id}`);
    console.log(`Title is : ${title}`);
    console.log(`Description is : ${desc}`);
    // res.send("Query parameter recieved");
    res.send( `Id is ${id}  , Title is : ${title} ,Description is : ${desc}`)
})

app.get('/getOnePost/:id', (req,res)=>{
    let id = req.params.id ;
    console.log(req.params);
    console.log(id);
    res.send(id);

})

app.get('/getManyPost/:id/:title/hello/:desc', (req,res)=>{
    console.log(req.params);

    res.send(`Data is ${id}`)
})

app.get('/home', (req,res)=>{
    res.sendFile(__dirname+ "/index.html");
})


app.post('/addBlog', (req,res)=>{

    let {title, desc} = req.body ; //object destructuring

    let newBlog = { id : Math.floor(Math.random()*10000000),
        title : title ,
        desc :desc
     } 
    blogs.push(newBlog) ;

    res.send({
        msg:"New Blog added succesfully !!",
        blogs
    }) ;
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})