import React from 'react';
import SectionHeader from '../components/SectionHeader';
import FormField from '../components/FormField';
import DateField from '../components/DateField';
import { useForm } from '../context/FormContext';

export default function SignaturesPage() {
  const { formData, updateFormData } = useForm();
  const { signatures } = formData;

  const handleChange = (index: number, field: string, value: string) => {
    const updatedSignatures = [...signatures.authorisedSignatures];
    updatedSignatures[index] = { 
      ...updatedSignatures[index], 
      [field]: value 
    };
    updateFormData('signatures', { authorisedSignatures: updatedSignatures });
  };

  return (
    <div className="p-6">
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">Signatures</h2>
        <p className="text-sm text-gray-600">
          Please sign and date on behalf of the trust or company.
        </p>
      </div>

      <SectionHeader title="Authorised Signatures" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {signatures.authorisedSignatures.map((sig, index) => (
          <div key={index} className="border rounded-md p-4 bg-gray-50">
            <h3 className="text-lg font-medium text-center mb-4 text-blue-800">
              {index + 1}st Authorised Signature
            </h3>
            
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Signature
              </label>
              <div className="border-2 border-dashed border-gray-300 p-4 h-20 flex items-center justify-center bg-white">
                <p className="text-sm text-gray-500">Signature will be captured later</p>
              </div>
            </div>
            
            <FormField
              label="Print name"
              name={`name-${index}`}
              value={sig.name}
              onChange={(e) => handleChange(index, 'name', e.target.value)}
              required
            />
            
            <DateField
              label="Date"
              name={`date-${index}`}
              value={sig.date}
              onChange={(e) => handleChange(index, 'date', e.target.value)}
              required
            />
          </div>
        ))}
      </div>

      <div className="mt-8">
        <SectionHeader title="Checklist" />
        
        <div className="space-y-2">
          {[
            'You have completed all relevant sections of the form.',
            'Your payment amount matches the amount documented on the application form.',
            'You have advised us of any fees that you wish to pay a financial adviser or intermediary on your behalf.',
            'The relevant authorised signatories have signed the application form.'
          ].map((item, index) => (
            <div key={index} className="flex items-start">
              <input
                type="checkbox"
                className="h-4 w-4 mt-1 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label className="ml-2 text-sm text-gray-700">{item}</label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}