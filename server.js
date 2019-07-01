const express = require('express');
const massive = require('massive');
const cors = require('cors');
const bodyParser = require('body-parser');
const session = require('express-session');
const authenticate = require('./server/controller/authenticate');
const group = require('./server/controller/group');
const post = require('./server/controller/post');
const path = require('path');
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

app.use(express.static(path.join(__dirname, '/build')));

//AUTH CONTROLLERS
app.post('/api/register', authenticate.register)
app.post('/api/login', authenticate.login)

//GROUP CONTROLLERS
app.post('/api/create_group', group.create) 
app.get('/api/view_groups', group.getAll)
app.get('/api/groups/:id', group.getSingleGroup)
app.get('/api/group_list', group.getAll)


//POST CONTROLLERS
app.get('/api/posts', post.getAll)
app.get('/api/post', post.getOnePost)
app.post('/api/new_post', post.createPost)
app.delete('/api/post/:id', post.deletePost)
app.put('/api/post/:id', post.editPost)


app.get('/*', (req, res) => {
    res.sendFile('index.html', {
        root: path.join(__dirname, "build")
      })
});

app.use((req, res, next)=>{
    if(req.session.user){
        next();
    }else{
        res.send({success:false, isLoggedIn:false, err:"Please login"})
    }
})  
const port = PORT || 3131;

app.listen(port, ()=>{
    console.log(`Liftoff on port ${port}`)
})