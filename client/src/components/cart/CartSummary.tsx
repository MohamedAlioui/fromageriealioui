import React from 'react';
import { Button } from '../ui/Button';
import { ShoppingBag, Truck } from 'lucide-react';
import { useCart } from '../../hooks/useCart';
import { calculateCartTotal } from '../../utils/cartUtils';

export function CartSummary() {
  const { items } = useCart();
  const { subtotal, shipping, total } = calculateCartTotal(items);

  return (
    <div className="bg-white rounded-lg shadow p-6 space-y-6 sticky top-4">
      <h2 className="text-lg font-semibold text-gray-900">Récapitulatif</h2>
      
      <div className="space-y-4 text-sm">
        <div className="flex justify-between">
          <span className="text-gray-600">Sous-total</span>
          <span className="font-medium">{subtotal.toFixed(2)} TND</span>
        </div>
        
        <div className="flex justify-between">
          <span className="text-gray-600">Livraison</span>
          <span className="font-medium">{shipping.toFixed(2)} TND</span>
        </div>
        
        <div className="border-t pt-4">
          <div className="flex justify-between text-base font-medium">
            <span>Total</span>
            <span className="text-emerald-600">{total.toFixed(2)} TND</span>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <Button className="w-full flex items-center justify-center space-x-2">
          <ShoppingBag className="w-5 h-5" />
          <span>Passer la commande</span>
        </Button>
        
        <div className="bg-emerald-50 p-4 rounded-lg">
          <div className="flex items-center space-x-2 text-emerald-700">
            <Truck className="w-5 h-5" />
            <span className="text-sm font-medium">Livraison gratuite à partir de 100 TND</span>
          </div>
        </div>
      </div>
    </div>
  );
}