import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Shield, AlertTriangle, CheckCircle2, Clock } from "lucide-react";

interface ThreatCardProps {
  title: string;
  count: number;
  icon: "shield" | "warning" | "check" | "clock";
  variant: "threat" | "safe" | "warning" | "scanning";
  className?: string;
}

const iconMap = {
  shield: Shield,
  warning: AlertTriangle,
  check: CheckCircle2,
  clock: Clock,
};

const variantStyles = {
  threat: "border-destructive/20 bg-destructive/5 shadow-glow-threat",
  safe: "border-success/20 bg-success/5 shadow-glow-safe",
  warning: "border-warning/20 bg-warning/5",
  scanning: "border-accent/20 bg-accent/5 shadow-glow-accent",
};

const iconColors = {
  threat: "text-destructive",
  safe: "text-success",
  warning: "text-warning",
  scanning: "text-accent",
};

export function ThreatCard({ title, count, icon, variant, className }: ThreatCardProps) {
  const Icon = iconMap[icon];

  return (
    <Card className={cn(variantStyles[variant], className)}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <Icon className={cn("h-4 w-4", iconColors[variant])} />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{count.toLocaleString()}</div>
        <Badge variant="outline" className={cn("mt-2", iconColors[variant])}>
          {variant === "scanning" ? "Real-time" : "24h"}
        </Badge>
      </CardContent>
    </Card>
  );
}