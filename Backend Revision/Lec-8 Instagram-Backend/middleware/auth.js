const User = require("../model/user.model") ;

//Check request coming from Login user or not..
async function isLogin(req, res, next){
   let userid = req.session.userid ;//session se userId ko nikalo
   //session mein userId store hogi , till server is on

   let user = await User.findById(userid);
   if(!user){
    return res.json({
        success: false,
        msg: "Not authorized please login!!"
    })
   }

   req.id = user.id ; // requets object is modified..
   next() ;
}

module.exports.isLogin = isLogin ;