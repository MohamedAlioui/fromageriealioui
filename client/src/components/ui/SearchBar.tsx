import React from 'react';
import { SearchIcon } from '../icons';

export function SearchBar() {
  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Rechercher un produit..."
        className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
      />
      <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
    </div>
  );
}