import { Link } from "react-router-dom";
import { ArrowLeft, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function MealPlans() {
  const plans = [
    {
      name: "Unlimited Plan",
      price: "$2,850/semester",
      features: [
        "Unlimited access to all dining halls",
        "Valid 7 days a week",
        "No meal swipe limits",
        "$100 dining dollars included",
        "Guest passes: 5 per semester",
      ],
      popular: true,
    },
    {
      name: "15 Meals/Week",
      price: "$2,400/semester",
      features: [
        "15 meal swipes per week",
        "Resets every Sunday",
        "Access to all dining halls",
        "$75 dining dollars included",
        "Guest passes: 3 per semester",
      ],
      popular: false,
    },
    {
      name: "10 Meals/Week",
      price: "$1,950/semester",
      features: [
        "10 meal swipes per week",
        "Resets every Sunday",
        "Access to all dining halls",
        "$50 dining dollars included",
        "Guest passes: 2 per semester",
      ],
      popular: false,
    },
    {
      name: "Block 50",
      price: "$650/semester",
      features: [
        "50 meal swipes per semester",
        "Never expires",
        "Maximum flexibility",
        "$25 dining dollars included",
        "No guest passes",
      ],
      popular: false,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container px-4 py-8">
        <Link to="/dining-halls">
          <Button variant="ghost" className="mb-6 gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Dining Halls
          </Button>
        </Link>

        <h1 className="mb-4 text-4xl font-bold">Meal Plans</h1>
        <p className="mb-8 text-lg text-muted-foreground">
          Choose the meal plan that fits your lifestyle and budget
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-lg border p-6 ${
                plan.popular
                  ? "border-accent bg-accent/5"
                  : "border-border bg-card"
              }`}
            >
              {plan.popular && (
                <span className="mb-4 inline-block rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
                  Most Popular
                </span>
              )}
              <h3 className="mb-2 text-xl font-bold">{plan.name}</h3>
              <p className="mb-6 text-2xl font-bold text-accent">{plan.price}</p>
              <ul className="space-y-3">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-success" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 space-y-6">
          <div className="rounded-lg border border-border bg-card p-6">
            <h2 className="mb-4 text-2xl font-semibold">Guest Meal Prices</h2>
            <div className="grid gap-4 md:grid-cols-3">
              <div>
                <p className="font-semibold">Breakfast</p>
                <p className="text-2xl font-bold text-accent">$8</p>
              </div>
              <div>
                <p className="font-semibold">Lunch</p>
                <p className="text-2xl font-bold text-accent">$12</p>
              </div>
              <div>
                <p className="font-semibold">Dinner</p>
                <p className="text-2xl font-bold text-accent">$15</p>
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-border bg-accent/10 p-6">
            <h3 className="mb-3 text-lg font-semibold">How to Sign Up</h3>
            <ol className="list-inside list-decimal space-y-2 text-muted-foreground">
              <li>Log in to your student portal</li>
              <li>Navigate to Housing & Dining Services</li>
              <li>Select your preferred meal plan</li>
              <li>Complete payment or apply financial aid</li>
              <li>Receive confirmation within 24-48 hours</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
