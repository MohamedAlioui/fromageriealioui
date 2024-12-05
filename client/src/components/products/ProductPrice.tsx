import React from 'react';

interface ProductPriceProps {
  basePrice: string;
  quantity: number;
  weight: number;
}

export function ProductPrice({ basePrice, quantity, weight }: ProductPriceProps) {
  const calculateTotal = () => {
    const price = parseFloat(basePrice.replace(/[^\d.]/g, ''));
    return (price * quantity * weight).toFixed(2);
  };

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <span className="text-gray-600">Prix unitaire:</span>
        <span className="font-medium">{basePrice}/kg</span>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-gray-600">Quantité:</span>
        <span className="font-medium">{quantity} × {weight}kg</span>
      </div>
      <div className="flex items-center justify-between text-lg font-bold text-emerald-600">
        <span>Total:</span>
        <span>{calculateTotal()} TND</span>
      </div>
    </div>
  );
}