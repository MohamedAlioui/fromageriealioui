import React, { useState } from 'react';
import { ShoppingCart, CreditCard, X } from 'lucide-react';
import { Badge } from './Badge';
import { ProductOrderModal } from '../products/ProductOrderModal';
import { CartModal } from '../cart/CartModal';
import { CheckoutModal } from '../checkout/CheckoutModal';
import { Product } from '../../types/product';
import { Button } from './Button';
import { Link } from 'react-router-dom';

interface ProductCardProps extends Product {}

export function ProductCard({ 
  id,
  name, 
  price, 
  image, 
  rating, 
  isNew = false,
  inStock = true,
  description = '',
}: ProductCardProps) {
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);
  const [isCheckoutModalOpen, setIsCheckoutModalOpen] = useState(false);
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const [selectedWeight, setSelectedWeight] = useState(0.5);
  const [showActions, setShowActions] = useState(false);

  const handleAddToCart = (quantity: number, weight: number) => {
    setSelectedQuantity(quantity);
    setSelectedWeight(weight);
    setIsOrderModalOpen(false);
    setIsCartModalOpen(true);
  };

  return (
    <>
      <div className="bg-white rounded-lg shadow-md overflow-hidden group hover:shadow-xl transition-all duration-300">
        <Link to={`/products/${id}`} className="block relative h-48">
          <img 
            src={image} 
            alt={name}
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
          />
          {isNew && (
            <div className="absolute top-2 left-2">
              <Badge variant="success">Nouveau</Badge>
            </div>
          )}
          
          {/* Shopping Cart Button */}
          <button
            onClick={(e) => {
              e.preventDefault();
              setShowActions(true);
            }}
            className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md hover:bg-gray-50 transition-colors"
          >
            <ShoppingCart className="w-5 h-5 text-emerald-600" />
          </button>

          {/* Actions Overlay */}
          {showActions && (
            <div className="absolute inset-0 bg-black/60 transition-opacity duration-300" onClick={(e) => e.preventDefault()}>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setShowActions(false);
                }}
                className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md hover:bg-gray-50 transition-colors"
              >
                <X className="w-5 h-5 text-gray-600" />
              </button>
              
              <div className="absolute inset-0 flex flex-col items-center justify-center space-y-3">
                <Button 
                  onClick={(e) => {
                    e.preventDefault();
                    setShowActions(false);
                    setIsOrderModalOpen(true);
                  }}
                  className="w-48 flex items-center justify-center space-x-2"
                  size="sm"
                >
                  <ShoppingCart className="w-4 h-4" />
                  <span>Ajouter au panier</span>
                </Button>
                
                <Button 
                  variant="secondary"
                  className="w-48 flex items-center justify-center space-x-2 bg-white/90 hover:bg-white"
                  size="sm"
                  onClick={(e) => {
                    e.preventDefault();
                    setShowActions(false);
                    setIsCheckoutModalOpen(true);
                  }}
                >
                  <CreditCard className="w-4 h-4" />
                  <span>Passer commande</span>
                </Button>
              </div>
            </div>
          )}
        </Link>
        
        <div className="p-4">
          <Link to={`/products/${id}`}>
            <h3 className="text-lg font-semibold mb-2 hover:text-emerald-600 transition-colors">
              {name}
            </h3>
          </Link>
          <div className="flex items-center justify-between">
            <span className="text-emerald-700 font-bold">{price}</span>
            <div className="flex">
              {[...Array(rating)].map((_, i) => (
                <svg
                  key={i}
                  className="w-4 h-4 fill-current text-amber-400"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>
          </div>
          {!inStock && (
            <div className="mt-2">
              <Badge variant="warning">Rupture de stock</Badge>
            </div>
          )}
        </div>
      </div>

      <ProductOrderModal
        product={{ id, name, price, image, rating, isNew, inStock, description }}
        isOpen={isOrderModalOpen}
        onClose={() => setIsOrderModalOpen(false)}
      />

      <CartModal
        isOpen={isCartModalOpen}
        onClose={() => setIsCartModalOpen(false)}
        product={{ id, name, price, image, rating, isNew, inStock, description }}
        quantity={selectedQuantity}
        weight={selectedWeight}
      />

      <CheckoutModal
        isOpen={isCheckoutModalOpen}
        onClose={() => setIsCheckoutModalOpen(false)}
        product={{ id, name, price, image, rating, isNew, inStock, description }}
      />
    </>
  );
}