const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// Route to get all products
router.get('/', productController.getProducts);

// Route to get a product by ID
router.get('/:id', productController.getProductById);

// Route to create a new product
router.post('/create', productController.createProduct);

// Route to update a product
router.put('/update/:id', productController.updateProduct);

// Route to delete a product
router.delete('/delete/:id', productController.deleteProduct);

module.exports = router;
