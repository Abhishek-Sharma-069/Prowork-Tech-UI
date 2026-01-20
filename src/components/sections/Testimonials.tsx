import { TESTIMONIALS } from '../../utils/constants';

const Testimonials = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#3e4444] mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-[#3e4444]/70 max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied clients
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {TESTIMONIALS.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-[#04AA6D] rounded-full flex items-center justify-center text-3xl mr-4">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-bold text-[#3e4444]">{testimonial.name}</h4>
                  <p className="text-[#3e4444]/70 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-[#3e4444]/80 italic">"{testimonial.content}"</p>
              <div className="mt-4 text-yellow-500">★★★★★</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
