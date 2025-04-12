
import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const ProjectShowcase = () => {
  const featuredProjects = [
    {
      id: 1,
      title: "EcoTrack",
      description: "A mobile app for tracking and reducing carbon footprint. Uses machine learning to provide personalized recommendations.",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=500&q=60",
      tags: ["Mobile App", "ML"],
      github: "https://github.com/techclub/ecotrack"
    },
    {
      id: 2,
      title: "CodeMentor AI",
      description: "AI-powered code assistant that helps beginners learn programming with real-time feedback and explanations.",
      image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=500&q=60",
      tags: ["AI", "Web App"],
      github: "https://github.com/techclub/codementor-ai"
    },
    {
      id: 3,
      title: "Community Connect",
      description: "Platform connecting volunteers with local community projects. Includes scheduling and impact tracking features.",
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=500&q=60",
      tags: ["Web App", "React"],
      github: "https://github.com/techclub/community-connect"
    }
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Featured Projects</h2>
          <Link to="/projects">
            <Button variant="outline" className="flex items-center gap-2">
              View All <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
            <Card key={project.id} className="overflow-hidden dark:bg-gray-800 dark:border-gray-700">
              <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${project.image})` }}></div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">{tag}</Badge>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-700 hover:text-brand-600 dark:text-gray-300 dark:hover:text-brand-400">
                    <Github className="h-4 w-4 mr-2" /> View on GitHub
                  </a>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcase;
