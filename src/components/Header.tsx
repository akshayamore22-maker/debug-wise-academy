import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Code2, BookOpen, Trophy, Settings, User } from "lucide-react";

export const Header = () => {
  return (
    <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo & Brand */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center shadow-glow">
              <Code2 className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                CodeLearn
              </h1>
              <p className="text-xs text-muted-foreground">Interactive Programming Platform</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Button variant="ghost" size="sm" className="gap-2">
              <Code2 className="w-4 h-4" />
              Editor
            </Button>
            <Button variant="ghost" size="sm" className="gap-2">
              <BookOpen className="w-4 h-4" />
              Tutorials
            </Button>
            <Button variant="ghost" size="sm" className="gap-2">
              <Trophy className="w-4 h-4" />
              Challenges
            </Button>
          </nav>

          {/* User Actions */}
          <div className="flex items-center gap-3">
            <Badge variant="outline" className="bg-accent/10 border-accent/30 text-accent">
              Pro Plan
            </Badge>
            <Button variant="ghost" size="sm">
              <Settings className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="sm" className="gap-2">
              <User className="w-4 h-4" />
              Profile
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};