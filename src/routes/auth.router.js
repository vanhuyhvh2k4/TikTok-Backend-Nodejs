const express = require('express');
const router = express.Router();
const verifyToken = require('../middlewares/VerifyToken.middleware.js');

const AuthController = require('../app/controllers/AuthController');

router.post('/api/auth/login', AuthController.login);

router.post('/api/auth/signup', AuthController.signup);

router.post('/api/auth/logout', verifyToken.verify, AuthController.logout);

router.post('/api/auth/signup/checkemail', AuthController.checkEmail);

router.post('/api/auth/signup/checkuser', AuthController.checkUser);

router.post('/api/auth/refresh', AuthController.refreshToken);

module.exports = router;