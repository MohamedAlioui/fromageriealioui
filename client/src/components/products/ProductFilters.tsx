import React from 'react';
import { Badge } from '../ui/Badge';

interface ProductFiltersProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const categories = [
  { id: 'all', name: 'Tous les produits', count: 12 },
  { id: 'semi-cure', name: 'Semi-curé', count: 4 },
  { id: 'mozzarella', name: 'Mozzarella', count: 3 },
  { id: 'gouda', name: 'Gouda', count: 2 },
  { id: 'nouveau', name: 'Nouveautés', count: 3 },
];

export function ProductFilters({ selectedCategory, onCategoryChange }: ProductFiltersProps) {
  return (
    <div className="hidden lg:block">
      <h3 className="text-lg font-medium text-gray-900 mb-4">Catégories</h3>
      <div className="space-y-3">
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
  );
}