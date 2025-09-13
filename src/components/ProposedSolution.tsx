import { Brain, Eye, Zap, Target, Shield, Cpu } from "lucide-react";

const ProposedSolution = () => {
  const features = [
    {
      icon: Eye,
      title: "Computer Vision",
      description: "Advanced image processing and object detection for real-time environment analysis"
    },
    {
      icon: Brain,
      title: "ADAS Integration",
      description: "Advanced Driver Assistance Systems with intelligent decision-making capabilities"
    },
    {
      icon: Zap,
      title: "Sensor Fusion",
      description: "Multi-sensor data integration from cameras, radar, and LiDAR for complete situational awareness"
    },
    {
      icon: Target,
      title: "Predictive Analytics",
      description: "Machine learning algorithms that anticipate and prevent potential hazards"
    },
    {
      icon: Cpu,
      title: "Real-Time Processing",
      description: "Ultra-low latency processing for immediate response to critical situations"
    },
    {
      icon: Shield,
      title: "Safety First",
      description: "Fail-safe mechanisms ensuring reliable operation in all driving conditions"
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
            AI-Powered Safety Revolution
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our comprehensive solution combines cutting-edge AI technologies to create 
            an intelligent safety net that learns, adapts, and protects.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div 
                key={index}
                className="tech-card group animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-foreground">
                    {feature.title}
                  </h3>
                  
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Key Benefits Banner */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-wrap justify-center gap-4">
            {[
              "Sub-50ms Response Time",
              "99.9% Accuracy",
              "24/7 Monitoring",
              "Adaptive Learning"
            ].map((benefit, index) => (
              <div 
                key={index}
                className="bg-primary/10 border border-primary/20 rounded-full px-6 py-2 text-primary font-semibold"
              >
                {benefit}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProposedSolution;