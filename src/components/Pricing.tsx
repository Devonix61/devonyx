
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Check } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const pricingPlans = [
  {
    name: "Starter",
    monthlyPrice: 99,
    yearlyPrice: 990,
    description: "Perfect for small teams starting their journey",
    features: [
      "Up to 5 team members",
      "10GB storage",
      "Basic analytics dashboard",
      "Email support",
      "API access (100 req/min)",
      "2 environments"
    ],
    cta: "Start Free Trial",
    popular: false
  },
  {
    name: "Professional",
    monthlyPrice: 249,
    yearlyPrice: 2490,
    description: "Ideal for growing businesses with advanced needs",
    features: [
      "Up to 20 team members",
      "100GB storage",
      "Advanced analytics & reporting",
      "Priority email & chat support",
      "API access (500 req/min)",
      "5 environments",
      "SSO authentication",
      "Role-based access control"
    ],
    cta: "Start Free Trial",
    popular: true
  },
  {
    name: "Enterprise",
    monthlyPrice: 999,
    yearlyPrice: 9990,
    description: "For organizations requiring maximum scale and support",
    features: [
      "Unlimited team members",
      "1TB storage",
      "Custom analytics solutions",
      "24/7 dedicated support",
      "Unlimited API requests",
      "Unlimited environments",
      "Advanced security features",
      "Custom integrations",
      "Dedicated account manager",
      "On-premise deployment options"
    ],
    cta: "Contact Sales",
    popular: false
  }
];

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");

  return (
    <section id="pricing" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="heading-gradient">Transparent Pricing</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
            Choose the perfect plan for your business needs with no hidden fees.
          </p>

          <div className="flex items-center justify-center space-x-4">
            <span className={`text-sm font-medium ${billingCycle === "monthly" ? "text-brand-600 dark:text-brand-400" : "text-gray-500 dark:text-gray-400"}`}>
              Monthly
            </span>
            <Switch 
              checked={billingCycle === "yearly"} 
              onCheckedChange={(checked) => setBillingCycle(checked ? "yearly" : "monthly")}
              className="data-[state=checked]:bg-brand-600"
            />
            <span className={`text-sm font-medium ${billingCycle === "yearly" ? "text-brand-600 dark:text-brand-400" : "text-gray-500 dark:text-gray-400"}`}>
              Yearly
              <span className="ml-1.5 inline-block py-0.5 px-2 text-xs font-semibold text-white bg-green-500 rounded-full">
                Save 20%
              </span>
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <Card
              key={index}
              className={`relative border ${
                plan.popular 
                  ? "border-brand-400 dark:border-brand-500 shadow-lg shadow-brand-100 dark:shadow-brand-900/30" 
                  : "border-gray-200 dark:border-gray-800"
              } overflow-hidden`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 bg-brand-600 text-white text-xs font-bold text-center py-1">
                  MOST POPULAR
                </div>
              )}
              <CardHeader className={plan.popular ? "pt-8" : ""}>
                <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <span className="text-4xl font-bold">
                    ${billingCycle === "monthly" ? plan.monthlyPrice : plan.yearlyPrice}
                  </span>
                  <span className="text-gray-500 dark:text-gray-400 ml-2">
                    {billingCycle === "monthly" ? "/month" : "/year"}
                  </span>
                </div>

                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-600 dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button 
                  className={`w-full ${
                    plan.popular 
                      ? "bg-brand-600 hover:bg-brand-700 text-white" 
                      : "bg-white hover:bg-gray-100 text-gray-800 border border-gray-300 dark:bg-transparent dark:text-white dark:border-gray-600 dark:hover:bg-gray-800"
                  }`}
                  size="lg"
                >
                  {plan.cta}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
