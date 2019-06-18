const bcrypt = require('bcrypt');
const saltRounds = 10

module.exports = {
    //Login end point. 
    login: (req, res, next) => {
        // get db
        const db = req.app.get('db')
        //Destructure properties from body
        const {email, password} = req.body;

        let currentUser;
        // check for user by email
        db.user_table.findOne({email})
            //Massive queries return rows from DB
            .then((user)=>{
                if(user){
                    currentUser = user; 
                    // check for correct password
                    return bcrypt.compare(password, user.password)  
                }else{
                    throw("User does not exist!")
                }
            })
            // This is called chaining promises
            //https://javascript.info/promise-chaining
            .then((isMatch)=>{
                if(isMatch){
                    delete currentUser.password

                    req.session.user = currentUser
                    // send back response
                    res.send({success: true, user:currentUser})
                }else{
                    throw('In correct credentials')
                }
            })
            .catch((err)=>{
                //If incorrect send back failed loging
                res.send({success:false, err})
            })
    },
    
    register: (req, res, next) => {
        // Get DB instance
        const db = req.app.get('db');
    
        // Set up varaibles off of req.body
        const {email, password, first_name, last_name, username, profile_pic} = req.body;
    
        //Check to make sure is new user.
        db.user_table.findOne({email})
            .then((user)=>{
                // Send back message if email was there
                if(user){
                   throw('Sorry this email already exists. Please login.')
                }else{ // Make New user
                    /// Encrypt password
                    return bcrypt.hash(password, saltRounds);
                }
            })
            .then((hash) => {
                /// create new user with hashed password.
                return db.user_table.insert({email, password:hash, first_name, last_name, username, profile_pic})
              })
            // assign user to session. 
            .then((user)=>{
                console.log(user)
                //This is very very important
                delete user.password;
                //Assign user to session
                req.session.user = user;
                // Send message
                res.send({success: true, user:user})
            })
            .catch((err)=>{
                console.log(err)
                res.send({success:false, err})
            })
    
    }
}