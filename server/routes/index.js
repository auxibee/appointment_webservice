const express = require('express');

const healthRoutes = require('./health');
const userRoutes = require('./users');

const router = express.Router();

router.use(healthRoutes);
router.use(userRoutes);

module.exports = router;
