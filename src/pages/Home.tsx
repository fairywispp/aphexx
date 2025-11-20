import { SearchBar } from "@/components/SearchBar";
import { CategoryGrid } from "@/components/CategoryGrid";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Coffee, Sandwich, Tag } from "lucide-react";
import { useEffect } from "react";
import homeImg from "@/assets/home.jpg";
import foodaIcon from "@/assets/apps/fooda-icon.png";
import grubhubIcon from "@/assets/apps/grubhub-icon.png"; 

export default function Home() {
  const location = useLocation();
  
  useEffect(() => {
    if (location.hash === "#browse-categories") {
      const el = document.getElementById("browse-categories");
      el?.scrollIntoView({ behavior: "auto", block: "center" });
    }
  }, [location]);
  
  return (
    <div className="min-h-screen bg-background transition-colors duration-500">
      {/* Hero Section with Image Overlay */}
      <section className="relative h-[600px] md:h-[700px] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={homeImg} 
            alt="Campus dining" 
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative container px-4 h-full flex flex-col justify-center items-center text-center gap-8">
          <div className="space-y-4 max-w-4xl">
            {/* Hero Text: Fixed Light Gray - No transitions */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-gray-100 drop-shadow-2xl">
              Everything You Need to Eat on Campus
            </h1>
            <p className="text-lg text-gray-200 md:text-xl max-w-2xl mx-auto font-medium drop-shadow-md">
              From food trucks to dining halls, find your next meal in seconds
            </p>
          </div>

          {/* SearchBar Component with Autocomplete */}
          <div className="w-full max-w-2xl mt-4">
            <SearchBar placeholder="Search dining locations, cuisine, or food items..." />
          </div>
        </div>
      </section>

      {/* Just Arrived Banner */}
      <section className="py-20 bg-gradient-to-br from-accent/5 via-primary/5 to-accent/5 border-y border-border/30 transition-colors duration-500">
        <div className="container px-4">
          <div className="text-center space-y-10 max-w-5xl mx-auto">
            <div className="space-y-4">
              {/* Title Text: Dark Blue in Light Mode, Light Gray in Dark Mode */}
              <h3 className="text-4xl md:text-5xl font-bold text-[#0f172a] dark:text-gray-200">
                New Flavors Rolling In
              </h3>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
              {/* The Coffee Bean & Tea Leaf Card */}
              <Card className="group border-2 border-border hover:border-purple-500/50 transition-all duration-300 shadow-card hover:shadow-elevated hover:-translate-y-1 bg-card">
                <CardContent className="p-8">
                  <div className="text-center space-y-4">
                    <div className="mx-auto h-16 w-16 rounded-2xl bg-gradient-to-br from-purple-500/20 to-indigo-500/20 flex items-center justify-center border border-purple-500/20 shadow-inner">
                      <Coffee className="h-8 w-8 text-purple-600 dark:text-purple-400 transition-colors duration-500" />
                    </div>
                    <h4 className="font-bold text-xl group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300 text-foreground">The Coffee Bean & Tea Leaf</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">Premium coffee, tea, and pastries</p>
                  </div>
                </CardContent>
              </Card>

              {/* Subway Card */}
              <Card className="group border-2 border-border hover:border-emerald-500/50 transition-all duration-300 shadow-card hover:shadow-elevated hover:-translate-y-1 bg-card">
                <CardContent className="p-8">
                  <div className="text-center space-y-4">
                    <div className="mx-auto h-16 w-16 rounded-2xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 flex items-center justify-center border border-green-500/20 shadow-inner">
                      <Sandwich className="h-8 w-8 text-emerald-600 dark:text-emerald-400 transition-colors duration-500" />
                    </div>
                    <h4 className="font-bold text-xl group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300 text-foreground">Subway</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">Fresh subs, salads, and wraps</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section id="browse-categories" className="py-12 bg-background transition-colors duration-500">
        <div className="container px-4">
          <h2 className="mb-6 text-2xl font-bold text-foreground transition-colors duration-500">Browse by Category</h2>
          <CategoryGrid />
        </div>
      </section>

      {/* Student Deals Section */}
      <section className="py-12 bg-background transition-colors duration-500">
        <div className="container px-4">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-foreground transition-colors duration-500">Student Deals</h2>
            <p className="text-muted-foreground">Exclusive discounts for students</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Fooda */}
            <div className="group relative overflow-hidden rounded-lg bg-gradient-to-br from-orange-500/10 to-red-500/10 border border-border shadow-card transition-smooth hover:shadow-elevated">
              <div className="p-6 flex flex-col h-full">
                <div className="flex items-start gap-4 mb-4">
                  <div className="h-16 w-16 rounded-xl flex items-center justify-center shadow-lg flex-shrink-0 overflow-hidden">
                    <img src={foodaIcon} alt="Fooda" className="h-full w-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground">Fooda</h3>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-4 flex-grow">
                  Rotating popup restaurants every weekday. Check today's vendor!
                </p>
                <Button className="w-full h-11 gap-2 bg-[#E8B931] hover:bg-[#d4a72c] text-black font-semibold" asChild>
                  <a href="https://www.fooda.com" target="_blank" rel="noopener noreferrer">
                    Download
                  </a>
                </Button>
              </div>
            </div>

            {/* GrubHub */}
            <div className="group relative overflow-hidden rounded-lg bg-gradient-to-br from-orange-500/10 to-red-500/10 border border-border shadow-card transition-smooth hover:shadow-elevated">
              <div className="p-6 flex flex-col h-full">
                <div className="flex items-start gap-4 mb-4">
                  <div className="h-16 w-16 rounded-xl flex items-center justify-center shadow-lg flex-shrink-0 overflow-hidden">
                    <img src={grubhubIcon} alt="GrubHub" className="h-full w-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground">GrubHub</h3>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-4 flex-grow">
                  Student deals and campus delivery. Order food from your favorite restaurants!
                </p>
                <Button className="w-full h-11 gap-2 bg-[#E8B931] hover:bg-[#d4a72c] text-black font-semibold" asChild>
                  <a href="https://www.grubhub.com" target="_blank" rel="noopener noreferrer">
                    Download
                  </a>
                </Button>
              </div>
            </div>

            {/* Outpost Grill Student Deal */}
            <div className="group relative overflow-hidden rounded-lg bg-gradient-to-br from-green-600/10 to-emerald-600/10 border border-border shadow-card transition-smooth hover:shadow-elevated">
              <div className="p-6 flex flex-col h-full">
                <div className="flex items-start gap-4 mb-4">
                  {/* Student Discount Icon */}
                  <div className="h-16 w-16 rounded-xl bg-gradient-to-br from-green-600 to-emerald-600 flex items-center justify-center shadow-lg flex-shrink-0">
                    <Tag className="h-8 w-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground">Student Tax Discount for Outpost</h3>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-4 flex-grow">
                  Show your student ID for tax off on all purchases
                </p>
                <Button className="w-full h-11 gap-2 bg-[#E8B931] hover:bg-[#d4a72c] text-black font-semibold" asChild>
                  <Link to="/restaurant/outpost-grill">
                    Directions
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 bg-background transition-colors duration-500">
        <div className="container px-4">
          <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
            <p className="text-sm text-muted-foreground">
              © 2025 Aphex. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link to="/resources" className="text-sm text-muted-foreground hover:text-foreground transition-smooth">
                Resources
              </Link>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-smooth">
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}