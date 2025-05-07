
import { 
  Award, 
  Clock, 
  Users, 
  ShieldCheck,
  Laptop,
  LineChart
} from "lucide-react";
import { useInView } from "react-intersection-observer";
import { fadeInAnimation, hoverScaleAnimation } from "@/lib/animation";

const reasons = [
  {
    icon: <Award className="h-10 w-10 text-brand-500" />,
    title: "Award-Winning Solutions",
    description: "Our innovative approach has earned recognition from industry experts and satisfied clients worldwide."
  },
  {
    icon: <Users className="h-10 w-10 text-brand-500" />,
    title: "Expert Team",
    description: "Our specialists bring years of industry experience and deep technical knowledge to every project."
  },
  {
    icon: <Clock className="h-10 w-10 text-brand-500" />,
    title: "Rapid Development",
    description: "We employ agile methodologies to deliver solutions quickly without sacrificing quality or security."
  },
  {
    icon: <ShieldCheck className="h-10 w-10 text-brand-500" />,
    title: "Enterprise Security",
    description: "Your data protection is our priority, with industry-leading security practices integrated into every solution."
  },
  {
    icon: <Laptop className="h-10 w-10 text-brand-500" />,
    title: "Modern Technologies",
    description: "We leverage cutting-edge tools and frameworks to build future-proof solutions that scale with your business."
  },
  {
    icon: <LineChart className="h-10 w-10 text-brand-500" />,
    title: "Data-Driven Approach",
    description: "Our recommendations and solutions are backed by thorough analysis and measurable performance metrics."
  }
];

const WhyUs = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="relative py-24 overflow-hidden" ref={ref}>
      {/* Background decoration with animation */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-brand-50 dark:bg-brand-900/20 rounded-full opacity-50 blur-3xl animate-blob"></div>
        <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-purple-50 dark:bg-purple-900/20 rounded-full opacity-70 blur-3xl animate-blob animation-delay-2000"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`max-w-3xl mx-auto text-center mb-16 ${inView ? 'animate-fade-up' : 'opacity-0'}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Why You Need Devonyx's Support
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Our comprehensive approach combines technical excellence with business acumen to deliver outstanding results.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {reasons.map((reason, index) => (
            <div 
              key={index}
              className={`${inView ? fadeInAnimation(index * 75) : 'opacity-0'} ${hoverScaleAnimation} bg-white dark:bg-brand-900/50 backdrop-blur-sm rounded-xl p-8 shadow-lg transition-all duration-300`}
            >
              <div className="bg-brand-50 dark:bg-brand-800/50 rounded-full p-4 inline-block mb-6 animate-pulse-slow">
                {reason.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                {reason.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className={`${inView ? 'animate-fade-up animation-delay-300' : 'opacity-0'} bg-gradient-to-r from-brand-600 to-purple-600 rounded-xl p-8 md:p-12 text-white shadow-xl overflow-hidden relative`}>
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1665686374221-1901faa9f3e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080')] opacity-10 mix-blend-overlay bg-center bg-cover"></div>
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to transform your business?</h3>
            <p className="text-lg mb-6 max-w-2xl opacity-90">
              Our team is committed to helping your organization achieve its digital transformation goals with solutions tailored to your specific needs.
            </p>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-brand-600 hover:bg-gray-100 px-6 py-3 rounded-md font-semibold transition-all hover:translate-y-[-2px] duration-300"
            >
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
