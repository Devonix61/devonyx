
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Layout, Settings, Shield, ArrowRight } from "lucide-react";
import { fadeInAnimation, slideInAnimation, shineAnimation, scaleInAnimation } from "@/lib/animation";

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
  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.1 });
  
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <div className="absolute top-40 right-0 w-96 h-96 bg-brand-400/5 rounded-full filter blur-[100px] animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-purple-400/5 rounded-full filter blur-[80px] animate-blob animation-delay-4000"></div>
        <div className="absolute top-1/3 left-1/4 w-2 h-2 bg-brand-400 rounded-full animate-ping"></div>
        <div className="absolute top-2/3 right-1/4 w-2 h-2 bg-purple-400 rounded-full animate-ping animation-delay-1000"></div>
        <div className="absolute top-1/4 right-1/3 w-2 h-2 bg-brand-300 rounded-full animate-ping animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-purple-300 rounded-full animate-ping animation-delay-3000"></div>
      </div>
      
      <div className="container mx-auto px-4 pt-24 pb-16 relative z-10">
        <div ref={ref1} className="text-center mb-16">
          <h1 className={`text-4xl md:text-5xl font-bold mb-6 ${inView1 ? shineAnimation : 'opacity-0'}`}>
            Our Services
          </h1>
          <p className={`text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto ${inView1 ? fadeInAnimation(200) : 'opacity-0'}`}>
            Comprehensive enterprise solutions tailored to your business needs
          </p>
        </div>

        <div ref={ref2} className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`group hover:shadow-2xl transition-all duration-700 border border-transparent hover:border-brand-400/20 overflow-hidden ${inView2 ? scaleInAnimation(index * 100) : 'opacity-0'}`}
            >
              <CardHeader className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-brand-600/5 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="h-12 w-12 rounded-lg bg-brand-100 dark:bg-brand-800/50 flex items-center justify-center mb-4 group-hover:bg-brand-500/20 transition-colors duration-500 relative z-10">
                  <div className="transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                    {service.icon}
                  </div>
                </div>
                <CardTitle className="text-2xl group-hover:text-brand-500 transition-colors duration-300 relative z-10">{service.title}</CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-300 relative z-10">
                  {service.description}
                </CardDescription>
                <div className="h-0.5 w-0 bg-gradient-to-r from-brand-500 to-purple-500 group-hover:w-1/2 transition-all duration-700 mt-3 rounded-full"></div>
              </CardHeader>
              <CardContent className="relative z-10">
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li 
                      key={featureIndex} 
                      className="flex items-center gap-2 transform translate-y-0 opacity-100 transition-all duration-300 hover:translate-x-1"
                    >
                      <div className="h-1.5 w-1.5 rounded-full bg-brand-500 group-hover:animate-pulse" />
                      <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className={inView2 ? "text-center animate-fade-up animation-delay-500" : "text-center opacity-0"}>
          <Button 
            size="lg" 
            className="bg-brand-600 hover:bg-brand-700 text-white relative overflow-hidden group"
          >
            <span className="relative z-10 flex items-center">
              Contact Us
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-brand-600 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Services;
