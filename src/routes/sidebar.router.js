const express = require('express');
const router = express.Router();

const SidebarController = require('../app/controllers/SidebarController');

router.get('/api/sidebar/discover', SidebarController.discover);

router.get('/api/sidebar/suggestedaccounts', SidebarController.suggestedAccounts);

module.exports = router;