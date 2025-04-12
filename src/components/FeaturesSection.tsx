
import React from "react";
import { Laptop, Smartphone, Palette, Zap, Shield, Users } from "lucide-react";

const features = [
  {
    title: "Responsive Design",
    description: "Websites that look beautiful on any device, from desktops to smartphones.",
    icon: <Smartphone className="h-10 w-10 text-brand-500" />,
  },
  {
    title: "Modern Aesthetics",
    description: "Clean, contemporary designs that align with current web trends.",
    icon: <Palette className="h-10 w-10 text-brand-500" />,
  },
  {
    title: "Lightning Fast",
    description: "Optimized for speed to keep your visitors engaged and reduce bounce rates.",
    icon: <Zap className="h-10 w-10 text-brand-500" />,
  },
  {
    title: "SEO Friendly",
    description: "Built with search engines in mind to help improve your rankings.",
    icon: <Laptop className="h-10 w-10 text-brand-500" />,
  },
  {
    title: "Secure Infrastructure",
    description: "Industry-standard security measures to protect your data and users.",
    icon: <Shield className="h-10 w-10 text-brand-500" />,
  },
  {
    title: "User-Centric",
    description: "Designed with your users in mind to provide the best possible experience.",
    icon: <Users className="h-10 w-10 text-brand-500" />,
  },
];

const FeaturesSection = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600">
            We offer a comprehensive suite of web design and development services to help your business thrive online.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
            >
              <div className="mb-4 bg-brand-50 w-16 h-16 rounded-xl flex items-center justify-center">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
