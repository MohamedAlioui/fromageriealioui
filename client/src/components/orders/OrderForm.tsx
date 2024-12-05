import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { OrderContactInfo } from './OrderContactInfo';
import { OrderDeliveryInfo } from './OrderDeliveryInfo';
import { OrderProductInfo } from './OrderProductInfo';
import { Product } from '../../types/product';
import { Button } from '../ui/Button';
import { CreditCard } from 'lucide-react';
import logo from '../../assets/images/logo.png';

interface OrderFormProps {
  product: Product;
  quantity: number;
  weight: number;
  onQuantityChange: (quantity: number) => void;
  onWeightChange: (weight: number) => void;
  onSubmit: (data: any) => void;
}

interface OrderFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  postalCode: string;
  saveAddress: boolean;
}

export function OrderForm({
  product,
  quantity,
  weight,
  onQuantityChange,
  onWeightChange,
  onSubmit
}: OrderFormProps) {
  const methods = useForm<OrderFormData>({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      address: '',
      city: '',
      postalCode: '',
      saveAddress: false
    }
  });

  const handleSubmit = methods.handleSubmit((data) => {
    onSubmit({
      ...data,
      product,
      quantity,
      weight
    });
  });

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="flex justify-center mb-6">
          <img src={logo} alt="Logo" className="h-16 w-auto" />
        </div>

        <OrderProductInfo
          product={product}
          quantity={quantity}
          weight={weight}
          onQuantityChange={onQuantityChange}
          onWeightChange={onWeightChange}
        />
        
        <OrderContactInfo />
        
        <OrderDeliveryInfo />

        <div className="flex justify-end">
          <Button
            type="submit"
            className="flex items-center justify-center space-x-2"
          >
            <CreditCard className="w-5 h-5" />
            <span>Commander maintenant</span>
          </Button>
        </div>
      </form>
    </FormProvider>
  );
}