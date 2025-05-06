import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import FormNavigation from './components/FormNavigation';
import FormProgress from './components/FormProgress';
import { FormProvider } from './context/FormContext';
import useFormPages from './hooks/useFormPages';

function AppContent() {
  const { currentPage, totalPages, goToNextPage, goToPrevPage, isFirstPage, isLastPage, renderCurrentPage } = useFormPages();

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <img 
              src="https://placehold.co/200x60/0F4C81/FFF?text=HILBERT" 
              alt="Hilbert Investment Solutions" 
              className="h-10 w-auto"
            />
            <h1 className="ml-4 text-xl font-semibold text-gray-900">Investment Application</h1>
          </div>
          <FormProgress currentPage={currentPage} totalPages={totalPages} />
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          {renderCurrentPage()}
          
          <FormNavigation 
            isFirstPage={isFirstPage}
            isLastPage={isLastPage}
            onNext={goToNextPage}
            onPrevious={goToPrevPage}
          />
        </div>
      </main>

      <footer className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-center text-sm text-gray-500">
        <p>© {new Date().getFullYear()} Hilbert Investment Solutions. All rights reserved.</p>
        <p className="mt-1">
          Hilbert Investment Solutions, St Clements House, 27-28 Clements Lane, London EC4N 7AE
        </p>
      </footer>
    </div>
  );
}

function App() {
  return (
    <FormProvider>
      <AppContent />
    </FormProvider>
  );
}

export default App;