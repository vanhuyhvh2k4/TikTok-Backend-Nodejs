const jwt = require('jsonwebtoken');
const User = require('../models/User');
const jwtUtils = require('../../lib/jwt');

class AuthController {
    login (req, res) {
        const email = req.body.email;
        const password = req.body.password;

        User.findOne({ email, password })
            .lean()
            .then((user) => {
                if (user) {
                    const accessToken = jwtUtils.generateAccessToken(user);
                    const refreshToken = jwtUtils.generateRefreshToken(user) ;
                    res.cookie('refresh_token', refreshToken, {
                        httpOnly: true,
                        secure: false,
                        sameSite: "strict",
                        path: '/',
                    });
                    res.status(200).json({ data: user ,access_token: accessToken});
                }
                else {
                    const responseData = { message: 'Login Failed' };
                    res.status(400).json(responseData);
                }
            })
            .catch((error) => {
                res.status(500).send(error);
            })
    }

    signup (req, res) {
        const full_name = req.body.fullName;
        const user_name = req.body.userName;
        const email = req.body.email;
        const password = req.body.password;
        
        const newUser = { full_name, user_name, email, password };

        User.create(newUser)
            .then(() => {
                const responseData = { message: 'Register successfully' };
                res.status(200).json(responseData);
            })
            .catch((error) => {
                res.status(500).send(error);
            })
    }

    refreshToken (req, res) {
        const refreshToken = req.cookies.refresh_token;
        if (!refreshToken) {
            return res.status(401).json('You are not authenticated');
        }
        else {
            jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
                if (err) {
                    res.status(500).send(err);
                }
                else {
                    const newAccessToken = jwtUtils.generateAccessToken(user);
                    const newRefreshToken = jwtUtils.generateRefreshToken(user);

                    res.cookie('refresh_token', newRefreshToken, {
                        httpOnly: true,
                        secure: false,
                        sameSite: "strict",
                        path: '/',
                    });
                    res.status(200).json({access_token: newAccessToken});
                }
            })
        }
    }
}

module.exports = new AuthController;