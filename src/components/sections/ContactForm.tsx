import { useContactForm } from '../../hooks/useContactForm';

const ContactForm = () => {
  const { formData, formSubmitted, handleInputChange, handleSubmit } = useContactForm();

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6 text-white">Contact Us</h2>
      <p className="text-white/70 mb-6">
        Have a project in mind? Get in touch and let's discuss how we can help.
      </p>
      {formSubmitted && (
        <div className="bg-[#04AA6D] text-white p-4 rounded-lg mb-6 border border-[#04AA6D]/30 shadow-lg">
          <div className="flex items-center gap-2">
            <span className="text-xl">✓</span>
            <span>Thank you! Your message has been submitted successfully. We'll get back to you soon.</span>
          </div>
        </div>
      )}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block mb-2 text-sm font-medium text-white/90">
            Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleInputChange}
            className="w-full px-4 py-3 rounded-lg bg-[#3e4444] border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#04AA6D] focus:border-[#04AA6D] transition-all"
            placeholder="Your Name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-white/90">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleInputChange}
            className="w-full px-4 py-3 rounded-lg bg-[#3e4444] border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#04AA6D] focus:border-[#04AA6D] transition-all"
            placeholder="your.email@example.com"
          />
        </div>
        <div>
          <label htmlFor="contactNumber" className="block mb-2 text-sm font-medium text-white/90">
            Contact Number *
          </label>
          <input
            type="tel"
            id="contactNumber"
            name="contactNumber"
            required
            value={formData.contactNumber}
            onChange={handleInputChange}
            className="w-full px-4 py-3 rounded-lg bg-[#3e4444] border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#04AA6D] focus:border-[#04AA6D] transition-all"
            placeholder="+1 (555) 123-4567"
          />
        </div>
        <div>
          <label htmlFor="message" className="block mb-2 text-sm font-medium text-white/90">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            value={formData.message}
            onChange={handleInputChange}
            className="w-full px-4 py-3 rounded-lg bg-[#3e4444] border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#04AA6D] focus:border-[#04AA6D] resize-none transition-all"
            placeholder="Tell us about your project..."
          />
        </div>
        <button
          type="submit"
          className="w-full bg-[#04AA6D] hover:bg-[#038a5a] text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02]"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
