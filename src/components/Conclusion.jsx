import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Github, Linkedin, Rocket } from "lucide-react";

const Conclusion = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Hero Gradient Background */}
      <div 
        className="absolute inset-0"
        style={{ background: 'var(--gradient-hero)' }}
      />

      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/5 rounded-full blur-2xl animate-float" style={{ animationDelay: '1.5s' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center space-y-8 animate-slide-up">
          {/* Main Message */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-3 bg-primary/10 border border-primary/20 rounded-full px-6 py-3 mb-8">
              <Rocket className="w-5 h-5 text-primary" />
              <span className="text-primary font-semibold">The Future is Now</span>
            </div>

            <h2 className="text-5xl md:text-7xl font-bold text-foreground leading-tight">
              AI is driving us toward
              <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                safer roads
              </span>
            </h2>

            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              The intersection of artificial intelligence and automotive safety represents 
              one of the most promising frontiers in saving human lives. Every algorithm we develop, 
              every sensor we optimize, brings us closer to a world where preventable accidents become history.
            </p>
          </div>

          {/* Call to Action */}
          <div className="space-y-8 pt-8">
            <h3 className="text-3xl font-bold text-foreground">
              Let's accelerate the future together
            </h3>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button className="btn-glow text-lg px-8 py-4">
                Join the Mission
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 py-4">
                Learn More
              </Button>
            </div>

            {/* Contact Links */}
            <div className="flex justify-center gap-6 pt-8">
              {[
                { icon: Mail, label: "Contact", href: "mailto:contact@aisafety.dev" },
                { icon: Github, label: "GitHub", href: "#" },
                { icon: Linkedin, label: "LinkedIn", href: "#" }
              ].map((link, index) => {
                const IconComponent = link.icon;
                return (
                  <a
                    key={index}
                    href={link.href}
                    className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
                  >
                    <div className="w-10 h-10 border border-border rounded-full flex items-center justify-center group-hover:border-primary transition-colors">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="hidden sm:inline">{link.label}</span>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Final Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16 border-t border-border/50">
            <div className="space-y-2">
              <div className="stat-number">1.19M</div>
              <div className="stat-label">Lives at stake annually</div>
            </div>
            <div className="space-y-2">
              <div className="stat-number text-primary">40%</div>
              <div className="stat-label">Potential reduction with AI</div>
            </div>
            <div className="space-y-2">
              <div className="stat-number text-accent">2030</div>
              <div className="stat-label">Our target for transformation</div>
            </div>
          </div>

          {/* Closing Message */}
          <div className="pt-12">
            <blockquote className="text-lg italic text-muted-foreground max-w-3xl mx-auto">
              "The question isn't whether AI will revolutionize road safety – 
              it's how quickly we can make this life-saving technology available to everyone."
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Conclusion;