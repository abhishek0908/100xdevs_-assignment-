const { User } = require("../db");

function userMiddleware(req, res, next) {
  // In your Express route
const username = req.body.username;
const password = req.body.password;

   User.findOne({
        username : username,
        password : password

    }).then((value)=>{
        if(value){
            next()
        }
        else{
            res.status(403).json({msg : "User Does not exits"})
        } 
    })

}

module.exports = userMiddleware;