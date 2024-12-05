const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Route to register a new user
router.post('/register', userController.registerUser);

// Route to login user
router.post('/login', userController.loginUser);

// Route for forgot password
router.post('/forgot-password', userController.forgotPassword);

// Route to reset password
router.post('/reset-password', userController.resetPassword);

// Route to get all users
router.get('/', userController.getAllUsers);

module.exports = router;
