import React from 'react';
import SectionHeader from '../components/SectionHeader';
import CheckboxField from '../components/CheckboxField';
import { useForm } from '../context/FormContext';

export default function DeclarationsPage() {
  const { formData, updateFormData } = useForm();
  const { declarations } = formData;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateFormData('declarations', { [e.target.name]: e.target.checked });
  };

  return (
    <div className="p-6">
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">Declarations</h2>
        <p className="text-sm text-gray-600">
          Please read and confirm the following declarations.
        </p>
      </div>

      <SectionHeader title="Data Protection" />
      
      <div className="mb-6">
        <div className="bg-blue-50 p-4 rounded-md mb-4">
          <p className="text-sm text-blue-800">
            You authorise us to hold and process the information supplied on the application form as a data controller for the
            purposes of The EU General Data Protection Regulation ("GDPR") and the Data Protection Act 2018 (DPA 2018).
            We will hold and process information for the administration of this and any future investment, for the operation
            of your investment, for statistical analysis and for marketing goods and services.
          </p>
        </div>
        
        <CheckboxField
          label="Please tick this box if you want to receive future promotion, offers and communications from us."
          name="marketingConsent"
          checked={declarations.marketingConsent}
          onChange={handleChange}
        />
      </div>

      <SectionHeader title="Declaration and Authority" />
      
      <div className="space-y-4">
        <p className="text-sm font-medium text-gray-700">
          I/We, the trustees/authorised signatories, request Hilbert Investment Solutions to arrange for the purchase of the Plan(s)
          on our behalf.
        </p>
        
        <p className="text-sm font-medium text-gray-700">We declare that:</p>
        
        <div className="space-y-2">
          {[
            'We, the trustees/authorised signatories, request Hilbert Investment Solutions to arrange for the purchase of the Plan(s) on our behalf.',
            'We authorise Hilbert Investment Solutions to hold the cash subscription, investments, interest, dividends and other rights or proceeds in respect of those investments and any cash or other proceeds.',
            'We have read and understood the information contained within the brochure and Key Information Document (KID) and confirm that we understand the charges and that any free initial fee must be met in accordance with the amount due from our investment.',
            'We have read and understood that the investment made for your Plan(s) will be held in accordance with the Terms set out within the brochure.',
            'We understand that market prices can go down as well as up and we may get back less than our original investment. Past performance is not a guide to future performance.',
            'We understand that the levels and bases of taxation may change.',
            'We understand that in compliance with the FCA rules, telephone calls will be recorded.',
            'We understand that early encashment is likely to lead to some loss of capital.',
            'We are not acting on behalf of a resident of the United States or a U.S. Person (as defined under the Internal Revenue Code of 1986, as amended) and we will not assist any person who is resident in the United States or a U.S. Person to acquire an interest in the Trust/Bond.',
            'We agree to inform you immediately should we believe anyone connected with the trust becomes a resident of the United States or a U.S. Person.',
            'We are not acting on behalf of a person who is in the United States or who is a U.S. Person (as defined in Regulation S under the U.S. Securities Act of 1933, as amended).',
            'We undertake to advise Hilbert Investment Solutions immediately in writing of any changes to the information contained in this application form including any changes to the trustees/authorised signatories.'
          ].map((declaration, index) => (
            <CheckboxField
              key={index}
              label={declaration}
              name={`declaration${index + 1}`}
              checked={declarations[`declaration${index + 1}`] || false}
              onChange={handleChange}
              required
            />
          ))}
        </div>
      </div>
    </div>
  );
}