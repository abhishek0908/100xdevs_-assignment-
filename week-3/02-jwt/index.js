const jwt = require('jsonwebtoken');
const jwtPassword = "secret";

function signJwt(username) {
    try {
        const token = jwt.sign({ username: username }, jwtPassword);
        return token;
    } catch (error) {
        throw new Error('Error signing JWT');
    }
}

function verifyJwt(token) {
    try {
        const decoded = jwt.verify(token, jwtPassword);
        return decoded;
    } catch (error) {
        throw new Error('Invalid JWT token');
    }
}

function decodeJwt(token) {
    try {
        const decoded = jwt.decode(token, { complete: true });
        return decoded;
    } catch (error) {
        throw new Error('Error decoding JWT');
    }
}

module.exports = {
    signJwt,
    verifyJwt,
    decodeJwt,
    jwtPassword
}
