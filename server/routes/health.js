const express = require('express');
const health = require('../controllers/health');

const router = express.Router();

router.get('/health', health);

module.exports = router;
