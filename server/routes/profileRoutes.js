const express = require('express');
const router = express.Router();
const profileController = require('../controllers/profileController');

// Route to get user profile
router.get('/profile', profileController.getUserProfile);

// Route to update user profile
router.put('/profile/update', profileController.updateUserProfile);

// Route to delete user profile
router.delete('/profile/delete', profileController.deleteUserProfile);

module.exports = router;
