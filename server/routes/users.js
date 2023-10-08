const express = require('express');
const users = require('../controllers/users');

const router = express.Router();

router.get('/users', users.createAccount);

module.exports = router;
