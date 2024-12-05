import React from 'react';

interface ProductSortProps {
  value: string;
  onChange: (value: string) => void;
}

const sortOptions = [
  { value: 'featured', label: 'En vedette' },
  { value: 'newest', label: 'Nouveautés' },
  { value: 'price-asc', label: 'Prix: Croissant' },
  { value: 'price-desc', label: 'Prix: Décroissant' },
];

export function ProductSort({ value, onChange }: ProductSortProps) {
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