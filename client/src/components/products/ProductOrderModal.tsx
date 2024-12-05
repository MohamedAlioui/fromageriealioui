import React, { useState } from 'react';
import { Modal } from '../ui/Modal';
import { Product } from '../../types/product';
import { useCart } from '../../hooks/useCart';
import { OrderForm } from '../orders/OrderForm';
import { OrderConfirmation } from '../orders/OrderConfirmation';
import { generateOrderNumber } from '../../utils/orderUtils';

interface ProductOrderModalProps {
  product: Product;
  isOpen: boolean;
  onClose: () => void;
}

export function ProductOrderModal({ product, isOpen, onClose }: ProductOrderModalProps) {
  const [quantity, setQuantity] = useState(1);
  const [weight, setWeight] = useState(0.5);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [orderNumber, setOrderNumber] = useState('');
  const { addItem } = useCart();

  const handleSubmit = async (data: any) => {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      const newOrderNumber = generateOrderNumber();
      setOrderNumber(newOrderNumber);
      setShowConfirmation(true);
    } catch (error) {
      console.error('Error submitting order:', error);
    }
  };

  const handleConfirmationClose = () => {
    setShowConfirmation(false);
    onClose();
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <div className="p-6">
          <h3 className="text-xl font-semibold text-center mb-6">
            Commander {product.name}
          </h3>

          <OrderForm
            product={product}
            quantity={quantity}
            weight={weight}
            onQuantityChange={setQuantity}
            onWeightChange={setWeight}
            onSubmit={handleSubmit}
          />
        </div>
      </Modal>

      <OrderConfirmation
        isOpen={showConfirmation}
        onClose={handleConfirmationClose}
        orderNumber={orderNumber}
      />
    </>
  );
}