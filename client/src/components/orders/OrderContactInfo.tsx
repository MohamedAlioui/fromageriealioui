import React from 'react';
import { useFormContext } from 'react-hook-form';
import { FormInput } from '../ui/FormInput';
import { User, Mail, Phone } from 'lucide-react';

export function OrderContactInfo() {
  const { register, formState: { errors } } = useFormContext();

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium text-gray-900">Informations de contact</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormInput
          label="Prénom"
          icon={User}
          {...register('firstName', {
            required: 'Le prénom est requis'
          })}
          error={errors.firstName?.message as string}
        />

        <FormInput
          label="Nom"
          icon={User}
          {...register('lastName', {
            required: 'Le nom est requis'
          })}
          error={errors.lastName?.message as string}
        />
      </div>

      <FormInput
        label="Email"
        icon={Mail}
        type="email"
        {...register('email', {
          required: 'L\'email est requis',
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: 'Adresse email invalide'
          }
        })}
        error={errors.email?.message as string}
      />

      <FormInput
        label="Téléphone"
        icon={Phone}
        type="tel"
        {...register('phone', {
          required: 'Le numéro de téléphone est requis',
          pattern: {
            value: /^[0-9+\s-]{8,}$/,
            message: 'Numéro de téléphone invalide'
          }
        })}
        error={errors.phone?.message as string}
      />
    </div>
  );
}