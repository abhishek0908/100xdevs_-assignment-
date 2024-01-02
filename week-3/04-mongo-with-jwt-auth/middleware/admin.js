const {secretKey } = require('../config')
const jwt = require('jsonwebtoken')
function adminMiddleware(req, res, next) {
    const token = req.headers.authorization;
    const words = token.split(" ")
    const jwtToken = words[1];
    console.log(secretKey)
    const decodedValue = jwt.verify(jwtToken,"Abhishek" );
    console.log(decodedValue.username)
    if(decodedValue.username)
    {
        next()   
    }
    else{
    res.status(403).send("You are not authenticated")
    }

}

module.exports = adminMiddleware;