import React, { useState } from 'react';
import { Modal } from '../ui/Modal';
import { Button } from '../ui/Button';
import { Product } from '../../types/product';
import { CheckoutForm } from './CheckoutForm';
import { OrderSummary } from './OrderSummary';
import { useNavigate } from 'react-router-dom';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: Product;
}

export function CheckoutModal({ isOpen, onClose, product }: CheckoutModalProps) {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [weight, setWeight] = useState(0.5);

  const handleFormSubmit = (data) => {
    setFormData(data);
    setStep(2);
  };

  const handleBack = () => {
    setStep(1);
  };

  const handleConfirmOrder = () => {
    // Here you would typically handle the order confirmation process
    // For now, we'll just navigate to a confirmation page
    navigate('/order-confirmation');
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="p-6">
        {step === 1 ? (
          <CheckoutForm
            onSubmit={handleFormSubmit}
            initialData={formData}
            product={product}
          />
        ) : (
          <OrderSummary
            formData={formData}
            product={product}
            quantity={quantity}
            weight={weight}
            onBack={handleBack}
            onConfirm={handleConfirmOrder}
          />
        )}
      </div>
    </Modal>
  );
}