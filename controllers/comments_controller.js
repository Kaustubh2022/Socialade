const Comment = require('../models/comment');
const Post = require('../models/post');
module.exports.create = function(req,res){

    Post.findById(req.body.post,function(err,post){

        if(post){
            Comment.create({
                content:req.body.content,
                post:req.body.post,
                user:req.user._id

            },function(err,comment){
                // handle the error
                // if(err){

                //     console.log("error");
                //     return;

                // }

                post.comments.push(comment);
                // save tells db its final version and block it 
                post.save();

                res.redirect('/');

            });
        }
    })
}
