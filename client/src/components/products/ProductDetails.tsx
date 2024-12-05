import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, Truck, Shield, ArrowLeft, ShoppingCart } from 'lucide-react';
import { Button } from '../ui/Button';
import { Product } from '../../types/product';
import { ProductQuantitySelector } from './ProductQuantitySelector';
import { ProductWeightSelector } from './ProductWeightSelector';
import { ProductPrice } from './ProductPrice';
import { ProductOrderModal } from './ProductOrderModal';
import { CartModal } from '../cart/CartModal';
import { CheckoutModal } from '../checkout/CheckoutModal';

interface ProductDetailsProps {
  product: Product;
}

export function ProductDetails({ product }: ProductDetailsProps) {
  const [quantity, setQuantity] = useState(1);
  const [weight, setWeight] = useState(0.5);
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);
  const [isCheckoutModalOpen, setIsCheckoutModalOpen] = useState(false);

  return (
    <>
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
          {/* Product Image */}
          <div className="relative">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-[400px] object-cover rounded-lg"
            />
            {product.isNew && (
              <span className="absolute top-4 left-4 bg-emerald-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                Nouveau
              </span>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <Link to="/products" className="inline-flex items-center text-gray-600 hover:text-emerald-600">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Retour aux produits
            </Link>

            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
              <div className="flex items-center space-x-2">
                {[...Array(product.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current text-amber-400" />
                ))}
                <span className="text-gray-600 text-sm ml-2">({product.rating} étoiles)</span>
              </div>
            </div>

            <p className="text-gray-600">{product.description}</p>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Poids
                </label>
                <ProductWeightSelector
                  selectedWeight={weight}
                  onWeightChange={setWeight}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Quantité
                </label>
                <ProductQuantitySelector
                  quantity={quantity}
                  onQuantityChange={setQuantity}
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

            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-sm">
                <Truck className="w-5 h-5 text-emerald-600" />
                <span>Livraison gratuite à partir de 100 TND</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Shield className="w-5 h-5 text-emerald-600" />
                <span>Garantie qualité 100%</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                className="flex-1 flex items-center justify-center space-x-2"
                onClick={() => setIsCartModalOpen(true)}
              >
                <ShoppingCart className="w-5 h-5" />
                <span>Ajouter au panier</span>
              </Button>
              <Button
                variant="secondary"
                className="flex-1"
                onClick={() => setIsCheckoutModalOpen(true)}
              >
                Commander
              </Button>
            </div>
          </div>
        </div>
      </div>

      <ProductOrderModal
        product={product}
        isOpen={isOrderModalOpen}
        onClose={() => setIsOrderModalOpen(false)}
      />

      <CartModal
        isOpen={isCartModalOpen}
        onClose={() => setIsCartModalOpen(false)}
        product={product}
        quantity={quantity}
        weight={weight}
      />

      <CheckoutModal
        isOpen={isCheckoutModalOpen}
        onClose={() => setIsCheckoutModalOpen(false)}
        product={product}
      />
    </>
  );
}