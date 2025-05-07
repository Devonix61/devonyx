
import { CheckCircle } from "lucide-react";
import { fadeInAnimation, hoverScaleAnimation } from "@/lib/animation";
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
    <div className="bg-gray-50 dark:bg-black py-24" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`max-w-3xl mx-auto text-center mb-16 ${inView ? 'animate-fade-up' : 'opacity-0'}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Our Technical Expertise
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            We combine deep technical knowledge with industry experience to deliver innovative solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {expertiseAreas.map((area, index) => (
            <div
              key={index}
              className={`${inView ? fadeInAnimation(index * 100) : 'opacity-0'} ${hoverScaleAnimation} bg-white dark:bg-brand-900 rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500`}
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={area.image}
                  alt={area.title}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
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
