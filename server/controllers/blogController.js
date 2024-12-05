const BlogPost = require('../models/BlogPost');

// Create a new blog post
exports.createBlogPost = async (req, res) => {
  try {
    const { 
      title, 
      content, 
      category,
      tags,
      imageUrl,
      status = 'draft'  // default to draft if not specified
    } = req.body;

    // Create blog post without requiring req.user
    const blogPost = new BlogPost({
      title,
      content,
      category,
      tags,
      imageUrl,
      status,
      author: '64e4d6a9a2c2da1d1c567a8d', // Temporary static author ID for testing
      publishDate: new Date()
    });

    const createdBlogPost = await blogPost.save();
    res.status(201).json({
      success: true,
      data: createdBlogPost
    });
  } catch (error) {
    console.error('Blog creation error:', error); // Add detailed error logging
    res.status(500).json({
      success: false,
      message: 'Error creating blog post',
      error: error.message
    });
  }
};

// Get all blog posts
exports.getAllBlogPosts = async (req, res) => {
  try {
    const blogPosts = await BlogPost.find()
      .sort({ createdAt: -1 });
    res.json({
      success: true,
      data: blogPosts
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching blog posts',
      error: error.message
    });
  }
};

// Get blog post by ID
exports.getBlogPostById = async (req, res) => {
  try {
    const blogPost = await BlogPost.findById(req.params.id);
    
    if (!blogPost) {
      return res.status(404).json({
        success: false,
        message: 'Blog post not found'
      });
    }

    res.json({
      success: true,
      data: blogPost
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching blog post',
      error: error.message
    });
  }
};

// Get blog posts by category
exports.getBlogPostsByCategory = async (req, res) => {
  try {
    const blogPosts = await BlogPost.find({ 
      category: req.params.category 
    }).sort({ createdAt: -1 });

    res.json({
      success: true,
      data: blogPosts
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching blog posts by category',
      error: error.message
    });
  }
};

// Edit a blog post
exports.editBlogPost = async (req, res) => {
  try {
    const { 
      title, 
      content, 
      category,
      tags,
      imageUrl,
      status 
    } = req.body;

    const blogPost = await BlogPost.findById(req.params.id);

    if (!blogPost) {
      return res.status(404).json({
        success: false,
        message: 'Blog post not found'
      });
    }

    // Update fields if provided
    if (title) blogPost.title = title;
    if (content) blogPost.content = content;
    if (category) blogPost.category = category;
    if (tags) blogPost.tags = tags;
    if (imageUrl) blogPost.imageUrl = imageUrl;
    if (status) blogPost.status = status;

    const updatedBlogPost = await blogPost.save();
    res.json({
      success: true,
      data: updatedBlogPost
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error updating blog post',
      error: error.message
    });
  }
};

// Delete a blog post
exports.deleteBlogPost = async (req, res) => {
  try {
    const blogPost = await BlogPost.findByIdAndDelete(req.params.id);
    
    if (!blogPost) {
      return res.status(404).json({
        success: false,
        message: 'Blog post not found'
      });
    }

    res.json({
      success: true,
      message: 'Blog post deleted successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error deleting blog post',
      error: error.message
    });
  }
};
