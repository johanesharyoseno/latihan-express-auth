const express = require('express');
const session = require('express-session');
const passport  =require('./lib/passport');

//import router
const router = require ('./router');

const port = process.env.port || 3000;

const app = express ();

app.use(express.urlencoded({extended: false}));

app.use(session({
    secret: 'rahasia',
    resave: false,
    saveUninitialized: false,
}));
app.use(passport.initialize());
app.use(passport.session());
app.set('view engine', 'ejs');

app.use(router)

app.listen(port, ()=>{
    console.log('server is running')
})