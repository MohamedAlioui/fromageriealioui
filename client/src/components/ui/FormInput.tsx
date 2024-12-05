import React, { forwardRef } from 'react';
import { LucideIcon } from 'lucide-react';

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  icon?: LucideIcon;
  error?: string;
}

export const FormInput = forwardRef<HTMLInputElement, FormInputProps>(
  ({ label, icon: Icon, error, className = '', ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {label}
          </label>
        )}
        
        <div className="relative">
          {Icon && (
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Icon className="h-5 w-5 text-gray-400" />
            </div>
          )}
          
          <input
            ref={ref}
            className={`
              block w-full rounded-md border-gray-300 shadow-sm
              focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm
              ${Icon ? 'pl-10' : 'pl-3'}
              ${error ? 'border-red-300' : 'border-gray-300'}
              ${error ? 'focus:ring-red-500 focus:border-red-500' : ''}
              ${className}
              disabled:bg-gray-50 disabled:text-gray-500
            `}
            {...props}
          />
        </div>

        {error && (
          <p className="mt-1 text-sm text-red-600" role="alert">
            {error}
          </p>
        )}
      </div>
    );
  }
);
