
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Users, BookOpen, Layout, ArrowRight } from "lucide-react";
import { fadeInAnimation, slideInAnimation, shineAnimation, gradientFlow, blurInAnimation } from "@/lib/animation";

const About = () => {
  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref3, inView3] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-40 right-0 w-96 h-96 bg-brand-300/10 rounded-full filter blur-[100px] animate-blob"></div>
      <div className="absolute bottom-40 left-0 w-80 h-80 bg-purple-400/10 rounded-full filter blur-[80px] animate-blob animation-delay-4000"></div>
      
      <div className="container mx-auto px-4 pt-24 pb-16 relative z-10">
        <div ref={ref1} className="text-center mb-16">
          <h1 className={`text-4xl md:text-5xl font-bold mb-6 ${inView1 ? shineAnimation : 'opacity-0'}`}>
            About Devonyx
          </h1>
          <p className={`text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto ${inView1 ? fadeInAnimation(200) : 'opacity-0'}`}>
            Leading the future of enterprise SaaS solutions with innovation and excellence.
          </p>
        </div>

        <div ref={ref2} className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <Card className={`p-6 hover:shadow-xl transition-all duration-500 border border-transparent hover:border-brand-400/20 group ${inView2 ? slideInAnimation('left') : 'opacity-0'}`}>
            <CardContent className="space-y-4 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-brand-600/5 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <h2 className={`text-2xl font-semibold ${gradientFlow}`}>Our Mission</h2>
              <p className="text-gray-600 dark:text-gray-300 relative z-10">
                To empower businesses with cutting-edge SaaS solutions that drive growth, efficiency, and innovation in the digital age.
              </p>
              <div className="h-1 w-20 bg-gradient-to-r from-brand-400 to-purple-400 rounded-full transform origin-left scale-0 group-hover:scale-100 transition-transform duration-500"></div>
            </CardContent>
          </Card>

          <Card className={`p-6 hover:shadow-xl transition-all duration-500 border border-transparent hover:border-brand-400/20 group ${inView2 ? slideInAnimation('right') : 'opacity-0'}`}>
            <CardContent className="space-y-4 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-brand-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <h2 className={`text-2xl font-semibold ${gradientFlow}`}>Our Vision</h2>
              <p className="text-gray-600 dark:text-gray-300 relative z-10">
                To become the global leader in enterprise SaaS solutions, setting new standards for innovation, reliability, and customer success.
              </p>
              <div className="h-1 w-20 bg-gradient-to-r from-purple-400 to-brand-400 rounded-full transform origin-left scale-0 group-hover:scale-100 transition-transform duration-500"></div>
            </CardContent>
          </Card>
        </div>

        <div ref={ref3} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {[
            {
              icon: <Shield className="h-8 w-8 text-brand-500" />,
              title: "Enterprise Security",
              description: "Industry-leading security protocols and compliance standards."
            },
            {
              icon: <Users className="h-8 w-8 text-brand-500" />,
              title: "Expert Team",
              description: "Dedicated professionals with deep industry knowledge."
            },
            {
              icon: <BookOpen className="h-8 w-8 text-brand-500" />,
              title: "Knowledge Base",
              description: "Comprehensive resources and documentation."
            },
            {
              icon: <Layout className="h-8 w-8 text-brand-500" />,
              title: "Scalable Solutions",
              description: "Flexible platforms that grow with your business."
            }
          ].map((item, index) => (
            <Card key={index} className={`p-6 hover:shadow-2xl transition-all duration-500 backdrop-blur-sm border-transparent hover:border-brand-400/20 group ${inView3 ? blurInAnimation(index * 100) : 'opacity-0'}`}>
              <CardContent className="space-y-4">
                <div className="h-12 w-12 rounded-lg bg-brand-100 dark:bg-brand-800/50 flex items-center justify-center group-hover:bg-brand-500/20 transition-colors duration-500">
                  <div className="transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                    {item.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold group-hover:text-brand-500 transition-colors duration-300">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                <div className="h-0.5 w-0 bg-gradient-to-r from-brand-500 to-purple-500 group-hover:w-full transition-all duration-500 rounded-full"></div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className={inView3 ? "text-center animate-fade-up animation-delay-300" : "text-center opacity-0"}>
          <Button 
            size="lg" 
            className="bg-brand-600 hover:bg-brand-700 text-white relative overflow-hidden group"
          >
            <span className="relative z-10 flex items-center">
              Get Started with Devonyx
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-brand-600 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default About;
