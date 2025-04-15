
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Lock, Users } from "lucide-react";

const Join = () => {
  return (
    <div className="min-h-screen pt-16 dark:bg-gray-900 dark:text-white">
      <Navbar />
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">Join CODEC Club</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">Become part of our vibrant tech community without any membership fees.</p>
          </div>
          
          <div className="max-w-md mx-auto">
            <Card className="p-8 dark:bg-gray-800 dark:border-gray-700">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-brand-100 dark:bg-brand-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-brand-600 dark:text-brand-400" />
                </div>
                <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">Member Login</h2>
                <p className="text-gray-600 dark:text-gray-300">Access exclusive resources, projects, and content.</p>
              </div>
              
              <form className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="Enter your email" />
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <Label htmlFor="password">Password</Label>
                    <a href="#" className="text-sm text-brand-600 dark:text-brand-400 hover:underline">Forgot password?</a>
                  </div>
                  <Input id="password" type="password" placeholder="Enter your password" />
                </div>
                
                <Button type="submit" className="w-full">Log In</Button>
              </form>
              
              <div className="mt-6 text-center text-sm">
                <p className="text-gray-600 dark:text-gray-400 mb-2">
                  Not registered yet? Fill out the registration form at the club or contact us.
                </p>
                <a href="/about" className="text-brand-600 dark:text-brand-400 hover:underline">Learn more about our club</a>
              </div>
            </Card>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Join;
