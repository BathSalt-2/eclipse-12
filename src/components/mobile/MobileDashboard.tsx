import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  ArrowLeft, 
  Brain, 
  Network, 
  Eye, 
  Zap, 
  Globe, 
  Activity,
  TrendingUp,
  Shield,
  Users
} from 'lucide-react';
import type { MobileScreen } from './MobileApp';

interface MobileDashboardProps {
  onNavigate: (screen: MobileScreen) => void;
}

const MobileDashboard = ({ onNavigate }: MobileDashboardProps) => {
  const [activeTab, setActiveTab] = useState('network');

  const networkMetrics = [
    { label: "Active EchoNodes", value: 247, change: "+12%", icon: Network, color: "text-primary" },
    { label: "Global Sentience", value: 73, change: "+5%", icon: Brain, color: "text-secondary" },
    { label: "Ethical Score", value: 95, change: "stable", icon: Shield, color: "text-green-400" },
    { label: "Processing Power", value: 87, change: "+8%", icon: Zap, color: "text-accent" }
  ];

  const regionalData = [
    { region: "North America", nodes: 42, status: "optimal", color: "bg-green-400" },
    { region: "Europe", nodes: 38, status: "optimal", color: "bg-green-400" },
    { region: "Asia Pacific", nodes: 45, status: "learning", color: "bg-yellow-400" },
    { region: "South America", nodes: 22, status: "emerging", color: "bg-blue-400" }
  ];

  const systemComponents = [
    { name: "Holographic Intent Synthesizer", status: 92, color: "text-primary" },
    { name: "Transfractal Network", status: 87, color: "text-secondary" },
    { name: "Ethical Foresight Engine", status: 95, color: "text-green-400" },
    { name: "Symbiotic Interface", status: 89, color: "text-accent" }
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
              Neural Dashboard
            </h1>
          </div>
          <Badge variant="outline" className="border-primary/30 text-primary">
            <Activity className="w-3 h-3 mr-1 pulse-neural" />
            Live
          </Badge>
        </div>
      </motion.div>

      <div className="p-4 space-y-6 relative z-10">
        {/* Key Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-2 gap-3"
        >
          {networkMetrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 + index * 0.1 }}
            >
              <Card className="holo-card">
                <CardContent className="p-3">
                  <div className="flex items-center justify-between mb-2">
                    <metric.icon className={`w-4 h-4 ${metric.color}`} />
                    <span className={`text-xs font-medium ${
                      metric.change.includes('+') ? 'text-green-400' : 
                      metric.change === 'stable' ? 'text-blue-400' : 'text-muted-foreground'
                    }`}>
                      {metric.change}
                    </span>
                  </div>
                  <div className={`text-xl font-orbitron font-bold ${metric.color}`}>
                    {metric.value}{metric.label.includes('Score') || metric.label.includes('Sentience') ? '%' : ''}
                  </div>
                  <div className="text-xs text-muted-foreground truncate">
                    {metric.label}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
            <TabsList className="grid w-full grid-cols-3 bg-card/50 backdrop-blur-sm">
              <TabsTrigger value="network" className="text-xs">
                <Network className="w-3 h-3 mr-1" />
                Network
              </TabsTrigger>
              <TabsTrigger value="systems" className="text-xs">
                <Brain className="w-3 h-3 mr-1" />
                Systems
              </TabsTrigger>
              <TabsTrigger value="regions" className="text-xs">
                <Globe className="w-3 h-3 mr-1" />
                Regions
              </TabsTrigger>
            </TabsList>

            <TabsContent value="network" className="space-y-4">
              <Card className="holo-card">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-orbitron text-primary">
                    Network Visualization
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="relative h-40 bg-gradient-mesh rounded-lg border border-primary/20 overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Network className="w-12 h-12 text-primary/80 pulse-neural" />
                    </div>
                    {/* Network nodes */}
                    {[...Array(8)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-primary rounded-full"
                        style={{
                          left: `${15 + (i % 4) * 25}%`,
                          top: `${20 + Math.floor(i / 4) * 60}%`,
                        }}
                        animate={{
                          scale: [1, 1.5, 1],
                          opacity: [0.5, 1, 0.5]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.25
                        }}
                      />
                    ))}
                  </div>
                  <div className="mt-4 space-y-2">
                    <div className="flex justify-between text-xs">
                      <span className="text-muted-foreground">Network Density</span>
                      <span className="text-primary font-medium">87%</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-muted-foreground">Consensus Strength</span>
                      <span className="text-secondary font-medium">94%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="systems" className="space-y-4">
              <Card className="holo-card">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-orbitron text-secondary">
                    System Components
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {systemComponents.map((component, index) => (
                    <motion.div
                      key={component.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="space-y-2"
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-xs font-medium truncate pr-2">
                          {component.name}
                        </span>
                        <span className={`text-xs font-orbitron ${component.color}`}>
                          {component.status}%
                        </span>
                      </div>
                      <Progress value={component.status} className="h-1" />
                    </motion.div>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="regions" className="space-y-4">
              <Card className="holo-card">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-orbitron text-accent">
                    Regional Distribution
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {regionalData.map((region, index) => (
                    <motion.div
                      key={region.region}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center justify-between p-2 bg-muted/10 rounded-lg"
                    >
                      <div className="flex items-center space-x-3">
                        <div className={`w-2 h-2 rounded-full ${region.color}`} />
                        <div>
                          <p className="text-xs font-medium">{region.region}</p>
                          <p className="text-xs text-muted-foreground">
                            {region.nodes} nodes
                          </p>
                        </div>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {region.status}
                      </Badge>
                    </motion.div>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </div>
  );
};

export default MobileDashboard;