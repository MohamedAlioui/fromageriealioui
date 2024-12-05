import React from 'react';
import { Modal } from '../ui/Modal';
import { Button } from '../ui/Button';
import { CheckCircle } from 'lucide-react';

interface OrderConfirmationProps {
  isOpen: boolean;
  onClose: () => void;
  orderNumber: string;
}

export function OrderConfirmation({ isOpen, onClose, orderNumber }: OrderConfirmationProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="p-6 text-center">
        <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-emerald-100 mb-4">
          <CheckCircle className="h-6 w-6 text-emerald-600" />
        </div>
        <h3 className="text-lg font-medium text-gray-900 mb-2">
          Commande confirmée !
        </h3>
        <p className="text-sm text-gray-500 mb-4">
          Votre numéro de commande est : <span className="font-medium">{orderNumber}</span>
        </p>
        <p className="text-sm text-gray-500 mb-6">
          Vous recevrez un email de confirmation avec les détails de votre commande.
        </p>
        <Button onClick={onClose} className="w-full">
          Continuer mes achats
        </Button>
      </div>
    </Modal>
  );
}