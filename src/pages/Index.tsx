import { useState } from "react";
import { Header } from "@/components/Header";
import { CodeEditor } from "@/components/CodeEditor";
import { TutorialSection } from "@/components/TutorialSection";
import { ExerciseGenerator } from "@/components/ExerciseGenerator";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Code2, BookOpen, Zap, TrendingUp, Users, Award } from "lucide-react";

const Index = () => {
  const [activeTab, setActiveTab] = useState("editor");

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="border-b border-border bg-gradient-card">
        <div className="container mx-auto px-6 py-12">
          <div className="text-center space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold">
                Master Programming with
                <span className="bg-gradient-primary bg-clip-text text-transparent block">
                  AI-Powered Learning
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Write, analyze, and debug code with intelligent suggestions. Learn through interactive tutorials and personalized challenges.
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="gradient" size="lg" className="gap-2">
                <Code2 className="w-5 h-5" />
                Start Coding
              </Button>
              <Button variant="outline" size="lg" className="gap-2">
                <BookOpen className="w-5 h-5" />
                Browse Tutorials
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-8 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">10K+</div>
                <div className="text-sm text-muted-foreground">Active Learners</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">500+</div>
                <div className="text-sm text-muted-foreground">Tutorials</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-info">1M+</div>
                <div className="text-sm text-muted-foreground">Code Reviews</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid grid-cols-3 w-full max-w-md mx-auto">
            <TabsTrigger value="editor" className="gap-2">
              <Code2 className="w-4 h-4" />
              Editor
            </TabsTrigger>
            <TabsTrigger value="tutorials" className="gap-2">
              <BookOpen className="w-4 h-4" />
              Tutorials
            </TabsTrigger>
            <TabsTrigger value="exercises" className="gap-2">
              <Zap className="w-4 h-4" />
              Exercises
            </TabsTrigger>
          </TabsList>

          <TabsContent value="editor" className="space-y-6">
            <div className="text-center space-y-2">
              <h2 className="text-2xl font-bold">Interactive Code Editor</h2>
              <p className="text-muted-foreground">Write code with real-time analysis and intelligent debugging</p>
            </div>
            <CodeEditor />
          </TabsContent>

          <TabsContent value="tutorials" className="space-y-6">
            <TutorialSection />
          </TabsContent>

          <TabsContent value="exercises" className="space-y-6">
            <ExerciseGenerator />
          </TabsContent>
        </Tabs>

        {/* Features Grid */}
        <section className="py-16 space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold">Platform Features</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Everything you need to become a better programmer, powered by advanced AI analysis
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="p-6 bg-gradient-card shadow-card hover:shadow-glow transition-all duration-300">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Real-time Analysis</h3>
                  <p className="text-muted-foreground">Get instant feedback on code quality, performance, and best practices</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-card shadow-card hover:shadow-glow transition-all duration-300">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Collaborative Learning</h3>
                  <p className="text-muted-foreground">Share code, get peer reviews, and learn from the community</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-card shadow-card hover:shadow-glow transition-all duration-300">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-warning/20 rounded-lg flex items-center justify-center">
                  <Award className="w-6 h-6 text-warning" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Achievement System</h3>
                  <p className="text-muted-foreground">Track progress with badges, streaks, and skill assessments</p>
                </div>
              </div>
            </Card>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;
