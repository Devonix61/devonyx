
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Layout, Settings, Shield } from "lucide-react";

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
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 pt-24 pb-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="heading-gradient">Our Services</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Comprehensive enterprise solutions tailored to your business needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-brand-100 dark:bg-brand-800/50 flex items-center justify-center mb-4">
                  {service.icon}
                </div>
                <CardTitle className="text-2xl">{service.title}</CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-300">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-brand-500" />
                      <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button size="lg" className="bg-brand-600 hover:bg-brand-700 text-white">
            Contact Us
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Services;
