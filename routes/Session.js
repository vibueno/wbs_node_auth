const express = require('express');
const router = express.Router();
const sessionController = require('../controllers/Session');

router.get('/login', sessionController.login);
router.post('/connect', sessionController.connect);

router.get('/admin', sessionController.admin);

router.get('/logout', sessionController.logout);

module.exports = router;
