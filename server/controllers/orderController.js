const Order = require('../models/Order');
const { sendOrderStatusNotification } = require('../utils/emailService');

// Create new order
exports.addOrderItems = async (req, res) => {
  const {
    orderItems,
    shippingAddress,
    paymentMethod,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice
  } = req.body;

  if (orderItems && orderItems.length === 0) {
    return res.status(400).json({ message: 'No order items' });
  } else {
    const order = new Order({
      user: req.user._id,
      orderItems,
      shippingAddress,
      paymentMethod,
      itemsPrice,
      taxPrice,
      shippingPrice,
      totalPrice
    });

    const createdOrder = await order.save();
    res.status(201).json(createdOrder);
  }
};

// Get order by ID
exports.getOrderById = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id).populate('user', 'name email');

    if (order) {
      res.json(order);
    } else {
      res.status(404).json({ message: 'Order not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Get all orders
exports.getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find({}).populate('user', 'name email');
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Update order status
exports.updateOrderStatus = async (req, res) => {
  const { id } = req.params;
  const { paymentStatus, shippingStatus } = req.body;

  try {
    const order = await Order.findById(id);

    if (order) {
      order.paymentStatus = paymentStatus || order.paymentStatus;
      order.shippingStatus = shippingStatus || order.shippingStatus;

      const updatedOrder = await order.save();
      res.json(updatedOrder);

      // Send notification
      sendOrderStatusNotification(order.user.email, order._id, shippingStatus || order.shippingStatus);
    } else {
      res.status(404).json({ message: 'Order not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Update an order
exports.updateOrder = async (req, res) => {
  const { id } = req.params;
  const updateFields = req.body;

  try {
    const order = await Order.findByIdAndUpdate(id, updateFields, { new: true });

    if (order) {
      res.json(order);
    } else {
      res.status(404).json({ message: 'Order not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Delete an order
exports.deleteOrder = async (req, res) => {
  const { id } = req.params;

  try {
    const order = await Order.findByIdAndDelete(id);

    if (order) {
      res.json({ message: 'Order deleted successfully' });
    } else {
      res.status(404).json({ message: 'Order not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Checkout process
exports.checkout = async (req, res) => {
  const {
    cartItems,
    shippingAddress,
    paymentMethod
  } = req.body;

  try {
    // Validate cart items
    if (!cartItems || cartItems.length === 0) {
      return res.status(400).json({ message: 'Cart is empty' });
    }

    // Calculate total price
    const itemsPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const taxPrice = 0.1 * itemsPrice; // Example tax calculation
    const shippingPrice = 10; // Flat shipping rate
    const totalPrice = itemsPrice + taxPrice + shippingPrice;

    // Create order
    const order = new Order({
      user: req.user._id,
      orderItems: cartItems,
      shippingAddress,
      paymentMethod,
      itemsPrice,
      taxPrice,
      shippingPrice,
      totalPrice
    });

    const createdOrder = await order.save();

    res.status(201).json(createdOrder);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
