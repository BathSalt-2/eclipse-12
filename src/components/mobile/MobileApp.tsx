import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import MobileOnboarding from './MobileOnboarding';
import MobileHome from './MobileHome';
import MobileDashboard from './MobileDashboard';
import MobileChat from './MobileChat';
import MobileProfile from './MobileProfile';

export type MobileScreen = 'onboarding' | 'home' | 'dashboard' | 'chat' | 'profile';

const MobileApp = () => {
  const [currentScreen, setCurrentScreen] = useState<MobileScreen>('onboarding');
  const [isFirstLaunch, setIsFirstLaunch] = useState(true);

  useEffect(() => {
    // Check if user has completed onboarding
    const hasCompletedOnboarding = localStorage.getItem('eclipse-onboarding-complete');
    if (hasCompletedOnboarding) {
      setCurrentScreen('home');
      setIsFirstLaunch(false);
    }
  }, []);

  const navigateToScreen = (screen: MobileScreen) => {
    setCurrentScreen(screen);
  };

  const completeOnboarding = () => {
    localStorage.setItem('eclipse-onboarding-complete', 'true');
    setIsFirstLaunch(false);
    setCurrentScreen('home');
  };

  const screenVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0
    })
  };

  const transition = {
    type: "spring" as const,
    stiffness: 300,
    damping: 30
  };

  return (
    <div className="min-h-screen bg-gradient-cosmic relative overflow-hidden">
      <div className="neural-grid absolute inset-0 opacity-20" />
      
      <AnimatePresence mode="wait">
        <motion.div
          key={currentScreen}
          custom={1}
          variants={screenVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={transition}
          className="absolute inset-0"
        >
          {currentScreen === 'onboarding' && (
            <MobileOnboarding onComplete={completeOnboarding} />
          )}
          {currentScreen === 'home' && (
            <MobileHome onNavigate={navigateToScreen} />
          )}
          {currentScreen === 'dashboard' && (
            <MobileDashboard onNavigate={navigateToScreen} />
          )}
          {currentScreen === 'chat' && (
            <MobileChat onNavigate={navigateToScreen} />
          )}
          {currentScreen === 'profile' && (
            <MobileProfile onNavigate={navigateToScreen} />
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default MobileApp;