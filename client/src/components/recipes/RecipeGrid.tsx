import React from 'react';
import { RecipeCard } from './RecipeCard';
import { RecipeSkeleton } from './RecipeSkeleton';
import { Recipe } from '../../data/recipes';
import { filterAndSortRecipes } from '../../utils/recipeUtils';

interface RecipeGridProps {
  recipes: Recipe[];
  isLoading: boolean;
  selectedCategory: string;
  selectedDifficulty: string;
  sortBy: string;
}

export function RecipeGrid({
  recipes,
  isLoading,
  selectedCategory,
  selectedDifficulty,
  sortBy,
}: RecipeGridProps) {
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, i) => (
          <RecipeSkeleton key={i} />
        ))}
      </div>
    );
  }

  const filteredRecipes = filterAndSortRecipes(recipes, selectedCategory, selectedDifficulty, sortBy);

  if (filteredRecipes.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500">Aucune recette trouvée</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredRecipes.map((recipe) => (
        <RecipeCard key={recipe.id} {...recipe} />
      ))}
    </div>
  );
}