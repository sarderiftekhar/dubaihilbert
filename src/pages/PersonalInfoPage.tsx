import React from 'react';
import SectionHeader from '../components/SectionHeader';
import FormField from '../components/FormField';
import { useForm } from '../context/FormContext';

export default function PersonalInfoPage() {
  const { formData, updateFormData } = useForm();
  const { personal, entity } = formData;

  const handlePersonalChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateFormData('personal', { [e.target.name]: e.target.value });
  };

  const handleEntityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateFormData('entity', { [e.target.name]: e.target.value });
  };

  return (
    <div className="p-6">
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">Personal & Entity Information</h2>
      </div>

      <SectionHeader title="1. Your Details (all individuals)" />
      
      <FormField
        label="Name of primary investor"
        name="name"
        value={personal.name}
        onChange={handlePersonalChange}
        required
      />

      <SectionHeader title="2. Entity/Company Details" />
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="md:col-span-3">
          <FormField
            label="Name of Trust/Company"
            name="trustName"
            value={entity.trustName}
            onChange={handleEntityChange}
            required
          />
        </div>
        
        <div>
          <FormField
            label="Date of incorporation"
            name="incorporationDate"
            type="date"
            value={entity.incorporationDate}
            onChange={handleEntityChange}
            required
            className="bg-red-50"
          />
        </div>
        
        <div className="md:col-span-2">
          <FormField
            label="Registration number"
            name="registrationNumber"
            value={entity.registrationNumber}
            onChange={handleEntityChange}
            required
          />
        </div>
        
        <div>
          <FormField
            label="Country of incorporation"
            name="country"
            value={entity.country}
            onChange={handleEntityChange}
            required
          />
        </div>
        
        <div className="md:col-span-2">
          <FormField
            label="Legal Entity Identifier (LEI)"
            name="lei"
            value={entity.lei}
            onChange={handleEntityChange}
            required
          />
        </div>
        
        <div className="md:col-span-3">
          <FormField
            label="Permanent address"
            name="address"
            value={entity.address}
            onChange={handleEntityChange}
            required
          />
        </div>
        
        <div>
          <FormField
            label="Postcode"
            name="postcode"
            value={entity.postcode}
            onChange={handleEntityChange}
            required
          />
        </div>
        
        <div className="md:col-span-2">
          <FormField
            label="Country"
            name="country"
            value={entity.country}
            onChange={handleEntityChange}
            required
          />
        </div>
        
        <div className="md:col-span-3">
          <FormField
            label="Contact name"
            name="contactName"
            value={entity.contactName}
            onChange={handleEntityChange}
            required
          />
        </div>
        
        <div>
          <FormField
            label="Office telephone"
            name="telephone"
            value={entity.telephone}
            onChange={handleEntityChange}
            required
          />
        </div>
        
        <div className="md:col-span-2">
          <FormField
            label="Email"
            name="email"
            type="email"
            value={entity.email}
            onChange={handleEntityChange}
            required
          />
        </div>
      </div>
    </div>
  );
}