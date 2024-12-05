import React from 'react';
import { Product } from '../../types/product';
import { calculateOrderTotal } from '../../utils/orderUtils';

interface OrderSummaryProps {
  product: Product;
  quantity: number;
  weight: number;
}

export function OrderSummary({ product, quantity, weight }: OrderSummaryProps) {
  const { subtotal, shipping, total } = calculateOrderTotal(product.price, quantity, weight);

  return (
    <div className="bg-gray-50 p-4 rounded-lg space-y-3">
      <div className="flex justify-between text-sm">
        <span className="text-gray-600">Sous-total:</span>
        <span className="font-medium">{subtotal.toFixed(2)} TND</span>
      </div>
      <div className="flex justify-between text-sm">
        <span className="text-gray-600">Frais de livraison:</span>
        <span className="font-medium">{shipping.toFixed(2)} TND</span>
      </div>
      <div className="pt-2 border-t">
        <div className="flex justify-between text-lg font-semibold">
          <span>Total:</span>
          <span className="text-emerald-600">{total.toFixed(2)} TND</span>
        </div>
      </div>
    </div>
  );
}