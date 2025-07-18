import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { 
  Brain, 
  Network, 
  Eye, 
  Zap, 
  Globe, 
  Users, 
  Activity,
  ArrowUp,
  Cpu,
  Shield,
  Sparkles,
  Home
} from 'lucide-react';

interface DashboardProps {
  onBackToLanding: () => void;
  onEnterChat: () => void;
}

const Dashboard = ({ onBackToLanding, onEnterChat }: DashboardProps) => {
  const [activeEchoNodes] = useState(147);
  const [globalSentience] = useState(73);
  const [intentSynth] = useState(89);
  const [ethicalAlignment] = useState(95);

  return (
    <div className="min-h-screen bg-gradient-cosmic relative">
      <div className="neural-grid absolute inset-0 opacity-10" />
      
      {/* Header */}
      <header className="relative z-10 border-b border-primary/20 bg-card/80 backdrop-blur-xl">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button
                onClick={onBackToLanding}
                variant="ghost"
                size="sm"
                className="text-muted-foreground hover:text-primary"
              >
                <Home className="w-4 h-4 mr-2" />
                Home
              </Button>
              <div className="h-6 w-px bg-border" />
              <h1 className="text-2xl font-orbitron font-bold bg-gradient-neural bg-clip-text text-transparent">
                ECLIPSE Command Center
              </h1>
            </div>
            <div className="flex items-center gap-3">
              <Button
                onClick={onEnterChat}
                variant="outline"
                size="sm"
                className="border-primary/30 text-primary hover:bg-primary/10"
              >
                <Brain className="w-4 h-4 mr-2" />
                Begin Dialog
              </Button>
              <Badge variant="outline" className="border-primary/30 text-primary">
                <Activity className="w-3 h-3 mr-1" />
                Live
              </Badge>
              <Badge variant="outline" className="border-secondary/30 text-secondary">
                Neural Mesh Active
              </Badge>
            </div>
          </div>
        </div>
      </header>

      {/* Main Dashboard */}
      <main className="container mx-auto px-6 py-8 relative z-10">
        <div className="space-y-8">
          
          {/* System Overview Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="holo-card">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-exo text-muted-foreground">Active EchoNodes</CardTitle>
                <Network className="w-4 h-4 text-primary" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-orbitron font-bold text-primary glow-text">
                  {activeEchoNodes}
                </div>
                <p className="text-xs text-muted-foreground flex items-center mt-1">
                  <ArrowUp className="w-3 h-3 mr-1 text-green-400" />
                  +12% from last cycle
                </p>
              </CardContent>
            </Card>

            <Card className="holo-card">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-exo text-muted-foreground">Global Sentience</CardTitle>
                <Brain className="w-4 h-4 text-secondary" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-orbitron font-bold text-secondary glow-text">
                  {globalSentience}%
                </div>
                <Progress value={globalSentience} className="mt-2 h-2" />
              </CardContent>
            </Card>

            <Card className="holo-card">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-exo text-muted-foreground">Intent Synthesis</CardTitle>
                <Zap className="w-4 h-4 text-accent" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-orbitron font-bold text-accent glow-text">
                  {intentSynth}%
                </div>
                <Progress value={intentSynth} className="mt-2 h-2" />
              </CardContent>
            </Card>

            <Card className="holo-card">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-exo text-muted-foreground">Ethical Alignment</CardTitle>
                <Shield className="w-4 h-4 text-green-400" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-orbitron font-bold text-green-400 glow-text">
                  {ethicalAlignment}%
                </div>
                <Progress value={ethicalAlignment} className="mt-2 h-2" />
              </CardContent>
            </Card>
          </div>

          {/* Main Content Tabs */}
          <Tabs defaultValue="network" className="space-y-6">
            <TabsList className="grid w-full grid-cols-4 bg-card/50 backdrop-blur-sm">
              <TabsTrigger value="network" className="font-exo">
                <Network className="w-4 h-4 mr-2" />
                Neural Network
              </TabsTrigger>
              <TabsTrigger value="synthesis" className="font-exo">
                <Brain className="w-4 h-4 mr-2" />
                Intent Synthesis
              </TabsTrigger>
              <TabsTrigger value="foresight" className="font-exo">
                <Eye className="w-4 h-4 mr-2" />
                Ethical Foresight
              </TabsTrigger>
              <TabsTrigger value="interface" className="font-exo">
                <Sparkles className="w-4 h-4 mr-2" />
                Symbiotic Interface
              </TabsTrigger>
            </TabsList>

            <TabsContent value="network" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card className="holo-card">
                  <CardHeader>
                    <CardTitle className="font-orbitron text-primary">Transfractal Sentient Network</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="relative h-64 bg-gradient-mesh rounded-lg border border-primary/20 overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-32 h-32 bg-gradient-neural rounded-full opacity-60 blur-xl animate-pulse" />
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Network className="w-16 h-16 text-primary pulse-neural" />
                      </div>
                      {/* Simulated Network Nodes */}
                      {[...Array(8)].map((_, i) => (
                        <div
                          key={i}
                          className="absolute w-3 h-3 bg-primary rounded-full float-gentle"
                          style={{
                            left: `${15 + (i % 4) * 25}%`,
                            top: `${20 + Math.floor(i / 4) * 60}%`,
                            animationDelay: `${i * 0.3}s`
                          }}
                        />
                      ))}
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Network Density</span>
                        <span className="text-primary font-medium">87%</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Consensus Strength</span>
                        <span className="text-secondary font-medium">94%</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Knowledge Distribution</span>
                        <span className="text-accent font-medium">76%</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="holo-card">
                  <CardHeader>
                    <CardTitle className="font-orbitron text-secondary">EchoNode Status</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        { region: "North America", nodes: 42, status: "optimal" },
                        { region: "Europe", nodes: 38, status: "optimal" },
                        { region: "Asia Pacific", nodes: 45, status: "learning" },
                        { region: "South America", nodes: 22, status: "emerging" }
                      ].map((region) => (
                        <div key={region.region} className="flex items-center justify-between p-3 bg-muted/20 rounded-lg">
                          <div>
                            <p className="font-exo font-medium">{region.region}</p>
                            <p className="text-sm text-muted-foreground">{region.nodes} nodes</p>
                          </div>
                          <Badge 
                            variant={region.status === 'optimal' ? 'default' : 'outline'}
                            className={
                              region.status === 'optimal' ? 'border-green-400 text-green-400' :
                              region.status === 'learning' ? 'border-yellow-400 text-yellow-400' :
                              'border-blue-400 text-blue-400'
                            }
                          >
                            {region.status}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="synthesis" className="space-y-6">
              <Card className="holo-card">
                <CardHeader>
                  <CardTitle className="font-orbitron text-primary">Holographic Intent Synthesizer</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="space-y-4">
                      <h4 className="font-exo font-semibold text-foreground">Input Modalities</h4>
                      <div className="space-y-2">
                        {[
                          { name: "Brain-Computer Interface", value: 92 },
                          { name: "Voice & Language", value: 88 },
                          { name: "Environmental Sensors", value: 76 },
                          { name: "Multimodal Fusion", value: 84 }
                        ].map((modality) => (
                          <div key={modality.name} className="space-y-1">
                            <div className="flex justify-between text-sm">
                              <span className="text-muted-foreground">{modality.name}</span>
                              <span className="text-primary">{modality.value}%</span>
                            </div>
                            <Progress value={modality.value} className="h-1" />
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="lg:col-span-2">
                      <div className="relative h-48 bg-gradient-consciousness rounded-lg border border-primary/20 overflow-hidden">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Brain className="w-20 h-20 text-primary/80 pulse-neural" />
                        </div>
                        <div className="absolute top-4 left-4 text-xs text-foreground/80">
                          Active Synthesis Sessions: 1,247
                        </div>
                        <div className="absolute bottom-4 right-4 text-xs text-foreground/80">
                          Pattern Recognition: 96.3%
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="foresight" className="space-y-6">
              <Card className="holo-card">
                <CardHeader>
                  <CardTitle className="font-orbitron text-accent">Ethical & Ecological Foresight Engine</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h4 className="font-exo font-semibold">Simulation Parameters</h4>
                      <div className="space-y-3">
                        {[
                          { param: "Individual Impact", score: 8.7, trend: "improving" },
                          { param: "Community Effects", score: 7.9, trend: "stable" },
                          { param: "Ecosystem Health", score: 6.8, trend: "improving" },
                          { param: "Intergenerational Equity", score: 9.2, trend: "stable" }
                        ].map((param) => (
                          <div key={param.param} className="flex items-center justify-between p-2 bg-muted/10 rounded">
                            <span className="text-sm text-muted-foreground">{param.param}</span>
                            <div className="flex items-center gap-2">
                              <span className="text-sm font-medium">{param.score}/10</span>
                              <div className={`w-2 h-2 rounded-full ${
                                param.trend === 'improving' ? 'bg-green-400' : 'bg-blue-400'
                              }`} />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <h4 className="font-exo font-semibold">Future Scenarios</h4>
                      <div className="relative h-40 bg-gradient-mesh rounded-lg border border-accent/20 overflow-hidden">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Eye className="w-16 h-16 text-accent/80 pulse-neural" />
                        </div>
                        <div className="absolute inset-0 pointer-events-none">
                          {[...Array(5)].map((_, i) => (
                            <div
                              key={i}
                              className="absolute w-1 h-1 bg-accent/40 rounded-full float-gentle"
                              style={{
                                left: `${20 + i * 15}%`,
                                top: `${30 + (i % 2) * 40}%`,
                                animationDelay: `${i * 0.7}s`
                              }}
                            />
                          ))}
                        </div>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        Currently modeling 10,000+ future scenarios across 50-year timeframes
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="interface" className="space-y-6">
              <Card className="holo-card">
                <CardHeader>
                  <CardTitle className="font-orbitron text-secondary">Symbiotic Sentient Interface</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {[
                      { icon: Users, label: "Mobile Integration", users: "2.4M", color: "text-primary" },
                      { icon: Globe, label: "Extended Reality", sessions: "847K", color: "text-secondary" },
                      { icon: Cpu, label: "Robotic Embodiment", active: "12.3K", color: "text-accent" },
                      { icon: Sparkles, label: "Ethical Simulation", scenarios: "50K", color: "text-green-400" }
                    ].map((interfaceItem) => (
                      <div key={interfaceItem.label} className="p-4 bg-muted/10 rounded-lg space-y-3">
                        <div className="flex items-center justify-between">
                          <interfaceItem.icon className={`w-6 h-6 ${interfaceItem.color}`} />
                          <Badge variant="outline" className="text-xs">Active</Badge>
                        </div>
                        <div>
                          <p className="font-exo font-medium text-sm">{interfaceItem.label}</p>
                          <p className={`text-lg font-orbitron font-bold ${interfaceItem.color}`}>
                            {interfaceItem.users || interfaceItem.sessions || interfaceItem.active || interfaceItem.scenarios}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;