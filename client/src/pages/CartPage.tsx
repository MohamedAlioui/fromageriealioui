import React from 'react';
import { CartItems } from '../components/cart/CartItems';
import { CartSummary } from '../components/cart/CartSummary';
import { EmptyCart } from '../components/cart/EmptyCart';
import { useCart } from '../hooks/useCart';

export function CartPage() {
  const { items, isLoading } = useCart();

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-pulse space-y-4">
            <div className="h-8 w-64 bg-gray-200 rounded"></div>
            <div className="h-96 bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>
    );
  }

  if (items.length === 0) {
    return <EmptyCart />;
  }

  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Mon Panier</h1>
        
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-8">
            <CartItems />
          </div>
          
          <div className="lg:col-span-4 mt-8 lg:mt-0">
            <CartSummary />
          </div>
        </div>
      </div>
    </main>
  );
}