import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { X, ExternalLink, ArrowLeft } from "lucide-react";
import { format } from "date-fns";
import { allergens, menuCycles, quickLinks, alwaysAvailable, weekToCycleMap, MenuItem as MenuItemType } from "@/data/diningMenus";
import { cn } from "@/lib/utils";

import parksideImg from "@/assets/dining/parkside.jpg";
import hillsideImg from "@/assets/dining/hillside.jpg";
import beachsideImg from "@/assets/dining/beachside.jpg";

// Dining hall images
const hallImages: Record<string, string> = {
  Parkside: parksideImg,
  Hillside: hillsideImg,
  Beachside: beachsideImg,
};

export default function DiningHalls() {
  const [selectedMeal, setSelectedMeal] = useState<string>("all");
  const [selectedHall, setSelectedHall] = useState<string>("Parkside");
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const [scrollY, setScrollY] = useState(0);
  const [selectedCycle, setSelectedCycle] = useState<number>(3);
  const [isAllergenOpen, setIsAllergenOpen] = useState(false);
  const [menuCycleOpen, setMenuCycleOpen] = useState(false);
  const [mealOpen, setMealOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleFilter = (allergen: string) => {
    setActiveFilters((prev) =>
      prev.includes(allergen) ? prev.filter((a) => a !== allergen) : [...prev, allergen]
    );
  };

  const clearFilters = () => setActiveFilters([]);

  const filterItems = (items: MenuItemType[]) => {
    if (activeFilters.length === 0) return items;
    return items.filter((item) => !item.allergens.some((a) => activeFilters.includes(a)));
  };

  // Get current menu data based on selected cycle
  const currentCycle = menuCycles.find(c => c.cycleNumber === selectedCycle) || menuCycles[0];
  
  // Get all days for the selected week
  const allDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

  const renderMenuSection = (sections: any[], mealType: string) => {
    return sections.map((section, idx) => {
      const filteredItems = filterItems(section.items);
      if (filteredItems.length === 0) return null;

      return (
        <div key={`${mealType}-${idx}`} className="mb-10">
          <h3 className="mb-4 text-xl font-bold uppercase tracking-wide">{section.title}</h3>
          <div className="space-y-3">
            {filteredItems.map((item, itemIdx) => (
              <div
                key={itemIdx}
                className="group relative rounded-md bg-card p-4 transition-smooth hover:bg-accent/5"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="flex-1 font-medium">{item.name}</span>
                  <div className="flex flex-wrap gap-1.5">
                    {item.allergens.map((code) => {
                      const allergen = allergens.find((a) => a.code === code);
                      return (
                        <span
                          key={code}
                          className="flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold text-white"
                          style={{ backgroundColor: allergen?.color }}
                          title={allergen?.name}
                        >
                          {code}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    });
  };

  const renderDayMenu = (day: string) => {
    const dayMenu = currentCycle?.days?.[day]?.[selectedHall];
    if (!dayMenu) return null;

    const renderMeal = (mealName: string, sections: any[]) => {
      if (selectedMeal !== "all" && selectedMeal !== mealName) return null;
      
      return (
        <div className="mb-8">
          <h3 className="mb-4 text-2xl font-bold text-accent capitalize">{mealName}</h3>
          {renderMenuSection(sections, mealName)}
        </div>
      );
    };

    // Render Always Available section - shows once per day
    const renderAlwaysAvailable = () => {
      if (selectedMeal === "all") {
        // When "all" is selected, show common items across all meals
        return (
          <div className="mt-4 rounded-xl border-2 border-border bg-card/95 p-6">
            <h2 className="mb-6 text-3xl font-bold border-b border-border pb-3">Always Available</h2>
            
            <div className="space-y-6">
              {/* Common items across all meals */}
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-bold mb-3 text-yellow-600 dark:text-yellow-400 uppercase tracking-wide">
                    Fruit
                  </h4>
                  <div className="space-y-2">
                    <div className="rounded-md bg-card p-4 border border-border">
                      <span className="font-medium">Fresh Fruit</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-bold mb-3 text-yellow-600 dark:text-yellow-400 uppercase tracking-wide">
                    Beverages
                  </h4>
                  <div className="space-y-2">
                    {["Fruit Juice", "Milk", "Non-Dairy Milk", "Soft Drinks", "Flavored Water", "Sparkling Water"].map((item, idx) => (
                      <div key={idx} className="rounded-md bg-card p-4 border border-border">
                        <span className="font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-bold mb-3 text-yellow-600 dark:text-yellow-400 uppercase tracking-wide">
                    Stations
                  </h4>
                  <div className="space-y-2">
                    {["Salad Bar", "Deli Bar", "Cereal Bar"].map((item, idx) => (
                      <div key={idx} className="rounded-md bg-card p-4 border border-border">
                        <span className="font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-bold mb-3 text-yellow-600 dark:text-yellow-400 uppercase tracking-wide">
                    Breakfast Staples
                  </h4>
                  <div className="space-y-2">
                    {["Scrambled Eggs", "Oatmeal", "Waffle Bar", "Breakfast Pastries"].map((item, idx) => (
                      <div key={idx} className="rounded-md bg-card p-4 border border-border">
                        <span className="font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-bold mb-3 text-yellow-600 dark:text-yellow-400 uppercase tracking-wide">
                    Desserts
                  </h4>
                  <div className="space-y-2">
                    {["Desserts", "Novelty Ice Creams"].map((item, idx) => (
                      <div key={idx} className="rounded-md bg-card p-4 border border-border">
                        <span className="font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      } else {
        // When specific meal is selected, show that meal's always available items
        const mealData = alwaysAvailable[selectedMeal as keyof typeof alwaysAvailable];
        if (!mealData) return null;

        return (
          <div className="mt-4 rounded-xl border-2 border-border bg-card/95 p-6">
            <h2 className="mb-6 text-3xl font-bold border-b border-border pb-3">Always Available</h2>
            
            <div className="space-y-4">
              {Object.entries(mealData).map(([category, items]) => (
                <div key={category}>
                  <h4 className="text-sm font-bold mb-3 text-yellow-600 dark:text-yellow-400 uppercase tracking-wide">
                    {category === 'staples' ? (selectedMeal === 'breakfast' ? 'Breakfast Items' : 'Staples') : category}
                  </h4>
                  <div className="space-y-2">
                    {items.map((item: string, idx: number) => (
                      <div key={idx} className="rounded-md bg-card p-4 border border-border">
                        <span className="font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      }
    };

    return (
      <div className="mb-10 space-y-4">
        <div className="rounded-xl border-2 border-border bg-card/50 p-6">
          <h2 className="mb-6 text-3xl font-bold border-b border-border pb-3">{day}</h2>
          {renderMeal("breakfast", dayMenu.breakfast)}
          {renderMeal("lunch", dayMenu.lunch)}
          {renderMeal("dinner", dayMenu.dinner)}
        </div>
        
        {renderAlwaysAvailable()}
      </div>
    );
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section with Parallax */}
      <div className="relative h-[40vh] overflow-hidden bg-gradient-to-br from-primary/20 via-background to-accent/10">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: `url(${hallImages[selectedHall]})`,
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/80" />
        <div className="container relative z-10 flex h-full flex-col justify-end px-4 pb-12">
          <Link to="/#browse-categories" className="inline-flex mb-4 w-fit">
            <Button 
              variant="ghost" 
              size="sm" 
              className="gap-2 text-foreground/80 hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Button>
          </Link>
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">Dining Halls</h1>
          <p className="text-lg text-muted-foreground">
            Explore menus from Parkside, Hillside, and Beachside
          </p>
        </div>
      </div>

      <div className="container px-4 py-8">
        <div className="mx-auto max-w-6xl">
          {/* Main Content */}
          <div className="space-y-6">
            {/* Dining Hall Tabs */}
            <Tabs value={selectedHall} onValueChange={setSelectedHall}>
              <TabsList className="grid w-full grid-cols-3 bg-muted/50 p-1">
                <TabsTrigger 
                  value="Parkside"
                  className="data-[state=active]:bg-accent data-[state=active]:text-accent-foreground"
                >
                  Parkside
                </TabsTrigger>
                <TabsTrigger 
                  value="Hillside"
                  className="data-[state=active]:bg-accent data-[state=active]:text-accent-foreground"
                >
                  Hillside
                </TabsTrigger>
                <TabsTrigger 
                  value="Beachside"
                  className="data-[state=active]:bg-accent data-[state=active]:text-accent-foreground"
                >
                  Beachside
                </TabsTrigger>
              </TabsList>
            </Tabs>

            {/* Allergen Filter */}
            <div className="relative">
              <button
                onClick={() => {
                  setIsAllergenOpen(!isAllergenOpen);
                  setMenuCycleOpen(false);
                  setMealOpen(false);
                }}
                className={cn(
                  "w-full px-6 py-3 rounded-xl transition-all text-sm font-semibold border-2",
                  isAllergenOpen || activeFilters.length > 0
                    ? "bg-slate-500/20 text-foreground border-slate-500/30 backdrop-blur-sm"
                    : "bg-card text-foreground border-border hover:border-accent/50"
                )}
              >
                Allergies {activeFilters.length > 0 && (
                  <span className="ml-1 px-2 py-0.5 bg-slate-500/20 rounded text-xs font-bold">
                    {activeFilters.length}
                  </span>
                )}
              </button>
              {isAllergenOpen && (
                <div className="absolute top-full mt-2 left-0 right-0 bg-card border-2 border-border rounded-xl shadow-xl p-4 z-10">
                  <p className="text-sm text-muted-foreground mb-3">Hide Items Containing:</p>
                  <div className="space-y-2 mb-3">
                    {allergens.map((allergen) => (
                      <button
                        key={allergen.code}
                        onClick={() => toggleFilter(allergen.code)}
                        className={cn(
                          "w-full px-4 py-2.5 rounded-lg text-left transition-all text-sm font-medium flex items-center gap-3",
                          activeFilters.includes(allergen.code)
                            ? "bg-slate-500/20 text-foreground border border-slate-500/30 backdrop-blur-sm"
                            : "bg-muted/50 text-foreground hover:bg-muted"
                        )}
                      >
                        <span
                          className="flex h-5 w-5 items-center justify-center rounded-full text-xs font-bold text-white flex-shrink-0"
                          style={{ backgroundColor: allergen.color }}
                        >
                          {allergen.code}
                        </span>
                        <span>{allergen.name}</span>
                      </button>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    {activeFilters.length > 0 && (
                      <button
                        onClick={clearFilters}
                        className="flex-1 px-4 py-1.5 rounded-lg bg-red-500/20 text-red-600 dark:text-red-400 font-medium hover:bg-red-500/30 transition-all backdrop-blur-sm"
                      >
                        Clear
                      </button>
                    )}
                    <button
                      onClick={() => setIsAllergenOpen(false)}
                      className="flex-1 px-4 py-1.5 rounded-lg bg-blue-500/20 text-blue-600 dark:text-blue-400 font-medium hover:bg-blue-500/30 transition-all backdrop-blur-sm"
                    >
                      Done
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Control Bar: Menu Cycle & Meal Selection */}
            <div className="flex gap-3">
              {/* Menu Cycle Filter */}
              <div className="relative flex-1">
                <button
                  onClick={() => {
                    setMenuCycleOpen(!menuCycleOpen);
                    setMealOpen(false);
                  }}
                  className={cn(
                    "w-full px-6 py-3 rounded-xl transition-all text-sm font-semibold border-2",
                    menuCycleOpen
                      ? "bg-slate-500/20 text-foreground border-slate-500/30 backdrop-blur-sm"
                      : "bg-card text-foreground border-border hover:border-accent/50"
                  )}
                >
                  Menu Cycle
                </button>
                {menuCycleOpen && (
                  <div className="absolute top-full mt-2 left-0 right-0 bg-card border-2 border-border rounded-xl shadow-xl p-4 z-10">
                    <div className="space-y-2 mb-3">
                      <button
                        onClick={() => setSelectedCycle(3)}
                        className={cn(
                          "w-full px-4 py-2.5 rounded-lg text-left transition-all text-sm font-medium",
                          selectedCycle === 3
                            ? "bg-slate-500/20 text-foreground border border-slate-500/30 backdrop-blur-sm"
                            : "bg-muted/50 text-foreground hover:bg-muted"
                        )}
                      >
                        Nov 17
                      </button>
                    </div>
                    <button
                      onClick={() => setMenuCycleOpen(false)}
                      className="w-full px-4 py-1.5 rounded-lg bg-blue-500/20 text-blue-600 dark:text-blue-400 font-medium hover:bg-blue-500/30 transition-all backdrop-blur-sm"
                    >
                      Done
                    </button>
                  </div>
                )}
              </div>

              {/* Meal Selection Filter */}
              <div className="relative flex-1">
                <button
                  onClick={() => {
                    setMealOpen(!mealOpen);
                    setMenuCycleOpen(false);
                  }}
                  className={cn(
                    "w-full px-6 py-3 rounded-xl transition-all text-sm font-semibold border-2",
                    mealOpen
                      ? "bg-slate-500/20 text-foreground border-slate-500/30 backdrop-blur-sm"
                      : "bg-card text-foreground border-border hover:border-accent/50"
                  )}
                >
                  Meal
                </button>
                {mealOpen && (
                  <div className="absolute top-full mt-2 left-0 right-0 bg-card border-2 border-border rounded-xl shadow-xl p-4 z-10">
                    <div className="space-y-2 mb-3">
                      <button
                        onClick={() => setSelectedMeal("all")}
                        className={cn(
                          "w-full px-4 py-2.5 rounded-lg text-left transition-all text-sm font-medium",
                          selectedMeal === "all"
                            ? "bg-slate-500/20 text-foreground border border-slate-500/30 backdrop-blur-sm"
                            : "bg-muted/50 text-foreground hover:bg-muted"
                        )}
                      >
                        All
                      </button>
                      <button
                        onClick={() => setSelectedMeal("breakfast")}
                        className={cn(
                          "w-full px-4 py-2.5 rounded-lg text-left transition-all text-sm font-medium",
                          selectedMeal === "breakfast"
                            ? "bg-slate-500/20 text-foreground border border-slate-500/30 backdrop-blur-sm"
                            : "bg-muted/50 text-foreground hover:bg-muted"
                        )}
                      >
                        Breakfast
                      </button>
                      <button
                        onClick={() => setSelectedMeal("lunch")}
                        className={cn(
                          "w-full px-4 py-2.5 rounded-lg text-left transition-all text-sm font-medium",
                          selectedMeal === "lunch"
                            ? "bg-slate-500/20 text-foreground border border-slate-500/30 backdrop-blur-sm"
                            : "bg-muted/50 text-foreground hover:bg-muted"
                        )}
                      >
                        Lunch
                      </button>
                      <button
                        onClick={() => setSelectedMeal("dinner")}
                        className={cn(
                          "w-full px-4 py-2.5 rounded-lg text-left transition-all text-sm font-medium",
                          selectedMeal === "dinner"
                            ? "bg-slate-500/20 text-foreground border border-slate-500/30 backdrop-blur-sm"
                            : "bg-muted/50 text-foreground hover:bg-muted"
                        )}
                      >
                        Dinner
                      </button>
                    </div>
                    <button
                      onClick={() => setMealOpen(false)}
                      className="w-full px-4 py-1.5 rounded-lg bg-blue-500/20 text-blue-600 dark:text-blue-400 font-medium hover:bg-blue-500/30 transition-all backdrop-blur-sm"
                    >
                      Done
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Menu Display */}
            <div className="space-y-6">
              {allDays.map(day => renderDayMenu(day))}
            </div>

            {/* Quick Links */}
            <div className="mt-16">
              <h2 className="mb-6 text-2xl font-bold">Quick Links</h2>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {quickLinks.map((link) => (
                  <Link
                    key={link.title}
                    to={link.link}
                    className="group relative overflow-hidden rounded-lg border border-border bg-card p-6 text-left transition-smooth hover:shadow-elevated"
                  >
                    <div className="mb-2 flex items-start justify-between">
                      <h3 className="text-lg font-semibold">{link.title}</h3>
                      <ExternalLink className="h-4 w-4 text-muted-foreground transition-smooth group-hover:text-accent" />
                    </div>
                    <p className="text-sm text-muted-foreground">{link.description}</p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}