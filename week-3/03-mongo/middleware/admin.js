// Middleware for handling auth
const {Admin} = require('../db')
function adminMiddleware(req, res, next) {
    const username = req.body.username;
    const password = req.body.password;
   Admin.findOne({
        username : username,
        password : password

    }).then((value)=>{
        console.log(value)
        if(value){
            next()
        }
        else{
            res.status(403).json({msg : "User Does not exits"})
        } 
    })

}

module.exports = adminMiddleware;