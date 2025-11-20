import { useParams, Link } from 'react-router-dom';
import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Clock, DollarSign, ExternalLink, Star, MapPin } from 'lucide-react';
import { mockFoodTruckVendors, mockFoodTruckEvents, CURRENT_TIME, isVendorOpenNow } from '@/data/mockFoodTruckData'; 
import { format } from 'date-fns';
import { Separator } from '@/components/ui/separator';

export default function FoodTruckDetail() {
  const { id } = useParams<{ id: string }>();
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [id]);
  
  const vendor = mockFoodTruckVendors.find(v => v.vendor_id === id);
  const todayStr = format(CURRENT_TIME, 'yyyy-MM-dd');
  const todayEvent = mockFoodTruckEvents.find(
    e => e.vendor_id === id && e.date === todayStr
  );

  if (!vendor) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Vendor Not Found</h1>
          <Link to="/category/food-trucks">
            <Button variant="outline">Back to Food Trucks</Button>
          </Link>
        </div>
      </div>
    );
  }

  const menuItems = vendor.menu;
  const hasMenu = menuItems && menuItems.length > 0;
  
  const isExternalMenuVendor = vendor.vendor_id === 'nugget-grill-express';

  const isOpen = isVendorOpenNow(id || '');
  const avgRating = 4.5;

  // Find the last known event location, or use a default
  const lastEvent = mockFoodTruckEvents
    .filter(e => e.vendor_id === id)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    [0];

  // Determine widget content based on whether an event is scheduled today
  let mapWidgetLocation = "Check Schedule";
  let mapWidgetTime = "No event scheduled today";

  if (todayEvent) {
    mapWidgetLocation = todayEvent.location_name;
    mapWidgetTime = `${todayEvent.start_time} - ${todayEvent.end_time}`;
  } else if (lastEvent) {
    // Fallback: If not today, show where they were last seen or a default spot
    mapWidgetLocation = lastEvent.location_name;
    mapWidgetTime = "Last seen location (check schedule for times)";
  }


  return (
    <div className="min-h-screen bg-background">
      {/* Hero Image */}
      <div className="relative h-[400px] w-full overflow-hidden">
        <img
          src={vendor.images.hero_photo}
          alt={vendor.name}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80" />
        
        <div className="absolute bottom-0 left-0 right-0 p-6 container mx-auto">
          <Link to="/category/food-trucks">
            <Button variant="ghost" size="sm" className="mb-4 text-white hover:bg-white/20">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Food Trucks
            </Button>
          </Link>
          
          <div className="text-white">
            <h1 className="mb-4 text-5xl font-bold">{vendor.name}</h1>
            <div className="flex flex-wrap items-center gap-4">
              <Badge 
                variant={isOpen ? "default" : "secondary"}
                className={`px-3 py-1 text-sm font-bold ${isOpen ? 'bg-success text-success-foreground' : ''}`}
              >
                {isOpen ? "Open Now" : "Closed"}
              </Badge>
              
              <div className="flex items-center gap-1">
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <span className="font-bold">{avgRating}</span>
              </div>
              
              <div className="flex items-center gap-1">
                <DollarSign className="h-5 w-5" />
                <span className="font-bold">{vendor.price_range}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 lg:grid-cols-[300px_1fr]">
          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Info */}
            <div className="rounded-2xl border bg-card p-6 shadow-elegant space-y-4">
              <h3 className="font-bold text-lg text-foreground">Quick Info</h3>
              <Separator />
              
              <div className="space-y-4">
                {/* Price Range */}
                <div className="flex items-start gap-3">
                
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10">
                    <DollarSign className="h-5 w-5 text-accent" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-muted-foreground">Price Range</p>
                    
                    <p className="font-bold text-foreground">{vendor.price_range}</p>
                  </div>
                </div>

                {/* Status */}
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10">
                    <Clock className="h-5 w-5 text-accent" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-muted-foreground">Status</p>
                    <Badge 
                      variant={isOpen ? "default" : "secondary"}
                      className={`mt-1 ${isOpen ? 'bg-success text-success-foreground' : ''}`}
                    >
                      {isOpen ? "Open Now" : "Closed"}
                    </Badge>
                  </div>
                </div>
              </div>
            </div>

            {/* Location/Map Widget  */}
            <div className="rounded-2xl border bg-card shadow-elegant overflow-hidden">
              <div className="p-4 space-y-2">
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-muted-foreground" />
                  <h4 className="font-bold text-foreground">{mapWidgetLocation}</h4>
                </div>
                <p className="text-sm text-muted-foreground ml-7">
                  {mapWidgetTime}
                </p>
              </div>
              <a 
                href="https://map.concept3d.com/?id=1314#!m/1105548?share" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block"
              >
                <Button 
                  variant="default" 
                  size="lg" 
                  className="w-full rounded-t-none gap-2 bg-accent hover:bg-accent/90"
                >
                  Get Directions
                  <ExternalLink className="h-4 w-4" />
                </Button>
              </a>
            </div>

            {/* Action Buttons (Visit Website) */}
            <div className="space-y-3">
              {vendor.contact.website_url && (
                <a href={vendor.contact.website_url} target="_blank" rel="noopener noreferrer" className="block">
                  <Button variant="default" size="lg" className="w-full gap-2 bg-accent hover:bg-accent/90">
                    <ExternalLink className="h-5 w-5" />
                    {vendor.vendor_id === 'wetzels-pretzels' ? 'Visit Wetzel\'s Pretzels Menu' : 'Visit Website'}
                  </Button>
                </a>
              )}
            </div>
          </div>

          {/* Main Content */}
          <div className="space-y-12">
            {/* About Section */}
            <section>
              <h2 className="mb-6 text-3xl font-bold">About</h2>
              <div className="space-y-6">
                <p className="text-lg leading-relaxed text-muted-foreground">
                  {vendor.about.description}
                </p>
                
                <div className="flex flex-wrap gap-3">
                  {vendor.cuisine.map((tag, idx) => (
                    <Badge key={idx} variant="secondary" className="px-4 py-2 text-sm font-bold">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </section>

            <Separator />

            {/* Menu Section */}
            <section>
              <div className="mb-8 flex items-center justify-between">
                <h2 className="text-3xl font-bold">Menu</h2>
                {isExternalMenuVendor && vendor.contact.website_url && (
                  <a href={vendor.contact.website_url} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm" className="gap-2">
                      <ExternalLink className="h-4 w-4" />
                      View Full Menu
                    </Button>
                  </a>
                )}
              </div>

              {/* Display Menu Items from vendor.menu array */}
              {hasMenu ? (
                <div className="space-y-6">
                  <div className="rounded-2xl border-2 bg-card/50 backdrop-blur-sm p-6">
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold mb-3 text-accent">{vendor.name} Menu</h3>
                      <div className="h-px bg-border"></div>
                    </div>
                    <div className="space-y-3">
                      {menuItems.map((item, idx) => (
                        <div
                          key={idx}
                          className="rounded-xl bg-card p-4 border border-border hover:bg-muted/30 transition-colors"
                        >
                          <div className="flex items-start justify-between gap-4">
                            <div className="flex-1">
                              <h5 className="font-semibold mb-1">{item.name}</h5>
                              <p className="text-sm text-muted-foreground leading-relaxed">
                                {item.description}
                              </p>
                            </div>
                            {/* Price formatting uses toFixed(2) for currency standard */}
                            <span className="px-3 py-1 rounded-full bg-amber-600 text-white text-sm font-bold whitespace-nowrap flex-shrink-0">
                              ${item.price.toFixed(2)}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                /* No Menu Available or External Link message */
                <div className="rounded-lg border bg-card p-8 text-center">
                  <p className="text-lg text-muted-foreground">
                    {vendor.contact.website_url ? `Menu details are available on the vendor's website.` : `Menu information coming soon.`}
                  </p>
                  {vendor.contact.website_url && (
                    <a href={vendor.contact.website_url} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block">
                      <Button variant="outline" className="gap-2">
                        <ExternalLink className="h-4 w-4" />
                        Visit Website
                      </Button>
                    </a>
                  )}
                </div>
              )}
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}