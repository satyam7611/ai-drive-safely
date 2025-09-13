import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import heroCarImage from "@/assets/hero-car.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with Gradient */}
      <div 
        className="absolute inset-0 z-0"
        style={{ background: 'var(--gradient-hero)' }}
      />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-slide-up">
            <div className="space-y-4">
              <h1 className="hero-title">
                AI-Driven Driver
                <br />
                Safety Systems
              </h1>
              <p className="hero-subtitle max-w-2xl">
                Transforming Vehicle Safety with AI
              </p>
            </div>

            <div className="space-y-6">
              <p className="text-lg text-muted-foreground max-w-xl">
                Harnessing the power of Computer Vision, Sensor Fusion, and Predictive Analytics 
                to create intelligent safety systems that protect lives on the road.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="btn-glow">
                  Explore Technology
                </Button>
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  Watch Demo
                </Button>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="stat-number">40%</div>
                <div className="stat-label">Accident Reduction</div>
              </div>
              <div className="text-center">
                <div className="stat-number">&lt;50ms</div>
                <div className="stat-label">Response Time</div>
              </div>
              <div className="text-center">
                <div className="stat-number">24/7</div>
                <div className="stat-label">Monitoring</div>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative animate-fade-in">
            <div className="relative">
              <img 
                src={heroCarImage} 
                alt="Futuristic AI-powered autonomous vehicle with advanced safety sensors"
                className="w-full h-auto rounded-2xl shadow-2xl animate-pulse-glow"
              />
              
              {/* Floating Tech Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-primary/30 animate-float">
                <div className="w-8 h-8 bg-primary rounded-full animate-pulse" />
              </div>
              
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-accent/30 animate-float" style={{ animationDelay: '1s' }}>
                <div className="w-6 h-6 bg-accent rounded-full animate-pulse" />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-primary" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;