
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Users, BookOpen, Layout, ArrowRight, Check, Zap, Target, Award } from "lucide-react";
import { 
  fadeInAnimation, 
  slideInAnimation, 
  shineAnimation, 
  gradientFlow, 
  blurInAnimation, 
  floatAnimation,
  popInAnimation,
  shimmerAnimation,
  borderGlowAnimation,
  flashAnimation
} from "@/lib/animation";

const About = () => {
  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref3, inView3] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref4, inView4] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Enhanced animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
        <div className="absolute top-40 right-0 w-96 h-96 bg-brand-300/10 rounded-full filter blur-[100px] animate-blob"></div>
        <div className="absolute bottom-40 left-0 w-80 h-80 bg-purple-400/10 rounded-full filter blur-[80px] animate-blob animation-delay-4000"></div>
        <div className="absolute top-1/3 left-1/4 w-2 h-2 bg-brand-400 rounded-full animate-ping"></div>
        <div className="absolute top-2/3 right-1/4 w-2 h-2 bg-purple-400 rounded-full animate-ping animation-delay-1000"></div>
        <div className="absolute top-1/4 right-1/3 w-2 h-2 bg-brand-300 rounded-full animate-ping animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-purple-300 rounded-full animate-ping animation-delay-3000"></div>
        
        {/* Additional futuristic elements */}
        <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] border border-brand-200/10 rounded-full animate-spin-slow"></div>
        <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] border border-purple-200/10 rounded-full animate-spin-reverse"></div>
        <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] border border-brand-300/10 rounded-full animate-spin-slow"></div>
        
        {/* Grid lines */}
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-[0.02]"></div>
      </div>
      
      <div className="container mx-auto px-4 pt-24 pb-16 relative z-10">
        <div ref={ref1} className="text-center mb-16">
          <div className={`inline-flex px-4 py-1 mb-6 rounded-full bg-brand-100/50 dark:bg-brand-900/50 border border-brand-200 dark:border-brand-800 ${inView1 ? 'animate-fade-in' : 'opacity-0'}`}>
            <span className="text-sm font-medium text-brand-700 dark:text-brand-300">About Devonyx</span>
          </div>
          
          <h1 className={`text-4xl md:text-5xl font-bold mb-6 ${inView1 ? shineAnimation : 'opacity-0'}`}>
            Pioneering the Future of Enterprise Technology
          </h1>
          
          <div className={`max-w-3xl mx-auto ${inView1 ? slideInAnimation('right', 200) : 'opacity-0'}`}>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              We're a team of innovators, designers, and engineers dedicated to transforming how businesses leverage technology for growth and innovation.
            </p>
          </div>
        </div>

        <div ref={ref2} className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <Card className={`overflow-hidden border-0 shadow-xl relative ${inView2 ? 'animate-fade-in' : 'opacity-0'}`}>
            <div className="absolute inset-0 bg-gradient-to-br from-brand-500/20 to-purple-500/20 opacity-80"></div>
            <CardContent className="space-y-4 p-8 relative z-10">
              <div className={`h-16 w-16 rounded-2xl bg-brand-100 dark:bg-brand-800/80 flex items-center justify-center mb-6 ${inView2 ? floatAnimation : ''}`}>
                <Target className="h-8 w-8 text-brand-500" />
              </div>
              <h2 className={`text-3xl font-bold mb-4 ${gradientFlow}`}>Our Mission</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                To empower businesses with cutting-edge SaaS solutions that drive growth, efficiency, and innovation in the digital age, creating lasting impact through technology.
              </p>
              
              <div className={`mt-6 space-y-4 ${inView2 ? 'animate-fade-in animation-delay-300' : 'opacity-0'}`}>
                {['Customer-centric approach', 'Continuous innovation', 'Sustainable solutions'].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="h-6 w-6 rounded-full bg-brand-500/20 flex items-center justify-center">
                      <Check className="h-4 w-4 text-brand-500" />
                    </div>
                    <span className="text-gray-700 dark:text-gray-200">{item}</span>
                  </div>
                ))}
              </div>
              
              <div className="h-1 w-20 bg-gradient-to-r from-brand-400 to-purple-400 rounded-full mt-6"></div>
            </CardContent>
          </Card>

          <Card className={`overflow-hidden border-0 shadow-xl relative ${inView2 ? 'animate-fade-in animation-delay-300' : 'opacity-0'}`}>
            <div className="absolute inset-0 bg-gradient-to-bl from-purple-500/20 to-brand-500/20 opacity-80"></div>
            <CardContent className="space-y-4 p-8 relative z-10">
              <div className={`h-16 w-16 rounded-2xl bg-brand-100 dark:bg-brand-800/80 flex items-center justify-center mb-6 ${inView2 ? floatAnimation : ''}`}>
                <Zap className="h-8 w-8 text-brand-500" />
              </div>
              <h2 className={`text-3xl font-bold mb-4 ${gradientFlow}`}>Our Vision</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                To become the global leader in enterprise SaaS solutions, setting new standards for innovation, reliability, and customer success in an increasingly digital world.
              </p>
              
              <div className={`mt-6 space-y-4 ${inView2 ? 'animate-fade-in animation-delay-300' : 'opacity-0'}`}>
                {['Global impact', 'Industry leadership', 'Technological excellence'].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="h-6 w-6 rounded-full bg-brand-500/20 flex items-center justify-center">
                      <Check className="h-4 w-4 text-brand-500" />
                    </div>
                    <span className="text-gray-700 dark:text-gray-200">{item}</span>
                  </div>
                ))}
              </div>
              
              <div className="h-1 w-20 bg-gradient-to-r from-purple-400 to-brand-400 rounded-full mt-6"></div>
            </CardContent>
          </Card>
        </div>

        <div ref={ref3} className="mb-24">
          <div className={`text-center mb-12 ${inView3 ? popInAnimation : 'opacity-0'}`}>
            <h2 className="text-3xl font-bold mb-4 inline-block">
              <span className={shimmerAnimation}>Core Values</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Principles that guide everything we do at Devonyx
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Shield className="h-10 w-10 text-brand-500" />,
                title: "Enterprise Security",
                description: "Industry-leading security protocols and compliance standards that protect your business data."
              },
              {
                icon: <Users className="h-10 w-10 text-brand-500" />,
                title: "Expert Team",
                description: "Dedicated professionals with deep industry knowledge and technical expertise."
              },
              {
                icon: <BookOpen className="h-10 w-10 text-brand-500" />,
                title: "Knowledge Sharing",
                description: "Comprehensive resources and documentation to support your success."
              },
              {
                icon: <Award className="h-10 w-10 text-brand-500" />,
                title: "Excellence",
                description: "Commitment to delivering best-in-class solutions that exceed expectations."
              }
            ].map((item, index) => (
              <Card key={index} className={`backdrop-blur-sm border-transparent group overflow-hidden relative ${inView3 ? blurInAnimation(index * 100) : 'opacity-0'}`}>
                <div className="absolute inset-0 bg-gradient-to-br from-brand-500/5 to-purple-500/5 group-hover:opacity-30 opacity-0 transition-opacity duration-500"></div>
                <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r from-brand-500 to-purple-500 w-0 group-hover:w-full transition-all duration-700 ${borderGlowAnimation}`}></div>
                <CardContent className="p-6 space-y-4">
                  <div className="h-16 w-16 rounded-2xl bg-brand-100 dark:bg-brand-800/50 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    {item.icon}
                    <div className={`absolute inset-0 bg-brand-500/20 rounded-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 ${flashAnimation}`}></div>
                  </div>
                  <h3 className="text-xl font-bold group-hover:text-brand-500 transition-colors duration-300">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div ref={ref4} className={`relative rounded-2xl overflow-hidden ${inView4 ? 'animate-fade-in animation-delay-300' : 'opacity-0'}`}>
          <div className="absolute inset-0 bg-gradient-to-br from-brand-700 to-purple-700 opacity-90"></div>
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080')] mix-blend-overlay opacity-40 bg-center bg-cover"></div>
          <div className="relative z-10 p-12 md:p-16 text-white">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Journey</h2>
              <p className="text-xl opacity-90 mb-10 leading-relaxed">
                Ready to transform your business with cutting-edge solutions designed for the future? Partner with Devonyx and experience technology that evolves with your needs.
              </p>
              <Button 
                size="lg" 
                className="bg-white text-brand-700 hover:bg-brand-50 transition-all hover:-translate-y-1 shadow-lg hover:shadow-xl"
                onClick={() => window.location.href = "/#contact"}
              >
                <span className="flex items-center">
                  Get Started with Devonyx
                  <ArrowRight className="ml-2 h-4 w-4 animate-pulse-slow" />
                </span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
