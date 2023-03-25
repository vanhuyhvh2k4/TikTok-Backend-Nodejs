const express = require('express');
const router = express.Router();

const FollowController = require('../app/controllers/FollowController');

router.get('/api/home/video', FollowController.show);

module.exports = router;