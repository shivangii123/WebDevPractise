const express = require('express') ;
const { registerUser, loginUser } = require('../controller/auth.controller');
const router = express.Router() ;


// Full url for below : http://localhost:4444/auth/register
router.post('/register', registerUser) ;

router.get('/login',loginUser );

module.exports = router ;
//router is {} intially empty object, then routes are added ->login, register 
