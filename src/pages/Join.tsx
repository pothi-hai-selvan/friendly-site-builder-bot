
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import { 
  Check, 
  Calendar, 
  Users, 
  Award, 
  BookOpen, 
  Code, 
  Laptop, 
  Globe, 
  Rocket 
} from "lucide-react";

const Join = () => {
  const membershipBenefits = [
    {
      icon: Calendar,
      title: "Exclusive Events",
      description: "Access members-only workshops, hackathons, and social events."
    },
    {
      icon: Users,
      title: "Community",
      description: "Connect with a network of like-minded tech enthusiasts."
    },
    {
      icon: Award,
      title: "Recognition",
      description: "Earn badges and certificates for your contributions and skills."
    },
    {
      icon: BookOpen,
      title: "Learning Resources",
      description: "Access our library of tutorials, courses, and educational materials."
    },
    {
      icon: Code,
      title: "Coding Projects",
      description: "Collaborate on real-world projects to build your portfolio."
    },
    {
      icon: Laptop,
      title: "Mentorship",
      description: "Learn from experienced professionals in your field of interest."
    }
  ];
  
  const faqs = [
    {
      question: "How much does membership cost?",
      answer: "TechClub membership is completely free for all students. For non-students, we offer a nominal annual fee of $50 that helps cover club expenses and event costs."
    },
    {
      question: "How much time commitment is expected?",
      answer: "There's no minimum time commitment. You can participate as much or as little as your schedule allows. Some members attend weekly meetings, while others just join for major events or specific projects."
    },
    {
      question: "I'm a beginner in tech. Can I still join?",
      answer: "Absolutely! We welcome members of all skill levels. We have beginner-friendly resources, workshops, and mentorship opportunities to help you grow your skills from any starting point."
    },
    {
      question: "How can I contribute to the club?",
      answer: "There are many ways to contribute: participating in projects, helping organize events, creating content for our blog, mentoring other members, or representing the club at external events. We value all forms of participation!"
    },
    {
      question: "Are there leadership opportunities available?",
      answer: "Yes! We have various leadership roles, including project leads, event coordinators, content creators, and more. After being an active member for at least one semester, you can apply for core team positions."
    },
    {
      question: "How do I stay updated about club activities?",
      answer: "Members receive regular updates through our newsletter, Discord server, and the members area of our website. We also announce major events on our public social media channels."
    }
  ];

  return (
    <div className="min-h-screen pt-16 dark:bg-gray-900 dark:text-white">
      <Navbar />
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">Join TechClub</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">Become part of our vibrant tech community and unlock a world of opportunities.</p>
          </div>
          
          {/* Benefits Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-10 text-center text-gray-900 dark:text-white">Membership Benefits</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {membershipBenefits.map((benefit, index) => (
                <Card key={index} className="p-6 dark:bg-gray-800 dark:border-gray-700">
                  <div className="mb-4 w-12 h-12 rounded-full bg-brand-100 dark:bg-brand-900 flex items-center justify-center text-brand-600 dark:text-brand-400">
                    <benefit.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{benefit.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{benefit.description}</p>
                </Card>
              ))}
            </div>
          </div>
          
          {/* Membership Options */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-10 text-center text-gray-900 dark:text-white">Membership Options</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="p-6 border-2 dark:bg-gray-800 dark:border-gray-700">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">Student Membership</h3>
                  <div className="text-3xl font-bold text-brand-600 dark:text-brand-400 mb-2">Free</div>
                  <p className="text-gray-600 dark:text-gray-300">For currently enrolled students</p>
                </div>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <p className="text-gray-700 dark:text-gray-300">Full access to all club resources</p>
                  </div>
                  <div className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <p className="text-gray-700 dark:text-gray-300">Participate in all events and projects</p>
                  </div>
                  <div className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <p className="text-gray-700 dark:text-gray-300">Mentorship opportunities</p>
                  </div>
                  <div className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <p className="text-gray-700 dark:text-gray-300">Exclusive Discord server access</p>
                  </div>
                </div>
                <Button className="w-full">Apply Now</Button>
              </Card>
              
              <Card className="p-6 border-2 border-brand-600 dark:border-brand-400 relative dark:bg-gray-800">
                <div className="absolute top-0 right-0 bg-brand-600 dark:bg-brand-400 text-white px-4 py-1 text-sm font-medium -mt-3 -mr-2">
                  Popular
                </div>
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">Professional Membership</h3>
                  <div className="text-3xl font-bold text-brand-600 dark:text-brand-400 mb-2">$50/year</div>
                  <p className="text-gray-600 dark:text-gray-300">For industry professionals</p>
                </div>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <p className="text-gray-700 dark:text-gray-300">All student membership benefits</p>
                  </div>
                  <div className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <p className="text-gray-700 dark:text-gray-300">Priority registration for events</p>
                  </div>
                  <div className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <p className="text-gray-700 dark:text-gray-300">Speaking and mentoring opportunities</p>
                  </div>
                  <div className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <p className="text-gray-700 dark:text-gray-300">Networking with industry partners</p>
                  </div>
                </div>
                <Button className="w-full">Apply Now</Button>
              </Card>
            </div>
          </div>
          
          {/* Application Form */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-10 text-center text-gray-900 dark:text-white">Apply for Membership</h2>
            <Card className="p-8 max-w-2xl mx-auto dark:bg-gray-800 dark:border-gray-700">
              <form className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" placeholder="Enter your full name" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="Enter your email" />
                </div>
                
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="membership">Membership Type</Label>
                    <select id="membership" className="w-full p-2 rounded-md border border-gray-300 dark:border-gray-600 dark:bg-gray-700">
                      <option value="student">Student</option>
                      <option value="professional">Professional</option>
                    </select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="profession">Profession/Major</Label>
                    <Input id="profession" placeholder="E.g., Computer Science, Developer" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="interests">Areas of Interest</Label>
                  <div className="grid sm:grid-cols-2 gap-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="web-dev" />
                      <label htmlFor="web-dev" className="text-sm text-gray-700 dark:text-gray-300">Web Development</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="mobile-dev" />
                      <label htmlFor="mobile-dev" className="text-sm text-gray-700 dark:text-gray-300">Mobile Development</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="ai-ml" />
                      <label htmlFor="ai-ml" className="text-sm text-gray-700 dark:text-gray-300">AI/Machine Learning</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="data-science" />
                      <label htmlFor="data-science" className="text-sm text-gray-700 dark:text-gray-300">Data Science</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="cybersecurity" />
                      <label htmlFor="cybersecurity" className="text-sm text-gray-700 dark:text-gray-300">Cybersecurity</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="game-dev" />
                      <label htmlFor="game-dev" className="text-sm text-gray-700 dark:text-gray-300">Game Development</label>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Why do you want to join TechClub?</Label>
                  <Textarea id="message" placeholder="Tell us a bit about yourself and why you want to join..." className="min-h-[120px]" />
                </div>
                
                <div className="flex items-start space-x-2">
                  <Checkbox id="terms" />
                  <div className="grid gap-1.5 leading-none">
                    <label
                      htmlFor="terms"
                      className="text-sm text-gray-700 dark:text-gray-300 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      I agree to the terms and conditions
                    </label>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      By submitting this form, you agree to our <a href="#" className="text-brand-600 dark:text-brand-400 hover:underline">Terms of Service</a> and <a href="#" className="text-brand-600 dark:text-brand-400 hover:underline">Privacy Policy</a>.
                    </p>
                  </div>
                </div>
                
                <Button type="submit" className="w-full">Submit Application</Button>
              </form>
            </Card>
          </div>
          
          {/* FAQs */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-10 text-center text-gray-900 dark:text-white">Frequently Asked Questions</h2>
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left text-gray-900 dark:text-white">{faq.question}</AccordionTrigger>
                    <AccordionContent className="text-gray-600 dark:text-gray-300">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
          
          {/* Call to Action */}
          <div className="bg-brand-50 dark:bg-gray-800 p-10 rounded-lg text-center max-w-3xl mx-auto">
            <Globe className="h-16 w-16 mx-auto mb-4 text-brand-600 dark:text-brand-400" />
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Join Our Global Tech Community Today</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Connect with over 500 members from 20+ countries, all passionate about technology and innovation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="gap-2">
                <Rocket className="h-5 w-5" /> Apply Now
              </Button>
              <Button variant="outline">Contact Us</Button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Join;
