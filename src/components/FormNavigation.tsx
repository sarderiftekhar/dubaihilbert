import React from 'react';
import { ChevronLeft, ChevronRight, Save } from 'lucide-react';

interface FormNavigationProps {
  isFirstPage: boolean;
  isLastPage: boolean;
  onNext: () => void;
  onPrevious: () => void;
}

export default function FormNavigation({ 
  isFirstPage, 
  isLastPage, 
  onNext, 
  onPrevious 
}: FormNavigationProps) {
  return (
    <div className="bg-gray-50 px-4 py-3 sm:px-6 flex justify-between">
      <button
        type="button"
        onClick={onPrevious}
        disabled={isFirstPage}
        className={`${
          isFirstPage 
            ? 'opacity-50 cursor-not-allowed' 
            : 'hover:bg-gray-100'
        } inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors`}
      >
        <ChevronLeft className="h-4 w-4 mr-1" />
        Previous
      </button>
      
      <button
        type="button"
        className="px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors flex items-center"
      >
        <Save className="h-4 w-4 mr-1" />
        Save Progress
      </button>
      
      <button
        type="button"
        onClick={onNext}
        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
      >
        {isLastPage ? 'Submit' : 'Next'}
        {!isLastPage && <ChevronRight className="h-4 w-4 ml-1" />}
      </button>
    </div>
  );
}