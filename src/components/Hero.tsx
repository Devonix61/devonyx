
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, ChevronRight } from "lucide-react";
import { shineAnimation } from "@/lib/animation";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };
  
  return (
    <div className="relative overflow-hidden pt-20">
      {/* Animated background gradients */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-300/20 via-transparent to-transparent animate-pulse-slow"></div>
      
      {/* Background decorative elements with animation */}
      <div className="absolute top-20 right-0 w-1/3 h-1/3 bg-brand-300/10 rounded-full filter blur-3xl animate-blob"></div>
      <div className="absolute bottom-0 left-10 w-1/4 h-1/4 bg-brand-400/10 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-20 right-10 w-1/5 h-1/5 bg-purple-400/10 rounded-full filter blur-3xl animate-blob animation-delay-4000"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="pt-20 pb-24 md:pt-28 md:pb-32 flex flex-col lg:flex-row items-center">
          {/* Hero content with animations */}
          <div className="flex-1 max-w-3xl animate-fade-up">
            <div className="inline-flex items-center rounded-full border border-brand-200 dark:border-brand-800 bg-brand-50 dark:bg-brand-900/30 px-3 py-1 mb-6 text-sm text-brand-700 dark:text-brand-300 animate-pulse-slow">
              <span className="text-xs font-semibold">Innovation</span>
              <span className="mx-2 h-1 w-1 rounded-full bg-brand-500"></span>
              <span className="text-xs">
                Announcing DevonΩ - Our Enterprise AI Solution
              </span>
              <ChevronRight className="ml-1 h-3.5 w-3.5" />
            </div>
          
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className={`${shineAnimation}`}>Modular Digital Solutions</span>
              <br /> 
              <span className="animate-fade-up animation-delay-200">for Enterprise Scale</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl animate-fade-up animation-delay-300">
              Devonyx provides scalable, automated SaaS solutions built to transform how enterprises operate. Deploy faster, scale smarter, and maximize your digital potential.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-12 animate-fade-up animation-delay-400">
              <Button size="lg" className="bg-brand-600 hover:bg-brand-700 text-white transition-all hover:translate-y-[-2px]" onClick={scrollToContact}>
                Contact Us <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-brand-200 dark:border-brand-800 transition-all hover:translate-y-[-2px]" onClick={scrollToContact}>
                Book a Demo
              </Button>
            </div>
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 text-sm animate-fade-up animation-delay-500">
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
          
          {/* Hero image with animations */}
          <div className="flex-1 w-full lg:w-auto mt-12 lg:mt-0 animate-fade-up animation-delay-300">
            <div className="relative">
              <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-brand-600 to-purple-600 opacity-30 blur-xl animate-pulse-slow"></div>
              <div className="relative max-w-lg mx-auto animate-float glass-card rounded-xl p-1 shadow-card">
                <div className="rounded-lg overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" 
                    alt="Devonyx dashboard"
                    className="w-full"
                  />
                </div>
              </div>
              
              {/* Decorative elements with animations */}
              <div className="absolute -z-10 -bottom-6 -right-6 w-24 h-24 rounded-full bg-brand-400/30 animate-pulse-slow"></div>
              <div className="absolute -z-10 -top-6 -left-6 w-32 h-32 rounded-full bg-purple-400/20 animate-blob"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
