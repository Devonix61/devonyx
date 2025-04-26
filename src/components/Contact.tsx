
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Email subscription submitted");
    // Here you would typically handle the email subscription
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto rounded-2xl overflow-hidden">
          <div className="relative p-8 md:p-12 lg:p-16 bg-gradient-to-r from-brand-700 to-brand-500 dark:from-brand-800 dark:to-brand-600 text-white">
            {/* Background decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full filter blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full filter blur-3xl transform -translate-x-1/3 translate-y-1/3"></div>
            
            <div className="relative z-10">
              <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Enterprise?</h2>
                <p className="text-lg text-brand-100 max-w-2xl mx-auto">
                  Join thousands of companies already using Devonyx to scale their digital operations.
                </p>
              </div>
              
              <div className="max-w-md mx-auto">
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="bg-white/20 border-transparent placeholder:text-white/70 text-white"
                    required
                  />
                  <Button className="bg-white text-brand-700 hover:bg-brand-50">
                    Get Started <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </form>
                <p className="text-sm text-center mt-4 text-brand-100">
                  Start your 14-day free trial. No credit card required.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
