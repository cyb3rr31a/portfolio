import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

/**
 * Skills Section Component
 * 
 * Displays technical skills and proficiency levels:
 * - Programming languages with proficiency indicators
 * - Frameworks and libraries categorized
 * - Tools and platforms used
 * 
 * To customize:
 * - Update skill categories and items
 * - Adjust proficiency levels (0-100)
 * - Add new categories as needed
 * - Modify icons and descriptions
 */
export const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Python", level: 95, description: "Primary language for ML and backend" },
        { name: "TypeScript", level: 85, description: "Frontend and full-stack development" },
        { name: "SQL", level: 90, description: "Database queries and data analysis" },
        { name: "JavaScript", level: 80, description: "Web development and automation" }
      ]
    },
    {
      title: "ML & Data Science",
      skills: [
        { name: "TensorFlow", level: 90, description: "Deep learning and neural networks" },
        { name: "Keras", level: 85, description: "High-level neural networks API" },
        { name: "NumPy", level: 95, description: "Numerical computing and arrays" },
        { name: "Matplotlib", level: 80, description: "Data visualization and plotting" },
        { name: "PySpark", level: 75, description: "Big data processing and analytics" }
      ]
    },
    {
      title: "Web Development",
      skills: [
        { name: "React", level: 85, description: "Frontend user interfaces" },
        { name: "Next.js", level: 80, description: "Full-stack React applications" },
        { name: "FastAPI", level: 90, description: "High-performance Python APIs" },
        { name: "Flask", level: 85, description: "Lightweight web applications" },
        { name: "Django", level: 75, description: "Full-featured web framework" }
      ]
    },
    {
      title: "DevOps & Tools",
      skills: [
        { name: "Docker", level: 85, description: "Containerization and deployment" },
        { name: "Kubernetes", level: 75, description: "Container orchestration" },
        { name: "CI/CD", level: 80, description: "Automated testing and deployment" },
        { name: "AWS/GCP", level: 75, description: "Cloud platforms and services" }
      ]
    }
  ];

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Technical Skills</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Technologies and tools I use to build robust MLOps solutions
          </p>
        </div>
        
        {/* Skills grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <Card key={categoryIndex} className="shadow-elegant hover:shadow-glow transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl text-primary">{category.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <h4 className="font-semibold text-foreground">{skill.name}</h4>
                      <Badge variant="outline" className="text-xs">
                        {skill.level}%
                      </Badge>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                    <p className="text-sm text-muted-foreground">{skill.description}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Additional technologies section */}
        <Card className="mt-12 shadow-elegant">
          <CardHeader>
            <CardTitle className="text-xl text-primary text-center">Additional Technologies</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {[
                "Git", "Linux", "MongoDB", "PostgreSQL", "Redis", "Jupyter",
                "Pandas", "Scikit-learn", "MLflow", "Airflow", "Terraform", "Grafana"
              ].map((tech) => (
                <div key={tech} className="text-center p-3 rounded-lg bg-accent/20 hover:bg-accent/40 transition-colors">
                  <span className="text-sm font-medium text-foreground">{tech}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};