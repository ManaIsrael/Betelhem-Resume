import { Briefcase, Calendar } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Digitalization Lead",
      company: "Pan African Educational Solution (PAES)",
      period: "Oct 2025 – Present",
      description: [
        "Prepare comprehensive KPI Tracker for team performance monitoring",
        "Manage Microsoft 365 apps (Teams, Lists) for project tracking",
        "Identify and manage digital systems for operational efficiency",
      ],
    },
    {
      title: "Digital Infrastructure Supervisor",
      company: "Visionary Solutions ET",
      period: "July 2025 – Present",
      description: [
        "Develop EdTech platforms and curriculum for corporate training",
        "Build custom LMS and online course content",
        "Manage digital infrastructure ensuring 99.9% uptime",
        "Supervise and train digital support specialists",
      ],
    },
    {
      title: "Marketing & Digital Support",
      company: "Hub Bits Coworking Space & Visionary Solutions ET",
      period: "March 2025 – June 2025",
      description: [
        "Design and implement digital marketing strategies",
        "Optimize website and ensure seamless user experiences",
        "Create video scripts and tailored content for social media",
        "Develop website features for marketing purposes",
      ],
    },
    {
      title: "Laravel Developer",
      company: "MelhiqJobs",
      period: "Oct 2024 – Jan 2025",
      description: [
        "Improved website performance, security, and responsiveness",
        "Managed and optimized database for smooth operations",
        "Implemented SEO best practices in collaboration with marketing team",
      ],
    },
    {
      title: "Coding Instructor",
      company: "Yenetta Code",
      period: "June 2023 – June 2024",
      description: [
        "Taught coding and web development across various skill levels",
        "Designed structured learning platform for Python, Java, and JavaScript",
        "Assisted students in building their first web projects",
      ],
    },
    {
      title: "Front-End Intern",
      company: "Prifina",
      period: "Oct 2022 – Mar 2023",
      description: [
        "Developed responsive widgets and apps using modern front-end technologies",
        "Collaborated with design teams for seamless cross-device experiences",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Professional journey building solutions across multiple domains
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-8 top-0 bottom-0 w-0.5 bg-primary/30" />

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div key={index} className="relative pl-8 md:pl-20">
                  {/* Timeline Dot */}
                  <div className="absolute left-0 md:left-6 w-4 h-4 rounded-full bg-primary border-4 border-background" />

                  <div className="bg-card border border-primary/20 rounded-lg p-6 hover:border-primary/50 transition-all">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                      <div>
                        <h3 className="text-xl font-semibold text-primary mb-1">
                          {exp.title}
                        </h3>
                        <div className="flex items-center gap-2 text-muted-foreground mb-2">
                          <Briefcase className="w-4 h-4" />
                          <span>{exp.company}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-sm text-foreground/80 flex items-start gap-2">
                          <span className="text-accent mt-1">▸</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;