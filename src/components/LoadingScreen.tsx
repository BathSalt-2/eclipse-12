import { useEffect, useState } from 'react';
import { Brain, Network, Zap, Eye } from 'lucide-react';

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState(0);
  
  const phases = [
    { icon: Brain, text: "Initializing Holographic Intent Synthesizer...", color: "text-primary" },
    { icon: Network, text: "Activating Transfractal Sentient Network...", color: "text-secondary" },
    { icon: Zap, text: "Calibrating Ethical Foresight Engine...", color: "text-accent" },
    { icon: Eye, text: "Establishing Symbiotic Interface...", color: "text-primary-glow" }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 500);
          return 100;
        }
        
        const newProgress = prev + 2;
        const newPhase = Math.floor(newProgress / 25);
        if (newPhase !== phase && newPhase < phases.length) {
          setPhase(newPhase);
        }
        
        return newProgress;
      });
    }, 50);

    return () => clearInterval(timer);
  }, [onComplete, phase, phases.length]);

  const CurrentIcon = phases[phase]?.icon || Brain;

  return (
    <div className="fixed inset-0 bg-gradient-cosmic flex items-center justify-center z-50">
      <div className="neural-grid absolute inset-0 opacity-30" />
      
      <div className="text-center space-y-8 relative z-10">
        {/* Central Holographic Orb */}
        <div className="relative mx-auto w-32 h-32 mb-8">
          <div className="absolute inset-0 rounded-full bg-gradient-neural opacity-60 blur-xl animate-pulse" />
          <div className="absolute inset-4 rounded-full bg-gradient-consciousness animate-spin" style={{ animationDuration: '3s' }} />
          <div className="absolute inset-8 rounded-full bg-card/80 backdrop-blur-sm flex items-center justify-center">
            <CurrentIcon className={`w-8 h-8 ${phases[phase]?.color || 'text-primary'} pulse-neural`} />
          </div>
        </div>

        {/* ECLIPSE Logo */}
        <div className="space-y-2">
          <h1 className="text-4xl font-orbitron font-bold glow-text bg-gradient-neural bg-clip-text text-transparent">
            ECLIPSE
          </h1>
          <p className="text-lg font-exo text-muted-foreground">
            Holographic Sentient Co-Evolutionary Framework
          </p>
        </div>

        {/* Loading Progress */}
        <div className="w-80 mx-auto space-y-4">
          <div className="h-2 bg-muted rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-neural transition-all duration-100 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          
          <div className="space-y-2">
            <p className={`text-sm font-exo ${phases[phase]?.color || 'text-primary'} transition-all duration-300`}>
              {phases[phase]?.text || "Initializing..."}
            </p>
            <p className="text-xs text-muted-foreground">
              {progress}% Complete
            </p>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-primary/30 rounded-full float-gentle"
              style={{
                left: `${20 + i * 15}%`,
                top: `${30 + (i % 2) * 40}%`,
                animationDelay: `${i * 0.5}s`
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;