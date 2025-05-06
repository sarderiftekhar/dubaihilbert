import React from 'react';
import SectionHeader from '../components/SectionHeader';
import FormField from '../components/FormField';
import { useForm } from '../context/FormContext';

export default function TaxInformationPage() {
  const { formData, updateFormData } = useForm();
  const { tax } = formData;

  const handleCountryChange = (index: number, value: string) => {
    const updatedCountries = [...tax.countries];
    updatedCountries[index] = { ...updatedCountries[index], country: value };
    updateFormData('tax', { countries: updatedCountries });
  };

  const handleTinChange = (index: number, value: string) => {
    const updatedCountries = [...tax.countries];
    updatedCountries[index] = { ...updatedCountries[index], tin: value };
    updateFormData('tax', { countries: updatedCountries });
  };

  const handleGiinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateFormData('tax', { giin: e.target.value });
  };

  const addCountry = () => {
    if (tax.countries.length < 4) {
      updateFormData('tax', { 
        countries: [...tax.countries, { country: '', tin: '' }]
      });
    }
  };

  const removeCountry = (index: number) => {
    if (tax.countries.length > 1) {
      const updatedCountries = [...tax.countries];
      updatedCountries.splice(index, 1);
      updateFormData('tax', { countries: updatedCountries });
    }
  };

  return (
    <div className="p-6">
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">Tax Information</h2>
        <p className="text-sm text-gray-600">
          Please provide tax residency information.
        </p>
      </div>

      <SectionHeader title="3. Tax Residency" />
      
      <div className="mb-6">
        <p className="text-sm text-gray-600 mb-4">
          For tax purposes, please provide a list of all countries where the company/trust is based. This usually refers to the 
          country(ies) where you have an obligation to pay taxes or file tax returns. If there are more than four countries, 
          please continue on a separate sheet of paper.
        </p>
        
        <p className="text-sm text-gray-600 mb-4 italic">
          Please include the corresponding Tax Identification Number (TIN). A TIN is a tax reference number issued by the tax 
          office in the country where your company/trust is based. Where the country does not issue a TIN, please provide an 
          alternative reference.
        </p>
        
        {tax.countries.map((country, index) => (
          <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 pb-4 border-b border-gray-200">
            <FormField
              label={`Country ${index + 1}`}
              name={`country-${index}`}
              value={country.country}
              onChange={(e) => handleCountryChange(index, e.target.value)}
              required
            />
            
            <div className="flex items-end">
              <FormField
                label={`TIN ${index + 1}`}
                name={`tin-${index}`}
                value={country.tin}
                onChange={(e) => handleTinChange(index, e.target.value)}
                required
                className="flex-1"
              />
              
              {index > 0 && (
                <button
                  type="button"
                  onClick={() => removeCountry(index)}
                  className="ml-2 mb-3 px-2 py-2 text-sm text-red-600 hover:text-red-800 focus:outline-none"
                >
                  Remove
                </button>
              )}
            </div>
          </div>
        ))}
        
        {tax.countries.length < 4 && (
          <button
            type="button"
            onClick={addCountry}
            className="mt-2 px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-800 focus:outline-none"
          >
            + Add another country
          </button>
        )}
      </div>
      
      <div className="mt-8">
        <p className="text-sm text-red-600 mb-2">
          Where your company has been issued with a Global Intermediary Identification Number (GIIN) by the US Internal 
          Revenue Service (IRS), please provide below:
        </p>
        
        <FormField
          label="GIIN"
          name="giin"
          value={tax.giin}
          onChange={handleGiinChange}
        />
      </div>
    </div>
  );
}