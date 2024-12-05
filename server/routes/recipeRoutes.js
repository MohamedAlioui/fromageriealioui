const express = require('express');
const router = express.Router();
const recipeController = require('../controllers/recipeController');

// Route to create a new recipe
router.post('/create', recipeController.createRecipe);

// Route to edit a recipe
router.put('/edit/:id', recipeController.editRecipe);

// Route to get all recipes
router.get('/', recipeController.getAllRecipes);

// Route to get a single recipe by ID
router.get('/:id', recipeController.getRecipeById);

// Route to delete a recipe
router.delete('/:id', recipeController.deleteRecipe);

module.exports = router;
