
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar } from "@/components/ui/calendar";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CalendarClock, MapPin, Users } from "lucide-react";

const Events = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  
  const upcomingEvents = [
    {
      id: 1,
      title: "Web Development Workshop",
      date: "April 20, 2025",
      time: "6:00 PM - 8:00 PM",
      location: "Tech Hub, Room 203",
      description: "Learn the fundamentals of modern web development with React and NextJS. This hands-on workshop will cover component-based architecture, state management, and deploying your first web app.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=500&q=60",
      capacity: 30,
      registered: 18
    },
    {
      id: 2,
      title: "AI Hackathon",
      date: "May 5-7, 2025",
      time: "9:00 AM - 5:00 PM",
      location: "Innovation Center",
      description: "A 3-day hackathon focused on building AI-powered solutions for real-world problems. Teams will compete for prizes while learning about the latest AI technologies and frameworks.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=500&q=60",
      capacity: 100,
      registered: 72
    },
    {
      id: 3,
      title: "Tech Talk: Cybersecurity Fundamentals",
      date: "April 28, 2025",
      time: "7:00 PM - 8:30 PM",
      location: "Online (Zoom)",
      description: "Join us for an informative session on cybersecurity basics with industry expert Jane Smith. Learn about common vulnerabilities, best practices for protection, and career paths in cybersecurity.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=500&q=60",
      capacity: 50,
      registered: 32
    }
  ];
  
  const pastEvents = [
    {
      id: 4,
      title: "Introduction to Machine Learning",
      date: "March 15, 2025",
      location: "Tech Hub, Room 101",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 5,
      title: "Mobile App Development Workshop",
      date: "February 28, 2025",
      location: "Innovation Center",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 6,
      title: "GitHub and Git Version Control",
      date: "February 10, 2025",
      location: "Online (Zoom)",
      image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=500&q=60",
    }
  ];

  return (
    <div className="min-h-screen pt-16 dark:bg-gray-900 dark:text-white">
      <Navbar />
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">Events & Activities</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">Stay up to date with all the exciting events happening at CODEC Club.</p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <div className="lg:col-span-2">
              <Tabs defaultValue="upcoming" className="w-full">
                <TabsList className="mb-8">
                  <TabsTrigger value="upcoming">Upcoming Events</TabsTrigger>
                  <TabsTrigger value="past">Past Events</TabsTrigger>
                </TabsList>
                
                <TabsContent value="upcoming">
                  <div className="space-y-8">
                    {upcomingEvents.map((event) => (
                      <Card key={event.id} className="overflow-hidden dark:bg-gray-800 dark:border-gray-700">
                        <div className="grid md:grid-cols-3">
                          <div className="h-48 md:h-full bg-cover bg-center" style={{ backgroundImage: `url(${event.image})` }}></div>
                          <div className="p-6 md:col-span-2">
                            <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{event.title}</h3>
                            <div className="flex items-center text-gray-600 dark:text-gray-300 mb-2">
                              <CalendarClock className="h-4 w-4 mr-2" />
                              <span>{event.date} • {event.time}</span>
                            </div>
                            <div className="flex items-center text-gray-600 dark:text-gray-300 mb-4">
                              <MapPin className="h-4 w-4 mr-2" />
                              <span>{event.location}</span>
                            </div>
                            <p className="text-gray-700 dark:text-gray-300 mb-4 line-clamp-2">{event.description}</p>
                            <div className="flex items-center justify-between">
                              <div className="flex items-center text-brand-600 dark:text-brand-400">
                                <Users className="h-4 w-4 mr-2" />
                                <span>{event.registered}/{event.capacity} registered</span>
                              </div>
                              <Dialog>
                                <DialogTrigger asChild>
                                  <Button>Register Now</Button>
                                </DialogTrigger>
                                <DialogContent>
                                  <DialogHeader>
                                    <DialogTitle>Register for {event.title}</DialogTitle>
                                    <DialogDescription>
                                      Fill out the form below to secure your spot.
                                    </DialogDescription>
                                  </DialogHeader>
                                  <div className="space-y-4 py-4">
                                    <div className="space-y-2">
                                      <Label htmlFor="name">Name</Label>
                                      <Input id="name" placeholder="Enter your full name" />
                                    </div>
                                    <div className="space-y-2">
                                      <Label htmlFor="email">Email</Label>
                                      <Input id="email" type="email" placeholder="Enter your email" />
                                    </div>
                                    <Button className="w-full mt-4">Confirm Registration</Button>
                                  </div>
                                </DialogContent>
                              </Dialog>
                            </div>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="past">
                  <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
                    {pastEvents.map((event) => (
                      <Card key={event.id} className="overflow-hidden dark:bg-gray-800 dark:border-gray-700">
                        <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${event.image})` }}></div>
                        <div className="p-4">
                          <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">{event.title}</h3>
                          <div className="flex items-center text-gray-600 dark:text-gray-300 mb-2">
                            <CalendarClock className="h-4 w-4 mr-2" />
                            <span>{event.date}</span>
                          </div>
                          <div className="flex items-center text-gray-600 dark:text-gray-300">
                            <MapPin className="h-4 w-4 mr-2" />
                            <span>{event.location}</span>
                          </div>
                          <Button variant="outline" className="w-full mt-4">View Event Photos</Button>
                        </div>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>
            
            <div>
              <Card className="p-4 dark:bg-gray-800 dark:border-gray-700">
                <h3 className="text-lg font-bold mb-4 text-gray-900 dark:text-white">Event Calendar</h3>
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  className="rounded-md border"
                />
                <div className="mt-4">
                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">{date?.toDateString()}</h4>
                  {date?.getDate() === 20 && date?.getMonth() === 3 ? (
                    <div className="p-3 bg-brand-50 dark:bg-brand-900/20 rounded border border-brand-200 dark:border-brand-800">
                      <p className="text-sm font-medium text-brand-700 dark:text-brand-400">Web Development Workshop</p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">6:00 PM - 8:00 PM</p>
                    </div>
                  ) : date?.getDate() === 28 && date?.getMonth() === 3 ? (
                    <div className="p-3 bg-brand-50 dark:bg-brand-900/20 rounded border border-brand-200 dark:border-brand-800">
                      <p className="text-sm font-medium text-brand-700 dark:text-brand-400">Tech Talk: Cybersecurity Fundamentals</p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">7:00 PM - 8:30 PM</p>
                    </div>
                  ) : date?.getDate() === 5 && date?.getMonth() === 4 ? (
                    <div className="p-3 bg-brand-50 dark:bg-brand-900/20 rounded border border-brand-200 dark:border-brand-800">
                      <p className="text-sm font-medium text-brand-700 dark:text-brand-400">AI Hackathon (Day 1)</p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">9:00 AM - 5:00 PM</p>
                    </div>
                  ) : (
                    <p className="text-sm text-gray-600 dark:text-gray-400">No events scheduled.</p>
                  )}
                </div>
              </Card>
            </div>
          </div>
          
          {/* Event Proposal */}
          <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg shadow-sm max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Have an Event Idea?</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              We're always looking for new workshop ideas, speakers, and activities.
              If you have a suggestion for an event, we'd love to hear it!
            </p>
            <Button size="lg">Propose an Event</Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Events;
