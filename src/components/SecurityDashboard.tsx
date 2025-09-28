import { ThreatCard } from "./ThreatCard";
import { EmailAnalysis } from "./EmailAnalysis";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Shield, Activity, Settings, RefreshCw } from "lucide-react";

const mockEmails = [
  {
    id: "1",
    subject: "Urgent: Verify Your Account Now",
    sender: "security@suspicious-bank.com",
    timestamp: "2 minutes ago",
    threatScore: 92,
    status: "threat" as const,
    flags: ["Spoofed Domain", "Urgency Tactics", "Credential Harvesting"]
  },
  {
    id: "2", 
    subject: "Weekly Newsletter - Security Updates",
    sender: "newsletter@cybersecurity.com",
    timestamp: "15 minutes ago", 
    threatScore: 8,
    status: "safe" as const,
    flags: []
  },
  {
    id: "3",
    subject: "Invoice #INV-2024-001",
    sender: "billing@company-typo.org",
    timestamp: "32 minutes ago",
    threatScore: 67,
    status: "suspicious" as const,
    flags: ["Domain Similarity", "Unexpected Attachment"]
  },
  {
    id: "4",
    subject: "Meeting reminder for tomorrow",
    sender: "colleague@company.com", 
    timestamp: "1 hour ago",
    threatScore: 15,
    status: "scanning" as const,
    flags: []
  }
];

export function SecurityDashboard() {
  return (
    <div className="min-h-screen bg-background p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-cyber-gradient shadow-glow-primary">
            <Shield className="h-6 w-6 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold bg-cyber-gradient bg-clip-text text-transparent">
              Email Fraud Detection
            </h1>
            <p className="text-muted-foreground">
              AI-powered email security monitoring
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Badge variant="outline" className="text-success">
            <Activity className="h-3 w-3 mr-1 animate-pulse-slow" />
            System Active
          </Badge>
          <Button variant="outline" size="sm">
            <RefreshCw className="h-4 w-4 mr-2" />
            Refresh
          </Button>
          <Button variant="outline" size="sm">
            <Settings className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Threat Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <ThreatCard
          title="Threats Blocked"
          count={247}
          icon="shield"
          variant="threat"
        />
        <ThreatCard
          title="Emails Scanned"
          count={12845}
          icon="check"
          variant="safe"
        />
        <ThreatCard
          title="Suspicious Flagged"
          count={89}
          icon="warning"
          variant="warning"
        />
        <ThreatCard
          title="Currently Scanning"
          count={23}
          icon="clock"
          variant="scanning"
        />
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Email Analysis List */}
        <div className="lg:col-span-2 space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Activity className="h-5 w-5 mr-2 text-accent" />
                Real-time Email Analysis
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {mockEmails.map((email) => (
                <EmailAnalysis key={email.id} email={email} />
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Security Metrics */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Detection Accuracy</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center space-y-2">
                <div className="text-4xl font-bold text-success">98.7%</div>
                <p className="text-sm text-muted-foreground">
                  False positive rate: 0.3%
                </p>
                <Badge variant="outline" className="text-success">
                  Above Target
                </Badge>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Threat Intelligence</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm">Phishing Campaigns</span>
                <Badge variant="destructive">12 Active</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Malware Signatures</span>
                <Badge variant="outline">Updated</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Domain Blacklist</span>
                <Badge variant="outline">24,891 entries</Badge>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>System Status</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm">AI Engine</span>
                <Badge variant="outline" className="text-success">Online</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Threat DB</span>
                <Badge variant="outline" className="text-success">Synced</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">API Status</span>
                <Badge variant="outline" className="text-success">Healthy</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}