import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { PlayCircle, Clock, BookOpen, ChevronRight, Star } from "lucide-react";

interface Tutorial {
  id: string;
  title: string;
  description: string;
  duration: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  progress: number;
  isNew?: boolean;
  rating: number;
}

const tutorials: Tutorial[] = [
  {
    id: "1",
    title: "JavaScript Fundamentals",
    description: "Learn the basics of JavaScript programming with variables, functions, and control flow.",
    duration: "45 min",
    difficulty: "Beginner",
    progress: 75,
    rating: 4.8
  },
  {
    id: "2", 
    title: "Debugging Techniques",
    description: "Master the art of finding and fixing bugs in your code using modern debugging tools.",
    duration: "30 min",
    difficulty: "Intermediate",
    progress: 0,
    isNew: true,
    rating: 4.9
  },
  {
    id: "3",
    title: "Algorithm Optimization",
    description: "Advanced techniques for writing efficient code and optimizing algorithm performance.",
    duration: "60 min", 
    difficulty: "Advanced",
    progress: 25,
    rating: 4.7
  }
];

export const TutorialSection = () => {
  const getDifficultyColor = (difficulty: Tutorial["difficulty"]) => {
    switch (difficulty) {
      case "Beginner": return "success";
      case "Intermediate": return "warning"; 
      case "Advanced": return "destructive";
      default: return "secondary";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Interactive Tutorials</h2>
          <p className="text-muted-foreground">Master programming concepts step by step</p>
        </div>
        <Button variant="outline" className="gap-2">
          <BookOpen className="w-4 h-4" />
          Browse All
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tutorials.map((tutorial) => (
          <Card key={tutorial.id} className="p-6 bg-gradient-card shadow-card hover:shadow-glow transition-all duration-300 group">
            <div className="space-y-4">
              {/* Header */}
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                      {tutorial.title}
                    </h3>
                    {tutorial.isNew && (
                      <Badge variant="info" className="text-xs">New</Badge>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground">{tutorial.description}</p>
                </div>
              </div>

              {/* Meta Info */}
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span>{tutorial.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-warning fill-current" />
                    <span className="text-muted-foreground">{tutorial.rating}</span>
                  </div>
                </div>
                <Badge variant={getDifficultyColor(tutorial.difficulty)}>
                  {tutorial.difficulty}
                </Badge>
              </div>

              {/* Progress */}
              {tutorial.progress > 0 && (
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Progress</span>
                    <span className="font-medium">{tutorial.progress}%</span>
                  </div>
                  <Progress value={tutorial.progress} className="h-2" />
                </div>
              )}

              {/* Action Button */}
              <Button 
                variant={tutorial.progress > 0 ? "outline" : "gradient"} 
                className="w-full gap-2 group-hover:bg-primary group-hover:text-primary-foreground transition-all"
              >
                <PlayCircle className="w-4 h-4" />
                {tutorial.progress > 0 ? "Continue" : "Start Tutorial"}
                <ChevronRight className="w-4 h-4 ml-auto group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};