
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Layout, Settings, Shield, ArrowRight } from "lucide-react";
import { fadeInAnimation, slideInAnimation, scaleInAnimation, borderGlowAnimation } from "@/lib/animation";

const services = [
  {
    icon: <Shield className="h-8 w-8 text-brand-500" />,
    title: "Enterprise Security Solutions",
    description: "Advanced security protocols and compliance frameworks to protect your business data.",
    features: ["End-to-end encryption", "Compliance management", "Security audits", "Access control"]
  },
  {
    icon: <Layout className="h-8 w-8 text-brand-500" />,
    title: "Cloud Infrastructure",
    description: "Scalable and reliable cloud infrastructure solutions for modern enterprises.",
    features: ["Auto-scaling", "Load balancing", "Disaster recovery", "24/7 monitoring"]
  },
  {
    icon: <Settings className="h-8 w-8 text-brand-500" />,
    title: "Automation Services",
    description: "Streamline your business processes with intelligent automation solutions.",
    features: ["Workflow automation", "Process optimization", "Integration services", "Custom scripts"]
  },
  {
    icon: <BookOpen className="h-8 w-8 text-brand-500" />,
    title: "Consulting & Support",
    description: "Expert guidance and support for your digital transformation journey.",
    features: ["Technical consulting", "Implementation support", "Training", "24/7 assistance"]
  }
];

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute -top-20 -left-20 w-64 h-64 bg-purple-400/10 rounded-full animate-blob filter blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-brand-400/5 rounded-full animate-blob animation-delay-4000 filter blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        <div className={`text-center mb-16 ${inView ? 'animate-fade-up' : 'opacity-0'}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="animate-background-shine bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] text-transparent bg-clip-text">
              Our Services
            </span>
            <div className="h-1 w-20 mx-auto bg-gradient-to-r from-brand-500 to-purple-500 mt-4 rounded-full"></div>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Comprehensive enterprise solutions tailored to your business needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`group hover:shadow-2xl transition-all duration-700 border border-transparent hover:border-brand-400/20 ${inView ? scaleInAnimation(index * 100) : 'opacity-0'}`}
            >
              <CardHeader>
                <div className={`h-12 w-12 rounded-lg bg-brand-100 dark:bg-brand-800/50 flex items-center justify-center mb-4 group-hover:bg-brand-500/20 transition-colors duration-500 overflow-hidden relative ${borderGlowAnimation}`}>
                  <div className="transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                    {service.icon}
                  </div>
                  <div className="absolute -inset-px bg-gradient-to-r from-brand-500/0 via-brand-500/50 to-brand-500/0 opacity-0 group-hover:opacity-30 transition-opacity duration-700 -z-10"></div>
                </div>
                <CardTitle className="text-2xl group-hover:text-brand-500 transition-colors duration-300">{service.title}</CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-300">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li 
                      key={featureIndex} 
                      className={`flex items-center gap-2 ${inView ? fadeInAnimation((index * 100) + (featureIndex * 50)) : 'opacity-0'}`}
                    >
                      <div className="h-1.5 w-1.5 rounded-full bg-brand-500 group-hover:animate-pulse" />
                      <span className="text-gray-600 dark:text-gray-300 transform hover:translate-x-1 transition-transform duration-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className={`mt-12 flex justify-center ${inView ? 'animate-fade-up animation-delay-500' : 'opacity-0'}`}>
          <Button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-brand-600 hover:bg-brand-700 text-white relative overflow-hidden group"
          >
            <span className="relative z-10 flex items-center">
              Learn More
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-brand-600 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
