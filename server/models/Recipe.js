const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  category: {
    type: String,
    enum: ['appetizers', 'main courses', 'desserts'],
    required: true
  },
  ingredients: [
    {
      type: String,
      required: true
    }
  ],
  steps: [
    {
      type: String,
      required: true
    }
  ],
  images: [
    {
      type: String
    }
  ],
  videos: [
    {
      type: String
    }
  ],
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Recipe', recipeSchema);