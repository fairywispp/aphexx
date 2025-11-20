import { Link } from "react-router-dom";
import { ArrowLeft, ShieldCheck, Users, Clock, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function DiningPolicies() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container px-4 py-8">
        <Link to="/dining-halls">
          <Button variant="ghost" className="mb-6 gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Dining Halls
          </Button>
        </Link>

        <h1 className="mb-8 text-4xl font-bold">Policies & Procedures</h1>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-lg border border-border bg-card p-6">
            <div className="mb-4 flex items-center gap-3">
              <ShieldCheck className="h-6 w-6 text-accent" />
              <h2 className="text-2xl font-semibold">General Rules</h2>
            </div>
            <ul className="space-y-3 text-muted-foreground">
              <li>• Valid meal plan or guest pass required for entry</li>
              <li>• No outside food or beverages permitted</li>
              <li>• Shirt and shoes must be worn at all times</li>
              <li>• Clean up your dining area before leaving</li>
              <li>• Respect staff and fellow diners</li>
              <li>• No removal of dishes or utensils from dining halls</li>
            </ul>
          </div>

          <div className="rounded-lg border border-border bg-card p-6">
            <div className="mb-4 flex items-center gap-3">
              <Users className="h-6 w-6 text-accent" />
              <h2 className="text-2xl font-semibold">Guest Policy</h2>
            </div>
            <ul className="space-y-3 text-muted-foreground">
              <li>• Students may bring up to 2 guests per visit</li>
              <li>• Guest passes must be purchased in advance</li>
              <li>• Children under 5 eat free with a paying adult</li>
              <li>• Guest pass prices: Breakfast $8, Lunch $12, Dinner $15</li>
              <li>• All guests must check in at the front desk</li>
            </ul>
          </div>

          <div className="rounded-lg border border-border bg-card p-6">
            <div className="mb-4 flex items-center gap-3">
              <Clock className="h-6 w-6 text-accent" />
              <h2 className="text-2xl font-semibold">Timing & Access</h2>
            </div>
            <ul className="space-y-3 text-muted-foreground">
              <li>• Meal periods close 15 minutes before posted end time</li>
              <li>• Late entry not permitted after closing</li>
              <li>• Take-out containers available for $2</li>
              <li>• Unlimited servings during meal period</li>
              <li>• Re-entry not permitted once you leave</li>
            </ul>
          </div>

          <div className="rounded-lg border border-border bg-card p-6">
            <div className="mb-4 flex items-center gap-3">
              <AlertCircle className="h-6 w-6 text-accent" />
              <h2 className="text-2xl font-semibold">Health & Safety</h2>
            </div>
            <ul className="space-y-3 text-muted-foreground">
              <li>• Allergen information available at all stations</li>
              <li>• Notify staff immediately of any food safety concerns</li>
              <li>• Hand sanitizer stations located throughout halls</li>
              <li>• Report any spills or hazards to staff</li>
              <li>• Follow posted capacity limits during busy periods</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
