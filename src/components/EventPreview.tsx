
import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CalendarClock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const EventPreview = () => {
  const upcomingEvents = [
    {
      id: 1,
      title: "Web Development Workshop",
      date: "April 20, 2025",
      time: "6:00 PM - 8:00 PM",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 2,
      title: "Tech Talk: Cybersecurity Fundamentals",
      date: "April 28, 2025",
      time: "7:00 PM - 8:30 PM",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 3,
      title: "AI Hackathon",
      date: "May 5-7, 2025",
      time: "9:00 AM - 5:00 PM",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=500&q=60",
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Upcoming Events</h2>
          <Link to="/events">
            <Button variant="outline" className="flex items-center gap-2">
              View All <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {upcomingEvents.map((event) => (
            <Card key={event.id} className="overflow-hidden dark:bg-gray-800 dark:border-gray-700">
              <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${event.image})` }}></div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{event.title}</h3>
                <div className="flex items-center text-gray-600 dark:text-gray-300 mb-4">
                  <CalendarClock className="h-4 w-4 mr-2 text-brand-600 dark:text-brand-400" />
                  <span>{event.date} • {event.time}</span>
                </div>
                <Link to="/events">
                  <Button className="w-full">Register Now</Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventPreview;
