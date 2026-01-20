import { COMPANY_INFO } from '../../utils/constants';
import ContactForm from './ContactForm';

const Footer = () => {
  return (
    <footer className="bg-[#3e4444] text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {/* Contact Form */}
          <ContactForm />

          {/* Company Info */}
          <div>
            <h2 className="text-3xl font-bold mb-6 text-white">{COMPANY_INFO.name}</h2>
            <p className="text-white/70 mb-8">
              Leading the way in digital transformation and innovation. We help businesses leverage technology to achieve their goals.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-center text-white/80 hover:text-[#04AA6D] transition-colors">
                <span className="mr-3 text-[#04AA6D]">📧</span>
                <span>{COMPANY_INFO.email}</span>
              </div>
              <div className="flex items-center text-white/80 hover:text-[#04AA6D] transition-colors">
                <span className="mr-3 text-[#04AA6D]">📱</span>
                <span>{COMPANY_INFO.phone}</span>
              </div>
              <div className="flex items-center text-white/80 hover:text-[#04AA6D] transition-colors">
                <span className="mr-3 text-[#04AA6D]">📍</span>
                <span>{COMPANY_INFO.address}</span>
              </div>
            </div>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-[#3e4444] border border-white/10 rounded-full flex items-center justify-center hover:bg-[#04AA6D] hover:border-[#04AA6D] transition-all duration-300">
                <span>📘</span>
              </a>
              <a href="#" className="w-10 h-10 bg-[#3e4444] border border-white/10 rounded-full flex items-center justify-center hover:bg-[#04AA6D] hover:border-[#04AA6D] transition-all duration-300">
                <span>🐦</span>
              </a>
              <a href="#" className="w-10 h-10 bg-[#3e4444] border border-white/10 rounded-full flex items-center justify-center hover:bg-[#04AA6D] hover:border-[#04AA6D] transition-all duration-300">
                <span>💼</span>
              </a>
              <a href="#" className="w-10 h-10 bg-[#3e4444] border border-white/10 rounded-full flex items-center justify-center hover:bg-[#04AA6D] hover:border-[#04AA6D] transition-all duration-300">
                <span>📷</span>
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 mt-8 text-center text-white/60">
          <p>&copy; 2024 {COMPANY_INFO.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
