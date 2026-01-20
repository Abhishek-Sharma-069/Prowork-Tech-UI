export interface ContactFormData {
  name: string;
  email: string;
  contactNumber: string;
  message: string;
}

export interface ContactSubmission extends ContactFormData {
  timestamp: string;
}

export interface Service {
  icon: string;
  title: string;
  description: string;
}

export interface WorkflowStep {
  step: string;
  title: string;
  description: string;
}

export interface Testimonial {
  name: string;
  role: string;
  content: string;
  avatar: string;
}

export interface FAQ {
  question: string;
  answer: string;
}
