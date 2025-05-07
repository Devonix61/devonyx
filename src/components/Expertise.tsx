
import { CheckCircle } from "lucide-react";
import { fadeInAnimation, hoverScaleAnimation, blurInAnimation, borderGlowAnimation } from "@/lib/animation";
import { useInView } from "react-intersection-observer";

const expertiseAreas = [
  {
    title: "AI & Machine Learning",
    description: "Our AI solutions use cutting-edge algorithms to analyze data, predict trends, and automate complex decision-making processes.",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
  },
  {
    title: "Cloud Engineering",
    description: "We design and implement scalable cloud infrastructures that adapt to your business needs while optimizing performance and costs.",
    image: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
  },
  {
    title: "Cybersecurity",
    description: "Our comprehensive security frameworks protect your digital assets from threats while ensuring compliance with industry regulations.",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
  }
];

const Expertise = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="bg-gray-50 dark:bg-black py-24 relative overflow-hidden" ref={ref}>
      {/* Animated background elements */}
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-purple-400/10 rounded-full animate-blob filter blur-3xl"></div>
      <div className="absolute -bottom-40 -left-20 w-80 h-80 bg-brand-400/5 rounded-full animate-blob animation-delay-4000 filter blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`max-w-3xl mx-auto text-center mb-16 ${inView ? 'animate-fade-up' : 'opacity-0'}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white relative">
            <span className="animate-background-shine bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] text-transparent bg-clip-text">
              Our Technical Expertise
            </span>
            <div className="absolute -z-10 left-1/2 -translate-x-1/2 bottom-0 w-1/2 h-1 bg-gradient-to-r from-transparent via-brand-500 to-transparent"></div>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            We combine deep technical knowledge with industry experience to deliver innovative solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {expertiseAreas.map((area, index) => (
            <div
              key={index}
              className={`${inView ? blurInAnimation(index * 150) : 'opacity-0'} ${hoverScaleAnimation} bg-white dark:bg-brand-900/70 rounded-xl shadow-xl overflow-hidden group transition-all duration-700`}
            >
              <div className="h-48 overflow-hidden relative">
                <img
                  src={area.image}
                  alt={area.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              </div>
              <div className="p-6 relative border-t border-transparent group-hover:border-brand-300/20 transition-all duration-700">
                <div className={`absolute -inset-px bg-gradient-to-r from-brand-500/0 via-brand-500/10 to-brand-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10 rounded-b-xl ${borderGlowAnimation}`}></div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-brand-500 transition-colors duration-300">
                  {area.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {area.description}
                </p>
                <div className="flex items-center text-brand-600 dark:text-brand-400">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  <span className="text-sm font-medium">Industry Leading</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Expertise;
