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
    console.log(req.body)
    db.user_post.insert({event_type, item_name, picture, link})
        .then((post)=>{
            res.send({success: true, post})
        })
        .catch((err)=>{
            res.send({success:false, err})
        })
},

// createPost: (req, res, next)=>{
//     const db = req.app.get('db');
//     const postObj = {
//         user_id: req.session.user.id,

//         event_type: req.body.event_type,
//         item_name: req.body.item_name,
//         picture:req.body.picture,
//         link: req.body.link
//     };

//     db.user_post.insert(postObj)
//     .then(newPost=>{
//         return db.get_post_by_user_id({id: req.session.user.id})
//     })
//     .then(post=>{
//         res.send({success: true, post})
//     })
//     .catch(err=>{
//         res.send({success: false, err})
//     })
// },

deletePost: (req, res, next)=>{
    const db = req.app.get('db');
    db.user_post.destroy({id: req.params.id})
        .then(post=>{
            res.send({success: true, post})
        })
        .catch(err =>{
            res.send({sucess: false, err})
        })
},
editGroup: (req, res, next)=>{
    const db = req.app.get('db');
    const { event_type, item_name, picture, link } = req.body;
    const { id } = req.params;

    db.edit_post([ id, event_type, item_name, picture, link])
    .then((post)=>{
        res.send({success: true, post})
    })
    .catch((err)=>{
        res.send({success: false, err})
    })
}


}