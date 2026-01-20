import { WORKFLOW_STEPS } from '../../utils/constants';

const Demonstration = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#3e4444] mb-4">
            How We Work
          </h2>
          <p className="text-xl text-[#3e4444]/70 max-w-2xl mx-auto">
            Our proven workflow ensures successful project delivery
          </p>
        </div>
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-[#04AA6D] rounded-2xl p-8 text-white aspect-square flex items-center justify-center">
              <div className="text-center">
                <div className="text-7xl mb-4">💼</div>
                <p className="text-xl font-semibold">Collaborative Process</p>
              </div>
            </div>
            <div className="space-y-8">
              {WORKFLOW_STEPS.map((step, index) => (
                <div
                  key={index}
                  className="flex gap-4 p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                >
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-[#04AA6D] text-white rounded-lg flex items-center justify-center font-bold text-xl">
                      {step.step}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#3e4444] mb-2">
                      {step.title}
                    </h3>
                    <p className="text-[#3e4444]/70">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Demonstration;
