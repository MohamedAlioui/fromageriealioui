import React from 'react';
import { useFormContext } from 'react-hook-form';
import { FormInput } from '../../ui/FormInput';
import { MapPin } from 'lucide-react';

export function DeliveryAddress() {
  const { register, formState: { errors } } = useFormContext();

  return (
    <FormInput
      label="Adresse"
      icon={MapPin}
      {...register('address', {
        required: 'L\'adresse est requise'
      })}
      error={errors.address?.message as string}
      placeholder="Numéro et nom de rue"
    />
  );
}