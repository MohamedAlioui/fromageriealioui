import React from 'react';
import { ActionButton } from '../ui/ActionButton';

interface ProductActionsProps {
  onAddToCart: () => void;
  onOrder: () => void;
  isLoading?: boolean;
  className?: string;
}

export function ProductActions({
  onAddToCart,
  onOrder,
  isLoading = false,
  className = ''
}: ProductActionsProps) {
  return (
    <div className={`flex flex-col sm:flex-row gap-2 ${className}`}>
      <ActionButton
        variant="cart"
        onClick={onAddToCart}
        isLoading={isLoading}
        className="flex-1 py-2.5"
      />
      <ActionButton
        variant="order"
        onClick={onOrder}
        isLoading={isLoading}
        className="flex-1 py-2.5"
      />
    </div>
  );
}