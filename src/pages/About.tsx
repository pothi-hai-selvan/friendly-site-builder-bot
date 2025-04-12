
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";

const About = () => {
  const coreTeam = [
    { name: "Alex Johnson", role: "Club President", avatar: "A" },
    { name: "Sarah Chen", role: "Vice President", avatar: "S" },
    { name: "Michael Rodriguez", role: "Tech Lead", avatar: "M" },
    { name: "Priya Patel", role: "Events Coordinator", avatar: "P" },
    { name: "David Kim", role: "Outreach Director", avatar: "D" },
    { name: "Olivia Wilson", role: "Content Manager", avatar: "O" },
  ];

  return (
    <div className="min-h-screen pt-16 dark:bg-gray-900 dark:text-white">
      <Navbar />
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">About TechClub</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">Learn about our mission, our story, and the people that make our community special.</p>
          </div>
          
          {/* Mission & Vision */}
          <div className="mb-20">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-bold mb-4 text-brand-600 dark:text-brand-400">Our Mission</h2>
                <p className="text-gray-700 dark:text-gray-300">
                  At TechClub, our mission is to foster a diverse and inclusive community where technology enthusiasts can learn, collaborate, and innovate together. We believe in hands-on learning, knowledge sharing, and creating projects that address real-world challenges.
                </p>
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4 text-brand-600 dark:text-brand-400">Our Vision</h2>
                <p className="text-gray-700 dark:text-gray-300">
                  We envision a world where technology is accessible to everyone and where diverse perspectives drive innovation. Our club aims to be a launching pad for the next generation of tech leaders, creators, and problem solvers who will shape the future.
                </p>
              </div>
            </div>
          </div>
          
          {/* Our Story */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-6 text-center text-gray-900 dark:text-white">Our Story</h2>
            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg shadow-sm">
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                TechClub was founded in 2018 by a group of passionate students who saw the need for a collaborative space where tech enthusiasts could gather to share ideas, learn from each other, and build projects together.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                What began as informal meetups in a university classroom quickly grew into a structured club with regular workshops, hackathons, and guest speaker events. Our founding members established a culture of inclusivity, creativity, and continuous learning that persists to this day.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                Today, TechClub has over 200 active members from diverse backgrounds and fields of study. We've completed dozens of community projects, organized annual hackathons, and formed partnerships with local tech companies to provide learning and career opportunities for our members.
              </p>
            </div>
          </div>
          
          {/* Core Team */}
          <div>
            <h2 className="text-3xl font-bold mb-10 text-center text-gray-900 dark:text-white">Meet Our Core Team</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {coreTeam.map((member) => (
                <Card key={member.name} className="p-6 text-center dark:bg-gray-800 dark:border-gray-700">
                  <Avatar className="w-24 h-24 mx-auto mb-4 bg-brand-100 dark:bg-brand-900 text-brand-600 dark:text-brand-400">
                    <div className="text-2xl font-bold">{member.avatar}</div>
                  </Avatar>
                  <h3 className="text-xl font-bold mb-1 text-gray-900 dark:text-white">{member.name}</h3>
                  <p className="text-brand-600 dark:text-brand-400 font-medium">{member.role}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;
