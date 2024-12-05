import React from 'react';

interface WeightOption {
  value: number;
  label: string;
}

interface ProductWeightSelectorProps {
  selectedWeight: number;
  onWeightChange: (weight: number) => void;
  options?: WeightOption[];
}

const defaultOptions: WeightOption[] = [
  { value: 0.5, label: '500g' },
  { value: 1, label: '1 kg' },
  { value: 2, label: '2 kg' },
  { value: 5, label: '5 kg' },
];

export function ProductWeightSelector({
  selectedWeight,
  onWeightChange,
  options = defaultOptions
}: ProductWeightSelectorProps) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
      {options.map((option) => (
        <button
          key={option.value}
          onClick={() => onWeightChange(option.value)}
          className={`
            px-4 py-2 rounded-lg text-sm font-medium transition-all
            ${selectedWeight === option.value
              ? 'bg-emerald-100 text-emerald-700 border-2 border-emerald-500'
              : 'bg-gray-100 text-gray-700 border-2 border-transparent hover:bg-gray-200'
            }
          `}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}