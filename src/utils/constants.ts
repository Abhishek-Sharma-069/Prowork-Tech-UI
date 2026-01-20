import type { Service, WorkflowStep, Testimonial, FAQ } from '../types';

export const SERVICES: Service[] = [
  {
    icon: '🚀',
    title: 'Web Development',
    description: 'Custom web applications built with modern technologies for optimal performance and user experience.',
  },
  {
    icon: '📱',
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications that work seamlessly across all devices.',
  },
  {
    icon: '☁️',
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure and migration services to enhance your business agility.',
  },
  {
    icon: '🤖',
    title: 'AI & Automation',
    description: 'Intelligent automation solutions and AI integrations to streamline your business processes.',
  },
  {
    icon: '🔒',
    title: 'Cybersecurity',
    description: 'Comprehensive security solutions to protect your digital assets and sensitive data.',
  },
  {
    icon: '📊',
    title: 'Data Analytics',
    description: 'Advanced analytics and business intelligence tools to drive data-driven decisions.',
  },
];

export const WORKFLOW_STEPS: WorkflowStep[] = [
  {
    step: '01',
    title: 'Discovery & Planning',
    description: 'We analyze your requirements and create a detailed project plan tailored to your needs.',
  },
  {
    step: '02',
    title: 'Design & Prototyping',
    description: 'Our team creates intuitive designs and interactive prototypes for your approval.',
  },
  {
    step: '03',
    title: 'Development & Testing',
    description: 'We build your solution using best practices and rigorous testing methodologies.',
  },
  {
    step: '04',
    title: 'Deployment & Support',
    description: 'We deploy your solution and provide ongoing support to ensure optimal performance.',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Sarah Johnson',
    role: 'CEO, TechStart Inc.',
    content: 'Prowork Tech transformed our digital presence. Their team is professional, innovative, and always delivers on time. Highly recommended!',
    avatar: '👩‍💼',
  },
  {
    name: 'Michael Chen',
    role: 'CTO, InnovateCorp',
    content: 'The cloud migration project was executed flawlessly. Prowork Tech\'s expertise helped us reduce costs by 40% while improving performance.',
    avatar: '👨‍💻',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Founder, GrowthHub',
    content: 'Their mobile app development service exceeded our expectations. The app is user-friendly, fast, and has received excellent feedback from our users.',
    avatar: '👩‍🎨',
  },
];

export const FAQS: FAQ[] = [
  {
    question: 'What services does Prowork Tech offer?',
    answer: 'We offer a comprehensive range of services including web development, mobile app development, cloud solutions, AI & automation, cybersecurity, and data analytics. Our team specializes in creating custom solutions tailored to your business needs.',
  },
  {
    question: 'How long does a typical project take?',
    answer: 'Project timelines vary depending on the scope and complexity. A simple website might take 2-4 weeks, while a complex enterprise application could take 3-6 months. We provide detailed timelines during the initial consultation phase.',
  },
  {
    question: 'Do you provide ongoing support after project completion?',
    answer: 'Yes, we offer comprehensive post-launch support including maintenance, updates, bug fixes, and technical assistance. We also provide monthly retainers for continuous improvement and optimization.',
  },
  {
    question: 'What technologies do you work with?',
    answer: 'We work with a wide range of modern technologies including React, Next.js, Node.js, Python, AWS, Azure, React Native, Flutter, and more. We choose the best technology stack based on your specific requirements.',
  },
  {
    question: 'How do I get started with a project?',
    answer: 'Simply fill out the contact form below or reach out to us directly. We\'ll schedule a free consultation to discuss your requirements, answer any questions, and provide a detailed proposal with timeline and pricing.',
  },
];

export const COMPANY_INFO = {
  name: 'Prowork Tech',
  tagline: 'Innovative Solutions for Your Business Growth',
  description: 'We transform your ideas into powerful digital solutions. From web development to AI automation, we\'ve got you covered.',
  email: 'contact@proworktech.com',
  phone: '+1 (555) 123-4567',
  address: '123 Innovation Street, Tech City, TC 12345',
};
