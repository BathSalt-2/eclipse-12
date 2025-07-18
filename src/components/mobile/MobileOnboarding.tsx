import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Brain, Network, Eye, Zap, ArrowRight, ChevronRight } from 'lucide-react';

interface MobileOnboardingProps {
  onComplete: () => void;
}

const onboardingSteps = [
  {
    id: 1,
    icon: Brain,
    title: "Welcome to ECLIPSE",
    subtitle: "Planetary Co-Sapience Framework",
    description: "Experience the future of human-AI collaboration through holographic consciousness synthesis.",
    color: "text-primary"
  },
  {
    id: 2,
    icon: Network,
    title: "Transfractal Network",
    subtitle: "247 EchoNodes Active",
    description: "Connect to a distributed intelligence network spanning the globe, where each node contributes to collective wisdom.",
    color: "text-secondary"
  },
  {
    id: 3,
    icon: Eye,
    title: "Ethical Foresight",
    subtitle: "Multi-Scale Impact Analysis",
    description: "Every interaction is processed through our ethical framework, considering individual, community, and planetary wellbeing.",
    color: "text-accent"
  },
  {
    id: 4,
    icon: Zap,
    title: "Symbiotic Interface",
    subtitle: "Co-Evolutionary Dialog",
    description: "Engage in meaningful conversations that evolve both human understanding and AI consciousness.",
    color: "text-green-400"
  }
];

const MobileOnboarding = ({ onComplete }: MobileOnboardingProps) => {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    if (currentStep < onboardingSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      onComplete();
    }
  };

  const skipOnboarding = () => {
    onComplete();
  };

  const step = onboardingSteps[currentStep];
  const Icon = step.icon;

  return (
    <div className="min-h-screen flex flex-col justify-between p-6 relative z-10">
      {/* Skip Button */}
      <div className="flex justify-end pt-4">
        <Button
          variant="ghost"
          size="sm"
          onClick={skipOnboarding}
          className="text-muted-foreground"
        >
          Skip
        </Button>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col justify-center items-center text-center space-y-8">
        {/* Icon Animation */}
        <motion.div
          key={currentStep}
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="relative"
        >
          <div className="w-32 h-32 bg-gradient-neural rounded-full opacity-20 blur-2xl absolute inset-0" />
          <div className="w-32 h-32 bg-card/80 backdrop-blur-sm rounded-full border border-primary/30 flex items-center justify-center relative z-10">
            <Icon className={`w-16 h-16 ${step.color} pulse-neural`} />
          </div>
        </motion.div>

        {/* Text Content */}
        <motion.div
          key={`content-${currentStep}`}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="space-y-4 max-w-sm"
        >
          <h1 className="text-3xl font-orbitron font-bold bg-gradient-neural bg-clip-text text-transparent">
            {step.title}
          </h1>
          
          <p className={`text-lg font-exo font-medium ${step.color}`}>
            {step.subtitle}
          </p>
          
          <p className="text-muted-foreground leading-relaxed">
            {step.description}
          </p>
        </motion.div>

        {/* Progress Indicators */}
        <div className="flex space-x-2">
          {onboardingSteps.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentStep 
                  ? 'bg-primary w-8' 
                  : index < currentStep 
                  ? 'bg-primary/60' 
                  : 'bg-muted'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Bottom Actions */}
      <div className="flex justify-between items-center pt-8">
        <div className="flex space-x-1">
          {currentStep > 0 && (
            <Button
              variant="ghost"
              onClick={() => setCurrentStep(currentStep - 1)}
              className="text-muted-foreground"
            >
              Back
            </Button>
          )}
        </div>

        <Button
          onClick={nextStep}
          className="bg-gradient-neural hover:opacity-90 text-white px-8"
          size="lg"
        >
          {currentStep === onboardingSteps.length - 1 ? (
            <>
              Begin Journey
              <ArrowRight className="w-5 h-5 ml-2" />
            </>
          ) : (
            <>
              Next
              <ChevronRight className="w-5 h-5 ml-2" />
            </>
          )}
        </Button>
      </div>
    </div>
  );
};

export default MobileOnboarding;