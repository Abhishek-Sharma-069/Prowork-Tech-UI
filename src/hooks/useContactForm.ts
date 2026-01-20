import { useState } from 'react';
import type { FormEvent } from 'react';
import type { ContactFormData } from '../types';
import { saveContactSubmission } from '../utils/localStorage';

const initialFormData: ContactFormData = {
  name: '',
  email: '',
  contactNumber: '',
  message: '',
};

export const useContactForm = () => {
  const [formData, setFormData] = useState<ContactFormData>(initialFormData);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    // Save to localStorage
    saveContactSubmission(formData);
    
    // Reset form
    setFormData(initialFormData);
    
    // Show success message
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  return {
    formData,
    formSubmitted,
    handleInputChange,
    handleSubmit,
  };
};
