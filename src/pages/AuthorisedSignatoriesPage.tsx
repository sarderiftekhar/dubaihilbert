import React from 'react';
import SectionHeader from '../components/SectionHeader';
import FormField from '../components/FormField';
import DateField from '../components/DateField';
import { useForm } from '../context/FormContext';

export default function AuthorisedSignatoriesPage() {
  const { formData, updateFormData } = useForm();
  const { signatory } = formData;

  const handleChange = (index: number, field: string, value: string) => {
    const updatedSignatories = [...signatory.signatories];
    updatedSignatories[index] = { 
      ...updatedSignatories[index], 
      [field]: value 
    };
    updateFormData('signatory', { signatories: updatedSignatories });
  };

  const addSignatory = () => {
    if (signatory.signatories.length < 4) {
      const newSignatory = {
        name: '',
        function: '',
        date: '',
      };
      
      updateFormData('signatory', { 
        signatories: [...signatory.signatories, newSignatory]
      });
    }
  };

  return (
    <div className="p-6">
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">Authorised Signatories</h2>
        <p className="text-sm text-gray-600">
          Provide details of individuals authorized to sign on behalf of the entity.
        </p>
      </div>

      <SectionHeader title="9. Authorised Signatories" />
      
      <div className="bg-red-50 p-4 rounded-md mb-6">
        <p className="text-sm text-red-800">
          The instruction to invest in the Plan and the exercise of any options under the Terms and Conditions of the Plan must 
          be authorised by the trustees or authorised signatories as set out in the Trust Deed or corporate mandate authorised 
          by a corporate resolution.
        </p>
        <p className="text-sm text-red-800 mt-2">
          Please provide a list of the names and sample signatures of all the Trustees, or authorised signatories and provide 
          details of their signing authority if applicable. If no list is available, please complete the section below. If there are 
          more than four authorised signatories, please continue on a separate sheet of paper.
        </p>
        <p className="text-sm text-red-800 mt-2">
          Where there is a change of the Trustees or the authorised signatories, please notify Hilbert Investment Solutions in 
          writing giving the date of the change. Notice should be sent to Hilbert Investment Solutions, St Clements House, 27-
          28 Clements Lane, EC4N 7AE. Hilbert Investment Solutions will be entitled to rely on any previous list until receipt of 
          notice of a change or a replacement list.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {signatory.signatories.map((sig, index) => (
          <div key={index} className="border rounded-md p-4 bg-gray-50">
            <h3 className="text-lg font-medium text-center mb-4 text-blue-800">Signatory {index + 1}</h3>
            
            <FormField
              label="Name"
              name={`name-${index}`}
              value={sig.name}
              onChange={(e) => handleChange(index, 'name', e.target.value)}
              required
            />
            
            <FormField
              label="Function"
              name={`function-${index}`}
              value={sig.function}
              onChange={(e) => handleChange(index, 'function', e.target.value)}
              required
            />
            
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Signature
              </label>
              <div className="border-2 border-dashed border-gray-300 p-4 h-20 flex items-center justify-center bg-white">
                <p className="text-sm text-gray-500">Signature will be captured later</p>
              </div>
            </div>
            
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
      
      {signatory.signatories.length < 4 && (
        <div className="mt-4 text-center">
          <button
            type="button"
            onClick={addSignatory}
            className="px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Add Another Signatory
          </button>
        </div>
      )}
    </div>
  );
}