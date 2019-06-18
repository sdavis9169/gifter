const express = require('express');
const massive = require('massive');
const cors = require('cors');
const bodyParser = require('body-parser');
const session = require('express-session');
const authenticate = require('./server/controller/authenticate');
const group = require('./server/controller/group');
require('dotenv').config();

const app = express();

const { PORT, CONNECTION_STRING, SESSION_SECRET } = process.env;

massive(CONNECTION_STRING)
    .then((dbInstance)=>{
        app.set('db', dbInstance)
        console.log('Database is connected')
    })
    .catch((err)=>{
        console.log(`There was an error ${err}`)
    })

app.use(cors());
app.use(bodyParser.json());
app.use(session({
    secret: SESSION_SECRET,
    resave: true,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}))

app.post('/api/register', authenticate.register)
app.post('/api/login', authenticate.login)
app.post('/api/create_group', group.create) 

app.use((req, res, next)=>{
    if(req.session.user){
        next();
    }else{
        res.send({success:false, isLoggedIn:false, err:"Please login in"})
    }
})  
const port = PORT || 3131;

app.listen(port, ()=>{
    console.log(`Liftoff on port ${port}`)
})