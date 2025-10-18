import { Badge } from "@/components/ui/badge";
import { Code2, Database, Globe, Lightbulb, Rocket, Users } from "lucide-react";

const Skills = () => {
  const technicalSkills = {
    "Programming Languages": ["C#", "Java", "JavaScript"],
    "Web Development": ["MERN Stack", "ASP.Net with C#", "WordPress"],
    "Containerization": ["Docker"],
    "Version Control": ["Git", "GitHub"],
    "Database Management": ["MSSQL", "MySQL", "MongoDB"],
    "SEO & Marketing": ["SEO Optimization", "Digital Marketing", "Telegram Bots"],
    "Deployment": ["Vercel", "Render", "Railway", "YegaraHost", "cPanel"],
  };

  const softSkills = [
    { icon: Lightbulb, name: "Problem Solving" },
    { icon: Rocket, name: "Quick Adaptability" },
    { icon: Users, name: "Team Collaboration" },
    { icon: Globe, name: "Multi Tasking" },
  ];

  return (
    <section id="skills" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Skills & Expertise</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable web applications
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Technical Skills */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <Code2 className="w-6 h-6 text-primary" />
              <h3 className="text-2xl font-semibold">Technical Skills</h3>
            </div>
            
            <div className="grid gap-8">
              {Object.entries(technicalSkills).map(([category, skills]) => (
                <div key={category} className="space-y-4">
                  <h4 className="text-lg font-medium text-primary/80">{category}</h4>
                  <div className="flex flex-wrap gap-3">
                    {skills.map((skill) => (
                      <Badge 
                        key={skill} 
                        variant="secondary"
                        className="px-4 py-2 text-sm bg-card hover:bg-primary hover:text-primary-foreground transition-all cursor-default border border-primary/20"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Users className="w-6 h-6 text-accent" />
              <h3 className="text-2xl font-semibold">Soft Skills</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {softSkills.map(({ icon: Icon, name }) => (
                <div 
                  key={name}
                  className="p-6 rounded-lg bg-card border border-primary/20 hover:border-accent/50 transition-all hover:scale-105 text-center group"
                >
                  <Icon className="w-10 h-10 mx-auto mb-3 text-accent group-hover:scale-110 transition-transform" />
                  <p className="font-medium">{name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;