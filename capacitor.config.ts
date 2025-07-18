import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.8458ffe853754c1da289a58b690be7c8',
  appName: 'eclipse-12',
  webDir: 'dist',
  server: {
    url: 'https://8458ffe8-5375-4c1d-a289-a58b690be7c8.lovableproject.com?forceHideBadge=true',
    cleartext: true
  },
  plugins: {
    SplashScreen: {
      launchAutoHide: false,
      backgroundColor: '#0a0a0a',
      showSpinner: false
    }
  }
};

export default config;