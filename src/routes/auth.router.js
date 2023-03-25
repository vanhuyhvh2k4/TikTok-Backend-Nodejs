const express = require('express');
const router = express.Router();

const AuthController = require('../app/controllers/AuthController');

router.post('/api/auth/login', AuthController.login);

router.post('/api/auth/refresh', AuthController.refreshToken);

module.exports = router;