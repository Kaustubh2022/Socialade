

module.exports.profile = function(req,res){

    return res.end('<h1>User Profile</h1>');
}

module.exports.setting = function(req,res){

    return res.end('<h1>Welcome to user settings</h1>');
}