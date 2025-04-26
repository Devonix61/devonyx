
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonialsData = [
  {
    quote: "Devonyx has completely transformed our workflow. The platform's scalability and automation features have freed up our team to focus on innovation rather than maintenance.",
    author: "Sarah Johnson",
    position: "CTO, TechGlobe",
    avatarUrl: "https://i.pravatar.cc/150?img=32",
    initials: "SJ"
  },
  {
    quote: "The multi-tenant architecture and role-based access control provided by Devonyx gave us the security and flexibility we needed as we scaled our operations globally.",
    author: "Michael Chen",
    position: "VP of Engineering, DataSphere",
    avatarUrl: "https://i.pravatar.cc/150?img=53",
    initials: "MC"
  },
  {
    quote: "After trying numerous SaaS platforms, Devonyx stands out with its enterprise-grade performance and intuitive design. The ROI has been exceptional.",
    author: "Priya Patel",
    position: "Director of IT, Nexus Corp",
    avatarUrl: "https://i.pravatar.cc/150?img=23",
    initials: "PP"
  },
  {
    quote: "Implementing Devonyx allowed us to consolidate six different tools into one unified platform, resulting in a 40% cost reduction and significantly improved team productivity.",
    author: "James Wilson",
    position: "COO, Elevate Solutions",
    avatarUrl: "https://i.pravatar.cc/150?img=67",
    initials: "JW"
  },
];

const Testimonials = () => {
  const [activePage, setActivePage] = useState(0);
  const testimonialsPerPage = 2;
  const totalPages = Math.ceil(testimonialsData.length / testimonialsPerPage);

  const nextPage = () => {
    setActivePage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setActivePage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const currentTestimonials = testimonialsData.slice(
    activePage * testimonialsPerPage,
    (activePage + 1) * testimonialsPerPage
  );

  return (
    <section id="testimonials" className="py-20 bg-brand-50 dark:bg-brand-900/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="heading-gradient">Trusted by Industry Leaders</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            See what our clients have to say about their experience with the Devonyx platform.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {currentTestimonials.map((testimonial, index) => (
              <Card key={index} className="border-brand-100 dark:border-brand-800 bg-white dark:bg-brand-950/50 overflow-hidden">
                <CardContent className="p-6 md:p-8">
                  <div className="mb-6 flex justify-start">
                    <div className="rounded-full p-2 bg-brand-100 dark:bg-brand-800/50">
                      <Quote className="h-5 w-5 text-brand-600 dark:text-brand-400" />
                    </div>
                  </div>
                  
                  <p className="text-lg mb-6 italic text-gray-700 dark:text-gray-300">
                    "{testimonial.quote}"
                  </p>
                  
                  <div className="flex items-center">
                    <Avatar className="h-12 w-12 mr-4">
                      <AvatarImage src={testimonial.avatarUrl} alt={testimonial.author} />
                      <AvatarFallback className="bg-brand-200 text-brand-700">
                        {testimonial.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-medium">{testimonial.author}</h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.position}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {totalPages > 1 && (
            <div className="flex justify-center mt-8 space-x-2">
              <button 
                onClick={prevPage}
                className="p-2 rounded-full border border-gray-200 dark:border-gray-700 hover:bg-brand-50 dark:hover:bg-brand-900/50"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              
              <div className="flex items-center space-x-2">
                {Array.from({ length: totalPages }).map((_, i) => (
                  <button
                    key={i}
                    className={`h-2.5 w-2.5 rounded-full ${
                      i === activePage 
                        ? "bg-brand-600 dark:bg-brand-500" 
                        : "bg-gray-300 dark:bg-gray-600"
                    }`}
                    onClick={() => setActivePage(i)}
                  />
                ))}
              </div>
              
              <button 
                onClick={nextPage}
                className="p-2 rounded-full border border-gray-200 dark:border-gray-700 hover:bg-brand-50 dark:hover:bg-brand-900/50"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
