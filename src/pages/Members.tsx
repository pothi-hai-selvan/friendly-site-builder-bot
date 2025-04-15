
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Lock } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const Members = () => {
  const isMobile = useIsMobile();

  return (
    <div className="min-h-screen pt-16 dark:bg-gray-900 dark:text-white">
      <Navbar />
      
      <section className="py-8 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-6 md:mb-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-2 md:mb-4 text-gray-900 dark:text-white">Members Area</h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300">Access members-only resources with no membership fees</p>
          </div>
          
          <div className="max-w-md mx-auto">
            <Card className="p-4 md:p-8 dark:bg-gray-800 dark:border-gray-700">
              <div className="text-center mb-6 md:mb-8">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-brand-100 dark:bg-brand-900 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                  <Lock className="h-6 w-6 md:h-8 md:w-8 text-brand-600 dark:text-brand-400" />
                </div>
                <h1 className="text-xl md:text-2xl font-bold mb-2 text-gray-900 dark:text-white">Member Login</h1>
                <p className="text-sm md:text-base text-gray-600 dark:text-gray-300">Please log in to access exclusive member resources, forums, and content.</p>
              </div>
              
              <form className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="Enter your email" />
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <Label htmlFor="password">Password</Label>
                    <a href="#" className="text-xs md:text-sm text-brand-600 dark:text-brand-400 hover:underline">Forgot password?</a>
                  </div>
                  <Input id="password" type="password" placeholder="Enter your password" />
                </div>
                
                <Button type="submit" className="w-full">Log In</Button>
              </form>
              
              <div className="mt-4 md:mt-6 text-center text-xs md:text-sm text-gray-600 dark:text-gray-400">
                Not a member yet? <a href="/join" className="text-brand-600 dark:text-brand-400 hover:underline">Apply for membership</a>
              </div>
            </Card>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Members;
