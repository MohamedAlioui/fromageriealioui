import React from 'react';
import { UseFormRegister } from 'react-hook-form';

interface RememberMeProps {
  register: UseFormRegister<any>;
}

export function RememberMe({ register }: RememberMeProps) {
  return (
    <div className="flex items-center">
      <input
        id="remember-me"
        type="checkbox"
        className="h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-gray-300 rounded"
        {...register('rememberMe')}
      />
      <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
        Se souvenir de moi
      </label>
    </div>
  );
}