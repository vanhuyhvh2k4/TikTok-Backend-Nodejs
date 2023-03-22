const express = require('express');
const router = express.Router();
const storage = require('../lib/multer');

const UploadController = require('../app/controllers/UploadController');

router.post('/api/upload/video', storage.single('file'), UploadController.uploadVideo);

module.exports = router;
