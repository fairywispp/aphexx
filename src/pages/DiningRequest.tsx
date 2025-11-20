import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

export default function DiningRequest() {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Request Submitted",
      description: "We'll review your request and respond within 2-3 business days.",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container px-4 py-8">
        <Link to="/dining-halls">
          <Button variant="ghost" className="mb-6 gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Dining Halls
          </Button>
        </Link>

        <h1 className="mb-4 text-4xl font-bold">Dining Hall Request Form</h1>
        <p className="mb-8 text-lg text-muted-foreground">
          Submit feedback, suggestions, or special requests
        </p>

        <div className="mx-auto max-w-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="rounded-lg border border-border bg-card p-6">
              <h2 className="mb-6 text-xl font-semibold">Your Information</h2>
              
              <div className="space-y-4">
                <div>
                  <Label htmlFor="name">Full Name *</Label>
                  <Input id="name" required placeholder="John Doe" />
                </div>

                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input id="email" type="email" required placeholder="student@csulb.edu" />
                </div>

                <div>
                  <Label htmlFor="studentId">Student ID</Label>
                  <Input id="studentId" placeholder="123456789" />
                </div>
              </div>
            </div>

            <div className="rounded-lg border border-border bg-card p-6">
              <h2 className="mb-6 text-xl font-semibold">Request Details</h2>
              
              <div className="space-y-4">
                <div>
                  <Label htmlFor="diningHall">Dining Hall</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a dining hall" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="parkside">Parkside</SelectItem>
                      <SelectItem value="hillside">Hillside</SelectItem>
                      <SelectItem value="beachside">Beachside</SelectItem>
                      <SelectItem value="all">All Dining Halls</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="requestType">Request Type *</Label>
                  <Select required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select request type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="feedback">General Feedback</SelectItem>
                      <SelectItem value="menu">Menu Suggestion</SelectItem>
                      <SelectItem value="dietary">Dietary Accommodation</SelectItem>
                      <SelectItem value="complaint">Complaint</SelectItem>
                      <SelectItem value="compliment">Compliment</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    required
                    placeholder="Please provide details about your request..."
                    rows={6}
                  />
                </div>
              </div>
            </div>

            <Button type="submit" className="w-full" size="lg">
              Submit Request
            </Button>
          </form>

          <div className="mt-8 rounded-lg border border-border bg-accent/10 p-6">
            <h3 className="mb-3 text-lg font-semibold">Response Time</h3>
            <p className="text-muted-foreground">
              We review all requests within 2-3 business days. For urgent matters, 
              please contact Dining Services directly at (562) 985-5000.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
