const Coupon = require('../models/Coupon');

// Create a new coupon
exports.createCoupon = async (req, res) => {
  const { code, discount, expirationDate } = req.body;

  try {
    const coupon = new Coupon({
      code,
      discount,
      expirationDate
    });

    const createdCoupon = await coupon.save();
    res.status(201).json(createdCoupon);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Edit a coupon
exports.editCoupon = async (req, res) => {
  const { id } = req.params;
  const { code, discount, expirationDate, isActive } = req.body;

  try {
    const coupon = await Coupon.findById(id);

    if (coupon) {
      coupon.code = code || coupon.code;
      coupon.discount = discount || coupon.discount;
      coupon.expirationDate = expirationDate || coupon.expirationDate;
      coupon.isActive = isActive !== undefined ? isActive : coupon.isActive;

      const updatedCoupon = await coupon.save();
      res.json(updatedCoupon);
    } else {
      res.status(404).json({ message: 'Coupon not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Delete a coupon
exports.deleteCoupon = async (req, res) => {
  const { id } = req.params;

  try {
    const coupon = await Coupon.findByIdAndDelete(id);

    if (coupon) {
      res.json({ message: 'Coupon deleted successfully' });
    } else {
      res.status(404).json({ message: 'Coupon not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Get all coupons
exports.getAllCoupons = async (req, res) => {
  try {
    const coupons = await Coupon.find();
    res.json(coupons);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Get a coupon by code
exports.getCouponByCode = async (req, res) => {
  const { code } = req.params;

  try {
    const coupon = await Coupon.findOne({ code });

    if (coupon) {
      res.json(coupon);
    } else {
      res.status(404).json({ message: 'Coupon not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
