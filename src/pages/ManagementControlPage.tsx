import React from 'react';
import SectionHeader from '../components/SectionHeader';
import FormField from '../components/FormField';
import DateField from '../components/DateField';
import RadioGroup from '../components/RadioGroup';
import { useForm } from '../context/FormContext';

export default function ManagementControlPage() {
  const { formData, updateFormData } = useForm();
  const { management } = formData;

  const handleChange = (index: number, field: string, value: any) => {
    const updatedIndividuals = [...management.individuals];
    updatedIndividuals[index] = { 
      ...updatedIndividuals[index], 
      [field]: value 
    };
    updateFormData('management', { individuals: updatedIndividuals });
  };

  const addIndividual = () => {
    if (management.individuals.length < 2) {
      const newIndividual = {
        title: '',
        firstName: '',
        surname: '',
        function: '',
        shareCapital: '',
        address: '',
        postcode: '',
        country: '',
        dateOfBirth: '',
        placeOfBirth: '',
        officeTelephone: '',
        mobileTelephone: '',
        email: '',
        isUSPerson: false,
        nationalInsurance: '',
        nationality: '',
        passportNumber: '',
        passportIssueDate: '',
        passportValidTo: '',
        isPEP: false,
        pepInformation: '',
        isAuthorizedSignatory: false,
      };
      
      updateFormData('management', { 
        individuals: [...management.individuals, newIndividual]
      });
    }
  };

  const removeIndividual = (indexToRemove: number) => {
    const updatedIndividuals = management.individuals.filter((_, index) => index !== indexToRemove);
    updateFormData('management', { individuals: updatedIndividuals });
  };

  return (
    <div className="p-6">
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">Management Control</h2>
        <p className="text-sm text-gray-600">
          Please provide details of all C-level executives, directors, or other senior management of the entity. 
          If more than two, please provide details of each on a separate list or on a photocopy of this page.
        </p>
      </div>

      <SectionHeader title="7. Individuals with Management Control" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {management.individuals.map((individual, index) => (
          <div key={index} className="border rounded-md p-4 bg-gray-50">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium text-blue-800">Individual {index + 1}</h3>
              <button 
                type="button" 
                onClick={() => removeIndividual(index)}
                className="text-red-600 hover:text-red-800 text-sm font-medium flex items-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                Remove
              </button>
            </div>
            
            <FormField
              label="Title (Mr/Mrs/Miss/Ms)"
              name={`title-${index}`}
              value={individual.title}
              onChange={(e) => handleChange(index, 'title', e.target.value)}
            />
            
            <FormField
              label="Full first name(s)"
              name={`firstName-${index}`}
              value={individual.firstName}
              onChange={(e) => handleChange(index, 'firstName', e.target.value)}
              required
            />
            
            <FormField
              label="Surname"
              name={`surname-${index}`}
              value={individual.surname}
              onChange={(e) => handleChange(index, 'surname', e.target.value)}
              required
            />
            
            <FormField
              label="Function"
              name={`function-${index}`}
              value={individual.function}
              onChange={(e) => handleChange(index, 'function', e.target.value)}
              required
            />
            
            <FormField
              label="Share capital (%)"
              name={`shareCapital-${index}`}
              value={individual.shareCapital}
              onChange={(e) => handleChange(index, 'shareCapital', e.target.value)}
            />
            
            <FormField
              label="Permanent address"
              name={`address-${index}`}
              value={individual.address}
              onChange={(e) => handleChange(index, 'address', e.target.value)}
              required
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                label="Postcode"
                name={`postcode-${index}`}
                value={individual.postcode}
                onChange={(e) => handleChange(index, 'postcode', e.target.value)}
                required
              />
              
              <FormField
                label="Country"
                name={`country-${index}`}
                value={individual.country}
                onChange={(e) => handleChange(index, 'country', e.target.value)}
                required
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <DateField
                label="Date of birth"
                name={`dateOfBirth-${index}`}
                value={individual.dateOfBirth}
                onChange={(e) => handleChange(index, 'dateOfBirth', e.target.value)}
                required
              />
              
              <FormField
                label="Place of birth"
                name={`placeOfBirth-${index}`}
                value={individual.placeOfBirth}
                onChange={(e) => handleChange(index, 'placeOfBirth', e.target.value)}
                required
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                label="Office telephone"
                name={`officeTelephone-${index}`}
                value={individual.officeTelephone}
                onChange={(e) => handleChange(index, 'officeTelephone', e.target.value)}
              />
              
              <FormField
                label="Mobile telephone"
                name={`mobileTelephone-${index}`}
                value={individual.mobileTelephone}
                onChange={(e) => handleChange(index, 'mobileTelephone', e.target.value)}
              />
            </div>
            
            <FormField
              label="Email"
              name={`email-${index}`}
              type="email"
              value={individual.email}
              onChange={(e) => handleChange(index, 'email', e.target.value)}
              required
            />
            
            <div className="mt-4 mb-4">
              <RadioGroup
                label="Are you a US Person?"
                name={`isUSPerson-${index}`}
                options={[
                  { value: 'true', label: 'Yes' },
                  { value: 'false', label: 'No' }
                ]}
                value={individual.isUSPerson ? 'true' : 'false'}
                onChange={(e) => handleChange(index, 'isUSPerson', e.target.value === 'true')}
                required
              />
              
              {individual.isUSPerson && (
                <div className="mt-2 p-3 bg-red-50 border border-red-200 rounded-md">
                  <p className="text-sm text-red-800">
                    If yes, please note that this Plan is not offered to US Persons. Please speak to 
                    your financial adviser for advice on any alternative options available to you.
                  </p>
                </div>
              )}
            </div>
            
            <FormField
              label="National Insurance number"
              name={`nationalInsurance-${index}`}
              value={individual.nationalInsurance}
              onChange={(e) => handleChange(index, 'nationalInsurance', e.target.value)}
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                label="Nationality"
                name={`nationality-${index}`}
                value={individual.nationality}
                onChange={(e) => handleChange(index, 'nationality', e.target.value)}
                required
              />
              
              <FormField
                label="Passport number"
                name={`passportNumber-${index}`}
                value={individual.passportNumber}
                onChange={(e) => handleChange(index, 'passportNumber', e.target.value)}
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <DateField
                label="Passport issue date"
                name={`passportIssueDate-${index}`}
                value={individual.passportIssueDate}
                onChange={(e) => handleChange(index, 'passportIssueDate', e.target.value)}
              />
              
              <DateField
                label="Passport valid to"
                name={`passportValidTo-${index}`}
                value={individual.passportValidTo}
                onChange={(e) => handleChange(index, 'passportValidTo', e.target.value)}
              />
            </div>
            
            <div className="mt-4 mb-4">
              <RadioGroup
                label="Are you a politically exposed person (PEP)?"
                name={`isPEP-${index}`}
                options={[
                  { value: 'true', label: 'Yes' },
                  { value: 'false', label: 'No' }
                ]}
                value={individual.isPEP ? 'true' : 'false'}
                onChange={(e) => handleChange(index, 'isPEP', e.target.value === 'true')}
                required
              />
              
              {individual.isPEP && (
                <div className="mt-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    If yes, please provide more information below:
                  </label>
                  <textarea
                    value={individual.pepInformation}
                    onChange={(e) => handleChange(index, 'pepInformation', e.target.value)}
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-100 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              )}
            </div>
            
            <div className="mt-4">
              <RadioGroup
                label="Are you an authorised signatory?"
                name={`isAuthorizedSignatory-${index}`}
                options={[
                  { value: 'true', label: 'Yes' },
                  { value: 'false', label: 'No' }
                ]}
                value={individual.isAuthorizedSignatory ? 'true' : 'false'}
                onChange={(e) => handleChange(index, 'isAuthorizedSignatory', e.target.value === 'true')}
                required
              />
            </div>
          </div>
        ))}
      </div>
      
      {management.individuals.length < 2 && (
        <div className="mt-4 text-center">
          <button
            type="button"
            onClick={addIndividual}
            className="px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Add Another Individual
          </button>
        </div>
      )}
    </div>
  );
}