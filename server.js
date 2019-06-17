const express = require('express');
const massive = require('massive');
const axios = require('axios');
const cors = require('cors');
const bodyParser = require('body-parser');
const session = require('express-session');
require('dotenv').config();

const app = express();

const { PORT, CONNECTION_STRING, SESSION_SECRET } = process.env;

massive(CONNECTION_STRING)
    .then((dbInstance)=>{
        app.set('db', dbInstance)
        console.log('Database is connected')
    })
    .catch((err)=>{
        console.log(`There was an err ${err}`)
    })

app.use(cors())
app.use(bodyParser.json())
app.use(session({
    secret: SESSION_SECRET,
    resave: true,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}))

const port = PORT || 3131;

app.listen(port, ()=>{
    console.log(`Liftoff on port ${port}`)
})