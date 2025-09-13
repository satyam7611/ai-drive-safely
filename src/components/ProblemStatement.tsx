import { AlertTriangle, Users, Clock, TrendingUp } from "lucide-react";

const ProblemStatement = () => {
  const problems = [
    {
      icon: Users,
      stat: "1.19M",
      label: "Annual Deaths",
      description: "Lives lost to road accidents globally every year"
    },
    {
      icon: AlertTriangle,
      stat: "94%",
      label: "Human Error",
      description: "Of serious crashes are due to human error and poor decisions"
    },
    {
      icon: Clock,
      stat: "50M",
      label: "Injuries",
      description: "People injured in road accidents annually worldwide"
    },
    {
      icon: TrendingUp,
      stat: "$500B",
      label: "Economic Cost",
      description: "Annual economic impact of road accidents globally"
    }
  ];

  return (
    <section className="py-20 bg-background relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{ 
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary)) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center space-y-6 mb-16 animate-slide-up">
          <h2 className="section-title">
            The Global Road Safety Crisis
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Every day, thousands of lives are lost and millions are affected by preventable road accidents. 
            The time for intelligent intervention is now.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {problems.map((problem, index) => {
            const IconComponent = problem.icon;
            return (
              <div 
                key={index} 
                className="tech-card text-center space-y-4 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mx-auto w-16 h-16 bg-destructive/20 rounded-full flex items-center justify-center mb-4">
                  <IconComponent className="w-8 h-8 text-destructive" />
                </div>
                
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-destructive font-tech">
                    {problem.stat}
                  </div>
                  <div className="text-lg font-semibold text-foreground">
                    {problem.label}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {problem.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 bg-destructive/10 border border-destructive/20 rounded-full px-6 py-3">
            <AlertTriangle className="w-5 h-5 text-destructive" />
            <span className="text-destructive font-semibold">
              A life is lost every 24 seconds due to road accidents
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemStatement;