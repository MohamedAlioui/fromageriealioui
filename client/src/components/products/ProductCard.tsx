import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, CreditCard } from 'lucide-react';
import { Badge } from '../ui/Badge';
import { ProductOrderModal } from './ProductOrderModal';
import { CartModal } from '../cart/CartModal';
import { Product } from '../../types/product';
import { useCart } from '../../hooks/useCart';
import { Button } from '../ui/Button';

interface ProductCardProps extends Product {}

export function ProductCard({ 
  id,
  name, 
  price, 
  image, 
  rating, 
  isNew = false,
  description = '',
  category,
}: ProductCardProps) {
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { addItem } = useCart();

  const handleAddToCart = async () => {
    setIsLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 500)); // Simulate API call
      setIsCartModalOpen(true);
    } finally {
      setIsLoading(false);
    }
  };

  const handleOrder = () => {
    setIsOrderModalOpen(true);
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
        </Link>
        
        <div className="p-4">
          <Link to={`/products/${id}`}>
            <h3 className="text-lg font-semibold mb-2 hover:text-emerald-600 transition-colors">
              {name}
            </h3>
          </Link>
          <div className="flex items-center justify-between mb-4">
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
          <div className="flex gap-2">
            <Button
              variant="secondary"
              className="flex-1 flex items-center justify-center space-x-2"
              onClick={handleAddToCart}
              disabled={isLoading}
            >
              <ShoppingCart className="w-4 h-4" />
              <span>Panier</span>
            </Button>
            <Button
              className="flex-1 flex items-center justify-center space-x-2"
              onClick={handleOrder }
              disabled={isLoading}
            >
              <CreditCard className="w-4 h-4" />
              <span>Commander</span>
            </Button>
          </div>
        </div>
      </div>

      <ProductOrderModal
        product={{ id, name, price, image, rating, isNew, description, category }}
        isOpen={isOrderModalOpen}
        onClose={() => setIsOrderModalOpen(false)}
      />

      <CartModal
        isOpen={isCartModalOpen}
        onClose={() => setIsCartModalOpen(false)}
        product={{ id, name, price, image, rating, isNew, description, category }}
        quantity={1}
        weight={0.5}
      />
    </>
  );
}