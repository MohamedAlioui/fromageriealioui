const express = require('express');
const router = express.Router();
const analyticsController = require('../controllers/analyticsController');

// Route to get total sales
router.get('/totalsales', analyticsController.getTotalSales);

// Route to get revenue trends
router.get('/revenuetrends', analyticsController.getRevenueTrends);

// Route to get top-selling products
router.get('/topsellingproducts', analyticsController.getTopSellingProducts);

// Additional routes can be added here

module.exports = router;
