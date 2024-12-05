const User = require('../models/User');

// Get user profile
exports.getUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);

    if (user) {
      res.json({
        _id: user._id,
        username: user.username,
        email: user.email,
        orderHistory: user.orderHistory,
        wishlist: user.wishlist,
        addressBook: user.addressBook,
        notifications: user.notifications,
      });
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Update user profile
exports.updateUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);

    if (user) {
      user.username = req.body.username || user.username;
      user.email = req.body.email || user.email;
      user.orderHistory = req.body.orderHistory || user.orderHistory;
      user.wishlist = req.body.wishlist || user.wishlist;
      user.addressBook = req.body.addressBook || user.addressBook;
      user.notifications = req.body.notifications || user.notifications;

      const updatedUser = await user.save();

      res.json({
        _id: updatedUser._id,
        username: updatedUser.username,
        email: updatedUser.email,
        orderHistory: updatedUser.orderHistory,
        wishlist: updatedUser.wishlist,
        addressBook: updatedUser.addressBook,
        notifications: updatedUser.notifications,
      });
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Delete user profile
exports.deleteUserProfile = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.user._id);
    if (user) {
      res.json({ message: 'User profile deleted successfully' });
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
