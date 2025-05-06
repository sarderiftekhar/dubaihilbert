import React from 'react';
import SectionHeader from '../components/SectionHeader';
import FormField from '../components/FormField';
import { useForm } from '../context/FormContext';

export default function EntityDetailsPage() {
  const { formData, updateFormData } = useForm();
  const { entity } = formData;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateFormData('entity', { [e.target.name]: e.target.value });
  };

  return (
    <div className="p-6">
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">Entity Details</h2>
        <p className="text-sm text-gray-600">
          Please provide information about your trust or company.
        </p>
      </div>

      <SectionHeader title="5. Entity/Company Details" />
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="md:col-span-3">
          <FormField
            label="Name of Trust/Company"
            name="trustName"
            value={entity.trustName}
            onChange={handleChange}
            required
          />
        </div>
        
        <div>
          <FormField
            label="Date of incorporation"
            name="incorporationDate"
            type="date"
            value={entity.incorporationDate}
            onChange={handleChange}
            required
            className="bg-red-50"
          />
        </div>
        
        <div className="md:col-span-2">
          <FormField
            label="Registration number"
            name="registrationNumber"
            value={entity.registrationNumber}
            onChange={handleChange}
            required
          />
        </div>
        
        <div>
          <FormField
            label="Country of incorporation"
            name="country"
            value={entity.country}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="md:col-span-2">
          <FormField
            label="Legal Entity Identifier (LEI)"
            name="lei"
            value={entity.lei}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="md:col-span-3">
          <FormField
            label="Permanent address"
            name="address"
            value={entity.address}
            onChange={handleChange}
            required
          />
        </div>
        
        <div>
          <FormField
            label="Postcode"
            name="postcode"
            value={entity.postcode}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="md:col-span-2">
          <FormField
            label="Country"
            name="country"
            value={entity.country}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="md:col-span-3">
          <FormField
            label="Contact name"
            name="contactName"
            value={entity.contactName}
            onChange={handleChange}
            required
          />
        </div>
        
        <div>
          <FormField
            label="Office telephone"
            name="telephone"
            value={entity.telephone}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="md:col-span-2">
          <FormField
            label="Email"
            name="email"
            type="email"
            value={entity.email}
            onChange={handleChange}
            required
          />
        </div>
      </div>
    </div>
  );
}