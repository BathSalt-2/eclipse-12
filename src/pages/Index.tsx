import { useState, useEffect } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import LoadingScreen from '@/components/LoadingScreen';
import HeroSection from '@/components/HeroSection';
import Dashboard from '@/components/Dashboard';
import EclipseChat from '@/components/EclipseChat';
import MobileApp from '@/components/mobile/MobileApp';

type AppState = 'loading' | 'landing' | 'dashboard' | 'chat';

const Index = () => {
  const [currentState, setCurrentState] = useState<AppState>('loading');
  const isMobile = useIsMobile();

  // For mobile, use the dedicated mobile app
  if (isMobile) {
    return <MobileApp />;
  }

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
