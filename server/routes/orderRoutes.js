const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');

// Route to create a new order
router.post('/create', orderController.addOrderItems);

// Route to get all orders
router.get('/', orderController.getAllOrders);

// Route to get an order by ID
router.get('/:id', orderController.getOrderById);

// Route to update an order
router.put('/update/:id', orderController.updateOrder);

// Route to delete an order
router.delete('/delete/:id', orderController.deleteOrder);

module.exports = router;
