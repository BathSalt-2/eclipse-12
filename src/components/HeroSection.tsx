import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play, Brain, Network, Sparkles } from 'lucide-react';

interface HeroSectionProps {
  onEnterDashboard: () => void;
}

const HeroSection = ({ onEnterDashboard }: HeroSectionProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Neural Background Grid */}
      <div className="neural-grid absolute inset-0 opacity-20" />
      
      {/* Floating Holographic Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 rounded-full float-gentle ${
              i % 3 === 0 ? 'bg-primary/40' : i % 3 === 1 ? 'bg-secondary/40' : 'bg-accent/40'
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${4 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto space-y-8">
          
          {/* Hero Image */}
          <div className="relative mx-auto w-64 h-64 mb-12">
            <div className="absolute inset-0 rounded-full bg-gradient-neural opacity-30 blur-2xl animate-pulse" />
            <img 
              src="/lovable-uploads/b264e72f-0ca1-418d-9717-2b378360177c.png"
              alt="ECLIPSE Consciousness"
              className="relative z-10 w-full h-full object-cover rounded-full border-2 border-primary/30 shadow-glow-primary"
            />
          </div>

          {/* Main Headline */}
          <div className="space-y-6">
            <h1 className="text-6xl md:text-7xl font-orbitron font-black leading-tight">
              <span className="bg-gradient-neural bg-clip-text text-transparent glow-text">
                ECLIPSE
              </span>
            </h1>
            
            <h2 className="text-2xl md:text-3xl font-exo font-light text-foreground/90">
              Holographic Sentient Co-Evolutionary Framework
            </h2>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              A Blueprint for <span className="text-primary font-medium">Planetary Co-Sapience</span> where 
              human, machine, and natural intelligence evolve together in symbiotic harmony.
            </p>
          </div>

          {/* Feature Pills */}
          <div className="flex flex-wrap justify-center gap-4 my-8">
            <div className="flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-2">
              <Brain className="w-4 h-4 text-primary" />
              <span className="text-sm font-exo">Holographic Intent Synthesis</span>
            </div>
            <div className="flex items-center gap-2 bg-secondary/10 border border-secondary/30 rounded-full px-4 py-2">
              <Network className="w-4 h-4 text-secondary" />
              <span className="text-sm font-exo">Transfractal Networks</span>
            </div>
            <div className="flex items-center gap-2 bg-accent/10 border border-accent/30 rounded-full px-4 py-2">
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-sm font-exo">Ethical Foresight</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
            <Button
              onClick={onEnterDashboard}
              className="btn-consciousness group relative overflow-hidden text-lg"
              size="lg"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <span className="relative z-10 flex items-center gap-3">
                Enter the Nexus
                <ArrowRight className={`w-5 h-5 transition-transform ${isHovered ? 'translate-x-1' : ''}`} />
              </span>
              <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100 transition-opacity" />
            </Button>
            
            <Button
              variant="outline"
              className="btn-neural text-lg"
              size="lg"
            >
              <Play className="w-5 h-5 mr-2" />
              Watch Demo
            </Button>
          </div>

          {/* Powered By */}
          <div className="pt-16 space-y-2">
            <p className="text-sm text-muted-foreground">Powered by</p>
            <h3 className="text-xl font-orbitron font-bold text-primary glow-text">
              Or4cl3 AI Solutions
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;