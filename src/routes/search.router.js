const express = require('express');
const router = express.Router();

const SearchController = require('../app/controllers/SearchController');

router.get('/api/search/find', SearchController.search);

module.exports = router;
