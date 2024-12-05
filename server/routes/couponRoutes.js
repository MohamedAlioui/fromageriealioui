const express = require('express');
const router = express.Router();
const couponController = require('../controllers/couponController');

// Route to create a new coupon
router.post('/create', couponController.createCoupon);

// Route to get all coupons
router.get('/', couponController.getAllCoupons);

// Route to get a coupon by code
router.get('/:code', couponController.getCouponByCode);

// Route to update a coupon
router.put('/update/:id', couponController.editCoupon);

// Route to delete a coupon
router.delete('/delete/:id', couponController.deleteCoupon);

module.exports = router;
