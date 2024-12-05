import React, { useState } from 'react';
import { RecipeGrid } from '../components/recipes/RecipeGrid';
import { RecipeFilters } from '../components/recipes/RecipeFilters';
import { RecipeSort } from '../components/recipes/RecipeSort';
import { useRecipes } from '../hooks/useRecipes';

export function RecipesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('featured');
  const { recipes, isLoading } = useRecipes();

  return (
    <main className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Idées Recettes</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Découvrez nos meilleures recettes mettant en valeur nos fromages artisanaux
          </p>
        </div>

        <div className="flex flex-col lg:flex-row lg:gap-x-8">
          <aside className="lg:w-64">
            <RecipeFilters
              selectedCategory={selectedCategory}
              selectedDifficulty={selectedDifficulty}
              onCategoryChange={setSelectedCategory}
              onDifficultyChange={setSelectedDifficulty}
            />
          </aside>

          <div className="flex-1">
            <div className="flex justify-end mb-6">
              <RecipeSort value={sortBy} onChange={setSortBy} />
            </div>

            <RecipeGrid
              recipes={recipes}
              isLoading={isLoading}
              selectedCategory={selectedCategory}
              selectedDifficulty={selectedDifficulty}
              sortBy={sortBy}
            />
          </div>
        </div>
      </div>
    </main>
  );
}