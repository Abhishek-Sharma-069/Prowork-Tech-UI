import { SERVICES } from '../../utils/constants';

const Services = () => {
  return (
    <section className="py-20 bg-[#FFFFFF]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#3e4444] mb-4">
            Our Services
          </h2>
          <p className="text-xl text-[#3e4444]/70 max-w-2xl mx-auto">
            Comprehensive solutions to help your business thrive in the digital age
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <div
              key={index}
              className="group bg-[#FFFFFF] p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-[#04AA6D] hover:-translate-y-1"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
              <h3 className="text-2xl font-bold text-[#3e4444] mb-3 group-hover:text-[#04AA6D] transition-colors">
                {service.title}
              </h3>
              <p className="text-[#3e4444]/70">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
