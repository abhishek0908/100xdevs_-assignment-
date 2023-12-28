const { User } = require("../db");

function userMiddleware(req, res, next) {
    const email = req.body.email;
    const password = req.body.password;
    const listofpeople = User.find();
    for(let i=0;i<listofpeople.length;i++)
    {
        if(listofpeople[i]["email"]=email&&listofpeople[i]["password"]==password){
            res.send("Admin Exists");
        }
    }
    next()
}

module.exports = userMiddleware;