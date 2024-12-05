const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blogController');

// Route to create a new blog post
router.post('/create', blogController.createBlogPost);

// Route to get all blog posts
router.get('/', blogController.getAllBlogPosts);

// Route to get blog post by ID
router.get('/:id', blogController.getBlogPostById);

// Route to get blog posts by category
router.get('/category/:category', blogController.getBlogPostsByCategory);

// Route to edit a blog post
router.put('/edit/:id', blogController.editBlogPost);

// Route to delete a blog post
router.delete('/delete/:id', blogController.deleteBlogPost);

// Additional routes can be added here

module.exports = router;
