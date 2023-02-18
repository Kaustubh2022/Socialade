//module.exports.actionName = function(req,res){}

const Post = require('../models/post');

module.exports.home = function(req,res){
    // console.log(req.cookies);
    // res.cookie('user_id',25);

    // return res.end('<h1>Express is up for socialade</h1>');

    // Post.find({},function(err,posts){
    //     return res.render('home',{
    //         title:"Socialade | Home",
    //         posts:posts
    //     });
    // });

    // To fetch whole user object from database and display user name
    Post.find({}).populate('user').exec(function(err,posts){
        return res.render('home',{
            title:"Socialade | Home",
            posts:posts
        });

    })
}

