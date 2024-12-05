import React from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '../ui/Button';
import { Banknote, Plus, Minus } from 'lucide-react';
import { Product } from '../../types/product';

interface CheckoutFormProps {
  onSubmit: (data: any) => void;
  initialData: any;
  product: Product;
}

export function CheckoutForm({ onSubmit, initialData, product }: CheckoutFormProps) {
  const { register, handleSubmit, watch, setValue, formState: { errors } } = useForm({
    defaultValues: {
      ...initialData,
      quantity: 1,
      weight: 0.5
    }
  });

  const quantity = watch('quantity');
  const weight = watch('weight');

  const handleIncrement = () => {
    setValue('quantity', quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setValue('quantity', quantity - 1);
    }
  };

  const calculateTotal = () => {
    const basePrice = parseFloat(product.price.replace(/[^\d.]/g, ''));
    return (basePrice * weight * quantity).toFixed(2);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-900">Informations de livraison</h2>
        <p className="text-gray-600 mt-1">Veuillez remplir vos informations de livraison</p>
      </div>

      {/* Product Information */}
      <div className="bg-gray-50 rounded-lg p-4">
        <div className="flex items-center space-x-4">
          <img
            src={product.image}
            alt={product.name}
            className="w-20 h-20 object-cover rounded"
          />
          <div className="flex-1">
            <h3 className="font-medium">{product.name}</h3>
            <p className="text-sm text-gray-600">{product.price} / kg</p>
          </div>
        </div>

        <div className="mt-4 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Poids</label>
            <select
              {...register('weight')}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
            >
              <option value="0.5">500g</option>
              <option value="1">1 kg</option>
              <option value="2">2 kg</option>
              <option value="5">5 kg</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Quantité</label>
            <div className="flex items-center space-x-3">
              <button
                type="button"
                onClick={handleDecrement}
                className="p-2 rounded-full hover:bg-gray-200"
                disabled={quantity <= 1}
              >
                <Minus className="w-4 h-4 text-gray-600" />
              </button>
              <span className="w-12 text-center font-medium">{quantity}</span>
              <button
                type="button"
                onClick={handleIncrement}
                className="p-2 rounded-full hover:bg-gray-200"
              >
                <Plus className="w-4 h-4 text-gray-600" />
              </button>
            </div>
          </div>

          <div className="text-right font-medium text-lg">
            Total: {calculateTotal()} TND
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Nom</label>
          <input
            type="text"
            {...register('lastName', { required: true })}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
          />
          {errors.lastName && <span className="text-red-500 text-sm">Ce champ est requis</span>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Prénom</label>
          <input
            type="text"
            {...register('firstName', { required: true })}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
          />
          {errors.firstName && <span className="text-red-500 text-sm">Ce champ est requis</span>}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Adresse</label>
        <input
          type="text"
          {...register('address', { required: true })}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
        />
        {errors.address && <span className="text-red-500 text-sm">Ce champ est requis</span>}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Téléphone</label>
        <input
          type="tel"
          {...register('phone', { required: true })}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
        />
        {errors.phone && <span className="text-red-500 text-sm">Ce champ est requis</span>}
      </div>

      <div className="bg-emerald-50 p-4 rounded-lg">
        <div className="flex items-center space-x-3">
          <Banknote className="w-5 h-5 text-emerald-600" />
          <span className="font-medium">Paiement à la livraison</span>
        </div>
        <p className="text-sm text-gray-600 mt-2 ml-8">
          Payez en espèces à la réception de votre commande
        </p>
      </div>

      <Button type="submit" className="w-full">
        Commander • {calculateTotal()} TND
      </Button>
    </form>
  );
}