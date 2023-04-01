const express = require('express');
const router = express.Router();
const VeriFyToken = require('../middlewares/VerifyToken.middleware.js')

const HomeController = require('../app/controllers/HomeController');
router.patch('/api/home/follow', VeriFyToken.verify, HomeController.follow);

router.get('/api/home/video', HomeController.home);

router.get('/api/home/videoLogin', VeriFyToken.verify, HomeController.homeLogin);

module.exports = router;