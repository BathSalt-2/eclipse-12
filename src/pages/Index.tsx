import { useState } from 'react';
import LoadingScreen from '@/components/LoadingScreen';
import HeroSection from '@/components/HeroSection';
import Dashboard from '@/components/Dashboard';
import EclipseChat from '@/components/EclipseChat';

type AppState = 'loading' | 'landing' | 'dashboard' | 'chat';

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

  const handleEnterChat = () => {
    setCurrentState('chat');
  };

  const handleBackToDashboard = () => {
    setCurrentState('dashboard');
  };

  return (
    <div className="min-h-screen font-exo">
      {currentState === 'loading' && (
        <LoadingScreen onComplete={handleLoadingComplete} />
      )}
      
      {currentState === 'landing' && (
        <HeroSection 
          onEnterDashboard={handleEnterDashboard}
          onEnterChat={handleEnterChat}
        />
      )}
      
      {currentState === 'dashboard' && (
        <Dashboard 
          onBackToLanding={handleBackToLanding}
          onEnterChat={handleEnterChat}
        />
      )}
      
      {currentState === 'chat' && (
        <EclipseChat 
          onBackToLanding={handleBackToLanding}
          onBackToDashboard={handleBackToDashboard}
        />
      )}
    </div>
  );
};

export default Index;
