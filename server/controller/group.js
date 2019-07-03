module.exports = {
    create: (req, res, next) => {

        const db = req.app.get('db')
        const { title }  = req.body;
        console.log(req.session.user)
        const user_id = req.session.user.id;
        db.group_table.findOne({title})
            .then((name)=>{
                if(name){
                   throw('Sorry, this group already exists')
                } else{
                    console.log('Group Already Exists')
                }
            })
            .then(()=>{
                return db.group_table.insert({title, user_id})

            })
           .then((group)=>{
               res.send({success: true, group})
           })
            .catch((err)=>{
                res.send({success: false, err})
            })
    },
    
    getAll: (req, res, next) => {
        const db = req.app.get('db')
        db.get_all_groups()
        .then((groups)=>{
            res.send({success: true, groups})
        })
        .catch((err)=>{
            res.send({success: false, err})
        })
    },

    getSingleGroup: (req, res, next)=>{
        const db = req.app.get('db');
        db.group_table.findOne({id:req.params.id})
            .then((group)=>{
                res.send({success: true, group})
            })
            .catch((err)=>{
                res.send({success: false, err})
            })
    },

    edit: (req, res, next)=>{
        const db = req.app.get('db');
        const { title } = req.body;
        const {id} = req.params;

        db.edit_group([id, title])
        .then((group)=>{
            res.send({success: true, group})
        })
        .catch((err)=>{
            res.send({success: false, err})
        })
    }
    
}