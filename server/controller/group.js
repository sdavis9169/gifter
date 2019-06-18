module.exports = {
    create: (req, res, next) => {
        const db = req.app.get('db')
        const { name, owner_id} = req.body;

        db.group_table.findOne({name})
            .then((user)=>{
                if(user){
                    console.log(user)
                    throw('Sorry, this group already exists')
                } else{
                    return db.group_table.insert({name, owner_id})
                }
            })
            .catch((err)=>{
                console.log(err)
            })
    }
}