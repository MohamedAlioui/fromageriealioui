const Order = require('../models/Order');
const Product = require('../models/Product');
const User = require('../models/User');

// Get total sales
exports.getTotalSales = async (req, res) => {
  try {
    const totalSales = await Order.aggregate([
      { $match: { status: 'completed' } },
      { $group: { _id: null, total: { $sum: '$totalPrice' } } }
    ]);

    res.json(totalSales[0] ? totalSales[0].total : 0);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Get revenue trends
exports.getRevenueTrends = async (req, res) => {
  try {
    const revenueTrends = await Order.aggregate([
      { $match: { status: 'completed' } },
      { $group: { _id: { $dateToString: { format: '%Y-%m-%d', date: '$createdAt' } }, total: { $sum: '$totalPrice' } } },
      { $sort: { '_id': 1 } }
    ]);

    res.json(revenueTrends);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Get top-selling products
exports.getTopSellingProducts = async (req, res) => {
  try {
    const topSellingProducts = await Order.aggregate([
      { $unwind: '$orderItems' },
      { $group: { _id: '$orderItems.product', totalSold: { $sum: '$orderItems.quantity' } } },
      { $sort: { totalSold: -1 } },
      { $limit: 5 },
      { $lookup: { from: 'products', localField: '_id', foreignField: '_id', as: 'productDetails' } },
      { $unwind: '$productDetails' },
      { $project: { _id: 0, product: '$productDetails.name', totalSold: 1 } }
    ]);

    res.json(topSellingProducts);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Get user growth
exports.getUserGrowth = async (req, res) => {
  try {
    const userGrowth = await User.aggregate([
      { $group: { _id: { $dateToString: { format: '%Y-%m', date: '$createdAt' } }, count: { $sum: 1 } } },
      { $sort: { '_id': 1 } }
    ]);

    res.json(userGrowth);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Get active users (logged in or made purchases recently)
exports.getActiveUsers = async (req, res) => {
  try {
    const recentLoginUsers = await User.find({
      lastLogin: { $gte: new Date(new Date().setDate(new Date().getDate() - 30)) }
    }).select('_id');

    const recentPurchaseUsers = await Order.distinct('user', {
      createdAt: { $gte: new Date(new Date().setDate(new Date().getDate() - 30)) }
    });

    const activeUserIds = new Set([...recentLoginUsers.map(user => user._id.toString()), ...recentPurchaseUsers]);

    res.json({ activeUsers: Array.from(activeUserIds).length });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Get user demographics
exports.getUserDemographics = async (req, res) => {
  try {
    const demographics = await User.aggregate([
      { $group: { _id: '$location', count: { $sum: 1 } } },
      { $sort: { count: -1 } }
    ]);

    res.json(demographics);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Get stock levels
exports.getStockLevels = async (req, res) => {
  try {
    const products = await Product.find({}, 'name stock');
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Get low inventory alerts
exports.getLowInventoryAlerts = async (req, res) => {
  try {
    const lowStockProducts = await Product.find({ stock: { $lt: 10 } }, 'name stock');
    res.json(lowStockProducts);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Get product performance
exports.getProductPerformance = async (req, res) => {
  try {
    const productSales = await Order.aggregate([
      { $unwind: '$orderItems' },
      { $group: { _id: '$orderItems.product', totalSold: { $sum: '$orderItems.quantity' } } },
      { $lookup: { from: 'products', localField: '_id', foreignField: '_id', as: 'productDetails' } },
      { $unwind: '$productDetails' },
      { $project: { _id: 0, product: '$productDetails.name', totalSold: 1, returns: '$productDetails.returns' } }
    ]);

    res.json(productSales);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Get order statuses
exports.getOrderStatuses = async (req, res) => {
  try {
    const orderStatuses = await Order.aggregate([
      { $group: { _id: '$status', count: { $sum: 1 } } }
    ]);

    res.json(orderStatuses);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Get fulfillment rates
exports.getFulfillmentRates = async (req, res) => {
  try {
    const totalOrders = await Order.countDocuments();
    const fulfilledOrders = await Order.countDocuments({ status: 'fulfilled' });
    const fulfillmentRate = totalOrders ? (fulfilledOrders / totalOrders) * 100 : 0;

    res.json({ fulfillmentRate });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Get processing times
exports.getProcessingTimes = async (req, res) => {
  try {
    const processingTimes = await Order.aggregate([
      { $match: { status: 'fulfilled' } },
      { $project: { processingTime: { $subtract: ['$updatedAt', '$createdAt'] } } },
      { $group: { _id: null, averageProcessingTime: { $avg: '$processingTime' } } }
    ]);

    res.json(processingTimes[0] ? processingTimes[0].averageProcessingTime : 0);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
