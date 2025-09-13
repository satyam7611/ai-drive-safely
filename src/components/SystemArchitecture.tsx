import { Layers, Eye, Brain, Zap } from "lucide-react";

const SystemArchitecture = () => {
  const layers = [
    {
      id: "perception",
      icon: Eye,
      title: "Perception Layer",
      description: "Multi-sensor data acquisition and environmental awareness",
      components: ["Camera Arrays", "LiDAR Sensors", "Radar Systems", "GPS/IMU"],
      color: "primary",
      position: "bottom"
    },
    {
      id: "cognition",
      icon: Brain,
      title: "Cognition Layer",
      description: "AI-powered decision making and threat assessment",
      components: ["Object Detection", "Path Planning", "Risk Analysis", "Decision Trees"],
      color: "accent",
      position: "middle"
    },
    {
      id: "action",
      icon: Zap,
      title: "Action Layer",
      description: "Real-time response and vehicle control systems",
      components: ["Emergency Braking", "Steering Assist", "Speed Control", "Warning Systems"],
      color: "primary",
      position: "top"
    }
  ];

  return (
    <section className="py-20 bg-background relative">
      {/* Neural Network Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 800 600">
          <defs>
            <radialGradient id="neuralGrad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="currentColor" stopOpacity="0.3"/>
              <stop offset="100%" stopColor="currentColor" stopOpacity="0"/>
            </radialGradient>
          </defs>
          {/* Neural network nodes */}
          {Array.from({ length: 20 }).map((_, i) => (
            <circle 
              key={i}
              cx={Math.random() * 800} 
              cy={Math.random() * 600} 
              r="2" 
              fill="currentColor"
              opacity="0.3"
            />
          ))}
          {/* Connecting lines */}
          {Array.from({ length: 15 }).map((_, i) => (
            <line 
              key={i}
              x1={Math.random() * 800} 
              y1={Math.random() * 600}
              x2={Math.random() * 800} 
              y2={Math.random() * 600}
              stroke="currentColor" 
              strokeWidth="1" 
              opacity="0.2"
            />
          ))}
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center space-y-6 mb-16 animate-slide-up">
          <h2 className="section-title">
            System Architecture
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A three-layered architecture designed for maximum efficiency, reliability, and speed. 
            Each layer seamlessly interfaces with the others to deliver sub-50ms response times.
          </p>
        </div>

        {/* Architecture Diagram */}
        <div className="relative max-w-4xl mx-auto">
          {/* Desktop View */}
          <div className="hidden lg:block">
            <div className="relative h-96">
              {layers.map((layer, index) => {
                const IconComponent = layer.icon;
                const yPosition = index === 0 ? 'bottom-0' : index === 1 ? 'top-1/2 -translate-y-1/2' : 'top-0';
                
                return (
                  <div 
                    key={layer.id}
                    className={`absolute left-1/2 -translate-x-1/2 ${yPosition} w-80 animate-slide-up`}
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <div className="tech-card text-center relative">
                      {/* Layer Icon */}
                      <div className={`mx-auto w-16 h-16 bg-${layer.color}/20 rounded-full flex items-center justify-center mb-4`}>
                        <IconComponent className={`w-8 h-8 text-${layer.color}`} />
                      </div>
                      
                      {/* Layer Info */}
                      <h3 className="text-xl font-bold text-foreground mb-2">
                        {layer.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        {layer.description}
                      </p>
                      
                      {/* Components */}
                      <div className="grid grid-cols-2 gap-2 text-xs">
                        {layer.components.map((component, compIndex) => (
                          <div key={compIndex} className={`bg-${layer.color}/10 rounded px-2 py-1 text-${layer.color}`}>
                            {component}
                          </div>
                        ))}
                      </div>
                      
                      {/* Connection Arrow */}
                      {index < layers.length - 1 && (
                        <div className={`absolute ${index === 0 ? '-top-8' : '-bottom-8'} left-1/2 -translate-x-1/2 text-${layer.color}`}>
                          <svg width="24" height="32" viewBox="0 0 24 32" fill="none">
                            <path d="M12 0V24M6 18L12 24L18 18" stroke="currentColor" strokeWidth="2"/>
                          </svg>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Mobile View */}
          <div className="lg:hidden space-y-8">
            {layers.reverse().map((layer, index) => {
              const IconComponent = layer.icon;
              return (
                <div 
                  key={layer.id}
                  className="tech-card animate-slide-up"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 bg-${layer.color}/20 rounded-lg flex items-center justify-center flex-shrink-0`}>
                      <IconComponent className={`w-6 h-6 text-${layer.color}`} />
                    </div>
                    
                    <div className="flex-1 space-y-3">
                      <h3 className="text-lg font-bold text-foreground">
                        {layer.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {layer.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2">
                        {layer.components.map((component, compIndex) => (
                          <span key={compIndex} className={`bg-${layer.color}/10 text-${layer.color} text-xs px-2 py-1 rounded`}>
                            {component}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Performance Banner */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-2xl px-8 py-6">
            <Layers className="w-8 h-8 text-primary" />
            <div className="text-left">
              <div className="text-2xl font-bold text-primary font-tech">
                &lt;50ms
              </div>
              <div className="text-sm text-muted-foreground">
                End-to-end processing time
              </div>
            </div>
            <div className="w-px h-12 bg-border mx-4"></div>
            <div className="text-left">
              <div className="text-2xl font-bold text-accent font-tech">
                3-Layer
              </div>
              <div className="text-sm text-muted-foreground">
                Optimized architecture
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SystemArchitecture;