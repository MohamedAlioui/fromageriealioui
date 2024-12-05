import React from 'react';
import { Badge } from '../ui/Badge';

interface RecipeFiltersProps {
  selectedCategory: string;
  selectedDifficulty: string;
  onCategoryChange: (category: string) => void;
  onDifficultyChange: (difficulty: string) => void;
}

const categories = [
  { id: 'all', name: 'Toutes les recettes', count: 8 },
  { id: 'entrees', name: 'Entrées', count: 3 },
  { id: 'plats-principaux', name: 'Plats principaux', count: 3 },
  { id: 'desserts', name: 'Desserts', count: 2 },
];

const difficulties = [
  { id: 'all', name: 'Toutes les difficultés' },
  { id: 'facile', name: 'Facile' },
  { id: 'moyen', name: 'Moyen' },
  { id: 'difficile', name: 'Difficile' },
];

export function RecipeFilters({
  selectedCategory,
  selectedDifficulty,
  onCategoryChange,
  onDifficultyChange,
}: RecipeFiltersProps) {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">Catégories</h3>
        <div className="space-y-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => onCategoryChange(category.id)}
              className={`flex items-center justify-between w-full px-4 py-2 text-sm rounded-lg transition-colors ${
                selectedCategory === category.id
                  ? 'bg-emerald-50 text-emerald-700'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <span>{category.name}</span>
              <Badge variant="info">{category.count}</Badge>
            </button>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">Difficulté</h3>
        <div className="space-y-2">
          {difficulties.map((difficulty) => (
            <button
              key={difficulty.id}
              onClick={() => onDifficultyChange(difficulty.id)}
              className={`w-full px-4 py-2 text-sm rounded-lg transition-colors ${
                selectedDifficulty === difficulty.id
                  ? 'bg-emerald-50 text-emerald-700'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              {difficulty.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}