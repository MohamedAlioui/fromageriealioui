import React from 'react';
import { Product } from '../../types/product';
import { ProductQuantitySelector } from '../products/ProductQuantitySelector';
import { ProductWeightSelector } from '../products/ProductWeightSelector';
import { ProductPrice } from '../products/ProductPrice';

interface OrderProductInfoProps {
  product: Product;
  quantity: number;
  weight: number;
  onQuantityChange: (quantity: number) => void;
  onWeightChange: (weight: number) => void;
}

export function OrderProductInfo({
  product,
  quantity,
  weight,
  onQuantityChange,
  onWeightChange
}: OrderProductInfoProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium text-gray-900">Détails du produit</h3>

      <div className="flex items-center space-x-4">
        <img
          src={product.image}
          alt={product.name}
          className="w-24 h-24 object-cover rounded-lg"
        />
        <div>
          <h4 className="font-medium">{product.name}</h4>
          <p className="text-sm text-gray-600">{product.price}/kg</p>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Poids
          </label>
          <ProductWeightSelector
            selectedWeight={weight}
            onWeightChange={onWeightChange}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Quantité
          </label>
          <ProductQuantitySelector
            quantity={quantity}
            onQuantityChange={onQuantityChange}
          />
        </div>

        <div className="bg-gray-50 p-4 rounded-lg">
          <ProductPrice
            basePrice={product.price}
            quantity={quantity}
            weight={weight}
          />
        </div>
      </div>
    </div>
  );
}