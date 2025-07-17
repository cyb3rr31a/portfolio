import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Code, Database, Zap } from "lucide-react";

/**
 * About Section Component
 * 
 * Showcases professional background and expertise in MLOps:
 * - Brief personal introduction
 * - Core competencies and focus areas
 * - Key highlights and achievements
 * 
 * To customize:
 * - Update the personal description
 * - Modify the focus areas and icons
 * - Add specific achievements or certifications
 * - Adjust the layout and spacing as needed
 */
export const AboutSection = () => {
  const focusAreas = [
    {
      icon: Brain,
      title: "Machine Learning",
      description: "Designing and deploying ML models with TensorFlow, Keras, and scikit-learn"
    },
    {
      icon: Code,
      title: "Development",
      description: "Full-stack development with Python, TypeScript, React, and modern frameworks"
    },
    {
      icon: Database,
      title: "Data Engineering",
      description: "Building data pipelines with PySpark, SQL, and cloud platforms"
    },
    {
      icon: Zap,
      title: "DevOps & MLOps",
      description: "Automating deployments, CI/CD, and infrastructure as code"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Bridging the gap between data science and production systems
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Left side - Personal description */}
          <Card className="shadow-elegant hover:shadow-glow transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">My Journey</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                As an MLOps engineer, I'm passionate about transforming data science experiments 
                into robust, scalable production systems. My expertise lies in creating seamless 
                workflows that enable data scientists and engineers to collaborate effectively.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                With a strong foundation in Python development and DevOps practices, I specialize 
                in building automated pipelines, implementing monitoring solutions, and ensuring 
                model reliability in production environments.
              </p>
              
              {/* Key skills badges */}
              <div className="pt-4">
                <h4 className="font-semibold mb-3 text-foreground">Core Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {["Python", "DevOps", "TensorFlow", "React", "FastAPI", "PySpark"].map((skill) => (
                    <Badge key={skill} variant="secondary" className="bg-accent text-accent-foreground">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Right side - Focus areas grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {focusAreas.map((area, index) => (
              <Card key={index} className="shadow-elegant hover:shadow-glow transition-all duration-300 hover:scale-105">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    <div className="p-3 bg-gradient-primary rounded-full">
                      <area.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <h3 className="font-semibold text-lg mb-2 text-foreground">{area.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {area.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};