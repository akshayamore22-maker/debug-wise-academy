import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Shuffle, Target, Zap, BookOpen, Trophy, Clock } from "lucide-react";

interface Exercise {
  id: string;
  title: string;
  description: string;
  difficulty: "Easy" | "Medium" | "Hard";
  topic: string;
  estimatedTime: string;
  points: number;
}

const sampleExercises: Exercise[] = [
  {
    id: "1",
    title: "Two Sum Problem",
    description: "Given an array of integers, return indices of the two numbers such that they add up to a target.",
    difficulty: "Easy",
    topic: "Arrays",
    estimatedTime: "15 min",
    points: 100
  },
  {
    id: "2", 
    title: "Binary Search Tree Validation",
    description: "Determine if a given binary tree is a valid binary search tree.",
    difficulty: "Medium",
    topic: "Trees",
    estimatedTime: "30 min",
    points: 250
  },
  {
    id: "3",
    title: "Merge K Sorted Lists",
    description: "Merge k sorted linked lists and return it as one sorted list.",
    difficulty: "Hard",
    topic: "Linked Lists",
    estimatedTime: "45 min",
    points: 500
  }
];

export const ExerciseGenerator = () => {
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>("all");
  const [selectedTopic, setSelectedTopic] = useState<string>("all");
  const [currentExercise, setCurrentExercise] = useState<Exercise | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const generateExercise = () => {
    setIsGenerating(true);
    // Simulate API call to generate exercise
    setTimeout(() => {
      const randomExercise = sampleExercises[Math.floor(Math.random() * sampleExercises.length)];
      setCurrentExercise(randomExercise);
      setIsGenerating(false);
    }, 1000);
  };

  const getDifficultyColor = (difficulty: Exercise["difficulty"]) => {
    switch (difficulty) {
      case "Easy": return "success";
      case "Medium": return "warning";
      case "Hard": return "destructive";
      default: return "secondary";
    }
  };

  return (
    <div className="space-y-6">
      {/* Header & Controls */}
      <div className="space-y-4">
        <div>
          <h2 className="text-2xl font-bold">Exercise Generator</h2>
          <p className="text-muted-foreground">Generate personalized coding challenges based on your preferences</p>
        </div>

        <div className="flex flex-wrap gap-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Difficulty</label>
            <Select value={selectedDifficulty} onValueChange={setSelectedDifficulty}>
              <SelectTrigger className="w-40">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Levels</SelectItem>
                <SelectItem value="easy">Easy</SelectItem>
                <SelectItem value="medium">Medium</SelectItem>
                <SelectItem value="hard">Hard</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Topic</label>
            <Select value={selectedTopic} onValueChange={setSelectedTopic}>
              <SelectTrigger className="w-48">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Topics</SelectItem>
                <SelectItem value="arrays">Arrays & Strings</SelectItem>
                <SelectItem value="trees">Trees & Graphs</SelectItem>
                <SelectItem value="algorithms">Algorithms</SelectItem>
                <SelectItem value="data-structures">Data Structures</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-end">
            <Button 
              variant="gradient" 
              onClick={generateExercise}
              disabled={isGenerating}
              className="gap-2"
            >
              <Shuffle className="w-4 h-4" />
              {isGenerating ? "Generating..." : "Generate Exercise"}
            </Button>
          </div>
        </div>
      </div>

      {/* Generated Exercise */}
      {currentExercise && (
        <Card className="p-6 bg-gradient-card shadow-card">
          <div className="space-y-4">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-xl font-semibold">{currentExercise.title}</h3>
                  <Badge variant={getDifficultyColor(currentExercise.difficulty)}>
                    {currentExercise.difficulty}
                  </Badge>
                  <Badge variant="outline">{currentExercise.topic}</Badge>
                </div>
                <p className="text-muted-foreground">{currentExercise.description}</p>
              </div>
            </div>

            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>Est. {currentExercise.estimatedTime}</span>
              </div>
              <div className="flex items-center gap-1">
                <Trophy className="w-4 h-4" />
                <span>{currentExercise.points} points</span>
              </div>
              <div className="flex items-center gap-1">
                <Target className="w-4 h-4" />
                <span>Algorithm Practice</span>
              </div>
            </div>

            <div className="flex gap-3 pt-2">
              <Button variant="gradient" className="gap-2">
                <BookOpen className="w-4 h-4" />
                Start Exercise
              </Button>
              <Button variant="outline" className="gap-2">
                <Zap className="w-4 h-4" />
                Quick Practice
              </Button>
              <Button variant="ghost" onClick={generateExercise}>
                <Shuffle className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </Card>
      )}

      {/* Exercise Library Preview */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Popular Exercises</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {sampleExercises.slice(0, 2).map((exercise) => (
            <Card key={exercise.id} className="p-4 bg-card hover:bg-secondary/50 transition-colors cursor-pointer">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="font-medium">{exercise.title}</h4>
                  <Badge variant={getDifficultyColor(exercise.difficulty)} className="text-xs">
                    {exercise.difficulty}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground line-clamp-2">{exercise.description}</p>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>{exercise.estimatedTime}</span>
                  <span>{exercise.points} pts</span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};