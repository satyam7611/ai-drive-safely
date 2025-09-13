import HeroSection from "@/components/HeroSection";
import ProblemStatement from "@/components/ProblemStatement";
import ProposedSolution from "@/components/ProposedSolution";
import SystemWorkflow from "@/components/SystemWorkflow";
import Technologies from "@/components/Technologies";
import SystemArchitecture from "@/components/SystemArchitecture";
import ImpactVision from "@/components/ImpactVision";
import Conclusion from "@/components/Conclusion";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <ProblemStatement />
      <ProposedSolution />
      <SystemWorkflow />
      <Technologies />
      <SystemArchitecture />
      <ImpactVision />
      <Conclusion />
    </div>
  );
};

export default Index;