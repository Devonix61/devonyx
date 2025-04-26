
import { Check } from "lucide-react";

const reasons = [
  {
    title: "Comprehensive Solutions",
    description: "End-to-end digital transformation with integrated solutions that work seamlessly together."
  },
  {
    title: "Scalable Infrastructure",
    description: "Cloud-native architecture that grows with your business needs without compromising performance."
  },
  {
    title: "Cost Efficiency",
    description: "Optimize your technology spending with our efficient, modular solutions and transparent pricing."
  },
  {
    title: "Innovation Focus",
    description: "Stay ahead with cutting-edge technology and continuous platform improvements."
  }
];

const WhyUs = () => {
  return (
    <section id="why-us" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="heading-gradient">Why You Need Nexus Info's Support</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Partner with us to transform your business operations and achieve sustainable growth with our enterprise-grade solutions.
            </p>
            
            <div className="space-y-6">
              {reasons.map((reason, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="h-6 w-6 rounded-full bg-brand-100 dark:bg-brand-800 flex items-center justify-center">
                      <Check className="h-4 w-4 text-brand-600 dark:text-brand-400" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{reason.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{reason.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-brand-600 to-purple-600 opacity-20 blur-3xl"></div>
            <div className="relative glass-card rounded-xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
                alt="Technology Dashboard"
                className="w-full rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
