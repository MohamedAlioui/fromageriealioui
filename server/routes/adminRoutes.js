const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');

// Route to get all users
router.get('/users', adminController.getAllUsers);

// Route to update user role
router.put('/users/:id/role', adminController.updateUserRole);

// Route to delete a user
router.delete('/users/:id', adminController.deleteUser);

module.exports = router;
