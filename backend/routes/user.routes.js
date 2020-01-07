const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/user.controller')
const pacienteCtrl = require('../controllers/paciente.controller')


router.post('/auth', userCtrl.auth)
router.post('/paciente', pacienteCtrl.add)


module.exports = router;