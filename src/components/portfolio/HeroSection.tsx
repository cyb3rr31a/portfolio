import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Download, Github, Linkedin, Mail } from "lucide-react";
import { ThemeToggle } from "@/components/ui/theme-toggle";

/**
 * Hero Section Component
 * 
 * The main landing section of the portfolio featuring:
 * - Name and professional title
 * - Brief tagline about MLOps expertise
 * - Profile picture placeholder (easily replaceable)
 * - Quick access buttons for contact and resume
 * - Social media links
 * 
 * Design: Gradient background with elegant cards and animations
 * 
 * To customize:
 * - Replace placeholder profile image with your actual photo
 * - Update name, title, and tagline
 * - Add your actual social media links
 */
export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
      {/* Theme toggle in top right corner */}
      <div className="absolute top-6 right-6 z-20">
        <ThemeToggle />
      </div>
      
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-primary opacity-10"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left side - Text content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                Rebecca Shirievo
              </h1>
              <h2 className="text-2xl lg:text-3xl font-semibold text-primary">
                MLOps Engineer
              </h2>
              <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl">
                Passionate about creating digital solutions that bridge the gap between 
                data science and production systems. Expert in DevOps, Python, and 
                machine learning deployment.
              </p>
            </div>
            
            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-gradient-primary hover:shadow-glow transition-all duration-300"
              >
                <Mail className="mr-2 h-5 w-5" />
                Get In Touch
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Button>
            </div>
            
            {/* Social links */}
            <div className="flex gap-4 justify-center lg:justify-start">
              <a href="https://github.com/cyb3rr31a" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="hover:text-primary">
                  <Github className="h-5 w-5" />
                </Button>
              </a>
              <a href="https://www.linkedin.com/in/rebecca-shirievo/" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="hover:text-primary">
                  <Linkedin className="h-5 w-5" />
                </Button>
              </a>
              <a href="mailto:rebeccashirievo@gmail.com" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="hover:text-primary">
                  <Mail className="h-5 w-5" />
                </Button>
              </a>
            </div>
          </div>
          
          {/* Right side - Profile picture */}
          <div className="flex justify-center lg:justify-end">
            <Card className="p-8 shadow-elegant hover:shadow-glow transition-all duration-500 bg-card/80 backdrop-blur-sm">
              <div className="relative">
                {/* Placeholder for profile picture - replace with your actual image */}
                <div className="w-64 h-64 bg-gradient-secondary rounded-full flex items-center justify-center text-6xl font-bold text-white">
                  RS
                </div>
                {/* Decorative ring around image */}
                <div className="absolute inset-0 rounded-full border-4 border-primary/20 animate-pulse"></div>
              </div>
            </Card>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};