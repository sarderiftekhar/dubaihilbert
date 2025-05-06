import React, { createContext, useContext, useState, ReactNode } from 'react';
import { formInitialState, FormState } from '../types/form';

interface FormContextType {
  formData: FormState;
  updateFormData: (section: string, data: Record<string, any>) => void;
  isFormValid: boolean;
  validateForm: () => boolean;
}

const FormContext = createContext<FormContextType | undefined>(undefined);

export function useForm() {
  const context = useContext(FormContext);
  if (context === undefined) {
    throw new Error('useForm must be used within a FormProvider');
  }
  return context;
}

interface FormProviderProps {
  children: ReactNode;
}

export function FormProvider({ children }: FormProviderProps) {
  const [formData, setFormData] = useState<FormState>(formInitialState);
  const [isFormValid, setIsFormValid] = useState(false);

  const updateFormData = (section: string, data: Record<string, any>) => {
    setFormData(prevState => ({
      ...prevState,
      [section]: {
        ...prevState[section],
        ...data
      }
    }));
  };

  const validateForm = () => {
    // Basic validation - would be more comprehensive in a real implementation
    const isValid = Boolean(
      formData.personal.name && 
      formData.investment.selectedProduct
    );
    
    setIsFormValid(isValid);
    return isValid;
  };

  const value = {
    formData,
    updateFormData,
    isFormValid,
    validateForm
  };

  return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
}