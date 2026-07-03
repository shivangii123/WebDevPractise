const express = require('express');
const app = express();
const path = require('path');
const PORT = 4444;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let blogs = [ {id :1, title :'title1', desc :"description1" },
                { id :2, title :'title2', desc :"description2" },
                {id :3, title :'title3', desc :"description3" },
                {id :4, title :'title2', desc :"description2" },
                {id :5, title :'title4', desc :"description4" } ]



app.get('/', (req, res) => {
  console.log('Home page');
  res.send('welcome all of you ..!!!\n how are you');
});
app.get('/allBlogs', (req,res)=>{
    res.send(blogs);
})

//delete oone blog
app.delete('/deleteBlog/:id', (req, res)=>{
    let {id} = req.params ;

    for(let i=0;i<blogs.length;i++){
        if(blogs[i].id == id){
            blogs.splice(i,1);
        }
    }
    // blogs.filter(d=>{     //alternate way of filter to delete 
    //     d.id != id ;
    // })
    res.send(blogs);

})

// delete all blog hose title match
app.delete('/deleteBlogByTitle', (req,res)=>{
    let title = req.body.title;

    let newblogs = blogs.filter((blog) =>{
        return blog.title != title ;
    })

    blogs = newblogs ;
    res.json(blogs) ;

})

//Complete update a blog
app.put('/updateBlog/:id', (req,res)=>{
    let {id} = req.params ;

    blogs = blogs.map( el => {
        if(el.id == id){
            return {id: id , ...req.body}
        }

        return el ; //return rest el un modified
    })
    res.json(blogs) ;

})
// spread operator
// let obj1 = { "a" :10 , "b": 20}
// let obj2 = { ...obj1 , "a":30};
// console.log(obj2) ;  // {"a":30, "b": 20}
// ***** a will chnage to 30 , so itssimilar to  Patch request
 // *****-----------------------------------------------------------******

app.patch('/partialUpdate', (req, res)=>{
    let {id} = req.params;

    for(let i=0;i<blogs.length;i++){
        if(blogs[i].id == id){
            blogs[i] = {...blogs[i], ...req.body}; // new changes aajayenge
            break ;
        }
    }
    res.json(blogs) ;

})

app.listen(PORT, () => {
  console.log('Listening to http://localhost:' + PORT);
});


