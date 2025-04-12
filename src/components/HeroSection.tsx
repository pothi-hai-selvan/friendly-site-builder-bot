
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 -z-10"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-brand-200 dark:bg-brand-800/30 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-brand-300 dark:bg-brand-700/30 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <div className="w-20 h-20 bg-brand-100 dark:bg-brand-900 rounded-full flex items-center justify-center mx-auto mb-6 animate-slide-down opacity-0 [animation-delay:100ms]">
            <span className="text-3xl text-brand-600 dark:text-brand-400 font-bold">TC</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 animate-slide-down opacity-0 [animation-delay:200ms]">
            Welcome to <span className="text-brand-600 dark:text-brand-400">TechClub</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto animate-slide-down opacity-0 [animation-delay:400ms]">
            Building the next generation of innovators through collaboration, learning, and hands-on projects.
            Join our community of tech enthusiasts!
          </p>
          <div className="flex justify-center space-x-4 animate-slide-up opacity-0 [animation-delay:600ms]">
            <Link to="/join">
              <Button className="bg-brand-600 hover:bg-brand-700 dark:bg-brand-700 dark:hover:bg-brand-600 text-white px-8 py-6 text-lg">
                Become a Member
              </Button>
            </Link>
            <Link to="/projects">
              <Button variant="outline" className="border-brand-600 text-brand-600 dark:border-brand-400 dark:text-brand-400 hover:bg-brand-50 dark:hover:bg-brand-900/50 px-8 py-6 text-lg">
                View Our Projects <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
