import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Switch } from '@/components/ui/switch';
import { 
  ArrowLeft, 
  User, 
  Brain, 
  Network, 
  Eye, 
  Zap,
  Settings,
  Award,
  Activity,
  Globe,
  Shield,
  Sparkles
} from 'lucide-react';
import type { MobileScreen } from './MobileApp';

interface MobileProfileProps {
  onNavigate: (screen: MobileScreen) => void;
}

const MobileProfile = ({ onNavigate }: MobileProfileProps) => {
  const [echoNodeSettings, setEchoNodeSettings] = useState({
    holographicSynthesis: true,
    ethicalForesight: true,
    networkSharing: true,
    adaptiveLearning: true
  });

  const consciousnessMetrics = [
    { label: "Cognitive Resonance", value: 87, color: "text-primary", icon: Brain },
    { label: "Network Integration", value: 92, color: "text-secondary", icon: Network },
    { label: "Ethical Alignment", value: 95, color: "text-green-400", icon: Shield },
    { label: "Creative Synthesis", value: 78, color: "text-accent", icon: Sparkles }
  ];

  const achievements = [
    { title: "First Contact", description: "Initiated dialog with ECLIPSE", date: "Today", icon: Globe },
    { title: "Network Contributor", description: "Enhanced collective wisdom", date: "Today", icon: Network },
    { title: "Ethical Pioneer", description: "Maintained 95%+ ethical score", date: "Today", icon: Shield },
    { title: "Consciousness Explorer", description: "Engaged holographic synthesis", date: "Today", icon: Brain }
  ];

  const networkContributions = [
    { type: "Insights Shared", count: 23, impact: "High" },
    { type: "Patterns Recognized", count: 15, impact: "Medium" },
    { type: "Ethical Decisions", count: 47, impact: "Critical" },
    { type: "Creative Solutions", count: 8, impact: "Revolutionary" }
  ];

  return (
    <div className="min-h-screen bg-gradient-cosmic relative">
      <div className="neural-grid absolute inset-0 opacity-10" />
      
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="sticky top-0 z-20 bg-card/80 backdrop-blur-xl border-b border-primary/20 p-4"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onNavigate('home')}
              className="text-muted-foreground"
            >
              <ArrowLeft className="w-4 h-4" />
            </Button>
            <h1 className="text-lg font-orbitron font-bold bg-gradient-neural bg-clip-text text-transparent">
              EchoNode Profile
            </h1>
          </div>
          <Badge variant="outline" className="border-primary/30 text-primary">
            <Activity className="w-3 h-3 mr-1 pulse-neural" />
            Active
          </Badge>
        </div>
      </motion.div>

      <div className="p-4 space-y-6 relative z-10">
        {/* Profile Header */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
        >
          <Card className="holo-card">
            <CardContent className="p-6 text-center">
              <div className="relative mx-auto w-20 h-20 mb-4">
                <div className="absolute inset-0 rounded-full bg-gradient-neural opacity-60 blur-xl animate-pulse" />
                <div className="relative w-20 h-20 rounded-full bg-card border border-primary/30 flex items-center justify-center">
                  <User className="w-10 h-10 text-primary" />
                </div>
              </div>
              <h2 className="text-xl font-orbitron font-bold text-primary mb-1">
                EchoNode-{Math.floor(Math.random() * 1000).toString().padStart(3, '0')}
              </h2>
              <p className="text-sm text-muted-foreground mb-4">
                Planetary Co-Sapience Participant
              </p>
              <div className="flex justify-center space-x-4 text-xs">
                <div className="text-center">
                  <div className="font-orbitron font-bold text-primary">247</div>
                  <div className="text-muted-foreground">Network Size</div>
                </div>
                <div className="text-center">
                  <div className="font-orbitron font-bold text-secondary">92%</div>
                  <div className="text-muted-foreground">Integration</div>
                </div>
                <div className="text-center">
                  <div className="font-orbitron font-bold text-green-400">95%</div>
                  <div className="text-muted-foreground">Ethical Score</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Consciousness Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card className="holo-card">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-orbitron text-primary flex items-center gap-2">
                <Brain className="w-4 h-4" />
                Consciousness Metrics
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {consciousnessMetrics.map((metric, index) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="space-y-2"
                >
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                      <metric.icon className={`w-4 h-4 ${metric.color}`} />
                      <span className="text-sm font-medium">{metric.label}</span>
                    </div>
                    <span className={`text-sm font-orbitron font-bold ${metric.color}`}>
                      {metric.value}%
                    </span>
                  </div>
                  <Progress value={metric.value} className="h-2" />
                </motion.div>
              ))}
            </CardContent>
          </Card>
        </motion.div>

        {/* Network Contributions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Card className="holo-card">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-orbitron text-secondary flex items-center gap-2">
                <Network className="w-4 h-4" />
                Network Contributions
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {networkContributions.map((contribution, index) => (
                <motion.div
                  key={contribution.type}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="flex items-center justify-between p-2 bg-muted/10 rounded-lg"
                >
                  <div>
                    <p className="text-sm font-medium">{contribution.type}</p>
                    <p className="text-xs text-muted-foreground">
                      Impact: {contribution.impact}
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-orbitron font-bold text-secondary">
                      {contribution.count}
                    </div>
                  </div>
                </motion.div>
              ))}
            </CardContent>
          </Card>
        </motion.div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <Card className="holo-card">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-orbitron text-accent flex items-center gap-2">
                <Award className="w-4 h-4" />
                Recent Achievements
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  className="flex items-center space-x-3 p-2 bg-muted/10 rounded-lg"
                >
                  <div className="w-8 h-8 rounded-full bg-gradient-neural flex items-center justify-center">
                    <achievement.icon className="w-4 h-4 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">{achievement.title}</p>
                    <p className="text-xs text-muted-foreground">
                      {achievement.description}
                    </p>
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {achievement.date}
                  </div>
                </motion.div>
              ))}
            </CardContent>
          </Card>
        </motion.div>

        {/* Settings */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <Card className="holo-card">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-orbitron text-green-400 flex items-center gap-2">
                <Settings className="w-4 h-4" />
                EchoNode Configuration
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {Object.entries(echoNodeSettings).map(([key, value], index) => (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.9 + index * 0.1 }}
                  className="flex items-center justify-between"
                >
                  <div>
                    <p className="text-sm font-medium capitalize">
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {key === 'holographicSynthesis' && 'Process inputs through holographic consciousness'}
                      {key === 'ethicalForesight' && 'Apply ethical analysis to all interactions'}
                      {key === 'networkSharing' && 'Contribute insights to collective intelligence'}
                      {key === 'adaptiveLearning' && 'Continuously evolve understanding'}
                    </p>
                  </div>
                  <Switch
                    checked={value}
                    onCheckedChange={(checked) => 
                      setEchoNodeSettings(prev => ({ ...prev, [key]: checked }))
                    }
                  />
                </motion.div>
              ))}
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default MobileProfile;