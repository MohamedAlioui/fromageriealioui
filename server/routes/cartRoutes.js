const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController');

// Route to add item to cart
router.post('/add', cartController.addItemToCart);

// Route to get cart items
router.get('/', cartController.getCartItems);

// Route to update cart item
router.put('/update/:id', cartController.updateCartItem);

// Route to remove item from cart
router.delete('/remove/:id', cartController.removeItemFromCart);

module.exports = router;
