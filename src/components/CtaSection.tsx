
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CtaSection = () => {
  return (
    <section className="py-20 bg-brand-600 dark:bg-brand-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Join Our Tech Community?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Connect with like-minded tech enthusiasts, learn new skills, and collaborate on exciting projects that make a difference.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/join">
              <Button size="lg" variant="secondary" className="text-brand-600 hover:text-brand-700 dark:text-brand-800 dark:hover:text-brand-900 bg-white hover:bg-gray-100 dark:bg-gray-100 dark:hover:bg-white px-8 py-6 text-lg w-full sm:w-auto">
                Become a Member
              </Button>
            </Link>
            <Link to="/events">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg w-full sm:w-auto">
                Upcoming Events
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
