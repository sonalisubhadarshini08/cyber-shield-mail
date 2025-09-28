import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
import { Mail, Shield, AlertTriangle, ExternalLink, Clock } from "lucide-react";

interface EmailAnalysisProps {
  email: {
    id: string;
    subject: string;
    sender: string;
    timestamp: string;
    threatScore: number;
    status: "safe" | "suspicious" | "threat" | "scanning";
    flags: string[];
  };
}

const statusConfig = {
  safe: {
    color: "text-success",
    bg: "bg-success/10",
    border: "border-success/20",
    label: "Safe",
  },
  suspicious: {
    color: "text-warning",
    bg: "bg-warning/10", 
    border: "border-warning/20",
    label: "Suspicious",
  },
  threat: {
    color: "text-destructive",
    bg: "bg-destructive/10",
    border: "border-destructive/20", 
    label: "Threat Detected",
  },
  scanning: {
    color: "text-accent",
    bg: "bg-accent/10",
    border: "border-accent/20",
    label: "Scanning...",
  },
};

export function EmailAnalysis({ email }: EmailAnalysisProps) {
  const config = statusConfig[email.status];
  
  return (
    <Card className={cn("transition-all duration-300", config.border, config.bg)}>
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-2">
            <Mail className="h-5 w-5 text-muted-foreground" />
            <div>
              <CardTitle className="text-lg">{email.subject}</CardTitle>
              <p className="text-sm text-muted-foreground">{email.sender}</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Badge variant="outline" className={config.color}>
              {email.status === "scanning" ? (
                <Clock className="h-3 w-3 mr-1 animate-pulse-slow" />
              ) : email.status === "threat" ? (
                <AlertTriangle className="h-3 w-3 mr-1" />
              ) : (
                <Shield className="h-3 w-3 mr-1" />
              )}
              {config.label}
            </Badge>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Threat Score</span>
            <span className={cn("font-medium", config.color)}>
              {email.threatScore}%
            </span>
          </div>
          <Progress 
            value={email.threatScore} 
            className="h-2"
          />
        </div>
        
        {email.flags.length > 0 && (
          <div className="space-y-2">
            <h4 className="text-sm font-medium">Detection Flags</h4>
            <div className="flex flex-wrap gap-1">
              {email.flags.map((flag, index) => (
                <Badge key={index} variant="secondary" className="text-xs">
                  {flag}
                </Badge>
              ))}
            </div>
          </div>
        )}
        
        <div className="flex justify-between items-center pt-2">
          <span className="text-xs text-muted-foreground">
            {email.timestamp}
          </span>
          <Button variant="outline" size="sm">
            <ExternalLink className="h-3 w-3 mr-1" />
            View Details
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}