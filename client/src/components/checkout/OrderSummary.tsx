import React from 'react';
import { Button } from '../ui/Button';
import { ArrowLeft, Check } from 'lucide-react';
import { Product } from '../../types/product';

interface OrderSummaryProps {
  formData: any;
  product: Product;
  quantity: number;
  weight: number;
  onBack: () => void;
  onConfirm: () => void;
}

export function OrderSummary({ 
  formData, 
  product, 
  quantity, 
  weight,
  onBack,
  onConfirm 
}: OrderSummaryProps) {
  const calculateTotal = () => {
    const basePrice = parseFloat(product.price.replace(/[^\d.]/g, ''));
    const subtotal = basePrice * weight * quantity;
    const shipping = 7; // Fixed shipping cost
    return {
      subtotal,
      shipping,
      total: subtotal + shipping
    };
  };

  const { subtotal, shipping, total } = calculateTotal();

  return (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-900">Récapitulatif de la commande</h2>
        <p className="text-gray-600 mt-1">Vérifiez les détails de votre commande</p>
      </div>

      <div className="bg-gray-50 rounded-lg p-4">
        <div className="flex items-center space-x-4">
          <img
            src={product.image}
            alt={product.name}
            className="w-20 h-20 object-cover rounded"
          />
          <div>
            <h3 className="font-medium">{product.name}</h3>
            <p className="text-sm text-gray-600">
              Quantité: {quantity} × {weight}kg
            </p>
          </div>
        </div>
      </div>

      <div className="border-t pt-4">
        <h3 className="font-medium mb-3">Informations de livraison</h3>
        <div className="text-sm text-gray-600 space-y-1">
          <p>{formData.firstName} {formData.lastName}</p>
          <p>{formData.address}</p>
          <p>{formData.phone}</p>
        </div>
      </div>

      <div className="border-t pt-4 space-y-2">
        <div className="flex justify-between text-sm">
          <span>Sous-total</span>
          <span>{subtotal.toFixed(2)} TND</span>
        </div>
        <div className="flex justify-between text-sm">
          <span>Frais de livraison</span>
          <span>{shipping.toFixed(2)} TND</span>
        </div>
        <div className="flex justify-between font-semibold text-lg pt-2">
          <span>Total</span>
          <span>{total.toFixed(2)} TND</span>
        </div>
      </div>

      <div className="flex space-x-4">
        <Button
          variant="secondary"
          onClick={onBack}
          className="flex-1 flex items-center justify-center space-x-2"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Retour</span>
        </Button>
        <Button
          onClick={onConfirm}
          className="flex-1 flex items-center justify-center space-x-2"
        >
          <Check className="w-4 h-4" />
          <span>Confirmer la commande</span>
        </Button>
      </div>
    </div>
  );
}