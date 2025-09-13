import { Database, Cpu, AlertTriangle, Zap, BookOpen } from "lucide-react";

const SystemWorkflow = () => {
  const steps = [
    {
      icon: Database,
      title: "Data Collection",
      description: "Continuous gathering of environmental data from multiple sensors including cameras, radar, and LiDAR",
      color: "primary"
    },
    {
      icon: Cpu,
      title: "Data Processing",
      description: "Real-time analysis using advanced AI algorithms to interpret sensor data and identify potential hazards",
      color: "accent"
    },
    {
      icon: AlertTriangle,
      title: "Risk Assessment",
      description: "Intelligent evaluation of threat levels and probability calculations for potential collision scenarios",
      color: "destructive"
    },
    {
      icon: Zap,
      title: "Response Action",
      description: "Immediate activation of appropriate safety measures including alerts, braking, or steering assistance",
      color: "primary"
    },
    {
      icon: BookOpen,
      title: "Learning & Updates",
      description: "Continuous improvement through machine learning, adapting to new scenarios and driving patterns",
      color: "accent"
    }
  ];

  return (
    <section className="py-20 bg-background relative">
      {/* Circuit Pattern Background */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 400 400">
          <defs>
            <pattern id="circuit" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M20 0v20M0 20h40M20 20h20v20" stroke="currentColor" strokeWidth="1" fill="none" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit)" />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center space-y-6 mb-16 animate-slide-up">
          <h2 className="section-title">
            System Working Principles
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A seamless five-step process that transforms raw sensor data into life-saving actions 
            in milliseconds, continuously learning and improving.
          </p>
        </div>

        {/* Desktop Flow */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Connection Lines */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-accent to-primary"></div>
            
            <div className="grid grid-cols-5 gap-8">
              {steps.map((step, index) => {
                const IconComponent = step.icon;
                return (
                  <div 
                    key={index}
                    className="relative animate-slide-up"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    {/* Step Circle */}
                    <div className="mx-auto w-20 h-20 bg-card border-2 border-primary rounded-full flex items-center justify-center mb-6 relative z-10">
                      <IconComponent className="w-8 h-8 text-primary" />
                    </div>
                    
                    {/* Step Number */}
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold z-20">
                      {index + 1}
                    </div>
                    
                    {/* Content */}
                    <div className="text-center space-y-3">
                      <h3 className="text-lg font-semibold text-foreground">
                        {step.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {step.description}
                      </p>
                    </div>

                    {/* Arrow (except for last item) */}
                    {index < steps.length - 1 && (
                      <div className="absolute top-10 -right-4 text-primary">
                        <svg width="32" height="16" viewBox="0 0 32 16" fill="none">
                          <path d="M24 0L32 8L24 16M0 8H32" stroke="currentColor" strokeWidth="2"/>
                        </svg>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Mobile Flow */}
        <div className="lg:hidden space-y-8">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div 
                key={index}
                className="flex items-start gap-6 animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-card border-2 border-primary rounded-full flex items-center justify-center relative">
                    <IconComponent className="w-6 h-6 text-primary" />
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold">
                      {index + 1}
                    </div>
                  </div>
                  
                  {/* Vertical line (except for last item) */}
                  {index < steps.length - 1 && (
                    <div className="w-0.5 h-16 bg-gradient-to-b from-primary to-accent mx-auto mt-4"></div>
                  )}
                </div>
                
                <div className="flex-1 space-y-2">
                  <h3 className="text-xl font-semibold text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Performance Highlight */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 bg-primary/10 border border-primary/20 rounded-full px-8 py-4">
            <Zap className="w-6 h-6 text-primary animate-pulse" />
            <span className="text-primary font-bold text-lg">
              Complete Process: &lt;50ms Response Time
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SystemWorkflow;