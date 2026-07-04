let blogs = [ {id :1, title :'title1', desc :"description1" },
                { id :2, title :'title2', desc :"description2" },
                {id :3, title :'title3', desc :"description3" },
                {id :4, title :'title2', desc :"description2" },
                {id :5, title :'title4', desc :"description4" }
            ]


module.exports.getAllblogs =  (req,res)=>{
    res.json(blogs);
}           

module.exports.getOneBlog = (req,res)=>{
    let id = req.query.id;
    console.log(id);
    let blog=null;
    for(let i =0;i<blogs.length;i++){
        if(blogs[i].id==id){
            blog=blogs[i];
        }
    }
    res.json(blog);
}

module.exports.AddBlog = (req,res)=>{
        let title = req.body.title;
        let desc = req.body.desc;
        console.log(title,desc);
        let newblog = {
            id:Math.floor(Math.random()*1000000),
            title:title,
            desc:desc
        }
        blogs.push(newblog);
        res.json(blogs);
}


module.exports.deleteOneBlog = (req,res)=>{
    let id = req.params.id;
    for(let i=0;i<blogs.length;i++){
        if(blogs[i].id==id){
            blogs.splice(i,1);
            break;
        }
    }
    res.json(blogs);
}

module.exports.deleteBlogByTitle = (req,res)=>{
    let title = req.body.title;
    let newblogs = blogs.filter((blog)=>blog.title!=title);
    blogs=newblogs;
    res.json(blogs);
}

module.exports.putBlog = (req,res)=>{
    let id = req.params.id;
    for(let i =0;i<blogs.length;i++){
        if(blogs[i].id==id){
            blogs[i]={id:id,...req.body};
            //
            break;
        }
    }
    res.json(blogs);
}

module.exports.patchBlog = (req,res)=>{
    let id = req.params.id;
    for(let i =0;i<blogs.length;i++){
        if(blogs[i].id==id){
            blogs[i]={...blogs[i],...req.body};
            break;
        }
    }
    res.json(blogs);
}