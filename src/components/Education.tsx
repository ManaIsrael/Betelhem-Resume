import { Award, GraduationCap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Education = () => {
  const education = {
    degree: "BSc in Computer Science",
    institution: "HiLCoE, Addis Ababa",
    period: "January 2019 – June 2023",
  };

  const certifications = [
    {
      title: "Full Stack with MERN",
      issuer: "Yenetta Code",
      date: "April 2024",
    },
    {
      title: "Front End Development Libraries",
      issuer: "FreeCodeCamp.org",
      date: "October 2022",
    },
    {
      title: "Responsive Web Design",
      issuer: "FreeCodeCamp.org",
      date: "July 2022",
    },
  ];

  return (
    <section id="education" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Education & Certifications</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Continuous learning and professional development
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Education */}
          <Card className="bg-card border-primary/20 hover:border-primary/50 transition-all">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-primary/10">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">Education</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-primary mb-2">
                  {education.degree}
                </h3>
                <p className="text-foreground/80 mb-1">{education.institution}</p>
                <p className="text-sm text-muted-foreground">{education.period}</p>
              </div>
            </CardContent>
          </Card>

          {/* Certifications */}
          <Card className="bg-card border-accent/20 hover:border-accent/50 transition-all">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-accent/10">
                  <Award className="w-6 h-6 text-accent" />
                </div>
                <CardTitle className="text-2xl">Certifications</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {certifications.map((cert, index) => (
                <div key={index} className="pb-4 border-b border-border/50 last:border-0 last:pb-0">
                  <h3 className="font-semibold text-accent mb-1">{cert.title}</h3>
                  <p className="text-sm text-foreground/80">{cert.issuer}</p>
                  <p className="text-xs text-muted-foreground mt-1">{cert.date}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Education;