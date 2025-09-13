import { Eye, Radar, Brain, Cpu } from "lucide-react";

const Technologies = () => {
  const technologies = [
    {
      icon: Eye,
      title: "Computer Vision",
      description: "Advanced neural networks for real-time object detection, lane recognition, and traffic sign interpretation",
      features: ["Object Detection", "Lane Recognition", "Traffic Sign Reading", "Pedestrian Tracking"],
      color: "primary"
    },
    {
      icon: Radar,
      title: "Sensor Technology",
      description: "Multi-modal sensor fusion combining LiDAR, Radar, and HD cameras for comprehensive environmental perception",
      features: ["LiDAR Mapping", "Radar Detection", "HD Cameras", "Ultrasonic Sensors"],
      color: "accent"
    },
    {
      icon: Brain,
      title: "Machine Learning",
      description: "Deep learning algorithms that continuously improve through experience and adapt to new scenarios",
      features: ["Deep Neural Networks", "Predictive Modeling", "Pattern Recognition", "Adaptive Learning"],
      color: "primary"
    },
    {
      icon: Cpu,
      title: "Data Processing Units",
      description: "High-performance computing systems designed for real-time processing of massive sensor data streams",
      features: ["Edge Computing", "GPU Acceleration", "Real-time Processing", "Low Latency"],
      color: "accent"
    }
  ];

  return (
    <section className="py-20 relative">
      {/* Gradient Background */}
      <div 
        className="absolute inset-0"
        style={{ background: 'var(--gradient-hero)' }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center space-y-6 mb-16 animate-slide-up">
          <h2 className="section-title">
            Core Technologies
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A powerful combination of cutting-edge technologies working in harmony 
            to create the most advanced driver safety system ever developed.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {technologies.map((tech, index) => {
            const IconComponent = tech.icon;
            return (
              <div 
                key={index}
                className="tech-card group animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="space-y-6">
                  {/* Header */}
                  <div className="flex items-center gap-4">
                    <div className={`w-14 h-14 bg-${tech.color}/20 rounded-xl flex items-center justify-center group-hover:bg-${tech.color}/30 transition-colors`}>
                      <IconComponent className={`w-7 h-7 text-${tech.color}`} />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">
                      {tech.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed">
                    {tech.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider">
                      Key Features
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      {tech.features.map((feature, featureIndex) => (
                        <div 
                          key={featureIndex}
                          className={`flex items-center gap-2 text-sm text-muted-foreground`}
                        >
                          <div className={`w-2 h-2 bg-${tech.color} rounded-full`}></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Tech Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: "360°", label: "Sensor Coverage" },
            { value: "200m", label: "Detection Range" },
            { value: "30fps", label: "Processing Speed" },
            { value: "99.9%", label: "Accuracy Rate" }
          ].map((stat, index) => (
            <div key={index} className="text-center animate-slide-up" style={{ animationDelay: `${0.8 + index * 0.1}s` }}>
              <div className="stat-number font-tech">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;