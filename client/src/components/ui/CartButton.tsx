import React from 'react';
import { ShoppingCartIcon } from '../icons';

export function CartButton() {
  return (
    <button className="relative p-2 hover:bg-gray-100 rounded-full">
      <ShoppingCartIcon className="h-6 w-6 text-emerald-700" />
      <span className="absolute -top-1 -right-1 bg-amber-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
        3
      </span>
    </button>
  );
}