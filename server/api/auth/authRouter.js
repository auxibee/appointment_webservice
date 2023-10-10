const express = require('express');
const { login, register } = require('./authController');
const validate = require('../../middlewares/validation');
const AccountSchema = require('../users/validation');

const router = express.Router();

router.post('/login', validate(AccountSchema), login);
router.post('/register', validate(AccountSchema), register);

module.exports = router;
