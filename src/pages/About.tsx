
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import { Code, BookOpen, Award, Users } from "lucide-react";

const About = () => {
  const coreTeam = [
    { name: "Dr. Rajesh Kumar", role: "Faculty Coordinator", avatar: "R", department: "ECE Department" },
    { name: "Priya Sharma", role: "Student President", avatar: "P", department: "ECE - Final Year" },
    { name: "Arjun Nair", role: "Technical Lead", avatar: "A", department: "ECE - Final Year" },
    { name: "Meera Patel", role: "Events Coordinator", avatar: "M", department: "ECE - Third Year" },
    { name: "Vikram Singh", role: "Content Manager", avatar: "V", department: "ECE - Third Year" },
    { name: "Ananya Desai", role: "Outreach Director", avatar: "A", department: "ECE - Second Year" },
  ];

  return (
    <div className="min-h-screen pt-16 dark:bg-gray-900 dark:text-white">
      <Navbar />
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">About CODEC Club</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">Electronics and Communication Engineering Department's coding community at Government College of Engineering, Erode.</p>
          </div>
          
          {/* Mission, Vision & Objectives */}
          <div className="mb-20">
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-6 dark:bg-gray-800 dark:border-gray-700">
                <div className="w-12 h-12 bg-brand-100 dark:bg-brand-900 rounded-full flex items-center justify-center mb-4">
                  <Code className="h-6 w-6 text-brand-600 dark:text-brand-400" />
                </div>
                <h2 className="text-2xl font-bold mb-4 text-brand-600 dark:text-brand-400">Our Mission</h2>
                <p className="text-gray-700 dark:text-gray-300">
                  To foster a vibrant coding culture among ECE students, bridging the gap between electronics and programming skills through collaborative learning, practical projects, and industry-relevant experiences.
                </p>
              </Card>
              
              <Card className="p-6 dark:bg-gray-800 dark:border-gray-700">
                <div className="w-12 h-12 bg-brand-100 dark:bg-brand-900 rounded-full flex items-center justify-center mb-4">
                  <BookOpen className="h-6 w-6 text-brand-600 dark:text-brand-400" />
                </div>
                <h2 className="text-2xl font-bold mb-4 text-brand-600 dark:text-brand-400">Our Vision</h2>
                <p className="text-gray-700 dark:text-gray-300">
                  To empower every ECE student with the coding skills necessary for the evolving tech landscape, creating a community of innovative problem-solvers who excel in both hardware and software domains.
                </p>
              </Card>
              
              <Card className="p-6 dark:bg-gray-800 dark:border-gray-700">
                <div className="w-12 h-12 bg-brand-100 dark:bg-brand-900 rounded-full flex items-center justify-center mb-4">
                  <Award className="h-6 w-6 text-brand-600 dark:text-brand-400" />
                </div>
                <h2 className="text-2xl font-bold mb-4 text-brand-600 dark:text-brand-400">Objectives</h2>
                <ul className="text-gray-700 dark:text-gray-300 space-y-2 list-disc list-inside">
                  <li>Enhance coding proficiency among ECE students</li>
                  <li>Promote interdisciplinary project development</li>
                  <li>Facilitate technical knowledge sharing</li>
                  <li>Build a repository of resources for current and future students</li>
                  <li>Connect students with industry opportunities</li>
                </ul>
              </Card>
            </div>
          </div>
          
          {/* Our Story */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-6 text-center text-gray-900 dark:text-white">Our Story</h2>
            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg shadow-sm">
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                CODEC Club was established in 2021 by a passionate group of ECE students who recognized the growing importance of software skills in the electronics industry. What began as informal coding sessions in the department lab has evolved into a structured club with regular workshops, hackathons, and industry collaborations.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Our name "CODEC" represents our dual focus on <strong>CO</strong>ding and <strong>DEC</strong>oding – symbolizing the intersection of software and electronics that defines modern ECE education.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                Today, CODEC Club has over 150 active members from various years of the ECE department. We've completed dozens of collaborative projects, organized department-wide technical events, and established partnerships with tech companies to provide learning and career opportunities for our members.
              </p>
            </div>
          </div>
          
          {/* Core Team */}
          <div>
            <h2 className="text-3xl font-bold mb-10 text-center text-gray-900 dark:text-white">Meet Our Core Team</h2>
            <div className="flex items-center justify-center mb-8">
              <div className="w-14 h-14 bg-brand-100 dark:bg-brand-900 rounded-full flex items-center justify-center mr-4">
                <Users className="h-8 w-8 text-brand-600 dark:text-brand-400" />
              </div>
              <p className="text-gray-700 dark:text-gray-300 max-w-2xl">
                Our team consists of dedicated faculty and student leaders who work together to guide CODEC Club's activities and ensure we meet our objectives.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {coreTeam.map((member) => (
                <Card key={member.name} className="p-6 text-center dark:bg-gray-800 dark:border-gray-700">
                  <Avatar className="w-24 h-24 mx-auto mb-4 bg-brand-100 dark:bg-brand-900 text-brand-600 dark:text-brand-400">
                    <div className="text-2xl font-bold">{member.avatar}</div>
                  </Avatar>
                  <h3 className="text-xl font-bold mb-1 text-gray-900 dark:text-white">{member.name}</h3>
                  <p className="text-brand-600 dark:text-brand-400 font-medium mb-1">{member.role}</p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">{member.department}</p>
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
