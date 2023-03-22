const express = require('express');
const router = express.Router();

const HomeController = require('../app/controllers/HomeController');

router.get('/api/home/video', HomeController.home);

module.exports = router;