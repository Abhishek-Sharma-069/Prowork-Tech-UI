import { COMPANY_INFO } from '../../utils/constants';

const Hero = () => {
  return (
    <section className="relative bg-[#3e4444] text-white overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#04AA6D]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#04AA6D]/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#04AA6D]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative container mx-auto px-4 py-12 md:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge/Announcement */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 bg-[#04AA6D]/20 border border-[#04AA6D]/30 rounded-full text-sm font-medium">
            <span className="w-2 h-2 bg-[#04AA6D] rounded-full animate-pulse"></span>
            <span>Transforming Businesses with Technology</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-4 leading-tight">
            <span className="block">{COMPANY_INFO.name}</span>
            <span className="block text-[#04AA6D] mt-1">Solutions</span>
          </h1>

          {/* Tagline */}
          <p className="text-lg md:text-xl lg:text-2xl mb-4 text-white/90 font-light max-w-3xl mx-auto">
            {COMPANY_INFO.tagline}
          </p>

          {/* Description */}
          <p className="text-base md:text-lg mb-6 text-white/80 max-w-2xl mx-auto leading-relaxed">
            {COMPANY_INFO.description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <button className="group relative bg-[#04AA6D] hover:bg-[#038a5a] text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 min-w-[180px]">
              <span className="relative z-10">Get Started</span>
              <div className="absolute inset-0 bg-[#04AA6D] rounded-lg opacity-0 group-hover:opacity-100 transition-opacity blur-xl"></div>
            </button>
            <button className="group bg-transparent border-2 border-white/30 hover:border-white text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-white/10 min-w-[180px]">
              Learn More
            </button>
          </div>

          {/* Stats or Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 pt-8 border-t border-white/10">
            <div className="text-center">
              <div className="text-4xl font-bold text-[#04AA6D] mb-2">500+</div>
              <div className="text-white/70 text-sm uppercase tracking-wider">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#04AA6D] mb-2">98%</div>
              <div className="text-white/70 text-sm uppercase tracking-wider">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#04AA6D] mb-2">24/7</div>
              <div className="text-white/70 text-sm uppercase tracking-wider">Support Available</div>
            </div>
          </div>
        </div>

        {/* Floating elements/decoration */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-[#04AA6D]/20 rounded-lg rotate-12 hidden lg:block"></div>
        <div className="absolute bottom-20 right-10 w-16 h-16 bg-[#04AA6D]/20 rounded-full hidden lg:block"></div>
        <div className="absolute top-1/2 right-20 w-12 h-12 bg-[#04AA6D]/10 rounded-lg rotate-45 hidden xl:block"></div>
      </div>

      {/* Bottom wave or gradient transition */}
      <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-b from-transparent to-white"></div>
    </section>
  );
};

export default Hero;
