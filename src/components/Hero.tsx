
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, ChevronRight } from "lucide-react";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };
  
  return (
    <div className="relative overflow-hidden pt-20">
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-300/20 via-transparent to-transparent"></div>
      
      {/* Background decorative elements */}
      <div className="absolute top-20 right-0 w-1/3 h-1/3 bg-brand-300/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 left-10 w-1/4 h-1/4 bg-brand-400/10 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="pt-20 pb-24 md:pt-28 md:pb-32 flex flex-col lg:flex-row items-center">
          {/* Hero content */}
          <div className="flex-1 max-w-3xl">
            <div className="inline-flex items-center rounded-full border border-brand-200 dark:border-brand-800 bg-brand-50 dark:bg-brand-900/30 px-3 py-1 mb-6 text-sm text-brand-700 dark:text-brand-300">
              <span className="text-xs font-semibold">Innovation</span>
              <span className="mx-2 h-1 w-1 rounded-full bg-brand-500"></span>
              <span className="text-xs">
                Announcing DevonΩ - Our Enterprise AI Solution
              </span>
              <ChevronRight className="ml-1 h-3.5 w-3.5" />
            </div>
          
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="heading-gradient">Modular Digital Solutions</span>
              <br /> 
              <span>for Enterprise Scale</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl">
              Devonyx provides scalable, automated SaaS solutions built to transform how enterprises operate. Deploy faster, scale smarter, and maximize your digital potential.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-12">
              <Button size="lg" className="bg-brand-600 hover:bg-brand-700 text-white" onClick={scrollToContact}>
                Contact Us <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-brand-200 dark:border-brand-800" onClick={scrollToContact}>
                Book a Demo
              </Button>
            </div>
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 text-sm">
              <div className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-brand-500" />
                <span>Enterprise Solutions</span>
              </div>
              <div className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-brand-500" />
                <span>Expert Support</span>
              </div>
              <div className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-brand-500" />
                <span>Dedicated Team</span>
              </div>
            </div>
          </div>
          
          {/* Hero image/illustration */}
          <div className="flex-1 w-full lg:w-auto mt-12 lg:mt-0">
            <div className="relative">
              <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-brand-600 to-purple-600 opacity-30 blur-xl"></div>
              <div className="relative max-w-lg mx-auto animate-float glass-card rounded-xl p-1 shadow-card">
                <div className="rounded-lg overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" 
                    alt="Devonyx dashboard"
                    className="w-full"
                  />
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -z-10 -bottom-6 -right-6 w-24 h-24 rounded-full bg-brand-400/30 animate-pulse-slow"></div>
              <div className="absolute -z-10 -top-6 -left-6 w-32 h-32 rounded-full bg-purple-400/20 animate-pulse-slow"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
