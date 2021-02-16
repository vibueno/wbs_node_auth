const express = require('express');
const router = express.Router();
const userController = require('../controllers/User');

router.get('/getname', userController.getName);

router.get('/setname', userController.setName);

module.exports = router;
