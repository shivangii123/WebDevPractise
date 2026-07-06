
const express = require("express");
const { postRegisterUser, deleteOneUserById, patchUpdateUserById, getUserById, LoginUser } = require("../controller/user.controller");
const router = express.Router() ;


router.post("/register", postRegisterUser)

router.delete("/deleteById/:id" , deleteOneUserById)

router.patch("/updateUserById/:id", patchUpdateUserById)

router.get('/getUserById/:id', getUserById) ;

router.get('/login', LoginUser)

// router.get("/", (req, res)=>{
//     res.send("Hello world ")
// })


module.exports = router ;
