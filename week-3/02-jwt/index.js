const jwt = require('jsonwebtoken');
const jwtPassword = 'secret';

<<<<<<< HEAD
function signJwt(username) {
    try {
        const token = jwt.sign({ username: username }, jwtPassword);
        return token;
    } catch (error) {
        throw new Error('Error signing JWT');
    }
=======

/**
 * Generates a JWT for a given username and password.
 *
 * @param {string} username - The username to be included in the JWT payload.
 *                            Must be a valid email address.
 * @param {string} password - The password to be included in the JWT payload.
 *                            Should meet the defined length requirement (e.g., 6 characters).
 * @returns {string|null} A JWT string if the username and password are valid.
 *                        Returns null if the username is not a valid email or
 *                        the password does not meet the length requirement.
 */
function signJwt(username, password) {
    // Your code here
>>>>>>> 3823c7f66a6e3ab08b6bc7d53c2dec9403f99d3d
}

/**
 * Verifies a JWT using a secret key.
 *
 * @param {string} token - The JWT string to verify.
 * @returns {boolean} Returns true if the token is valid and verified using the secret key.
 *                    Returns false if the token is invalid, expired, or not verified
 *                    using the secret key.
 */
function verifyJwt(token) {
<<<<<<< HEAD
    try {
        const decoded = jwt.verify(token, jwtPassword);
        return decoded;
    } catch (error) {
        throw new Error('Invalid JWT token');
    }
=======
    // Your code here
>>>>>>> 3823c7f66a6e3ab08b6bc7d53c2dec9403f99d3d
}

/**
 * Decodes a JWT to reveal its payload without verifying its authenticity.
 *
 * @param {string} token - The JWT string to decode.
 * @returns {object|false} The decoded payload of the JWT if the token is a valid JWT format.
 *                         Returns false if the token is not a valid JWT format.
 */
function decodeJwt(token) {
<<<<<<< HEAD
    try {
        const decoded = jwt.decode(token, { complete: true });
        return decoded;
    } catch (error) {
        throw new Error('Error decoding JWT');
    }
=======
    // Your code here
>>>>>>> 3823c7f66a6e3ab08b6bc7d53c2dec9403f99d3d
}


module.exports = {
<<<<<<< HEAD
    signJwt,
    verifyJwt,
    decodeJwt,
    jwtPassword
}
=======
  signJwt,
  verifyJwt,
  decodeJwt,
  jwtPassword,
};
>>>>>>> 3823c7f66a6e3ab08b6bc7d53c2dec9403f99d3d
