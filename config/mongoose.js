const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/socialade_development');

//acquire the connection (to check if successful)
const db = mongoose.connection;

//error
db.on('error',console.error.bind(console,'error connecting to the db'));

//up and running then print the message
db.once('open',function(){
    console.log('successfully connected to the database');
});

module.exports = db;