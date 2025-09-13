import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, Save, RotateCcw, AlertTriangle, CheckCircle, Info } from "lucide-react";

interface CodeError {
  line: number;
  message: string;
  type: "error" | "warning" | "info";
}

interface CodeEditorProps {
  initialCode?: string;
  language?: string;
  onCodeChange?: (code: string) => void;
}

export const CodeEditor = ({ 
  initialCode = "// Welcome to CodeLearn IDE\nfunction greetUser(name) {\n  console.log('Hello, ' + name + '!');\n  return name;\n}\n\ngreetUser('CodeLearner');", 
  language = "javascript",
  onCodeChange 
}: CodeEditorProps) => {
  const [code, setCode] = useState(initialCode);
  const [isRunning, setIsRunning] = useState(false);
  const [output, setOutput] = useState("");
  
  // Simulated error detection
  const [errors] = useState<CodeError[]>([
    { line: 2, message: "Consider using template literals for better readability", type: "info" },
    { line: 7, message: "Function call result not used", type: "warning" }
  ]);

  const handleCodeChange = (newCode: string) => {
    setCode(newCode);
    onCodeChange?.(newCode);
  };

  const runCode = () => {
    setIsRunning(true);
    // Simulate code execution
    setTimeout(() => {
      setOutput("Hello, CodeLearner!\n> Execution completed successfully");
      setIsRunning(false);
    }, 1000);
  };

  const resetCode = () => {
    setCode(initialCode);
    setOutput("");
  };

  const getErrorIcon = (type: CodeError["type"]) => {
    switch (type) {
      case "error": return <AlertTriangle className="w-4 h-4 text-destructive" />;
      case "warning": return <AlertTriangle className="w-4 h-4 text-warning" />;
      case "info": return <Info className="w-4 h-4 text-info" />;
    }
  };

  const getErrorBadgeVariant = (type: CodeError["type"]) => {
    switch (type) {
      case "error": return "destructive";
      case "warning": return "warning";
      case "info": return "info";
      default: return "secondary";
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-full">
      {/* Code Editor */}
      <div className="lg:col-span-2 space-y-4">
        <Card className="p-4 bg-gradient-card shadow-card">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="bg-primary/10 border-primary/30">
                {language}
              </Badge>
              <span className="text-sm text-muted-foreground">main.js</span>
            </div>
            <div className="flex gap-2">
              <Button size="sm" variant="ghost" onClick={resetCode}>
                <RotateCcw className="w-4 h-4" />
              </Button>
              <Button size="sm" variant="outline">
                <Save className="w-4 h-4" />
                Save
              </Button>
              <Button 
                size="sm" 
                variant="gradient" 
                onClick={runCode}
                disabled={isRunning}
              >
                <Play className="w-4 h-4" />
                {isRunning ? "Running..." : "Run"}
              </Button>
            </div>
          </div>
          
          <textarea
            value={code}
            onChange={(e) => handleCodeChange(e.target.value)}
            className="w-full h-80 bg-editor-bg border border-border rounded-lg p-4 font-mono text-sm text-code-variable resize-none focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Start coding..."
            spellCheck={false}
          />
        </Card>

        {/* Output Console */}
        <Card className="p-4 bg-gradient-card shadow-card">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-3 h-3 bg-accent rounded-full"></div>
            <span className="text-sm font-medium">Console Output</span>
          </div>
          <div className="bg-editor-bg border border-border rounded-lg p-4 h-32 font-mono text-sm overflow-y-auto">
            <pre className="text-code-variable whitespace-pre-wrap">
              {output || "// Output will appear here when you run your code"}
            </pre>
          </div>
        </Card>
      </div>

      {/* Analysis Panel */}
      <div className="space-y-4">
        {/* Code Analysis */}
        <Card className="p-4 bg-gradient-card shadow-card">
          <div className="flex items-center gap-2 mb-4">
            <CheckCircle className="w-5 h-5 text-accent" />
            <h3 className="font-semibold">Code Analysis</h3>
          </div>
          
          <div className="space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Lines of Code</span>
              <span className="font-mono">{code.split('\n').length}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Functions</span>
              <span className="font-mono">1</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Complexity</span>
              <Badge variant="success">Low</Badge>
            </div>
          </div>
        </Card>

        {/* Issues & Suggestions */}
        <Card className="p-4 bg-gradient-card shadow-card">
          <div className="flex items-center gap-2 mb-4">
            <AlertTriangle className="w-5 h-5 text-warning" />
            <h3 className="font-semibold">Issues & Suggestions</h3>
          </div>
          
          <div className="space-y-3">
            {errors.map((error, index) => (
              <div key={index} className="p-3 bg-secondary/50 rounded-lg border border-border">
                <div className="flex items-start gap-2">
                  {getErrorIcon(error.type)}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <Badge variant={getErrorBadgeVariant(error.type)} className="text-xs">
                        Line {error.line}
                      </Badge>
                    </div>
                    <p className="text-sm text-foreground">{error.message}</p>
                  </div>
                </div>
              </div>
            ))}
            
            {errors.length === 0 && (
              <div className="text-center py-6 text-muted-foreground">
                <CheckCircle className="w-8 h-8 mx-auto mb-2 text-accent" />
                <p className="text-sm">No issues found! Great code!</p>
              </div>
            )}
          </div>
        </Card>
      </div>
    </div>
  );
};