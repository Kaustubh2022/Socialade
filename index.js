const express = require('express');
const app = express();
const port = 8000;

//for using ejs layout
const expressLayouts = require('express-ejs-layouts');

// to use static files 
app.use(express.static('./assets'));

app.use(expressLayouts);

app.set('layout extractStyles',true);
app.set('layout extractScripts',true);

// use express router
app.use('/',require('./routes'));

//Set up view engine
app.set('view engine','ejs');
app.set('views','./views');



//Listners for app

app .listen(port,function(err){
    
    if(err){
        console.log(`Error in running the server : ${err}`);
    }

    console.log(`Server is running on port : ${port}`)
});

