const express = require('express');

const healthRoutes = require('../api/health/routes');
const authRoutes = require('../api/auth/authRouter');

const router = express.Router();

router.use('/auth', authRoutes);
router.use('/health', healthRoutes);

module.exports = router;
