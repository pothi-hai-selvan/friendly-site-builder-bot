
import React from "react";
import { Button } from "@/components/ui/button";

const CtaSection = () => {
  return (
    <section className="py-20 bg-brand-600">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Online Presence?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Let's work together to create a website that truly represents your brand and helps you achieve your business goals.
          </p>
          <Button size="lg" variant="secondary" className="text-brand-600 hover:text-brand-700 bg-white hover:bg-gray-100 px-8 py-6 text-lg">
            Get Started Today
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
