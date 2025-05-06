import React from 'react';

interface CheckboxFieldProps {
  label: string;
  name: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  required?: boolean;
  className?: string;
  disabled?: boolean;
}

export default function CheckboxField({
  label,
  name,
  checked,
  onChange,
  error,
  required = false,
  className = '',
  disabled = false,
}: CheckboxFieldProps) {
  return (
    <div className={`mb-3 ${className}`}>
      <div className="flex items-center">
        <input
          type="checkbox"
          id={name}
          name={name}
          checked={checked}
          onChange={onChange}
          disabled={disabled}
          className={`h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded ${
            disabled ? 'bg-gray-200 cursor-not-allowed' : ''
          }`}
        />
        <label htmlFor={name} className="ml-2 block text-sm text-gray-700">
          {label}{required && <span className="text-red-500">*</span>}
        </label>
      </div>
      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  );
}