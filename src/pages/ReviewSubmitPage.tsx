import React, { useState } from 'react';
import SectionHeader from '../components/SectionHeader';
import { useForm } from '../context/FormContext';
import { CheckCircle } from 'lucide-react';

export default function ReviewSubmitPage() {
  const { formData, validateForm } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleSubmit = () => {
    // Validate form
    const isValid = validateForm();
    
    if (isValid || true) { // For demo purposes, allow submission
      setIsSubmitting(true);
      
      // Simulate form submission
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        
        // In a real implementation, this would send the form data to a server
        console.log('Form submitted:', formData);
      }, 2000);
    }
  };
  
  if (isSubmitted) {
    return (
      <div className="p-6 text-center">
        <div className="mb-8 flex flex-col items-center">
          <CheckCircle className="text-green-500 h-16 w-16 mb-4" />
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Application Submitted Successfully</h2>
          <p className="text-sm text-gray-600 max-w-md mx-auto">
            Your application has been submitted to Hilbert Investment Solutions. You will receive a confirmation email shortly.
          </p>
        </div>
        
        <div className="bg-blue-50 p-4 rounded-md mb-6 max-w-md mx-auto">
          <p className="text-sm text-blue-800">
            Reference Number: HILB-{Math.floor(Math.random() * 1000000).toString().padStart(6, '0')}
          </p>
        </div>
        
        <p className="text-sm text-gray-600 mb-4">
          If you have any questions about your application, please contact your financial adviser
          or Hilbert Investment Solutions directly.
        </p>
        
        <button
          type="button"
          onClick={() => window.print()}
          className="px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Print Receipt
        </button>
      </div>
    );
  }

  return (
    <div className="p-6">
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">Review and Submit</h2>
        <p className="text-sm text-gray-600">
          Please review your application details before submitting.
        </p>
      </div>

      <SectionHeader title="10. Review of Application" />
      
      <div className="space-y-6">
        <div className="border rounded-md overflow-hidden">
          <div className="bg-blue-600 text-white px-4 py-2">
            <h3 className="text-sm font-medium">Personal Information</h3>
          </div>
          <div className="p-4 bg-gray-50">
            <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
              <div>
                <dt className="text-xs text-gray-500">Name</dt>
                <dd className="text-sm font-medium text-gray-900">{formData.personal.name || '-'}</dd>
              </div>
              <div>
                <dt className="text-xs text-gray-500">Financial Adviser</dt>
                <dd className="text-sm font-medium text-gray-900">{formData.personal.financialAdvisorName || '-'}</dd>
              </div>
              <div>
                <dt className="text-xs text-gray-500">Financial Adviser Firm</dt>
                <dd className="text-sm font-medium text-gray-900">{formData.personal.financialAdvisorFirm || '-'}</dd>
              </div>
            </dl>
          </div>
        </div>
        
        <div className="border rounded-md overflow-hidden">
          <div className="bg-blue-600 text-white px-4 py-2">
            <h3 className="text-sm font-medium">Investment Details</h3>
          </div>
          <div className="p-4 bg-gray-50">
            <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
              <div>
                <dt className="text-xs text-gray-500">Selected Product</dt>
                <dd className="text-sm font-medium text-gray-900">
                  {formData.investment.selectedProduct === 'A' && 'FTSE 100 EW45 Conditional Memory Quarterly Autocall 31'}
                  {formData.investment.selectedProduct === 'B' && 'FTSE 100 EW45 Super Defensive Annual Autocall 23'}
                  {formData.investment.selectedProduct === 'C' && 'FTSE 100 EW45 Defensive Annual Autocall 05'}
                  {formData.investment.selectedProduct === 'D' && 'FTSE 100 EW45 Annual Autocall 05'}
                  {!formData.investment.selectedProduct && '-'}
                </dd>
              </div>
              <div>
                <dt className="text-xs text-gray-500">Investment Amount</dt>
                <dd className="text-sm font-medium text-gray-900">£{formData.investment.amount || '-'}</dd>
              </div>
              <div>
                <dt className="text-xs text-gray-500">Payment Method</dt>
                <dd className="text-sm font-medium text-gray-900">
                  {formData.investment.paymentMethod === 'electronic' && 'Electronic payment'}
                  {formData.investment.paymentMethod === 'bank' && 'Bank transfer'}
                  {!formData.investment.paymentMethod && '-'}
                </dd>
              </div>
              <div>
                <dt className="text-xs text-gray-500">Expected Payment Date</dt>
                <dd className="text-sm font-medium text-gray-900">{formData.investment.expectedPaymentDate || '-'}</dd>
              </div>
            </dl>
          </div>
        </div>
        
        <div className="border rounded-md overflow-hidden">
          <div className="bg-blue-600 text-white px-4 py-2">
            <h3 className="text-sm font-medium">Entity Details</h3>
          </div>
          <div className="p-4 bg-gray-50">
            <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
              <div className="sm:col-span-2">
                <dt className="text-xs text-gray-500">Entity Name</dt>
                <dd className="text-sm font-medium text-gray-900">{formData.entity.trustName || '-'}</dd>
              </div>
              <div>
                <dt className="text-xs text-gray-500">Registration Number</dt>
                <dd className="text-sm font-medium text-gray-900">{formData.entity.registrationNumber || '-'}</dd>
              </div>
              <div>
                <dt className="text-xs text-gray-500">Country</dt>
                <dd className="text-sm font-medium text-gray-900">{formData.entity.country || '-'}</dd>
              </div>
              <div className="sm:col-span-2">
                <dt className="text-xs text-gray-500">Address</dt>
                <dd className="text-sm font-medium text-gray-900">{formData.entity.address || '-'}</dd>
              </div>
              <div>
                <dt className="text-xs text-gray-500">Contact Name</dt>
                <dd className="text-sm font-medium text-gray-900">{formData.entity.contactName || '-'}</dd>
              </div>
              <div>
                <dt className="text-xs text-gray-500">Email</dt>
                <dd className="text-sm font-medium text-gray-900">{formData.entity.email || '-'}</dd>
              </div>
            </dl>
          </div>
        </div>
        
        <div className="bg-yellow-50 p-4 rounded-md border border-yellow-200">
          <h3 className="text-sm font-medium text-yellow-800 mb-2">Important Notice</h3>
          <p className="text-sm text-yellow-700">
            By submitting this application, you confirm that all information provided is accurate and complete. 
            You also confirm that you have read and agree to the Terms and Conditions of the selected investment product.
          </p>
        </div>
        
        <div className="text-center pt-4">
          <button
            type="button"
            onClick={handleSubmit}
            disabled={isSubmitting}
            className={`px-6 py-3 border border-transparent text-base font-medium rounded-md text-white 
              ${isSubmitting ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'} 
              focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors`}
          >
            {isSubmitting ? 'Submitting...' : 'Submit Application'}
          </button>
        </div>
      </div>
    </div>
  );
}