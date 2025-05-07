
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  BookOpen, 
  Layout, 
  Settings, 
  Shield, 
  ArrowRight, 
  Zap, 
  Server, 
  Database, 
  Code
} from "lucide-react";
import { 
  fadeInAnimation, 
  slideInAnimation, 
  shineAnimation, 
  scaleInAnimation, 
  popInAnimation, 
  shimmerAnimation,
  floatAnimation,
  borderGlowAnimation,
  pulseGlowAnimation
} from "@/lib/animation";

const services = [
  {
    icon: <Shield className="h-10 w-10 text-brand-500" />,
    title: "Enterprise Security Solutions",
    description: "Advanced security protocols and compliance frameworks to protect your business data with state-of-the-art encryption and access controls.",
    features: ["End-to-end encryption", "Compliance management", "Security audits", "Access control"]
  },
  {
    icon: <Server className="h-10 w-10 text-brand-500" />,
    title: "Cloud Infrastructure",
    description: "Scalable and reliable cloud infrastructure solutions built to handle enterprise workloads while maintaining peak performance.",
    features: ["Auto-scaling", "Load balancing", "Disaster recovery", "24/7 monitoring"]
  },
  {
    icon: <Code className="h-10 w-10 text-brand-500" />,
    title: "Custom Development",
    description: "Bespoke software solutions designed to address your specific business challenges with cutting-edge technologies.",
    features: ["API development", "Microservices", "Custom applications", "System integration"]
  },
  {
    icon: <Database className="h-10 w-10 text-brand-500" />,
    title: "Data Management",
    description: "Comprehensive data solutions from storage to analysis, helping you extract valuable insights from your organization's information.",
    features: ["Data warehousing", "Analytics", "ETL processes", "Visualization"]
  },
  {
    icon: <Settings className="h-10 w-10 text-brand-500" />,
    title: "Automation Services",
    description: "Streamline your business processes with intelligent automation solutions that reduce manual work and increase efficiency.",
    features: ["Workflow automation", "Process optimization", "Integration services", "Custom scripts"]
  },
  {
    icon: <BookOpen className="h-10 w-10 text-brand-500" />,
    title: "Consulting & Support",
    description: "Expert guidance and support for your digital transformation journey, from strategy development to implementation and beyond.",
    features: ["Technical consulting", "Implementation support", "Training", "24/7 assistance"]
  }
];

