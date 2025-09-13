import { TrendingDown, Target, Globe, Calendar } from "lucide-react";

const ImpactVision = () => {
  const impacts = [
    {
      icon: TrendingDown,
      stat: "40%",
      label: "Accident Reduction",
      description: "Potential reduction in traffic fatalities with widespread AI safety adoption"
    },
    {
      icon: Target,
      stat: "50%",
      label: "Fatality Target",
      description: "Goal to halve road fatalities by 2030 through intelligent safety systems"
    },
    {
      icon: Globe,
      stat: "600K",
      label: "Lives Saved",
      description: "Estimated annual lives that could be saved globally with AI intervention"
    },
    {
      icon: Calendar,
      stat: "2030",
      label: "Vision Timeline",
      description: "Target year for achieving significant reduction in road accidents"
    }
  ];

  const milestones = [
    {
      year: "2024",
      title: "Foundation Phase",
      description: "Advanced AI algorithms and sensor fusion technology development",
      status: "current"
    },
    {
      year: "2026",
      title: "Pilot Deployment",
      description: "Large-scale testing in controlled environments and urban areas",
      status: "upcoming"
    },
    {
      year: "2028",
      title: "Commercial Rollout",
      description: "Mass production and integration with major automotive manufacturers",
      status: "future"
    },
    {
      year: "2030",
      title: "Global Impact",
      description: "Achieve 50% reduction in road fatalities through widespread adoption",
      status: "vision"
    }
  ];

  return (
    <section className="py-20 relative">
      {/* Gradient Background */}
      <div 
        className="absolute inset-0"
        style={{ background: 'var(--gradient-tech)' }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center space-y-6 mb-16 animate-slide-up">
          <h2 className="section-title">
            Impact & Future Vision
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transforming the future of transportation through intelligent safety systems. 
            Our vision extends beyond technology to create a world where every journey is safe.
          </p>
        </div>

        {/* Impact Statistics */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {impacts.map((impact, index) => {
            const IconComponent = impact.icon;
            return (
              <div 
                key={index}
                className="tech-card text-center group animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="space-y-4">
                  <div className="mx-auto w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  
                  <div className="space-y-2">
                    <div className="text-4xl font-bold text-primary font-tech">
                      {impact.stat}
                    </div>
                    <div className="text-lg font-semibold text-foreground">
                      {impact.label}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {impact.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Roadmap Timeline */}
        <div className="space-y-8">
          <h3 className="text-3xl font-bold text-center text-foreground mb-12">
            Roadmap to Safer Roads
          </h3>

          {/* Desktop Timeline */}
          <div className="hidden lg:block">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary"></div>
              
              <div className="grid grid-cols-4 gap-8">
                {milestones.map((milestone, index) => (
                  <div 
                    key={index}
                    className={`relative text-center animate-slide-up ${
                      milestone.status === 'current' ? 'z-20' : 'z-10'
                    }`}
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    {/* Timeline Node */}
                    <div className={`mx-auto w-16 h-16 rounded-full flex items-center justify-center mb-6 border-4 ${
                      milestone.status === 'current' 
                        ? 'bg-primary border-primary text-primary-foreground animate-pulse-glow' 
                        : 'bg-card border-primary text-primary'
                    }`}>
                      <span className="font-bold text-sm">
                        {milestone.year.slice(-2)}
                      </span>
                    </div>
                    
                    {/* Content */}
                    <div className="space-y-3">
                      <div className="text-sm font-bold text-primary uppercase tracking-wider">
                        {milestone.year}
                      </div>
                      <h4 className="text-lg font-semibold text-foreground">
                        {milestone.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Timeline */}
          <div className="lg:hidden space-y-8">
            {milestones.map((milestone, index) => (
              <div 
                key={index}
                className="flex items-start gap-6 animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex-shrink-0">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center border-2 ${
                    milestone.status === 'current' 
                      ? 'bg-primary border-primary text-primary-foreground' 
                      : 'bg-card border-primary text-primary'
                  }`}>
                    <span className="font-bold text-xs">
                      {milestone.year.slice(-2)}
                    </span>
                  </div>
                  
                  {/* Vertical line */}
                  {index < milestones.length - 1 && (
                    <div className="w-0.5 h-16 bg-gradient-to-b from-primary to-accent mx-auto mt-4"></div>
                  )}
                </div>
                
                <div className="flex-1 space-y-2">
                  <div className="text-sm font-bold text-primary">
                    {milestone.year}
                  </div>
                  <h4 className="text-lg font-semibold text-foreground">
                    {milestone.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {milestone.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Vision Statement */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border border-primary/20 rounded-2xl p-8 max-w-4xl mx-auto">
            <Target className="w-12 h-12 text-primary mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Our Vision: Zero Preventable Deaths
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              By 2030, we envision a world where AI-powered safety systems eliminate preventable road deaths, 
              making every journey safer for drivers, passengers, and pedestrians alike. 
              This is not just technology – it's our commitment to protecting lives.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactVision;