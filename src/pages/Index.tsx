
import React from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CtaSection from "@/components/CtaSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import EventPreview from "@/components/EventPreview";
import ProjectShowcase from "@/components/ProjectShowcase";
import BlogPreview from "@/components/BlogPreview";

const Index = () => {
  return (
    <div className="min-h-screen dark:bg-gray-900 dark:text-white">
      <Navbar />
      <HeroSection />
      {/* Removed FeaturesSection */}
      <EventPreview />
      <ProjectShowcase />
      <BlogPreview />
      <CtaSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