const Services = () => {
  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref3, inView3] = useInView({ triggerOnce: true, threshold: 0.1 });
  
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Enhanced animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
        <div className="absolute top-40 right-0 w-96 h-96 bg-brand-400/10 rounded-full filter blur-[100px] animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-purple-400/10 rounded-full filter blur-[80px] animate-blob animation-delay-4000"></div>
        
        {/* Floating particles */}
        <div className="absolute top-1/3 left-1/4 w-2 h-2 bg-brand-400 rounded-full animate-ping"></div>
        <div className="absolute top-2/3 right-1/4 w-2 h-2 bg-purple-400 rounded-full animate-ping animation-delay-1000"></div>
        <div className="absolute top-1/4 right-1/3 w-2 h-2 bg-brand-300 rounded-full animate-ping animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-purple-300 rounded-full animate-ping animation-delay-3000"></div>
        
        {/* Futuristic elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-brand-200/10 rounded-full animate-spin-slow"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] border border-purple-200/10 rounded-full animate-spin-reverse"></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-[0.02]"></div>
      </div>
      
      <div className="container mx-auto px-4 pt-24 pb-16 relative z-10">
        <div ref={ref1} className="text-center mb-16">
          <div className={`inline-flex px-4 py-1 mb-6 rounded-full bg-brand-100/50 dark:bg-brand-900/50 border border-brand-200 dark:border-brand-800 ${inView1 ? popInAnimation : 'opacity-0'}`}>
            <span className="text-sm font-medium text-brand-700 dark:text-brand-300">Our Services</span>
          </div>
          
          <h1 className={`text-4xl md:text-5xl font-bold mb-6 ${inView1 ? shineAnimation : 'opacity-0'}`}>
            Enterprise Solutions
          </h1>
          
          <p className={`text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto ${inView1 ? fadeInAnimation(200) : 'opacity-0'}`}>
            Comprehensive technology solutions tailored to your business needs, powered by cutting-edge innovation.
          </p>
        </div>

        <div ref={ref2} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`group hover:shadow-2xl transition-all duration-700 border border-transparent hover:border-brand-400/20 overflow-hidden ${inView2 ? scaleInAnimation(index * 100) : 'opacity-0'} relative`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-brand-500/5 via-purple-500/5 to-brand-500/5 opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
              
              <CardHeader className="relative">
                <div className={`h-16 w-16 rounded-2xl bg-brand-100 dark:bg-brand-800/70 flex items-center justify-center mb-4 group-hover:bg-brand-500/20 transition-all duration-500 relative overflow-hidden ${floatAnimation}`}>
                  <div className="transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 z-10">
                    {service.icon}
                  </div>
                  <div className={`absolute inset-0 bg-gradient-to-br from-brand-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-all duration-500 ${pulseGlowAnimation}`}></div>
                </div>
                
                <CardTitle className="text-2xl group-hover:text-brand-500 transition-colors duration-300 relative z-10 flex items-center">
                  {service.title}
                  <div className="ml-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <Zap className="h-4 w-4 text-brand-500 animate-pulse" />
                  </div>
                </CardTitle>
                
                <CardDescription className="text-gray-600 dark:text-gray-300 relative z-10 text-base">
                  {service.description}
                </CardDescription>
                
                <div className={`h-0.5 w-0 bg-gradient-to-r from-brand-500 to-purple-500 group-hover:w-1/2 transition-all duration-700 mt-3 rounded-full ${borderGlowAnimation}`}></div>
              </CardHeader>
              
              <CardContent className="relative z-10">
                <h4 className="text-sm font-semibold text-brand-600 dark:text-brand-400 mb-3 opacity-0 group-hover:opacity-100 transition-all duration-500">Key Features:</h4>
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li 
                      key={featureIndex} 
                      className="flex items-center gap-2 transform translate-y-0 opacity-0 group-hover:opacity-100 transition-all"
                      style={{ transitionDelay: `${featureIndex * 100 + 200}ms`, transitionDuration: '500ms' }}
                    >
                      <div className="h-1.5 w-1.5 rounded-full bg-brand-500 group-hover:animate-pulse" />
                      <span className="text-gray-600 dark:text-gray-300 transform group-hover:translate-x-1 transition-transform duration-500 delay-200">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div ref={ref3} className="mb-16">
          <div className={`relative rounded-2xl overflow-hidden shadow-2xl ${inView3 ? 'animate-fade-in animation-delay-300' : 'opacity-0'}`}>
            <div className="absolute inset-0 bg-gradient-to-br from-brand-700 to-purple-700 opacity-90"></div>
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080')] mix-blend-overlay opacity-30 bg-center bg-cover"></div>
            
            <div className="relative z-10 p-12 md:p-16 text-white">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${shimmerAnimation}`}>
                  Custom Solutions for Your Business
                </h2>
                <p className="text-xl opacity-90 mb-10 leading-relaxed">
                  Don't see exactly what you need? Our team specializes in developing custom solutions tailored to your unique business requirements and challenges.
                </p>
                <Button 
                  size="lg" 
                  className="bg-white text-brand-700 hover:bg-brand-50 transition-all hover:-translate-y-1 shadow-lg hover:shadow-xl"
                  onClick={() => window.location.href = "/#contact"}
                >
                  <span className="flex items-center">
                    Talk to Our Experts
                    <ArrowRight className="ml-2 h-4 w-4 animate-pulse-slow" />
                  </span>
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className={inView3 ? "text-center animate-fade-up animation-delay-500" : "text-center opacity-0"}>
          <div className="max-w-lg mx-auto backdrop-blur-sm bg-white/30 dark:bg-black/30 rounded-2xl p-8 border border-white/10 dark:border-white/5 shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Contact our team today to discuss how we can help transform your business with our enterprise solutions.
            </p>
            <Button 
              size="lg" 
              className="bg-brand-600 hover:bg-brand-700 text-white relative overflow-hidden group"
              onClick={() => window.location.href = "/#contact"}
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
    </div>
  );
};

export default Services;
