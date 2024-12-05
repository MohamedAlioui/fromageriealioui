import React from 'react';
import { Modal } from '../ui/Modal';
import { Button } from '../ui/Button';
import { ShoppingBag, ArrowRight } from 'lucide-react';
import { Product } from '../../types/product';
import { useNavigate } from 'react-router-dom';

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: Product;
  quantity: number;
  weight: number;
}

export function CartModal({ isOpen, onClose, product, quantity, weight }: CartModalProps) {
  const navigate = useNavigate();

  const calculateTotal = () => {
    const basePrice = parseFloat(product.price.replace(/[^\d.]/g, ''));
    return (basePrice * weight * quantity).toFixed(2);
  };

  const handleContinueShopping = () => {
    onClose();
  };

  const handleCheckout = () => {
    navigate('/cart');
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="p-6">
        <div className="flex items-center justify-center mb-6">
          <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
            <ShoppingBag className="w-6 h-6 text-emerald-600" />
          </div>
        </div>

        <h3 className="text-xl font-semibold text-center mb-6">
          Produit ajouté au panier
        </h3>

        <div className="bg-gray-50 rounded-lg p-4 mb-6">
          <div className="flex items-center space-x-4">
            <img
              src={product.image}
              alt={product.name}
              className="w-16 h-16 object-cover rounded"
            />
            <div>
              <h4 className="font-medium">{product.name}</h4>
              <p className="text-sm text-gray-600">
                Quantité: {quantity} × {weight}kg
              </p>
              <p className="text-emerald-600 font-semibold mt-1">
                Total: {calculateTotal()} TND
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <Button
            variant="secondary"
            className="flex-1 flex items-center justify-center space-x-2"
            onClick={handleContinueShopping}
          >
            <ShoppingBag className="w-5 h-5" />
            <span>Continuer mes achats</span>
          </Button>
          <Button
            className="flex-1 flex items-center justify-center space-x-2"
            onClick={handleCheckout}
          >
            <span>Voir mon panier</span>
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </Modal>
  );
}