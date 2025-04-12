
import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import { ArrowRight, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

const BlogPreview = () => {
  const latestPosts = [
    {
      id: 1,
      title: "Getting Started with Machine Learning: A Beginner's Guide",
      excerpt: "Learn the basics of machine learning and how to implement simple algorithms with Python and scikit-learn.",
      date: "April 10, 2025",
      author: "Alex Johnson",
      authorInitial: "A",
      readTime: "8 min read"
    },
    {
      id: 2,
      title: "Building Responsive Web Designs with Tailwind CSS",
      excerpt: "Discover how to create beautiful, responsive interfaces quickly using Tailwind's utility-first approach.",
      date: "April 5, 2025",
      author: "Sarah Chen",
      authorInitial: "S",
      readTime: "6 min read"
    },
    {
      id: 3,
      title: "The Future of AI: Trends to Watch in 2025",
      excerpt: "Explore the cutting-edge developments in artificial intelligence that are shaping our technological landscape.",
      date: "March 28, 2025",
      author: "Michael Rodriguez",
      authorInitial: "M",
      readTime: "10 min read"
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Latest from the Blog</h2>
          <Link to="/blog">
            <Button variant="outline" className="flex items-center gap-2">
              View All <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {latestPosts.map((post) => (
            <Card key={post.id} className="overflow-hidden dark:bg-gray-800 dark:border-gray-700">
              <div className="p-6">
                <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm mb-3">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white line-clamp-2">{post.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">{post.excerpt}</p>
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <Avatar className="h-8 w-8 mr-3 bg-brand-100 dark:bg-brand-900 text-brand-600 dark:text-brand-400">
                      <span>{post.authorInitial}</span>
                    </Avatar>
                    <span className="text-sm text-gray-700 dark:text-gray-300">{post.author}</span>
                  </div>
                  <Link to="/blog" className="text-brand-600 dark:text-brand-400 hover:underline text-sm font-medium">
                    Read more
                  </Link>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
