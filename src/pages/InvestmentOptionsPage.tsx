import React from 'react';
import SectionHeader from '../components/SectionHeader';
import FormField from '../components/FormField';
import RadioGroup from '../components/RadioGroup';
import CheckboxField from '../components/CheckboxField';
import DateField from '../components/DateField';
import { useForm } from '../context/FormContext';

export default function InvestmentOptionsPage() {
  const { formData, updateFormData } = useForm();
  const { investment } = formData;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateFormData('investment', { [e.target.name]: e.target.value });
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateFormData('investment', { [e.target.name]: e.target.checked });
  };

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateFormData('investment', { paymentMethod: e.target.value });
  };

  return (
    <div className="p-6">
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">Investment Options</h2>
        <p className="text-sm text-gray-600">
          Please select your investment option and provide payment details.
        </p>
      </div>

      <SectionHeader title="3. Investment Selection" />
      
      <div className="mb-8">
        <p className="text-sm text-gray-600 mb-4">Minimum investment is £5,000 and maximum £2,000,000</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-4">
          <div className="text-sm font-medium text-gray-800">Product</div>
          <div className="text-sm font-medium text-gray-800 sm:col-span-2">Amount</div>
        </div>
        
        <div className="border rounded-md divide-y">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-3 items-center">
            <div className="text-sm">
              <input
                type="radio"
                id="product-a"
                name="selectedProduct"
                value="A"
                checked={investment.selectedProduct === 'A'}
                onChange={handleChange}
                className="mr-2"
              />
              <label htmlFor="product-a">FTSE 100 EW45 Conditional Memory Quarterly Autocall 31 - May 2025</label>
            </div>
            <div className="sm:col-span-2">
              <div className="flex items-center">
                <span className="font-medium mr-2">£</span>
                <input
                  type="text"
                  name="amount"
                  value={investment.amount}
                  onChange={handleChange}
                  className="px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                  disabled={investment.selectedProduct !== 'A'}
                />
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-3 items-center">
            <div className="text-sm">
              <input
                type="radio"
                id="product-b"
                name="selectedProduct"
                value="B"
                checked={investment.selectedProduct === 'B'}
                onChange={handleChange}
                className="mr-2"
              />
              <label htmlFor="product-b">FTSE 100 EW45 Super Defensive Annual Autocall 23 - May 2025</label>
            </div>
            <div className="sm:col-span-2">
              <div className="flex items-center">
                <span className="font-medium mr-2">£</span>
                <input
                  type="text"
                  name="amount"
                  value={investment.amount}
                  onChange={handleChange}
                  className="px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                  disabled={investment.selectedProduct !== 'B'}
                />
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-3 items-center">
            <div className="text-sm">
              <input
                type="radio"
                id="product-c"
                name="selectedProduct"
                value="C"
                checked={investment.selectedProduct === 'C'}
                onChange={handleChange}
                className="mr-2"
              />
              <label htmlFor="product-c">FTSE 100 EW45 Defensive Annual Autocall 05 - May 2025</label>
            </div>
            <div className="sm:col-span-2">
              <div className="flex items-center">
                <span className="font-medium mr-2">£</span>
                <input
                  type="text"
                  name="amount"
                  value={investment.amount}
                  onChange={handleChange}
                  className="px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                  disabled={investment.selectedProduct !== 'C'}
                />
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-3 items-center">
            <div className="text-sm">
              <input
                type="radio"
                id="product-d"
                name="selectedProduct"
                value="D"
                checked={investment.selectedProduct === 'D'}
                onChange={handleChange}
                className="mr-2"
              />
              <label htmlFor="product-d">FTSE 100 EW45 Annual Autocall 05 - May 2025</label>
            </div>
            <div className="sm:col-span-2">
              <div className="flex items-center">
                <span className="font-medium mr-2">£</span>
                <input
                  type="text"
                  name="amount"
                  value={investment.amount}
                  onChange={handleChange}
                  className="px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                  disabled={investment.selectedProduct !== 'D'}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <SectionHeader title="4. Payment Method" />
      
      <RadioGroup
        label="Please indicate the method of payment"
        name="paymentMethod"
        options={[
          { value: 'electronic', label: 'Electronic payment' },
          { value: 'bank', label: 'Bank transfers should be sent to:' }
        ]}
        value={investment.paymentMethod}
        onChange={handleRadioChange}
        required
      />
      
      {investment.paymentMethod === 'bank' && (
        <div className="ml-6 mb-4 p-3 bg-gray-50 border border-gray-200 rounded-md">
          <p className="text-sm mb-1"><span className="font-medium">HILBERT INVESTMENT SOLUTIONS LTD</span></p>
          <p className="text-sm mb-1"><span className="font-medium">Bank:</span> Clydesdale Bank</p>
          <p className="text-sm mb-1"><span className="font-medium">Sort Code:</span> 82-11-07, <span className="font-medium">Account Number:</span> 30069315</p>
          <p className="text-sm"><span className="font-medium">You must quote your name in the reference.</span></p>
        </div>
      )}
      
      <div className="mb-4">
        <p className="text-sm text-gray-600 mb-2">
          Please confirm the date that you expect to send the funds to us.
        </p>
        <DateField
          label="Date"
          name="expectedPaymentDate"
          value={investment.expectedPaymentDate}
          onChange={handleChange}
          required
        />
      </div>
      
      <div className="border-t pt-4 mt-4">
        <CheckboxField
          label="Re-investment from a matured Hilbert product"
          name="isReinvestment"
          checked={investment.isReinvestment}
          onChange={handleCheckboxChange}
        />
        
        {investment.isReinvestment && (
          <div className="ml-6 mt-2 p-3 bg-blue-50 border border-blue-200 rounded-md">
            <p className="text-sm text-blue-800">
              Please ensure you enclose your completed maturity options form with this application.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}