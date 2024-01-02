const {secretKey } = require('../config')
const jwt = require('jsonwebtoken')
function userMiddleware(req, res, next) {
    const token = req.headers.authorization;
    const words = token.split(' ')
    const jwtToken = words[1];
    const decodedValue = jwt.verify(jwtToken,secretKey );
    if(decodedValue.username)
    {
        next()
        
    }
    else{
    res.status(403).send("You are not authenticated")
    }
}

module.exports = userMiddleware;