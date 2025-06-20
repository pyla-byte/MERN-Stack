const {Router} = require('express');
const authController = require('../controllers/auth/register.controller.js')
const LoginController = require('../controllers/auth/login.controller.js')
const router = Router();

router.post('/register', authController.register)

router.post('/login', LoginController.login)    
module.exports = router;    