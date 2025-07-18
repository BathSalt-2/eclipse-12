import { useState } from 'react';
import LoadingScreen from '@/components/LoadingScreen';
import HeroSection from '@/components/HeroSection';
import Dashboard from '@/components/Dashboard';

type AppState = 'loading' | 'landing' | 'dashboard';

const Index = () => {
  const [currentState, setCurrentState] = useState<AppState>('loading');

  const handleLoadingComplete = () => {
    setCurrentState('landing');
  };

  const handleEnterDashboard = () => {
    setCurrentState('dashboard');
  };

  const handleBackToLanding = () => {
    setCurrentState('landing');
  };

  return (
    <div className="min-h-screen font-exo">
      {currentState === 'loading' && (
        <LoadingScreen onComplete={handleLoadingComplete} />
      )}
      
      {currentState === 'landing' && (
        <HeroSection onEnterDashboard={handleEnterDashboard} />
      )}
      
      {currentState === 'dashboard' && (
        <Dashboard onBackToLanding={handleBackToLanding} />
      )}
    </div>
  );
};

export default Index;
