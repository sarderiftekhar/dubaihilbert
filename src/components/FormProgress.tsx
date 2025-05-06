import React from 'react';

interface FormProgressProps {
  currentPage: number;
  totalPages: number;
}

export default function FormProgress({ currentPage, totalPages }: FormProgressProps) {
  return (
    <div className="flex items-center">
      <div className="text-sm font-medium text-gray-700">
        Step {currentPage} of {totalPages}
      </div>
      <div className="w-32 ml-3 h-2 bg-gray-200 rounded-full overflow-hidden">
        <div 
          className="h-full bg-blue-600 transition-all duration-300 ease-in-out"
          style={{ width: `${(currentPage / totalPages) * 100}%` }}
        ></div>
      </div>
    </div>
  );
}