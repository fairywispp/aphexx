import { Link } from "react-router-dom";
import { ArrowLeft, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function DiningHours() {
  const diningHalls = [
    {
      name: "Parkside Dining Hall",
      hours: {
        "Monday - Friday": {
          breakfast: "7:00 AM - 10:30 AM",
          lunch: "11:00 AM - 2:30 PM",
          dinner: "5:00 PM - 8:30 PM",
        },
        "Saturday - Sunday": {
          brunch: "9:00 AM - 2:00 PM",
          dinner: "5:00 PM - 8:00 PM",
        },
      },
    },
    {
      name: "Hillside Dining Hall",
      hours: {
        "Monday - Friday": {
          breakfast: "7:30 AM - 10:00 AM",
          lunch: "11:30 AM - 2:00 PM",
          dinner: "5:30 PM - 8:00 PM",
        },
        "Saturday - Sunday": {
          brunch: "9:30 AM - 1:30 PM",
          dinner: "5:30 PM - 7:30 PM",
        },
      },
    },
    {
      name: "Beachside Dining Hall",
      hours: {
        "Monday - Friday": {
          breakfast: "7:00 AM - 10:30 AM",
          lunch: "11:00 AM - 3:00 PM",
          dinner: "5:00 PM - 9:00 PM",
        },
        "Saturday - Sunday": {
          brunch: "8:00 AM - 2:00 PM",
          dinner: "5:00 PM - 8:30 PM",
        },
      },
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

        <h1 className="mb-8 text-4xl font-bold">Dining Hours</h1>

        <div className="grid gap-6">
          {diningHalls.map((hall) => (
            <div key={hall.name} className="rounded-lg border border-border bg-card p-6">
              <div className="mb-6 flex items-center gap-3">
                <Clock className="h-6 w-6 text-accent" />
                <h2 className="text-2xl font-semibold">{hall.name}</h2>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                {Object.entries(hall.hours).map(([days, meals]) => (
                  <div key={days}>
                    <h3 className="mb-4 text-lg font-semibold text-accent">{days}</h3>
                    <div className="space-y-3">
                      {Object.entries(meals).map(([meal, time]) => (
                        <div key={meal} className="flex items-center justify-between">
                          <span className="capitalize text-muted-foreground">{meal}</span>
                          <span className="font-medium">{time}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-lg border border-border bg-accent/10 p-6">
          <h3 className="mb-3 text-lg font-semibold">Holiday & Break Hours</h3>
          <p className="text-muted-foreground">
            Dining hall hours are subject to change during university breaks and holidays. 
            Please check back here or contact dining services for updated schedules during these periods.
          </p>
        </div>
      </div>
    </div>
  );
}
