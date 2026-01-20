import type { ContactFormData, ContactSubmission } from '../types';

const STORAGE_KEY = 'contactSubmissions';

export const saveContactSubmission = (formData: ContactFormData): ContactSubmission => {
  const existingData = localStorage.getItem(STORAGE_KEY);
  const submissions: ContactSubmission[] = existingData ? JSON.parse(existingData) : [];
  
  const newSubmission: ContactSubmission = {
    ...formData,
    timestamp: new Date().toISOString(),
  };
  
  submissions.push(newSubmission);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(submissions));
  
  // Log to console for debugging
  console.log('Form submitted:', newSubmission);
  console.log('All submissions:', submissions);
  
  return newSubmission;
};

export const getAllSubmissions = (): ContactSubmission[] => {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
};
