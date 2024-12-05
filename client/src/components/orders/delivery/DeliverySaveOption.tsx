import React from 'react';
import { useFormContext } from 'react-hook-form';

export function DeliverySaveOption() {
  const { register } = useFormContext();

  return (
    <div className="mt-4">
      <label className="flex items-start space-x-2">
        <input
          type="checkbox"
          className="mt-1 h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-gray-300 rounded"
          {...register('saveAddress')}
        />
        <span className="text-sm text-gray-600">
          Sauvegarder cette adresse pour mes prochaines commandes
        </span>
      </label>
    </div>
  );
}