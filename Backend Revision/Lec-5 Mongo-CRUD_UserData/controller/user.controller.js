const Users = require("../model/users.model")


module.exports.postRegisterUser = async (req,res)=>{

    // 1. Extract all field from body to add in DB
    let {name, email, password,phone} =req.body ;

    // 2. Add data ,CRUD
    let newUser = await User.create({ // create-> Add new coolection in document
        name : name,
        email : email,
        password :password,
        phone :phone
    })
    console.log(newUser);

    res.json({
        success:true ,
        data : newUser
    })
}


// delete 
module.exports.deleteOneUserById = async (req,res)=>{
    let {id} = req.params ;
    let deletedUser = await Users.findByIdAndDelete(id) ;
    console.log(deletedUser);

    res.json({
        success :true ,
        data :deletedUser,
        msg :"User deleted succesfully "
    })
}


module.exports.patchUpdateUserById = async(req, res)=>{

    let {id} = req.params ;
    // don't know user kya update karega so req.body mein jo aa rha h wo sara update mein bhej do

    //Syntax: findByIdAndUpdate(id , updateValue)  
    let updatedData = await Users.findByIdAndUpdate(id, req.body) ;

    let newUser = await Users.findById(id) 
    console.log(updatedData);
    res.json({
        success : true ,
        msg :"Updated user succesfully" , 
        data: newUser,

    })
}


module.exports.getUserById = async (req,res)=>{
    let {id} = req.params ;

    let user = await Users.findById(id) ;

    console.log(user);
    res.json({
        success :true,
        data : user
    })
}


module.exports.LoginUser = async(req,res)=>{

    let {email, password} = req.body ;
    if(!email || !password){
        return res.json({
            msg : "Email and password is required !! "
        })
    }

    let userExist = await Users.findOne({email : email }) ;

    if(!userExist){
        return res.json({
            success : false,
            msg : "User does not exists with this email you entered !"
        })
    }
    
    if(userExist.password != password){
        return res.json({
            success : false,
            msg : "Incorrect password"
        })
    }

    res.json({
        success : true,
        msg : "Login successfull "
    })

}