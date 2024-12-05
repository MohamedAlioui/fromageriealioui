const express = require('express');
const router = express.Router();
const reviewController = require('../controllers/reviewController');

// Route to submit a review
router.post('/submit', reviewController.submitReview);

// Route to approve a review
router.put('/approve/:id', reviewController.approveReview);

// Route to get reviews for a product
router.get('/product/:productId', reviewController.getProductReviews);

// Route to delete a review
router.delete('/:id', reviewController.deleteReview);

module.exports = router;
