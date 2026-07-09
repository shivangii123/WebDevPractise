const express = require('express') ;
const { addPosts, deletePost, getAllPosts } = require('../controller/posts.controller');
const {isLogin} = require('../middleware/auth') ;
const {isAllowed} = require('../middleware/post.auth')
const router = express.Router() ;


// console.log(typeof isLogin , typeof addPosts);//debugging

// Full url for below : http://localhost:4444/post/create
router.post('/create',isLogin, addPosts);

// Full url for below : http://localhost:4444/post/(id likh do..)
router.delete('/:id',isLogin, isAllowed,deletePost);

//get all post on Instagram page
router.get('/allPost', isLogin, getAllPosts);


module.exports = router ;