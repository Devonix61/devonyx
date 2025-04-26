
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Code, Database, Globe, Layers, Lock, LineChart, 
  PieChart, RefreshCw, Scale, Shield, Sliders, Zap
} from "lucide-react";

const featuresList = [
  {
    icon: <Layers className="h-6 w-6 text-brand-500" />,
    title: "Multi-Tenant Architecture",
    description: "Secure isolation with shared resources for optimal cost efficiency and scalability."
  },
  {
    icon: <Database className="h-6 w-6 text-brand-500" />,
    title: "API-First Design",
    description: "REST and GraphQL APIs for seamless integrations with your existing tech stack."
  },
  {
    icon: <RefreshCw className="h-6 w-6 text-brand-500" />,
    title: "CI/CD Pipeline",
    description: "Automated testing and deployment for continuous delivery of features."
  },
  {
    icon: <Globe className="h-6 w-6 text-brand-500" />,
    title: "Edge-First Rendering",
    description: "Blazing-fast global performance with distributed edge computing."
  },
  {
    icon: <LineChart className="h-6 w-6 text-brand-500" />,
    title: "Advanced Analytics",
    description: "Real-time insights with customizable dashboards and reports."
  },
  {
    icon: <Shield className="h-6 w-6 text-brand-500" />,
    title: "Enterprise Security",
    description: "SOC 2 compliance-ready with robust authentication protocols."
  },
  {
    icon: <Sliders className="h-6 w-6 text-brand-500" />,
    title: "Role-Based Access",
    description: "Granular permission controls for teams of any size."
  },
  {
    icon: <Zap className="h-6 w-6 text-brand-500" />,
    title: "High Performance",
    description: "Sub-2s load times with 99.99% uptime SLA guarantee."
  },
  {
    icon: <Scale className="h-6 w-6 text-brand-500" />,
    title: "Auto-Scaling",
    description: "Kubernetes-orchestrated resources that grow with your needs."
  }
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-gradient-to-b from-white to-brand-50/50 dark:from-brand-950 dark:to-brand-900/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="heading-gradient">Enterprise-Grade Features</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Built with scalability, security, and performance at its core, Devonyx delivers the tools modern enterprises need.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresList.map((feature, index) => (
            <Card key={index} className="border border-brand-100 dark:border-brand-800 bg-white/80 dark:bg-brand-900/50 backdrop-blur-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-brand-100 dark:bg-brand-800/50 flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 dark:text-gray-300">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
