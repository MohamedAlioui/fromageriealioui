import React from 'react';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { CartItem as CartItemType } from '../../types/cart';
import { useCart } from '../../hooks/useCart';

interface CartItemProps {
  item: CartItemType;
}

export function CartItem({ item }: CartItemProps) {
  const { updateQuantity, removeItem } = useCart();

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity >= 1) {
      updateQuantity(item.id, newQuantity);
    }
  };

  const handleRemove = () => {
    removeItem(item.id);
  };

  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 p-4 bg-white rounded-lg shadow-sm">
      <img
        src={item.image}
        alt={item.name}
        className="w-24 h-24 object-cover rounded-lg"
      />
      
      <div className="flex-1">
        <h3 className="text-lg font-medium text-gray-900">{item.name}</h3>
        <p className="mt-1 text-sm text-gray-500">{item.weight}kg</p>
        <p className="mt-1 text-emerald-600 font-medium">{item.price} TND</p>
      </div>

      <div className="flex flex-col items-center space-y-4">
        <div className="flex items-center space-x-3 bg-gray-50 rounded-lg p-2">
          <button
            onClick={() => handleQuantityChange(item.quantity - 1)}
            className="p-1 rounded-full hover:bg-gray-200 transition-colors disabled:opacity-50"
            disabled={item.quantity <= 1}
            aria-label="Diminuer la quantité"
          >
            <Minus className="w-4 h-4 text-gray-600" />
          </button>
          <span className="w-8 text-center font-medium">{item.quantity}</span>
          <button
            onClick={() => handleQuantityChange(item.quantity + 1)}
            className="p-1 rounded-full hover:bg-gray-200 transition-colors"
            aria-label="Augmenter la quantité"
          >
            <Plus className="w-4 h-4 text-gray-600" />
          </button>
        </div>
        
        <button
          onClick={handleRemove}
          className="text-red-500 hover:text-red-600 transition-colors p-2"
          aria-label="Supprimer l'article"
        >
          <Trash2 className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}