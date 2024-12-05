import React from 'react';
import { ShoppingCart, CreditCard } from 'lucide-react';
import { Button } from './Button';
import { LoadingSpinner } from './LoadingSpinner';

interface ActionButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'order' | 'cart';
  isLoading?: boolean;
}

export function ActionButton({ 
  variant = 'cart',
  isLoading = false,
  className = '',
  ...props 
}: ActionButtonProps) {
  const variants = {
    order: {
      icon: CreditCard,
      text: 'Commander',
      buttonVariant: 'secondary' as const,
      hoverEffect: 'hover:bg-gray-200'
    },
    cart: {
      icon: ShoppingCart,
      text: 'Ajouter au panier',
      buttonVariant: 'primary' as const,
      hoverEffect: 'hover:bg-amber-700'
    }
  };

  const { icon: Icon, text, buttonVariant, hoverEffect } = variants[variant];

  return (
    <Button
      variant={buttonVariant}
      className={`flex items-center justify-center space-x-2 transition-all duration-200 ${hoverEffect} ${className}`}
      disabled={isLoading}
      {...props}
    >
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          <Icon className="w-5 h-5" />
          <span className="font-medium">{text}</span>
        </>
      )}
    </Button>
  );
}