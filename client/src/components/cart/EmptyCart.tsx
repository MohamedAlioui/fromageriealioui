import React from 'react';
import { ShoppingBag } from 'lucide-react';
import { Button } from '../ui/Button';
import { Link } from 'react-router-dom';

export function EmptyCart() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-md mx-auto">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <ShoppingBag className="w-8 h-8 text-gray-400" />
          </div>
          
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">
            Votre panier est vide
          </h2>
          
          <p className="text-gray-600 mb-8">
            Découvrez nos délicieux fromages artisanaux et commencez votre shopping
          </p>
          
          <Link to="/products">
            <Button>
              Découvrir nos produits
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}