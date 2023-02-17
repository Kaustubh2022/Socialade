const express = require('express');
const cookieParser = require('cookie-parser');
 const app = express();
const port = 8000;
const db = require('./config/mongoose');
app.use(express.urlencoded());
app.use(cookieParser());

//for using ejs layout
const expressLayouts = require('express-ejs-layouts');
const { urlencoded } = require('express');

// used for session cookie
const session = require('express-session');
const passport = require('passport');
const passportLocal = require('./config/passport-local-strategy');
const MongoStore = require('connect-mongo');

// to use static files 
app.use(express.static('./assets'));

app.use(expressLayouts);

app.set('layout extractStyles',true);
app.set('layout extractScripts',true);


//Set up view engine
app.set('view engine','ejs');
app.set('views','./views');

// mongo store is used to store session cookie in db
app.use(session({
    name:'socialade',

    //TODO  change the secret before deployement in production mode 
    secret:'blahsomething',
    saveUninitialized:false,
    resave:false,
    cookie:{
        maxAge:(1000*60*100)

    },
    store:  MongoStore.create({
        mongoUrl: 'mongodb://127.0.0.1:27017/socialade_development'
        
    },
    function(err){
        console.log(err || 'connect-mongodb setup ok');
    })
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(passport.setAuthenticatedUser);

// use express router
app.use('/',require('./routes'));



//Listners for app

app .listen(port,function(err){
    
    if(err){
        console.log(`Error in running the server : ${err}`);
    }

    console.log(`Server is running on port : ${port}`)
});

