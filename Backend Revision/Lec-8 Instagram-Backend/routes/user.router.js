const express = require('express');
const router = express.Router();
const{isLogin} = require("../middleware/auth") ;
const { getUserProfile } = require('../controller/user.controller');

// Remeber -> nodemon changes ,server Restart-> Login again ,then check Db data

// first login par req bhejo,then user/profile par...
// Full url for below : http://localhost:4444/user/profile
router.get("/profile", isLogin,getUserProfile );

module.exports = router ;


