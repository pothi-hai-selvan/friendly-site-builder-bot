
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white -z-10"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-brand-200 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-brand-300 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 animate-slide-down opacity-0 [animation-delay:200ms]">
            Elevate Your Online Presence With <span className="text-brand-600">Horizon</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto animate-slide-down opacity-0 [animation-delay:400ms]">
            Crafting beautiful, responsive websites that convert visitors into customers. 
            Stand out from the competition with our cutting-edge designs.
          </p>
          <div className="flex justify-center space-x-4 animate-slide-up opacity-0 [animation-delay:600ms]">
            <Button className="bg-brand-600 hover:bg-brand-700 text-white px-8 py-6 text-lg">
              Get Started
            </Button>
            <Button variant="outline" className="border-brand-600 text-brand-600 hover:bg-brand-50 px-8 py-6 text-lg">
              Learn More <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
