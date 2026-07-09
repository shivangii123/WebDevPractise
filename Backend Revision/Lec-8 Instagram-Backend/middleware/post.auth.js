const Post = require('../model/post.model')

async function isAllowed(req, res, next){
    let {userid} = req.session ;
    let postId = req.params.id ;

    let postExist = await Post.findById(postId) ;

    if(!postExist){
        return res.json({
            success : false ,
            msg : "post does not exists"
        })
    }
    console.log("post ki userId",postExist.userId);
    console.log("user ki userId",userid);

    
    if(postExist.userId != userid){
        return res.json({
            msg : "Not authorized to delete"
        })
    }
    next() ;

}

module.exports.isAllowed = isAllowed ; 