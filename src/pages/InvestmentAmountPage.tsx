import React from 'react';
import SectionHeader from '../components/SectionHeader';
import FormField from '../components/FormField';
import CheckboxField from '../components/CheckboxField';
import { useForm } from '../context/FormContext';

export default function InvestmentAmountPage() {
  const { formData, updateFormData } = useForm();
  const { investmentAmount } = formData;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateFormData('investmentAmount', { [e.target.name]: e.target.value });
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateFormData('investmentAmount', { [e.target.name]: e.target.checked });
  };

  const sourceOptions = [
    { name: 'companyProfits', label: 'Company profits' },
    { name: 'gift', label: 'Gift' },
    { name: 'pensions', label: 'Pensions' },
    { name: 'salary', label: 'Salary' },
    { name: 'dividends', label: 'Dividends / Director\'s token' },
    { name: 'inheritance', label: 'Inheritance' },
    { name: 'propertySale', label: 'Property sale' },
    { name: 'savings', label: 'Savings' },
    { name: 'divorceSettlement', label: 'Divorce settlement' },
    { name: 'loan', label: 'Loan' },
    { name: 'rent', label: 'Rent' },
    { name: 'shareAssetSale', label: 'Share / Asset sale' },
    { name: 'encashment', label: 'Encashment claim / Maturing investments' },
    { name: 'other', label: 'Other' }
  ];

  return (
    <div className="p-6">
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">Investment Amount</h2>
        <p className="text-sm text-gray-600">
          Please specify your investment amount and source of funds.
        </p>
      </div>

      <SectionHeader title="Investment Amount" />
      
      <div className="mb-6">
        <p className="text-sm text-gray-600 mb-4">The minimum investment amount is £5,000</p>
        <FormField
          label="How much money are you sending with this application?"
          name="amount"
          type="number"
          value={investmentAmount.amount}
          onChange={handleChange}
          required
        />
      </div>

      <SectionHeader title="Source of Funds" />
      
      <div className="mb-6">
        <p className="text-sm text-gray-600 mb-4">
          The source(s) which originally created the funds which you are using to open this plan:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {sourceOptions.map((option) => (
            <CheckboxField
              key={option.name}
              label={option.label}
              name={option.name}
              checked={investmentAmount[option.name] || false}
              onChange={handleCheckboxChange}
            />
          ))}
        </div>
      </div>

      <SectionHeader title="Adviser Fees" />
      
      <div className="mb-6">
        <p className="text-sm text-gray-600 mb-4">
          You may incur fees for the service provided by your financial adviser. We can facilitate the adviser fees from the
          money you are sending.
        </p>
        
        <div className="bg-gray-50 p-4 rounded-md">
          <CheckboxField
            label="Would you like us to facilitate your adviser fees?"
            name="facilitateAdviserFees"
            checked={investmentAmount.facilitateAdviserFees}
            onChange={handleCheckboxChange}
          />
          
          {investmentAmount.facilitateAdviserFees && (
            <div className="mt-4 grid grid-cols-2 gap-4">
              <FormField
                label="Adviser Charge (£)"
                name="adviserCharge"
                type="number"
                value={investmentAmount.adviserCharge}
                onChange={handleChange}
              />
              <FormField
                label="or (%)"
                name="adviserChargePercentage"
                type="number"
                value={investmentAmount.adviserChargePercentage}
                onChange={handleChange}
              />
            </div>
          )}
        </div>
      </div>

      <SectionHeader title="Bank Account Details for Income Payments or Redemption" />
      
      <div className="grid grid-cols-1 gap-4">
        <FormField
          label="Bank/Building Society"
          name="bankName"
          value={investmentAmount.bankName}
          onChange={handleChange}
          required
        />
        <FormField
          label="Account name"
          name="accountName"
          value={investmentAmount.accountName}
          onChange={handleChange}
          required
        />
        <FormField
          label="Reference or Roll number"
          name="reference"
          value={investmentAmount.reference}
          onChange={handleChange}
        />
        <FormField
          label="Sort code"
          name="sortCode"
          value={investmentAmount.sortCode}
          onChange={handleChange}
          required
        />
        <FormField
          label="Account number"
          name="accountNumber"
          value={investmentAmount.accountNumber}
          onChange={handleChange}
          required
        />
      </div>
    </div>
  );
}