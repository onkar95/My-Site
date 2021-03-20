const { Router } = require('express');
const authController = require('../authControllers');
const router = Router();
router.post('/signup', authController.signup)
router.post('/login', authController.login)
router.get('/logout', authController.logout)
router.get('/verifyuser', authController.verifyuser)
module.exports = router;