import React from 'react';

interface RadioOption {
  value: string;
  label: string;
}

interface RadioGroupProps {
  label: string;
  name: string;
  options: RadioOption[];
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  required?: boolean;
  className?: string;
  disabled?: boolean;
}

export default function RadioGroup({
  label,
  name,
  options,
  value,
  onChange,
  error,
  required = false,
  className = '',
  disabled = false,
}: RadioGroupProps) {
  return (
    <div className={`mb-3 ${className}`}>
      <span className="block text-sm font-medium text-gray-700 mb-1">
        {label}{required && <span className="text-red-500">*</span>}
      </span>
      <div className="mt-1 space-y-2">
        {options.map((option) => (
          <div key={option.value} className="flex items-center">
            <input
              id={`${name}-${option.value}`}
              name={name}
              type="radio"
              value={option.value}
              checked={value === option.value}
              onChange={onChange}
              disabled={disabled}
              className={`h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 ${
                disabled ? 'bg-gray-200 cursor-not-allowed' : ''
              }`}
            />
            <label
              htmlFor={`${name}-${option.value}`}
              className="ml-2 block text-sm text-gray-700"
            >
              {option.label}
            </label>
          </div>
        ))}
      </div>
      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  );
}