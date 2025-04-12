
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Calendar, Search, Tag } from "lucide-react";

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  const blogPosts = [
    {
      id: 1,
      title: "Getting Started with Machine Learning: A Beginner's Guide",
      excerpt: "Machine learning has revolutionized the tech industry, enabling computers to learn and make decisions without explicit programming. This guide introduces the core concepts, algorithms, and tools you need to begin your machine learning journey.",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      date: "April 10, 2025",
      author: "Alex Johnson",
      authorInitial: "A",
      readTime: "8 min read",
      tags: ["Machine Learning", "Python", "Data Science"],
      image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=500&q=60"
    },
    {
      id: 2,
      title: "Building Responsive Web Designs with Tailwind CSS",
      excerpt: "Tailwind CSS has changed how developers approach frontend development with its utility-first methodology. Learn how to leverage Tailwind to create beautiful, responsive interfaces quickly and efficiently.",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      date: "April 5, 2025",
      author: "Sarah Chen",
      authorInitial: "S",
      readTime: "6 min read",
      tags: ["Web Development", "CSS", "Tailwind", "Frontend"],
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=500&q=60"
    },
    {
      id: 3,
      title: "The Future of AI: Trends to Watch in 2025",
      excerpt: "Artificial intelligence is evolving at a breakneck pace. This article explores the cutting-edge developments in AI that are reshaping industries and our daily lives, from generative models to ethical AI frameworks.",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      date: "March 28, 2025",
      author: "Michael Rodriguez",
      authorInitial: "M",
      readTime: "10 min read",
      tags: ["Artificial Intelligence", "Technology Trends", "Future Tech"],
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=500&q=60"
    },
    {
      id: 4,
      title: "Version Control Best Practices with Git",
      excerpt: "Effective version control is essential for collaborative development. This comprehensive guide covers Git workflow strategies, branching models, and techniques to maintain a clean, efficient repository.",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      date: "March 22, 2025",
      author: "David Kim",
      authorInitial: "D",
      readTime: "7 min read",
      tags: ["Git", "Version Control", "Development"],
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=500&q=60"
    },
    {
      id: 5,
      title: "Introduction to Blockchain Technology",
      excerpt: "Blockchain goes beyond cryptocurrencies. Discover how this distributed ledger technology works, its applications across industries, and why it's considered one of the most disruptive technologies of our time.",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      date: "March 15, 2025",
      author: "Priya Patel",
      authorInitial: "P",
      readTime: "9 min read",
      tags: ["Blockchain", "Cryptocurrency", "Web3"],
      image: "https://images.unsplash.com/photo-1650743768349-fda64a6a6d97?auto=format&fit=crop&w=500&q=60"
    },
    {
      id: 6,
      title: "Creating Accessible Web Applications",
      excerpt: "Web accessibility is not just a legal requirement but a moral imperative. Learn practical techniques to make your web applications usable by everyone, including people with disabilities.",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      date: "March 8, 2025",
      author: "Olivia Wilson",
      authorInitial: "O",
      readTime: "8 min read",
      tags: ["Accessibility", "Web Development", "UX"],
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=500&q=60"
    }
  ];
  
  const categories = [
    { name: "Web Development", count: 12 },
    { name: "Data Science", count: 8 },
    { name: "Artificial Intelligence", count: 7 },
    { name: "DevOps", count: 5 },
    { name: "Cybersecurity", count: 4 },
    { name: "Mobile Development", count: 3 },
  ];
  
  const filteredPosts = blogPosts.filter(post => {
    if (!searchQuery) return true;
    
    const searchLower = searchQuery.toLowerCase();
    return (
      post.title.toLowerCase().includes(searchLower) ||
      post.author.toLowerCase().includes(searchLower) ||
      post.excerpt.toLowerCase().includes(searchLower) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchLower))
    );
  });

  return (
    <div className="min-h-screen pt-16 dark:bg-gray-900 dark:text-white">
      <Navbar />
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">Blog & News</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">Discover articles, tutorials and insights from our community.</p>
          </div>
          
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1 order-2 lg:order-1">
              <div className="sticky top-24">
                <Card className="p-4 mb-6 dark:bg-gray-800 dark:border-gray-700">
                  <div className="relative mb-2">
                    <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <Input
                      type="search"
                      placeholder="Search articles..."
                      className="pl-8"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                  <Button variant="outline" className="w-full" onClick={() => setSearchQuery("")}>
                    Clear Search
                  </Button>
                </Card>
                
                <Card className="p-4 mb-6 dark:bg-gray-800 dark:border-gray-700">
                  <h3 className="text-lg font-bold mb-4 text-gray-900 dark:text-white">Categories</h3>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <div 
                        key={category.name}
                        className="flex items-center justify-between p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
                      >
                        <span className="text-gray-700 dark:text-gray-300">{category.name}</span>
                        <Badge variant="outline">{category.count}</Badge>
                      </div>
                    ))}
                  </div>
                </Card>
                
                <Card className="p-4 dark:bg-gray-800 dark:border-gray-700">
                  <h3 className="text-lg font-bold mb-4 text-gray-900 dark:text-white">Write for Us</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                    Have knowledge to share? Join our community of writers and contribute articles about tech, programming, and more!
                  </p>
                  <Button className="w-full">Submit an Article</Button>
                </Card>
              </div>
            </div>
            
            {/* Main Content */}
            <div className="lg:col-span-3 order-1 lg:order-2">
              {filteredPosts.length > 0 ? (
                <div className="space-y-8">
                  {filteredPosts.map((post) => (
                    <Card key={post.id} className="overflow-hidden dark:bg-gray-800 dark:border-gray-700">
                      <div className="grid md:grid-cols-3">
                        <div className="h-48 md:h-full bg-cover bg-center" style={{ backgroundImage: `url(${post.image})` }}></div>
                        <div className="p-6 md:col-span-2">
                          <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm mb-3">
                            <Calendar className="h-4 w-4 mr-1" />
                            <span>{post.date}</span>
                            <span className="mx-2">•</span>
                            <span>{post.readTime}</span>
                          </div>
                          <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{post.title}</h3>
                          <p className="text-gray-600 dark:text-gray-300 mb-4">{post.excerpt}</p>
                          <div className="flex flex-wrap gap-2 mb-4">
                            {post.tags.map((tag) => (
                              <Badge key={tag} variant="secondary" className="text-xs flex items-center gap-1">
                                <Tag className="h-3 w-3" /> {tag}
                              </Badge>
                            ))}
                          </div>
                          <div className="flex justify-between items-center">
                            <div className="flex items-center">
                              <Avatar className="h-8 w-8 mr-3 bg-brand-100 dark:bg-brand-900 text-brand-600 dark:text-brand-400">
                                <span>{post.authorInitial}</span>
                              </Avatar>
                              <span className="text-sm text-gray-700 dark:text-gray-300">{post.author}</span>
                            </div>
                            <Button variant="outline">Read More</Button>
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">No articles found</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">Try adjusting your search query.</p>
                  <Button variant="outline" onClick={() => setSearchQuery("")}>Reset Search</Button>
                </div>
              )}
              
              {filteredPosts.length > 0 && (
                <div className="flex justify-center mt-12">
                  <Button variant="outline" className="mr-2">Previous</Button>
                  <Button variant="outline">Next</Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Blog;
