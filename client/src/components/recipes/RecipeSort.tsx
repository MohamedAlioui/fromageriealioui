import React from 'react';

interface RecipeSortProps {
  value: string;
  onChange: (value: string) => void;
}

const sortOptions = [
  { value: 'featured', label: 'En vedette' },
  { value: 'prep-asc', label: 'Temps de préparation ↑' },
  { value: 'prep-desc', label: 'Temps de préparation ↓' },
  { value: 'difficulty-asc', label: 'Difficulté ↑' },
  { value: 'difficulty-desc', label: 'Difficulté ↓' },
];

export function RecipeSort({ value, onChange }: RecipeSortProps) {
  return (
    <div className="flex items-center space-x-2">
      <span className="text-sm text-gray-600">Trier par:</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="text-sm border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500"
      >
        {sortOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}