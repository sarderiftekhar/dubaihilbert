import React from 'react';
import SectionHeader from '../components/SectionHeader';
import FormField from '../components/FormField';
import RadioGroup from '../components/RadioGroup';
import CheckboxField from '../components/CheckboxField';
import DateField from '../components/DateField';
import { useForm } from '../context/FormContext';

export default function FinancialAdviserPage() {
  const { formData, updateFormData } = useForm();
  const { adviser } = formData;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateFormData('adviser', { [e.target.name]: e.target.value });
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateFormData('adviser', { [e.target.name]: e.target.checked });
  };

  return (
    <div className="p-6">
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">Financial Adviser Details</h2>
        <p className="text-sm text-gray-600">
          This section must be completed and signed by a financial adviser who has completed and signed a Hilbert Terms of Business.
        </p>
      </div>

      <div className="bg-yellow-50 p-4 rounded-md mb-6">
        <p className="text-sm text-yellow-800">
          Please note that if you have not completed and returned a Hilbert Terms of Business Form this can be downloaded from
          our website at www.hilbert-is.com or by contacting our sales team on 0203 808 7138. If a Hilbert Terms of Business
          Form has not been completed and approved, we will be unable to process any applications.
        </p>
      </div>

      <div className="space-y-6">
        <FormField
          label="Name of adviser"
          name="name"
          value={adviser.name}
          onChange={handleChange}
          required
        />
        
        <FormField
          label="Company address"
          name="address"
          value={adviser.address}
          onChange={handleChange}
          required
        />
        
        <FormField
          label="Phone number"
          name="phone"
          value={adviser.phone}
          onChange={handleChange}
          required
        />
        
        <FormField
          label="Email address"
          name="email"
          type="email"
          value={adviser.email}
          onChange={handleChange}
          required
        />
        
        <div>
          <RadioGroup
            label="Are you a member of a network?"
            name="isNetworkMember"
            options={[
              { value: 'yes', label: 'YES' },
              { value: 'no', label: 'NO' }
            ]}
            value={adviser.isNetworkMember}
            onChange={handleChange}
            required
          />
          
          {adviser.isNetworkMember === 'no' && (
            <RadioGroup
              label="If No are you:"
              name="authorisationType"
              options={[
                { value: 'direct', label: 'DIRECTLY AUTHORISED' },
                { value: 'appointed', label: 'OR AN APPOINTED REPRESENTATIVE' }
              ]}
              value={adviser.authorisationType}
              onChange={handleChange}
              required
            />
          )}
        </div>
        
        {adviser.isNetworkMember === 'yes' && (
          <FormField
            label="Name of network"
            name="networkName"
            value={adviser.networkName}
            onChange={handleChange}
            required
          />
        )}
        
        <FormField
          label="FCA number (or equivalent) registration number"
          name="fcaNumber"
          value={adviser.fcaNumber}
          onChange={handleChange}
          required
        />

        <div className="space-y-4">
          <h3 className="text-sm font-medium text-gray-900">Verification Requirements</h3>
          
          <div className="bg-gray-50 p-4 rounded-md">
            <h4 className="text-sm font-medium text-gray-800 mb-2">Suitability (For Advised applications only):</h4>
            <CheckboxField
              label="You have provided a copy of this Plan's brochure and Key Information Document (KID) and disclosed the associated risks of this Investment and that you have conducted the required suitability assessment and that you consider this product to be suitable for your client."
              name="suitabilityConfirmed"
              checked={adviser.suitabilityConfirmed}
              onChange={handleCheckboxChange}
              required
            />
          </div>
          
          <div className="bg-gray-50 p-4 rounded-md">
            <h4 className="text-sm font-medium text-gray-800 mb-2">Verification of Identity:</h4>
            <CheckboxField
              label="Please confirm that you have carried out the appropriate identity and anti-money laundering checks (including but not limited to obtaining certified copies of bank statements, passport/driving licence) and that copies of documentary evidence are available on request. You confirm that you have seen the original documents where required and any that require a signature have been signed."
              name="identityVerified"
              checked={adviser.identityVerified}
              onChange={handleCheckboxChange}
              required
            />
          </div>
          
          <div className="bg-gray-50 p-4 rounded-md">
            <h4 className="text-sm font-medium text-gray-800 mb-2">Verification of Source of Wealth and Funds:</h4>
            <div className="space-y-2">
              <p className="text-sm text-gray-600">Please confirm that:</p>
              <ol className="list-decimal list-inside space-y-1 text-sm text-gray-600">
                <li>You have obtained confirmation of the source of wealth and funds being invested;</li>
                <li>You do not suspect that the source of wealth and funds are connected to any criminal activity;</li>
                <li>Copies of documentary evidence are available immediately on request;</li>
                <li>You have seen the original documents and any that require a signature had been signed;</li>
                <li>You will retain copies of the data and documents referred to above for at least five years, beginning on the date on which the application is accepted by the Administrator and Custodian.</li>
              </ol>
            </div>
            <CheckboxField
              label="I confirm all of the above"
              name="wealthSourceVerified"
              checked={adviser.wealthSourceVerified}
              onChange={handleCheckboxChange}
              required
            />
          </div>
          
          <div className="bg-gray-50 p-4 rounded-md">
            <h4 className="text-sm font-medium text-gray-800 mb-2">Appropriateness (For Execution Only applications):</h4>
            <CheckboxField
              label="You have provided a copy of this Plan's brochure and Key Information Document (KID) and confirmed the appropriateness of this investment and that you consider this product to be appropriate for your client."
              name="appropriatenessConfirmed"
              checked={adviser.appropriatenessConfirmed}
              onChange={handleCheckboxChange}
            />
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Financial Adviser/Intermediary signature
          </label>
          <div className="border-2 border-dashed border-gray-300 p-4 h-20 flex items-center justify-center bg-white">
            <p className="text-sm text-gray-500">Signature will be captured later</p>
          </div>
        </div>
        
        <DateField
          label="Date"
          name="signatureDate"
          value={adviser.signatureDate}
          onChange={handleChange}
          required
        />
      </div>
    </div>
  );
}