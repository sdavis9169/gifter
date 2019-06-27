module.exports = {
    getAll: (req, res, next)=>{
        const db = req.app.get('db')
        db.user_post.find()
        .then((posts)=>{
            res.send({success: true, posts})
        })
        .catch((err)=>{
            res.send({success: false, err})
        })

    },

    getOnePost: (req, res, next)=>{
        const db = req.app.get('db');
        db.user_post.findOne({id:req.params.id})
        .then((post)=>{
            res.send({success: true, post})
        })
        .catch((err)=>{
            res.send({success: false, err})
        })
    },

//     createPost: (req, res, next)=>{
//     const db = req.app.get('db');
//     const { event_type, item_name, picture, link} = req.body;

//     db.user_post.insert({event_type, item_name, picture, link})
//         .then(()=>{
//             res.status(200)
//         })
//         .catch((err)=>{
//             res.status(500)
//         })
// }       

// createPost: (req, res, next)=>{
//     const db = req.app.get('db');
//     const {event_type,}
// }

createPost: (req, res, next)=>{

    const db = req.app.get('db');
    const {event_type, item_name, picture, link} = req.body;


    db.user_post.insert({event_type, item_name, picture, link})
        .then((post)=>{
            res.send({success: true, post})
        })
        .catch((err)=>{
            res.send({success:false, err})
        })
},

deletePost: (req, res, next)=>{
    const db = req.app.get('db');
    db.user_post.destroy({id: req.params.id})
        .then(post=>{
            res.send({success: true, post})
        })
        .then(err =>{
            res.send({sucess: false, err})
        })
},

}