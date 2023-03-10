
const User = require('../models/user');

module.exports.profile = function(req,res){

    // return res.end('<h1>User Profile</h1>');
    return res.render('user_profile',{
        title:'profile'
    });
}

module.exports.setting = function(req,res){

    return res.end('<h1>Welcome to user settings</h1>');
}

//to render sign up page 

module.exports.signUp = function(req,res){

    if(req.isAuthenticated()){
       return res.redirect('/users/profile');
    }
    return res.render('user_sign_up',{
        title:'Socialade | Sign Up'
    });

   
}

//to render sign in page 

module.exports.signIn = function(req,res){

    if(req.isAuthenticated()){
        return res.redirect('/users/profile');
    }
    

    return res.render('user_sign_in',{
        title:'Socialade | Sign In'
    });
}

// get the sign up data
module.exports.create = function(req,res){

    console.log('inside create');
    console.log(req.body);
    if(req.body.password != req.body.confirm_password){
        
        return res.redirect('back');
    }
    User.findOne({email: req.body.email },function(err,user){
        if(err){
            console.log('error in finding the user in signing up ');
            return res.render('back');
        }
        if(!user){
            User.create(req.body,function(err,user){
                if(err){
                    console.log('error in creating user');
                    return res.render('back');
                }
                return res.redirect('/users/sign-in')
            });
        }
        else{
            return res.redirect('back')
        }
    })

};


// sign in and create a session for the user
module.exports.createSession = function(req,res){
    return res.redirect('/');
}

module.exports.destroySession = function(req,res,next){
    req.logout(function(err){
        if(err){
            return next(err);
        }
        res.redirect('/');
    });
    
}