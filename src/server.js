const express = require('express');
const path = require('path');

//initializations
const app = express();

//settings
app.set('port', process.env.PROT || 4000);
app.set('views', path.join( __dirname + 'views'));
//Middlewares
app.use(express.urlencoded({extended: false}));
//global varaibles

//routes
app.get('/',(req , res )=>{
    res.send('hello word');
})
//static files
app.use(express.static(path.join( __dirname + 'public')));


module.exports = app; 