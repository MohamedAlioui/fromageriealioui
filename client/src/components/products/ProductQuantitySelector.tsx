import React from 'react';
import { Minus, Plus } from 'lucide-react';

interface ProductQuantitySelectorProps {
  quantity: number;
  onQuantityChange: (quantity: number) => void;
  min?: number;
  max?: number;
}

export function ProductQuantitySelector({
  quantity,
  onQuantityChange,
  min = 1,
  max = 99
}: ProductQuantitySelectorProps) {
  const handleIncrement = () => {
    if (quantity < max) {
      onQuantityChange(quantity + 1);
    }
  };

  const handleDecrement = () => {
    if (quantity > min) {
      onQuantityChange(quantity - 1);
    }
  };

  return (
    <div className="flex items-center space-x-3">
      <button
        onClick={handleDecrement}
        className="p-2 rounded-full hover:bg-gray-100 transition-colors disabled:opacity-50"
        disabled={quantity <= min}
        aria-label="Diminuer la quantité"
      >
        <Minus className="w-4 h-4 text-gray-600" />
      </button>
      <span className="w-12 text-center font-medium text-lg">{quantity}</span>
      <button
        onClick={handleIncrement}
        className="p-2 rounded-full hover:bg-gray-100 transition-colors disabled:opacity-50"
        disabled={quantity >= max}
        aria-label="Augmenter la quantité"
      >
        <Plus className="w-4 h-4 text-gray-600" />
      </button>
    </div>
  );
}