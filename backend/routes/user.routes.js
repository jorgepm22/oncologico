const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/user.controller')


router.get('/auth', userCtrl.auth)

module.exports = router;