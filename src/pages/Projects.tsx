
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { 
  Github, 
  ExternalLink, 
  Heart, 
  Code, 
  Layers, 
  Database, 
  Bot, 
  Smartphone 
} from "lucide-react";

const Projects = () => {
  const featuredProjects = [
    {
      id: 1,
      title: "EcoTrack",
      description: "A mobile app for tracking and reducing carbon footprint. Uses machine learning to provide personalized recommendations based on user's lifestyle and habits.",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=500&q=60",
      tags: ["Mobile App", "Machine Learning", "Flutter"],
      github: "https://github.com/techclub/ecotrack",
      demo: "https://ecotrack-demo.herokuapp.com",
      likes: 124,
      completed: true
    },
    {
      id: 2,
      title: "CodeMentor AI",
      description: "An AI-powered code assistant that helps beginners learn programming by providing real-time feedback, explanations, and suggestions on their code.",
      image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=500&q=60",
      tags: ["AI", "Web App", "Python", "React"],
      github: "https://github.com/techclub/codementor-ai",
      demo: "https://codementor-ai.vercel.app",
      likes: 98,
      completed: true
    },
    {
      id: 3,
      title: "Community Connect",
      description: "A platform connecting volunteers with local community projects. Includes scheduling, messaging, and impact tracking features.",
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=500&q=60",
      tags: ["Web App", "React", "Firebase"],
      github: "https://github.com/techclub/community-connect",
      demo: "https://community-connect-app.web.app",
      likes: 87,
      completed: true
    }
  ];
  
  const ongoingProjects = [
    {
      id: 4,
      title: "HealthSync",
      description: "A comprehensive health tracking platform integrating with wearables to provide holistic health insights and personalized wellness plans.",
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=500&q=60",
      tags: ["Web App", "Mobile App", "IoT", "Vue.js"],
      github: "https://github.com/techclub/healthsync",
      progress: 60,
      contributors: 8
    },
    {
      id: 5,
      title: "EdTech Platform",
      description: "An interactive learning platform with integrated coding environment, quiz system, and progress tracking for students learning technology.",
      image: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?auto=format&fit=crop&w=500&q=60",
      tags: ["Web App", "Education", "JavaScript", "Node.js"],
      github: "https://github.com/techclub/edtech-platform",
      progress: 35,
      contributors: 12
    },
    {
      id: 6,
      title: "Smart Garden",
      description: "An IoT system for monitoring and automating garden care using sensors, microcontrollers, and a mobile app for remote control.",
      image: "https://images.unsplash.com/photo-1493397212122-2b85dda8106b?auto=format&fit=crop&w=500&q=60",
      tags: ["IoT", "Hardware", "Mobile App", "Arduino"],
      github: "https://github.com/techclub/smart-garden",
      progress: 75,
      contributors: 5
    }
  ];
  
  const categories = [
    { name: "All", icon: Layers, count: 28 },
    { name: "Web Development", icon: Code, count: 12 },
    { name: "Mobile Apps", icon: Smartphone, count: 8 },
    { name: "AI/ML", icon: Bot, count: 5 },
    { name: "Data Science", icon: Database, count: 3 }
  ];

  return (
    <div className="min-h-screen pt-16 dark:bg-gray-900 dark:text-white">
      <Navbar />
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">Project Gallery</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">Explore the innovative projects created by our talented members.</p>
          </div>
          
          <div className="grid lg:grid-cols-4 gap-8 mb-16">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <Card className="p-4 dark:bg-gray-800 dark:border-gray-700">
                <h3 className="text-lg font-bold mb-4 text-gray-900 dark:text-white">Categories</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <div 
                      key={category.name}
                      className="flex items-center justify-between p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
                    >
                      <div className="flex items-center">
                        <category.icon className="h-4 w-4 mr-2 text-brand-600 dark:text-brand-400" />
                        <span className="text-gray-700 dark:text-gray-300">{category.name}</span>
                      </div>
                      <Badge variant="outline">{category.count}</Badge>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8">
                  <h3 className="text-lg font-bold mb-4 text-gray-900 dark:text-white">Contribute</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                    Have a project idea or want to join an existing project? We're always looking for contributors!
                  </p>
                  <Button className="w-full">Propose a Project</Button>
                </div>
              </Card>
            </div>
            
            {/* Main Content */}
            <div className="lg:col-span-3">
              <Tabs defaultValue="featured" className="w-full">
                <TabsList className="mb-8">
                  <TabsTrigger value="featured">Featured Projects</TabsTrigger>
                  <TabsTrigger value="ongoing">Ongoing Projects</TabsTrigger>
                </TabsList>
                
                <TabsContent value="featured">
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {featuredProjects.map((project) => (
                      <Card key={project.id} className="overflow-hidden dark:bg-gray-800 dark:border-gray-700">
                        <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${project.image})` }}></div>
                        <div className="p-4">
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="text-lg font-bold text-gray-900 dark:text-white">{project.title}</h3>
                            <button className="text-gray-400 hover:text-red-500 dark:text-gray-500 dark:hover:text-red-400">
                              <Heart className="h-5 w-5" />
                            </button>
                          </div>
                          <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 line-clamp-3">{project.description}</p>
                          <div className="flex flex-wrap gap-2 mb-4">
                            {project.tags.map((tag) => (
                              <Badge key={tag} variant="secondary" className="text-xs">{tag}</Badge>
                            ))}
                          </div>
                          <div className="flex items-center justify-between">
                            <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-brand-600 dark:text-gray-300 dark:hover:text-brand-400">
                              <Github className="h-5 w-5" />
                            </a>
                            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-brand-600 dark:text-gray-300 dark:hover:text-brand-400">
                              <ExternalLink className="h-5 w-5" />
                            </a>
                            <span className="text-sm text-gray-600 dark:text-gray-400 flex items-center">
                              <Heart className="h-4 w-4 mr-1 fill-red-500 text-red-500" /> {project.likes}
                            </span>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="ongoing">
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {ongoingProjects.map((project) => (
                      <Card key={project.id} className="overflow-hidden dark:bg-gray-800 dark:border-gray-700">
                        <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${project.image})` }}></div>
                        <div className="p-4">
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="text-lg font-bold text-gray-900 dark:text-white">{project.title}</h3>
                            <Badge>In Progress</Badge>
                          </div>
                          <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 line-clamp-3">{project.description}</p>
                          <div className="flex flex-wrap gap-2 mb-3">
                            {project.tags.map((tag) => (
                              <Badge key={tag} variant="secondary" className="text-xs">{tag}</Badge>
                            ))}
                          </div>
                          <div className="mb-3">
                            <div className="flex justify-between text-sm mb-1">
                              <span className="text-gray-600 dark:text-gray-400">Progress</span>
                              <span className="text-brand-600 dark:text-brand-400">{project.progress}%</span>
                            </div>
                            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                              <div 
                                className="bg-brand-600 dark:bg-brand-400 h-2 rounded-full" 
                                style={{ width: `${project.progress}%` }}
                              ></div>
                            </div>
                          </div>
                          <div className="flex items-center justify-between">
                            <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-brand-600 dark:text-gray-300 dark:hover:text-brand-400">
                              <Github className="h-5 w-5" />
                            </a>
                            <span className="text-sm text-gray-600 dark:text-gray-400">
                              {project.contributors} contributors
                            </span>
                            <Button size="sm" variant="outline">Join</Button>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Projects;
