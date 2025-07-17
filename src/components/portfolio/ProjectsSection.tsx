import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Zap, Database, Brain, Cloud } from "lucide-react";

/**
 * Projects Section Component
 * 
 * Showcases portfolio projects and achievements:
 * - Featured projects with descriptions
 * - Technology stacks used
 * - Links to demos and repositories
 * - Placeholder structure for easy expansion
 * 
 * To customize:
 * - Replace placeholder projects with your actual work
 * - Add real project images/screenshots
 * - Update technology stacks and descriptions
 * - Add live demo and repository links
 * - Include project achievements and metrics
 */
export const ProjectsSection = () => {
  // Placeholder projects - replace with your actual projects
  const projects = [
    {
      title: "ML Model Deployment Pipeline",
      description: "Automated MLOps pipeline for model training, validation, and deployment using Docker, Kubernetes, and CI/CD. Includes monitoring and rollback capabilities.",
      icon: Brain,
      technologies: ["Python", "Docker", "Kubernetes", "MLflow", "FastAPI"],
      demoUrl: "#", // Replace with actual demo URL
      githubUrl: "#", // Replace with actual GitHub URL
      featured: true
    },
    {
      title: "Real-time Data Processing System",
      description: "Scalable data processing system using PySpark and Apache Kafka for real-time analytics and machine learning inference.",
      icon: Database,
      technologies: ["PySpark", "Kafka", "PostgreSQL", "Redis", "Grafana"],
      demoUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      title: "Cloud-Native Microservices",
      description: "Distributed microservices architecture on AWS with automated deployment, monitoring, and scaling capabilities.",
      icon: Cloud,
      technologies: ["FastAPI", "AWS", "Terraform", "Docker", "Prometheus"],
      demoUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      title: "Data Visualization Dashboard",
      description: "Interactive dashboard for ML model performance monitoring and data insights using React and modern visualization libraries.",
      icon: Zap,
      technologies: ["React", "TypeScript", "D3.js", "Python", "Flask"],
      demoUrl: "#",
      githubUrl: "#",
      featured: false
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of MLOps solutions and data-driven applications I've built
          </p>
        </div>
        
        {/* Featured projects - larger cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {featuredProjects.map((project, index) => (
            <Card key={index} className="shadow-elegant hover:shadow-glow transition-all duration-300 hover:scale-105">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-3">
                  <div className="p-2 bg-gradient-primary rounded-lg">
                    <project.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl text-primary">{project.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                
                {/* Technology badges */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="bg-accent text-accent-foreground">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                {/* Action buttons */}
                <div className="flex gap-3 pt-2">
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Other projects - smaller grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {otherProjects.map((project, index) => (
            <Card key={index} className="shadow-elegant hover:shadow-glow transition-all duration-300">
              <CardHeader className="pb-3">
                <div className="flex items-center space-x-2">
                  <project.icon className="h-5 w-5 text-primary" />
                  <CardTitle className="text-lg">{project.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-1">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 3 && (
                    <Badge variant="outline" className="text-xs">
                      +{project.technologies.length - 3}
                    </Badge>
                  )}
                </div>
                
                <div className="flex gap-2">
                  <Button variant="ghost" size="sm" asChild>
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                  <Button variant="ghost" size="sm" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Call to action */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Want to see more projects or collaborate on something interesting?
          </p>
          <a href="https://github.com/cyb3rr31a" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-gradient-primary hover:shadow-glow transition-all duration-300">
              <Github className="mr-2 h-5 w-5" />
              View All on GitHub
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};
