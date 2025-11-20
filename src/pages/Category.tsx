import { useParams, Link, useNavigate } from "react-router-dom";
import { locations, isOpenNow } from "@/data/locations";
import { microwaveLocations } from "@/data/microwaveLocations";
import { convenienceStores } from "@/data/convenienceStores";
import { LocationCard } from "@/components/LocationCard";
import { ConvenienceStoreCard } from "@/components/ConvenienceStoreCard";
import { Button } from "@/components/ui/button";
import { Filter, X, Calendar, MapPin, Clock, Search, TrendingUp, Truck, ExternalLink, DollarSign, CalendarDays, ArrowLeft, Utensils, Coffee, ShoppingBag, ChevronDown, ChevronUp, Zap } from "lucide-react";
import { cn } from "@/lib/utils";
import React, { useState, useMemo } from "react";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CampusMapWidget } from "@/components/CampusMapWidget";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import foodaIcon from "@/assets/apps/fooda-icon.png";
import grubhubIcon from "@/assets/apps/grubhub-icon.png";
import { 
  mockFoodTruckVendors, 
  mockFoodTruckEvents, 
  isVendorOpenNow,
  getTodaysEventsByLocation,
  CURRENT_TIME
} from "@/data/mockFoodTruckData";
import { vendingVendors, vendingMapInfo } from "@/data/vendingMachines";
import { format, addDays, isSameDay } from "date-fns";

