const User = require("../model/user.model")

module.exports.getUserProfile = async (req, res)=>{
    let id = req.id ;// isLogin mein req obj ko modify karke req.id mein User ki id store kari
    let userProfile = await User.findById(id).populate("postsId");
    //populate("postIds")-> uss PostId ke sare fields show karo(postname, desc, id)

    res.json({
        succes:true,
        data: userProfile
    })
}

//populate()-> usse id par jo data h usko layega..
// .populate("postIds")