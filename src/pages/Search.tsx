import { OpenNowCarousel } from "@/components/OpenNowCarousel";
import { CategoryGrid } from "@/components/CategoryGrid";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Coffee, Sandwich, Search } from "lucide-react";
import { useEffect, useState } from "react";
import homeImg from "@/assets/home.jpg"; 

export default function Home() {
  const location = useLocation();
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (location.hash === "#browse-categories") {
      const el = document.getElementById("browse-categories");
      el?.scrollIntoView({ behavior: "auto", block: "center" });
    }
  }, [location]);

  // Restored Search Engine Logic
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query)}`);
    }
  };
  
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

          {/* Restored Search Bar Engine + Golden UI */}
          <div className="w-full max-w-2xl mt-4">
            <form onSubmit={handleSearch} className="relative flex items-center w-full h-14 rounded-full bg-white dark:bg-slate-900 shadow-2xl overflow-hidden transition-all duration-500 hover:scale-[1.01]">
              <Search className="absolute left-5 h-5 w-5 text-gray-400" />
              <input 
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search dining locations, cuisine, or food items..."
                className="w-full h-full pl-12 pr-16 text-lg text-gray-900 dark:text-gray-100 placeholder:text-gray-500 dark:placeholder:text-gray-400 bg-transparent border-none outline-none transition-colors duration-500"
              />
              <button 
                type="submit"
                className="absolute right-1.5 top-1.5 bottom-1.5 aspect-square bg-[#E8B931] hover:bg-[#d4a72c] text-white rounded-full flex items-center justify-center transition-colors shadow-md"
              >
                <Search className="h-5 w-5" />
              </button>
            </form>
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
            <div className="group relative overflow-hidden rounded-lg bg-gradient-to-br from-accent/10 to-accent/5 border border-border shadow-card transition-smooth hover:shadow-elevated">
              <div className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="h-16 w-16 rounded-lg bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center shadow-lg overflow-hidden">
                    <svg viewBox="0 0 100 100" className="h-12 w-12">
                      <text x="50" y="70" fontSize="60" fontWeight="bold" fill="white" textAnchor="middle" fontFamily="system-ui, -apple-system, sans-serif">f</text>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1 text-foreground">Fooda</h3>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Rotating popup restaurants every weekday. Check today's vendor!
                </p>
                <Button variant="default" size="sm" className="w-full gap-2" asChild>
                  <a href="https://www.fooda.com" target="_blank" rel="noopener noreferrer">
                    Learn More
                  </a>
                </Button>
              </div>
            </div>

            {/* GrubHub */}
            <div className="group relative overflow-hidden rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 border border-border shadow-card transition-smooth hover:shadow-elevated">
              <div className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="h-16 w-16 rounded-lg bg-gradient-to-br from-red-600 to-orange-600 flex items-center justify-center shadow-lg overflow-hidden">
                    <svg viewBox="0 0 100 100" className="h-10 w-10">
                      <text x="15" y="55" fontSize="35" fontWeight="bold" fill="white" fontFamily="system-ui, -apple-system, sans-serif">GH</text>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1 text-foreground">GrubHub</h3>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Student deals and campus delivery. Order food from your favorite restaurants!
                </p>
                <Button variant="default" size="sm" className="w-full gap-2" asChild>
                  <a href="https://www.grubhub.com" target="_blank" rel="noopener noreferrer">
                    Learn More
                  </a>
                </Button>
              </div>
            </div>

            {/* Outpost Grill Student Deal */}
            <div className="group relative overflow-hidden rounded-lg bg-gradient-to-br from-success/10 to-success/5 border border-border shadow-card transition-smooth hover:shadow-elevated">
              <div className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  {/* ID Card Icon */}
                  <div className="h-16 w-24 rounded-lg bg-card flex items-center justify-center border-2 border-border shadow-lg overflow-hidden">
                    <svg viewBox="0 0 160 100" className="h-full w-full">
                      <rect x="4" y="4" width="152" height="92" rx="10" fill="currentColor" className="text-muted/30" />
                      <circle cx="40" cy="50" r="18" fill="currentColor" className="text-muted/60" />
                      <rect x="70" y="30" width="70" height="10" rx="4" fill="currentColor" className="text-muted/60" />
                      <rect x="70" y="48" width="60" height="10" rx="4" fill="currentColor" className="text-muted/40" />
                      <rect x="70" y="66" width="50" height="10" rx="4" fill="currentColor" className="text-muted/40" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1 text-foreground">Student Tax Discount for Outpost</h3>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Show your student ID for tax off on all purchases
                </p>
                <Button variant="default" size="sm" className="w-full gap-2" asChild>
                  <Link to="/restaurant/outpost-grill">
                    View Outpost Grill
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
              © 2025 CsulbEats. All rights reserved.
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