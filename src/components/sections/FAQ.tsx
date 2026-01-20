import { FAQS } from '../../utils/constants';
import { useFAQ } from '../../hooks/useFAQ';

const FAQ = () => {
  const { openFAQ, toggleFAQ } = useFAQ();

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#3e4444] mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-[#3e4444]/70">
            Got questions? We've got answers
          </p>
        </div>
        <div className="space-y-4">
          {FAQS.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-[#04AA6D]/10 transition-colors flex justify-between items-center"
              >
                <span className="font-semibold text-[#3e4444]">{faq.question}</span>
                <span className="text-[#04AA6D] text-2xl">
                  {openFAQ === index ? '−' : '+'}
                </span>
              </button>
              {openFAQ === index && (
                <div className="px-6 py-4 bg-white text-[#3e4444]/80 border-t border-gray-200">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
