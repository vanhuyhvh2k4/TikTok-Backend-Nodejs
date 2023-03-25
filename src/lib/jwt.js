const jwt = require('jsonwebtoken');
const accessKey = 'abcd';
const refreshKey = 'efgh';

const jwtUtils = {
    generateAccessToken: (user) => {
        const payload = {
            user_id: user._id,
            email: user.email,
        }
        return jwt.sign(payload, accessKey, {expiresIn: '30s'});
    },
    generateRefreshToken: (user) => {
        const payload = {
            user_id: user._id,
            email: user.email,
        }
        return jwt.sign(payload, refreshKey, {expiresIn: '365d'});
    }
}

module.exports = jwtUtils;