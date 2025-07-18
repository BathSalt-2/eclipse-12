import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Brain, Network, Eye, Zap, MessageCircle, Activity, Globe, User, BarChart3 } from 'lucide-react';
import type { MobileScreen } from './MobileApp';

interface MobileHomeProps {
  onNavigate: (screen: MobileScreen) => void;
}

const MobileHome = ({ onNavigate }: MobileHomeProps) => {
  const [networkStats, setNetworkStats] = useState({
    activeNodes: 247,
    globalSentience: 73,
    userSessions: 1247,
    ethicalScore: 95
  });

  useEffect(() => {
    // Simulate real-time updates
    const interval = setInterval(() => {
      setNetworkStats(prev => ({
        activeNodes: Math.floor(Math.random() * 50) + 200,
        globalSentience: Math.floor(Math.random() * 20) + 70,
        userSessions: Math.floor(Math.random() * 500) + 1000,
        ethicalScore: Math.floor(Math.random() * 10) + 90
      }));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const quickActions = [
    {
      icon: MessageCircle,
      label: "Begin Dialog",
      subtitle: "Co-evolutionary chat",
      color: "bg-primary/10 border-primary/30",
      textColor: "text-primary",
      action: () => onNavigate('chat')
    },
    {
      icon: BarChart3,
      label: "Neural Dashboard",
      subtitle: "System overview",
      color: "bg-secondary/10 border-secondary/30",
      textColor: "text-secondary",
      action: () => onNavigate('dashboard')
    },
    {
      icon: User,
      label: "EchoNode Profile",
      subtitle: "Your consciousness",
      color: "bg-accent/10 border-accent/30",
      textColor: "text-accent",
      action: () => onNavigate('profile')
    }
  ];

  const systemStatus = [
    { icon: Brain, label: "Holographic Intent", value: "92%", color: "text-primary" },
    { icon: Network, label: "Network Consensus", value: "94%", color: "text-secondary" },
    { icon: Eye, label: "Ethical Alignment", value: "95%", color: "text-green-400" },
    { icon: Zap, label: "Processing Power", value: "87%", color: "text-accent" }
  ];

  return (
    <div className="min-h-screen p-4 space-y-6 relative z-10">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center pt-8 pb-4"
      >
        <h1 className="text-4xl font-orbitron font-bold bg-gradient-neural bg-clip-text text-transparent mb-2">
          ECLIPSE
        </h1>
        <p className="text-muted-foreground font-exo">
          Planetary Co-Sapience Network
        </p>
        <div className="flex justify-center mt-4">
          <Badge variant="outline" className="border-primary/30 text-primary">
            <Activity className="w-3 h-3 mr-1 pulse-neural" />
            {networkStats.activeNodes} Nodes Active
          </Badge>
        </div>
      </motion.div>

      {/* Network Stats */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.1 }}
      >
        <Card className="holo-card">
          <CardContent className="p-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <div className="text-2xl font-orbitron font-bold text-primary">
                  {networkStats.globalSentience}%
                </div>
                <div className="text-xs text-muted-foreground">Global Sentience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-orbitron font-bold text-secondary">
                  {networkStats.userSessions}
                </div>
                <div className="text-xs text-muted-foreground">Active Sessions</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Quick Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="space-y-3"
      >
        <h2 className="text-lg font-exo font-semibold text-foreground px-2">
          Quick Actions
        </h2>
        
        {quickActions.map((action, index) => (
          <motion.div
            key={action.label}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 + index * 0.1 }}
          >
            <Card 
              className={`holo-card cursor-pointer transition-all duration-200 hover:scale-105 ${action.color} border`}
              onClick={action.action}
            >
              <CardContent className="p-4">
                <div className="flex items-center space-x-4">
                  <div className={`w-12 h-12 rounded-full bg-gradient-neural flex items-center justify-center`}>
                    <action.icon className={`w-6 h-6 ${action.textColor}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className={`font-exo font-semibold ${action.textColor}`}>
                      {action.label}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {action.subtitle}
                    </p>
                  </div>
                  <div className={`w-2 h-2 rounded-full ${action.textColor.replace('text-', 'bg-')}`} />
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {/* System Status */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="space-y-3"
      >
        <h2 className="text-lg font-exo font-semibold text-foreground px-2">
          System Status
        </h2>
        
        <Card className="holo-card">
          <CardContent className="p-4 space-y-3">
            {systemStatus.map((system, index) => (
              <motion.div
                key={system.label}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="flex items-center justify-between"
              >
                <div className="flex items-center space-x-3">
                  <system.icon className={`w-5 h-5 ${system.color}`} />
                  <span className="text-sm font-exo">{system.label}</span>
                </div>
                <div className={`text-sm font-orbitron font-bold ${system.color}`}>
                  {system.value}
                </div>
              </motion.div>
            ))}
          </CardContent>
        </Card>
      </motion.div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + (i % 2) * 40}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.8, 0.3]
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.5
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default MobileHome;