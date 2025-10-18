import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Get In Touch</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Let's collaborate on your next project or discuss opportunities
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-card border-primary/20">
            <CardContent className="p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Contact Information */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <MapPin className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Location</p>
                        <p className="text-muted-foreground">Addis Ababa, Ethiopia</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <Phone className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Phone</p>
                        <a 
                          href="tel:+251912958138" 
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          912 95 81 38
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <Mail className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Email</p>
                        <a 
                          href="mailto:betelhemyemanezoom@gmail.com" 
                          className="text-muted-foreground hover:text-primary transition-colors break-all"
                        >
                          betelhemyemanezoom@gmail.com
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Call to Action */}
                <div className="flex flex-col justify-center space-y-6">
                  <h3 className="text-2xl font-semibold">Let's Connect</h3>
                  <p className="text-muted-foreground">
                    I'm always interested in hearing about new projects and opportunities. 
                    Whether you have a question or just want to say hi, feel free to reach out!
                  </p>

                  <div className="space-y-3">
                    <Button 
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                      size="lg"
                      asChild
                    >
                      <a href="mailto:betelhemyemanezoom@gmail.com">
                        <Mail className="w-5 h-5 mr-2" />
                        Send Email
                      </a>
                    </Button>

                    <div className="flex gap-3">
                      <Button
                        variant="outline"
                        className="flex-1 border-primary/50 hover:bg-primary/10"
                        asChild
                      >
                        <a href="https://linkedin.com/in/betelhem-yemane-manaisrael/" target="_blank" rel="noopener noreferrer">
                          <Linkedin className="w-5 h-5 mr-2" />
                          LinkedIn
                        </a>
                      </Button>
                      <Button
                        variant="outline"
                        className="flex-1 border-primary/50 hover:bg-primary/10"
                        asChild
                      >
                        <a href="https://github.com/ManaIsrael" target="_blank" rel="noopener noreferrer">
                          <Github className="w-5 h-5 mr-2" />
                          GitHub
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;