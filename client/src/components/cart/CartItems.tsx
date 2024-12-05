import React from 'react';
import { CartItem } from './CartItem';
import { useCart } from '../../hooks/useCart';

export function CartItems() {
  const { items } = useCart();

  return (
    <div className="space-y-4">
      {items.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
    </div>
  );
}