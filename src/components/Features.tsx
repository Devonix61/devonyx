
import { ArrowRight, Check, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useInView } from "react-intersection-observer";
import { fadeInAnimation, slideInAnimation, hoverScaleAnimation } from "@/lib/animation";

const Features = () => {
  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref3, inView3] = useInView({ triggerOnce: true, threshold: 0.1 });

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-white dark:bg-brand-950 py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Advanced Features for Enterprise Needs
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Discover the key capabilities that make our solutions the preferred choice for growing businesses.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24" ref={ref1}>
          <div className={`relative ${inView1 ? slideInAnimation('left') : 'opacity-0'}`}>
            <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-brand-600/30 to-purple-600/30 blur-lg animate-pulse-slow"></div>
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                alt="Advanced Analytics Dashboard"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          <div className={inView1 ? slideInAnimation('right') : 'opacity-0'}>
            <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
              Advanced Analytics with AI-powered Insights
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              Our analytics platform goes beyond basic reporting to provide actionable intelligence. Leverage machine learning algorithms that learn from your data patterns to predict trends and identify opportunities before they become obvious.
            </p>
            <ul className="space-y-4 mb-8">
              {[
                'Real-time data visualization with customizable dashboards',
                'Predictive analysis based on historical patterns',
                'Automated anomaly detection and alerting',
                'Cross-platform data integration and normalization',
              ].map((feature, index) => (
                <li key={index} className={`flex items-start ${inView1 ? fadeInAnimation(index * 100) : 'opacity-0'}`}>
                  <CheckCircle2 className="h-6 w-6 text-brand-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-200">{feature}</span>
                </li>
              ))}
            </ul>
            <Button 
              onClick={scrollToContact}
              className={`${hoverScaleAnimation} bg-brand-600 hover:bg-brand-700 text-white transition-all hover:translate-y-[-2px]`}
            >
              Learn More <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24" ref={ref2}>
          <div className={`order-2 lg:order-1 ${inView2 ? slideInAnimation('left') : 'opacity-0'}`}>
            <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
              Intelligent Workflow Automation
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              Eliminate repetitive tasks and streamline your business processes with our powerful automation engine. Design complex workflows with an intuitive drag-and-drop interface and connect to hundreds of popular applications.
            </p>
            <ul className="space-y-4 mb-8">
              {[
                'Visual workflow builder with no coding required',
                'Advanced conditional logic and branching',
                'Scheduled and event-triggered automations',
                'Comprehensive audit trails and version history',
              ].map((feature, index) => (
                <li key={index} className={`flex items-start ${inView2 ? fadeInAnimation(index * 100) : 'opacity-0'}`}>
                  <CheckCircle2 className="h-6 w-6 text-brand-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-200">{feature}</span>
                </li>
              ))}
            </ul>
            <Button 
              onClick={scrollToContact}
              className={`${hoverScaleAnimation} bg-brand-600 hover:bg-brand-700 text-white transition-all hover:translate-y-[-2px]`}
            >
              Learn More <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <div className={`order-1 lg:order-2 relative ${inView2 ? slideInAnimation('right') : 'opacity-0'}`}>
            <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-purple-600/30 to-brand-600/30 blur-lg animate-pulse-slow"></div>
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1607706009771-de8808640bcf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                alt="Workflow Automation"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center" ref={ref3}>
          <div className={`relative ${inView3 ? slideInAnimation('left') : 'opacity-0'}`}>
            <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-brand-600/30 to-purple-600/30 blur-lg animate-pulse-slow"></div>
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                alt="Enterprise Security"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          <div className={inView3 ? slideInAnimation('right') : 'opacity-0'}>
            <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
              Enterprise-Grade Security
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              Protect your sensitive data with our comprehensive security framework. We implement industry-leading practices to ensure your information remains safe and compliant with global regulations.
            </p>
            <ul className="space-y-4 mb-8">
              {[
                'End-to-end encryption for data in transit and at rest',
                'Role-based access control with detailed permissions',
                'Multi-factor authentication and SSO integration',
                'Regular security audits and compliance certifications',
              ].map((feature, index) => (
                <li key={index} className={`flex items-start ${inView3 ? fadeInAnimation(index * 100) : 'opacity-0'}`}>
                  <CheckCircle2 className="h-6 w-6 text-brand-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-200">{feature}</span>
                </li>
              ))}
            </ul>
            <Button 
              onClick={scrollToContact}
              className={`${hoverScaleAnimation} bg-brand-600 hover:bg-brand-700 text-white transition-all hover:translate-y-[-2px]`}
            >
              Learn More <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