export default function Category() {
  const { category } = useParams();
  const navigate = useNavigate();

  // Scroll to top on category change
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [category]);
  
  const [priceFilter, setPriceFilter] = useState<string[]>([]);
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [subcategoryFilter, setSubcategoryFilter] = useState<string>("all");
  const [cuisineFilter, setCuisineFilter] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDate, setSelectedDate] = useState<Date>(CURRENT_TIME);
  
  const categoryName = category?.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase()) || "";
  const isFoodTrucks = categoryName === "Food Trucks";
  const isVendingMachines = categoryName === "Vending Machines";
  const isMicrowaves = categoryName === "Microwaves";
  const isConvenienceStores = categoryName === "Convenience Stores";
  const isRestaurants = categoryName === "Restaurants";
  const isCafes = categoryName === "Cafés";

  // Generate week dates starting from today
  const weekDates = useMemo(() => {
    const dates = [];
    const today = CURRENT_TIME;
    for (let i = 0; i < 14; i++) {
      dates.push(addDays(today, i));
    }
    return dates;
  }, []);

  // Filter events by selected date
  const filteredEvents = useMemo(() => {
    const dateStr = format(selectedDate, 'yyyy-MM-dd');
    return mockFoodTruckEvents.filter(event => event.date === dateStr);
  }, [selectedDate]);

  // Map events to vendor details with location
  const eventVendors = useMemo(() => {
    return filteredEvents.map(event => {
      const vendor = mockFoodTruckVendors.find(v => v.vendor_id === event.vendor_id);
      if (!vendor) return null;
      
      const isToday = isSameDay(selectedDate, CURRENT_TIME);
      const isOpen = isToday && isVendorOpenNow(vendor.vendor_id);
      
      return {
        ...vendor,
        eventLocation: event.location_name,
        eventTime: `${event.start_time} - ${event.end_time}`,
        eventDate: event.date,
        isOpen
      };
    }).filter(Boolean);
  }, [filteredEvents, selectedDate]);

  // Get all locations for this category
  const categoryLocations = locations.filter(
    (location) => location.category.toLowerCase() === categoryName.toLowerCase()
  );

  const clearFilters = () => {
    setPriceFilter([]);
    setStatusFilter("all");
    setSubcategoryFilter("all");
    setCuisineFilter("all");
    setSearchQuery("");
  };

  // Vending Machines Page
  if (isVendingMachines) {
    return (
      <div className="min-h-screen bg-background">
        {/* Hero Header */}
        <div className="relative overflow-hidden border-b border-border">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-primary/5 to-background" />
          <div className="container relative px-4 py-10">
            <Link to="/#browse-categories" className="inline-flex mb-6">
              <Button 
                variant="ghost" 
                size="sm" 
                className="gap-2"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Home
              </Button>
            </Link>
            <div className="space-y-6">
              <div className="space-y-3">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                  Campus Vending Machines
                </h1>
                <p className="text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed">
                  Convenient 24/7 access to fresh food, snacks, and drinks across campus.
                </p>
              </div>

              {/* Campus Map Widget */}
              <div className="max-w-2xl">
                <Card className="overflow-hidden border-2 border-border hover:border-accent transition-all">
                  <div 
                    className="relative h-[280px] overflow-hidden cursor-pointer"
                    onClick={() => window.open(vendingMapInfo.mapLink, '_blank')}
                  >
                    <img
                      src={vendingMapInfo.image}
                      alt="Campus Vending Map"
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60 pointer-events-none" />
                  </div>
                  <CardContent className="bg-gradient-to-b from-card/95 to-card p-4 backdrop-blur-sm border-t border-border/50">
                    <div className="flex items-start gap-3 mb-3">
                      <MapPin className="mt-0.5 h-5 w-5 text-accent flex-shrink-0" />
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-foreground">Campus Vending Locations</p>
                        <p className="text-sm text-muted-foreground">Find vending machines across campus</p>
                      </div>
                    </div>
                    <Button
                      variant="default"
                      size="sm"
                      onClick={() => window.open(vendingMapInfo.mapLink, '_blank')}
                      className="w-full gap-2 bg-accent hover:bg-accent/90"
                    >
                      <ExternalLink className="h-4 w-4" />
                      View Interactive Map
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>

        {/* Vendors Section */}
        <div className="container px-4 py-10">
          <div className="space-y-8">
            {vendingVendors.map((vendor) => (
              <Card key={vendor.id} className="overflow-hidden border-2 border-border hover:shadow-xl transition-all">
                <CardContent className="p-0">
                  {/* Vendor Header */}
                  <div className="bg-gradient-to-r from-accent/10 to-primary/5 border-b border-border p-6">
                    <div className="flex items-start gap-4">
                      <img 
                        src={vendor.icon} 
                        alt={vendor.name}
                        className="h-20 w-20 rounded-xl object-cover border-2 border-border bg-background shadow-lg"
                      />
                      <div className="flex-1">
                        <h2 className="text-2xl font-bold mb-2">{vendor.name}</h2>
                        <p className="text-muted-foreground mb-3">{vendor.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {vendor.website && (
                            <Button 
                              variant="outline" 
                              size="sm" 
                              asChild
                              className="gap-2"
                            >
                              <a href={vendor.website} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="h-3 w-3" />
                                Visit Website
                              </a>
                            </Button>
                          )}
                          {vendor.studentDeals && (
                            <Badge variant="secondary" className="gap-2">
                              <TrendingUp className="h-3 w-3" />
                              {vendor.studentDeals}
                            </Badge>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Locations Grid */}
                  <div className="p-6">
                    <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                      <MapPin className="h-5 w-5 text-accent" />
                      Locations on Campus
                    </h3>
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                      {vendor.locations.map((location) => (
                        <Card key={location.id} className="border-border hover:border-accent transition-all">
                          <CardContent className="p-4 space-y-4">
                            <div>
                              <h4 className="font-semibold text-lg mb-2">{location.name}</h4>
                              <div className="space-y-2 mb-3">
                                {location.directionText && (
                                  <div className="flex items-start gap-2 text-sm">
                                    <MapPin className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                                    <span className="text-muted-foreground">{location.directionText}</span>
                                  </div>
                                )}
                                <div className="flex items-center gap-2 text-sm">
                                  <Clock className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                                  <span className="font-medium text-foreground">{location.hours}</span>
                                </div>
                              </div>
                            </div>

                            {/* Campus Map Preview */}
                            {location.campusMapLink && (
                              <div className="rounded-lg overflow-hidden border border-border">
                                <div 
                                  className="relative h-32 cursor-pointer bg-muted"
                                  onClick={() => window.open(location.campusMapLink, '_blank')}
                                >
                                  <img
                                    src={vendingMapInfo.image}
                                    alt="Campus Map"
                                    className="h-full w-full object-cover"
                                  />
                                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40" />
                                  <div className="absolute bottom-2 left-2 right-2">
                                    <p className="text-xs text-white font-medium drop-shadow-lg">Campus Location</p>
                                  </div>
                                </div>
                              </div>
                            )}

                            <div className="grid gap-2">
                              {location.campusMapLink && (
                                <Button 
                                  variant="outline"
                                  size="sm" 
                                  className="w-full gap-2"
                                  asChild
                                >
                                  <a href={location.campusMapLink} target="_blank" rel="noopener noreferrer">
                                    <MapPin className="h-3 w-3" />
                                    Get Directions
                                  </a>
                                </Button>
                              )}
                              <Button 
                                size="sm" 
                                className="w-full gap-2"
                                asChild
                              >
                                <a href={location.menuLink} target="_blank" rel="noopener noreferrer">
                                  <ExternalLink className="h-3 w-3" />
                                  {vendor.id === 'farmers-fridge' || vendor.id === 'mycha' ? 'View Inventory' : 'View Menu'}
                                </a>
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>

                  {/* Popular Items Section */}
                  {vendor.popularItems && vendor.popularItems.length > 0 && (
                    <div className="px-6 pb-6 border-t border-border pt-6">
                      <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                        <TrendingUp className="h-5 w-5 text-accent" />
                        Popular Items
                      </h3>
                      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {vendor.popularItems.map((item) => (
                          <Card key={item.id} className="border-border hover:border-accent transition-all overflow-hidden">
                            <CardContent className="p-4">
                              <div className="space-y-3">
                                <div>
                                  <h4 className="font-semibold text-base mb-1">{item.name}</h4>
                                  <p className="text-sm text-muted-foreground line-clamp-2">
                                    {item.description}
                                  </p>
                                </div>
                                {item.calories && (
                                  <p className="text-xs text-muted-foreground">{item.calories}</p>
                                )}
                                <div className="flex items-center justify-between pt-2 border-t border-border">
                                  <span className="text-lg font-bold text-accent">{item.price}</span>
                                  <Badge variant="secondary" className="text-xs">Popular</Badge>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Microwaves Category
  if (isMicrowaves) {
    return (
      <div className="min-h-screen bg-background">
        <div className="border-b border-border bg-gradient-to-br from-card to-accent/5">
          <div className="container px-4 py-12">
            <Link to="/#browse-categories" className="inline-flex">
              <Button 
                variant="ghost" 
                size="sm" 
                className="mb-4 gap-2"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Home
              </Button>
            </Link>
            <div className="flex items-center gap-4 mb-4">
              <div className="p-4 rounded-2xl bg-gradient-to-br from-accent/20 to-accent/10 shadow-lg">
                <Zap className="h-10 w-10 text-accent" />
              </div>
              <div>
                <h1 className="text-5xl font-bold">Microwaves</h1>
                <p className="text-lg text-muted-foreground">Heat your food at convenient locations across campus</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="container px-4 py-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {microwaveLocations.map((location) => (
              <CampusMapWidget
                key={location.id}
                locationName={location.name}
                campusLocation={location.location}
                imageSrc={location.image}
                directionsLink={location.mapLink}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Convenience Stores Category
  if (isConvenienceStores) {
    return (
      <div className="min-h-screen bg-background">
        {/* Header with Icon */}
        <div className="border-b border-border bg-gradient-to-br from-card to-accent/5">
          <div className="container px-4 py-12">
            <Link to="/#browse-categories" className="inline-flex">
              <Button 
                variant="ghost" 
                size="sm" 
                className="mb-4 gap-2"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Home
              </Button>
            </Link>
            <div className="flex items-center gap-4 mb-4">
              <div className="p-4 rounded-2xl bg-gradient-to-br from-accent/20 to-accent/10 shadow-lg">
                <ShoppingBag className="h-10 w-10 text-accent" />
              </div>
              <div>
                <h1 className="text-5xl font-bold">Convenience Stores</h1>
                <p className="text-lg text-muted-foreground mt-2">Quick bites, snacks, and campus essentials</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="container px-4 py-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {convenienceStores.map((store) => (
              <ConvenienceStoreCard
                key={store.id}
                name={store.name}
                image={store.image}
                mapLink={store.mapLink}
                tags={store.tags}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Regular categories (Restaurants & Cafes)
  if (!isFoodTrucks) {
    const filteredLocations = categoryLocations.filter((location) => {
      if (priceFilter.length > 0) {
        const hasMatch = priceFilter.some(range => {
          if (range === "low") return location.priceRange.includes("$5") || location.priceRange.includes("$8") || location.priceRange.includes("$4");
          if (range === "medium") return location.priceRange.includes("$10") || location.priceRange.includes("$12") || location.priceRange.includes("$15");
          if (range === "high") return location.priceRange.includes("$20") || location.priceRange.includes("$25") || location.priceRange.includes("$30");
          return false;
        });
        if (!hasMatch) return false;
      }
      if (statusFilter === "open" && !isOpenNow(location.hours)) return false;
      if (statusFilter === "closed" && isOpenNow(location.hours)) return false;
      if (subcategoryFilter !== "all" && location.subcategory !== subcategoryFilter) return false;
      return true;
    });

    const categoryIcon = isRestaurants ? Utensils : Coffee;
    const categoryDescription = isRestaurants ? "Full-service campus dining" : "Coffee, snacks, and quick bites";

    return (
      <div className="min-h-screen bg-background">
        {/* Header with Icon */}
        <div className="border-b border-border bg-gradient-to-br from-card to-accent/5">
          <div className="container px-4 py-12">
            <Link to="/#browse-categories" className="inline-flex">
              <Button 
                variant="ghost" 
                size="sm" 
                className="gap-2"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Home
              </Button>
            </Link>
            <div className="flex items-center gap-4">
              <div className="p-4 rounded-2xl bg-gradient-to-br from-accent/20 to-accent/10 shadow-lg">
                {isRestaurants ? (
                  <Utensils className="h-10 w-10 text-accent" />
                ) : (
                  <Coffee className="h-10 w-10 text-accent" />
                )}
              </div>
              <div>
                <h1 className="text-5xl font-bold">{categoryName}</h1>
                <p className="text-lg text-muted-foreground mt-2">{isRestaurants ? "Full-service campus dining" : "Coffee, snacks, and quick bites"}</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="container px-4 py-8">
          {/* Locations Grid */}
          {filteredLocations.length === 0 ? (
            <div className="text-center py-16 rounded-lg border border-dashed border-border bg-muted/50">
              <p className="text-muted-foreground text-lg mb-4">No locations match your filters</p>
              <Button
                variant="outline"
                onClick={clearFilters}
              >
                Clear Filters
              </Button>
            </div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredLocations.map((location) => (
                <LocationCard key={location.id} location={location} />
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }

  // Food Trucks Page 
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-accent/5 to-background py-12 border-b border-border">
        <div className="container px-4">
          <Link to="/#browse-categories" className="inline-flex">
            <Button 
              variant="ghost" 
              size="sm" 
              className="mb-4 gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Button>
          </Link>
          <div className="flex items-center gap-4 mb-6">
            <div className="p-4 rounded-2xl bg-gradient-to-br from-accent/20 to-accent/10 shadow-lg">
              <Truck className="h-10 w-10 text-accent" />
            </div>
            <div>
              <h1 className="text-5xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                Food Trucks
              </h1>
              <p className="text-lg text-muted-foreground mt-2">Rolling flavors across campus</p>
            </div>
          </div>
        </div>
      </div>

      {/* Weekly Calendar */}
      <section className="py-8 border-b border-border bg-card/50">
        <div className="container px-4">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-2">Rotating Vendors</h2>
              <p className="text-muted-foreground">Select a date to see which trucks are visiting</p>
            </div>
          </div>
          
          <div className="flex gap-3 overflow-x-auto pb-4 scrollbar-hide">
            {weekDates.map((date, index) => {
              const dateStr = format(date, 'yyyy-MM-dd');
              const eventsForDay = mockFoodTruckEvents.filter(e => e.date === dateStr);
              const isToday = isSameDay(date, CURRENT_TIME);
              const isSelected = isSameDay(selectedDate, date);
              
              return (
                <button
                  key={index}
                  onClick={() => setSelectedDate(date)}
                 className={`flex-shrink-0 flex flex-col items-center gap-2 py-5 px-8 min-w-[120px] relative rounded-xl transition-all ${
                    isToday 
                      ? 'bg-card border-[3px] border-green-500 shadow-lg shadow-green-500/20'
                      : isSelected 
                        ? 'bg-accent border-2 border-accent shadow-lg scale-105' 
                        : 'bg-card border-2 border-border hover:border-accent/50 hover:shadow-md'
                  }`}
                >
                  <div className={`text-xs font-semibold uppercase tracking-wider ${isToday ? 'text-foreground' : isSelected ? 'text-accent-foreground' : 'text-muted-foreground'}`}>
                    {format(date, 'EEE')}
                  </div>
                  <div className={`text-3xl font-bold ${isToday ? 'text-foreground' : isSelected ? 'text-accent-foreground' : 'text-foreground'}`}>
                    {format(date, 'd')}
                  </div>
                  <div className={`text-sm ${isToday ? 'text-foreground' : isSelected ? 'text-accent-foreground/80' : 'text-muted-foreground'}`}>
                    {format(date, 'MMM')}
                  </div>
                  {eventsForDay.length > 0 && (
                    <div className={`text-xs font-semibold px-3 py-1 rounded-full mt-1 ${
                      isToday
                        ? 'bg-green-500/20 text-white border border-green-500/50'
                        : isSelected 
                          ? 'bg-accent-foreground/20 text-accent-foreground' 
                          : 'bg-accent/10 text-accent'
                    }`}>
                      {eventsForDay.length} {eventsForDay.length === 1 ? 'truck' : 'trucks'}
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section className="py-12 bg-gradient-to-b from-background to-muted/20">
        <div className="container px-4">
          <div className="mb-10 flex items-center gap-3">
            <h2 className="text-3xl font-bold">
              {isSameDay(selectedDate, CURRENT_TIME)
                ? "Today's Schedule"
                : `Schedule for ${format(selectedDate, 'EEEE, MMMM d, yyyy')}`
              }
            </h2>
            {isSameDay(selectedDate, CURRENT_TIME) && (
              <span className="px-4 py-1.5 bg-success/10 text-success rounded-full text-sm font-bold flex items-center gap-2 border-2 border-success/30 shadow-sm">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75"></span>
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-success"></span>
                </span>
                LIVE NOW
              </span>
            )}
          </div>

          {eventVendors.length === 0 ? (
            <div className="text-center py-6 bg-card rounded-xl border-2 border-dashed border-border">
              <div className="max-w-sm mx-auto px-4">
                <Truck className="h-10 w-10 text-muted-foreground mx-auto mb-2" />
                <h3 className="text-base font-bold mb-1">No Trucks Scheduled</h3>
                <p className="text-xs text-muted-foreground">Check another day!</p>
              </div>
            </div>
          ) : (
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {eventVendors.map((vendor: any) => {
                if (!vendor) return null;
                
                return (
                  <Link
                    key={vendor.vendor_id}
                    to={`/food-truck/${vendor.vendor_id}`}
                    className="group relative overflow-hidden rounded-2xl bg-card border-2 border-border shadow-sm hover:shadow-2xl hover:border-accent/50 transition-all duration-300 hover:-translate-y-1"
                  >
                    {/* Image */}
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img
                        src={vendor.images.hero_photo}
                        alt={vendor.name}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0" />
                      
                      {/* Status Badge */}
                      <div className="absolute top-3 right-3">
                        <span 
                          className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-bold shadow-xl backdrop-blur-md ${
                            vendor.isOpen 
                              ? "bg-emerald-500 text-white" 
                              : "bg-gray-800/90 text-gray-300"
                          }`}
                        >
                          <span className="relative flex h-2 w-2">
                            {vendor.isOpen && (
                              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75"></span>
                            )}
                            <span className={`relative inline-flex h-2 w-2 rounded-full ${vendor.isOpen ? "bg-white" : "bg-gray-400"}`} />
                          </span>
                          {vendor.isOpen ? "OPEN" : "CLOSED"}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5 space-y-3">
                      <h3 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors line-clamp-1">
                        {vendor.name}
                      </h3>
                      
                      {/* Price & Cuisines */}
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-accent/10 text-accent border border-accent/20">
                          {vendor.price_range}
                        </span>
                        {vendor.cuisine && vendor.cuisine.slice(0, 2).map((tag: string, idx: number) => (
                          <span
                            key={idx}
                            className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-muted text-muted-foreground"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </section>
      
      {/* Dining Apps Section */}
      <section className="py-16 bg-card/50 border-t border-border">
        <div className="container px-4">
          <div className="mb-10 text-center space-y-3">
            <h2 className="text-4xl font-bold">Order Ahead with Dining Apps</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Skip the line and order from your favorite campus spots
            </p>
          </div>
          
          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide max-w-5xl mx-auto">
            {/* Grubhub */}
            <Card className="border-2 border-border hover:border-accent/50 transition-all hover:shadow-lg flex-shrink-0 w-64">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="h-20 w-20 rounded-2xl border-2 border-border overflow-hidden bg-background shadow-md">
                    <img 
                      src={grubhubIcon} 
                      alt="Grubhub" 
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Grubhub</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Order from campus restaurants with special student deals
                    </p>
                  </div>
                  <Button 
                    asChild 
                    className="w-full bg-accent hover:bg-accent/90 gap-2"
                  >
                    <a href="https://www.grubhub.com/about/campus" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4" />
                      Download App
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Fooda */}
            <Card className="border-2 border-border hover:border-accent/50 transition-all hover:shadow-lg flex-shrink-0 w-64">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="h-20 w-20 rounded-2xl border-2 border-border overflow-hidden bg-background shadow-md">
                    <img 
                      src={foodaIcon} 
                      alt="Fooda" 
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Fooda</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Pre-order from food trucks before they arrive on campus
                    </p>
                  </div>
                  <Button 
                    asChild 
                    className="w-full bg-accent hover:bg-accent/90 gap-2"
                  >
                    <a href="https://www.fooda.com/" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4" />
                      Download App
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Beach Bites */}
            <Card className="border-2 border-border hover:border-accent/50 transition-all hover:shadow-lg flex-shrink-0 w-64">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="h-20 w-20 rounded-2xl border-2 border-border bg-gradient-to-br from-accent/20 to-accent/10 flex items-center justify-center shadow-md">
                    <Coffee className="h-10 w-10 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Beach Bites</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Official CSULB dining app for meal plans and mobile ordering
                    </p>
                  </div>
                  <Button 
                    asChild 
                    className="w-full bg-accent hover:bg-accent/90 gap-2"
                  >
                    <a href="https://csulb.campusdish.com/en/MobileApps" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4" />
                      Download App
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}