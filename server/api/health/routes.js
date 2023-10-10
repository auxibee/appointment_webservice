const express = require('express');
const health = require('./controller');

const router = express.Router();

router.get('/', health);

module.exports = router;
