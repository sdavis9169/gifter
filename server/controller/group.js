module.exports = {
    create: (req, res, next) => {
        const db = req.app.get('db')
        const { title }  = req.body;

        // db.group_table.insert({title})
        // .then(()=>{{res.status(500)
        //     .send({Message: 'Group Added'})}})
        //     .catch((err)=>{
        //         res.status(500).send({errorMessage: "Error adding user"})
        //     console.log(err)
        //     })

            db.group_table.insert({title})
                .then(()=>{
                    res.status(200)
                })
                .catch((err)=>{
                    res.status(500)
                })

        // db.group_table.findOne({title})
        //     .then((name)=>{
        //         if(name){
        //             throw('Sorry, this group already exists')
        //         } else{
        //             console.log(user)
        //         }
        //     })
        //     .then(()=>{
        //         return db.group_table.insert({title})
        //     })
        //     .catch((err)=>{
        //         console.log(err)
        //     })
    },
    
    getAll: (req, res, next) => {
        const db = req.app.get('db')
        db.group_table.find()
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
    }
}