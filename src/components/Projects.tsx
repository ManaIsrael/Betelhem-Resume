import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Bermel Giorgis Tsebel Website",
      description: "Feature-rich website built with Next.js, focusing on SEO optimization and performance with comprehensive sitemap implementation.",
      tech: ["Next.js", "SEO", "Responsive Design"],
      link: "https://bermelgiorgis-tsebel.vercel.app",
      sitemap: "https://bermelgiorgis-tsebel.vercel.app/sitemap.xml",
    },
    {
      title: "Hub-Eats Loyalty Program",
      description: "Comprehensive loyalty program with integrated online payment system for rewarding and retaining loyal customers.",
      tech: ["Payment Integration", "Loyalty System", "Full-Stack"],
      link: "#",
    },
    {
      title: "Visionary Solutions ET E-Commerce",
      description: "Transformed template into fully functional e-commerce platform with integrated payment systems for certification sales.",
      tech: ["E-Commerce", "Payment Gateway", "Transformation"],
      link: "#",
    },
    {
      title: "Addis Software Deployment",
      description: "Containerized application deployment using Docker for improved scalability and development workflow.",
      tech: ["Docker", "Containerization", "DevOps"],
      link: "#",
    },
    {
      title: "Melhiq Jobs Optimization",
      description: "Performance optimization, bug fixes, and SEO implementation for enhanced visibility and user experience.",
      tech: ["Laravel", "SEO", "Performance"],
      link: "#",
    },
    {
      title: "Hubbits Telegram Bot",
      description: "Interactive Telegram bot with inline buttons providing workspace information for Hub Bits coworking space.",
      tech: ["Telegram Bot API", "Node.js", "Automation"],
      link: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A showcase of real-world applications and solutions delivered with quality and efficiency
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="bg-card border-primary/20 hover:border-primary/50 transition-all group hover:scale-105"
            >
              <CardHeader>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2">
                  {project.link !== "#" && (
                    <Button 
                      size="sm" 
                      variant="outline"
                      className="border-primary/50 hover:bg-primary/10"
                      asChild
                    >
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Visit
                      </a>
                    </Button>
                  )}
                  {project.sitemap && (
                    <Button 
                      size="sm" 
                      variant="outline"
                      className="border-accent/50 hover:bg-accent/10"
                      asChild
                    >
                      <a href={project.sitemap} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Sitemap
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;