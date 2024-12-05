const Recipe = require('../models/Recipe');

// Create a new recipe
exports.createRecipe = async (req, res) => {
  const { title, description, category, ingredients, steps, images, videos } = req.body;

  try {
    const recipe = new Recipe({
      title,
      description,
      category,
      ingredients,
      steps,
      images,
      videos,
      createdBy: req.user._id
    });

    const createdRecipe = await recipe.save();
    res.status(201).json(createdRecipe);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Edit a recipe
exports.editRecipe = async (req, res) => {
  const { id } = req.params;
  const { title, description, category, ingredients, steps, images, videos } = req.body;

  try {
    const recipe = await Recipe.findById(id);

    if (recipe) {
      recipe.title = title || recipe.title;
      recipe.description = description || recipe.description;
      recipe.category = category || recipe.category;
      recipe.ingredients = ingredients || recipe.ingredients;
      recipe.steps = steps || recipe.steps;
      recipe.images = images || recipe.images;
      recipe.videos = videos || recipe.videos;

      const updatedRecipe = await recipe.save();
      res.json(updatedRecipe);
    } else {
      res.status(404).json({ message: 'Recipe not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Get all recipes
exports.getAllRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find();
    res.json(recipes);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Get a single recipe
exports.getRecipeById = async (req, res) => {
  const { id } = req.params;

  try {
    const recipe = await Recipe.findById(id);
    if (recipe) {
      res.json(recipe);
    } else {
      res.status(404).json({ message: 'Recipe not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Delete a recipe
exports.deleteRecipe = async (req, res) => {
  const { id } = req.params;

  try {
    const recipe = await Recipe.findByIdAndDelete(id);
    if (recipe) {
      res.json({ message: 'Recipe deleted successfully' });
    } else {
      res.status(404).json({ message: 'Recipe not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
