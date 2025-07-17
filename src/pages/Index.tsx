import { HeroSection } from "@/components/portfolio/HeroSection";
import { AboutSection } from "@/components/portfolio/AboutSection";
import { SkillsSection } from "@/components/portfolio/SkillsSection";
import { ProjectsSection } from "@/components/portfolio/ProjectsSection";
import { ContactSection } from "@/components/portfolio/ContactSection";

/**
 * Main Portfolio Page Component
 * 
 * This is the main portfolio page that combines all sections:
 * - Hero: Introduction with name, title, and profile picture space
 * - About: Brief description of MLOps expertise and background
 * - Skills: Technical skills grid showcasing programming languages and tools
 * - Projects: Showcase of notable projects (placeholder for now)
 * - Contact: Contact information and resume download
 * 
 * Theme: Blue and Purple gradient design for MLOps engineer
 */
const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Hero Section - Main introduction with profile picture space */}
      <HeroSection />
      
      {/* About Section - Professional background and expertise */}
      <AboutSection />
      
      {/* Skills Section - Technical stack and competencies */}
      <SkillsSection />
      
      {/* Projects Section - Portfolio of work (expandable) */}
      <ProjectsSection />
      
      {/* Contact Section - Contact info and resume download */}
      <ContactSection />
    </div>
  );
};

export default Index;
