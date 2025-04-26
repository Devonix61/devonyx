
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Check, Shield, Star, Users
} from "lucide-react";

const expertiseAreas = [
  {
    icon: <Shield className="h-6 w-6 text-brand-500" />,
    title: "Security First",
    description: "Enterprise-grade security protocols and compliance standards to protect your data."
  },
  {
    icon: <Users className="h-6 w-6 text-brand-500" />,
    title: "Dedicated Support",
    description: "24/7 expert support team ready to assist you with any challenges."
  },
  {
    icon: <Star className="h-6 w-6 text-brand-500" />,
    title: "Best-in-Class Solutions",
    description: "Cutting-edge technology solutions tailored to your business needs."
  },
  {
    icon: <Check className="h-6 w-6 text-brand-500" />,
    title: "Proven Track Record",
    description: "Years of experience serving enterprise clients across industries."
  }
];

const Expertise = () => {
  return (
    <section id="expertise" className="py-20 bg-gradient-to-b from-brand-50/50 to-white dark:from-brand-900/50 dark:to-brand-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="heading-gradient">Our Expertise</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Leverage our deep industry knowledge and technical expertise to transform your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {expertiseAreas.map((area, index) => (
            <Card key={index} className="border border-brand-100 dark:border-brand-800 bg-white/80 dark:bg-brand-900/50 backdrop-blur-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-brand-100 dark:bg-brand-800/50 flex items-center justify-center mb-4">
                  {area.icon}
                </div>
                <CardTitle>{area.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 dark:text-gray-300">
                  {area.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
