
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Users, BookOpen, Layout } from "lucide-react";

const About = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-brand-900/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="heading-gradient">About Devonyx</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Leading the future of enterprise SaaS solutions with innovation and excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <CardContent className="space-y-4 pt-0">
              <h3 className="text-2xl font-semibold heading-gradient">Our Mission</h3>
              <p className="text-gray-600 dark:text-gray-300">
                To empower businesses with cutting-edge SaaS solutions that drive growth, efficiency, and innovation in the digital age.
              </p>
            </CardContent>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow">
            <CardContent className="space-y-4 pt-0">
              <h3 className="text-2xl font-semibold heading-gradient">Our Vision</h3>
              <p className="text-gray-600 dark:text-gray-300">
                To become the global leader in enterprise SaaS solutions, setting new standards for innovation, reliability, and customer success.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
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
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4 pt-0">
                <div className="h-12 w-12 rounded-lg bg-brand-100 dark:bg-brand-800/50 flex items-center justify-center">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
