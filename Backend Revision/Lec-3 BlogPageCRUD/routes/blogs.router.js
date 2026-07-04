const express = require("express");
const router = express.Router() ;
// const {getAllblogs,getOneBlog,AddBlog,deleteOneBlog,deleteBlogByTitle, putBlog, patchBlog} = require('../controller/blogs.controller') ;
const blogCntr = require("../controller/blogs.controller") ;

router.get("/",blogCntr.getAllblogs ) ;

router.get("/:id",blogCntr.getOneBlog) ;

router.post("/", blogCntr.AddBlog) ;

router.delete("/:id",blogCntr.deleteOneBlog ) ;

router.delete("/title/:title",blogCntr.deleteBlogByTitle)

router.put("/:id",blogCntr.putBlog)

router.patch("/:id",patchBlog)

module.exports = router ;