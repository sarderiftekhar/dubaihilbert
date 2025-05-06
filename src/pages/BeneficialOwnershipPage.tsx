import React from 'react';
import SectionHeader from '../components/SectionHeader';
import FormField from '../components/FormField';
import DateField from '../components/DateField';
import RadioGroup from '../components/RadioGroup';
import { useForm } from '../context/FormContext';

export default function BeneficialOwnershipPage() {
  const { formData, updateFormData } = useForm();
  const { beneficiary } = formData;

  const handleChange = (index: number, field: string, value: any) => {
    const updatedBeneficiaries = [...beneficiary.beneficiaries];
    updatedBeneficiaries[index] = { 
      ...updatedBeneficiaries[index], 
      [field]: value 
    };
    updateFormData('beneficiary', { beneficiaries: updatedBeneficiaries });
  };

  const addBeneficiary = () => {
    if (beneficiary.beneficiaries.length < 2) {
      const newBeneficiary = {
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
      
      updateFormData('beneficiary', { 
        beneficiaries: [...beneficiary.beneficiaries, newBeneficiary]
      });
    }
  };

  return (
    <div className="p-6">
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">Beneficial Ownership</h2>
        <p className="text-sm text-gray-600">
          Please provide details of all interests in excess of 25%. If more than two, please provide details of each on a separate 
          list or on a photocopy of this page.
        </p>
      </div>

      <SectionHeader title="8. Beneficial Ownership" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {beneficiary.beneficiaries.map((individual, index) => (
          <div key={index} className="border rounded-md p-4 bg-gray-50">
            <h3 className="text-lg font-medium text-center mb-4 text-blue-800">Beneficiary {index + 1}</h3>
            
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
            
            <div className="mt-4 mb-4">
              <RadioGroup
                label="Does the beneficiary have Management Control?"
                name={`hasManagementControl-${index}`}
                options={[
                  { value: 'true', label: 'Yes' },
                  { value: 'false', label: 'No' }
                ]}
                value={individual.isAuthorizedSignatory ? 'true' : 'false'}
                onChange={(e) => handleChange(index, 'isAuthorizedSignatory', e.target.value === 'true')}
                required
              />
            </div>
            
            <FormField
              label="Function (if applicable)"
              name={`function-${index}`}
              value={individual.function}
              onChange={(e) => handleChange(index, 'function', e.target.value)}
            />
            
            <FormField
              label="Share capital (%)"
              name={`shareCapital-${index}`}
              value={individual.shareCapital}
              onChange={(e) => handleChange(index, 'shareCapital', e.target.value)}
              required
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
            
            <FormField
              label="Telephone number"
              name={`officeTelephone-${index}`}
              value={individual.officeTelephone}
              onChange={(e) => handleChange(index, 'officeTelephone', e.target.value)}
              required
            />
            
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
                label="Are you a US person?"
                name={`isUSPerson-${index}`}
                options={[
                  { value: 'true', label: 'Yes' },
                  { value: 'false', label: 'No' }
                ]}
                value={individual.isUSPerson ? 'true' : 'false'}
                onChange={(e) => handleChange(index, 'isUSPerson', e.target.value === 'true')}
                required
              />
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
      
      {beneficiary.beneficiaries.length < 2 && (
        <div className="mt-4 text-center">
          <button
            type="button"
            onClick={addBeneficiary}
            className="px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Add Another Beneficiary
          </button>
        </div>
      )}
    </div>
  );
}