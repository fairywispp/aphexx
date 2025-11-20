import { useParams, Link, Navigate } from "react-router-dom";
import { locations, isOpenNow } from "@/data/locations";
import { Button } from "@/components/ui/button";
import { ExternalLink, FileText, Clock, DollarSign, Tag, ChevronLeft } from "lucide-react";

export default function LocationDetail() {
  const { id } = useParams();
  const location = locations.find((loc) => loc.id === id);

  if (!location) {
    return (
      <div className="container px-4 py-16 text-center">
        <h1 className="mb-4 text-2xl font-bold">Location Not Found</h1>
        <Link to="/">
          <Button>Back to Home</Button>
        </Link>
      </div>
    );
  }

  // Redirect cafés, restaurants, and food trucks to the restaurant detail page
  if (location.category === "Cafés" || location.category === "Restaurants" || location.category === "Food Trucks") {
    return <Navigate to={`/restaurant/${id}`} replace />;
  }

  const isOpen = isOpenNow(location.hours);
  
  // Determine back link based on category
  const getCategoryLink = () => {
    const category = location.category.toLowerCase();
    if (category.includes('restaurant') || category.includes('grill')) return '/category/restaurants';
    if (category.includes('café') || category.includes('cafe') || category.includes('coffee')) return '/category/cafés';
    if (category.includes('convenience')) return '/category/convenience-stores';
    return '/#browse-categories';
  };
  
  const getCategoryName = () => {
    const category = location.category.toLowerCase();
    if (category.includes('restaurant') || category.includes('grill')) return 'Restaurants';
    if (category.includes('café') || category.includes('cafe') || category.includes('coffee')) return 'Cafés';
    if (category.includes('convenience')) return 'Convenience Stores';
    return 'Home';
  };

  return (
    <div className="min-h-screen">
      <div className="container px-4 py-8">
        <Link to={getCategoryLink()} className="mb-6 inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-smooth">
          <ChevronLeft className="h-4 w-4" />
          Back to {getCategoryName()}
        </Link>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Image */}
          <div className="relative aspect-video overflow-hidden rounded-lg">
            <img
              src={location.image}
              alt={location.name}
              className="h-full w-full object-cover"
            />
            <div
              className={`absolute right-4 top-4 flex items-center gap-2 rounded-full px-3 py-1.5 text-sm font-medium ${
                isOpen ? "bg-success text-success-foreground" : "bg-destructive text-destructive-foreground"
              }`}
            >
              <div className="h-2 w-2 rounded-full bg-white" />
              {isOpen ? "Open Now" : "Closed"}
            </div>
          </div>

          {/* Details */}
          <div>
            <div className="mb-6">
              <p className="mb-2 text-sm font-medium text-accent">{location.category}</p>
              <h1 className="mb-4 text-4xl font-bold">{location.name}</h1>
              {location.description && (
                <p className="text-lg text-muted-foreground">{location.description}</p>
              )}
            </div>

            {/* Info Cards */}
            <div className="mb-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-lg bg-card p-4 shadow-card">
                <div className="mb-2 flex items-center gap-2 text-muted-foreground">
                  <DollarSign className="h-4 w-4" />
                  <span className="text-sm font-medium">Price Range</span>
                </div>
                <p className="text-lg font-semibold">{location.priceRange}</p>
              </div>

              <div className="rounded-lg bg-card p-4 shadow-card">
                <div className="mb-2 flex items-center gap-2 text-muted-foreground">
                  <Tag className="h-4 w-4" />
                  <span className="text-sm font-medium">Categories</span>
                </div>
                <div className="flex flex-wrap gap-1">
                  {location.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-accent/10 px-2 py-0.5 text-xs font-medium text-accent-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="mb-6 rounded-lg bg-card p-4 shadow-card">
              <div className="mb-3 flex items-center gap-2 text-muted-foreground">
                <Clock className="h-4 w-4" />
                <span className="text-sm font-medium">Hours</span>
              </div>
              <div className="space-y-2">
                {Object.entries(location.hours).map(([day, hours]) => (
                  <div key={day} className="flex justify-between text-sm">
                    <span className="font-medium">{day}</span>
                    <span className="text-muted-foreground">{hours}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-3">
              {location.links.menu && (
                <Button variant="outline" asChild className="flex-1">
                  <a href={location.links.menu} target="_blank" rel="noopener noreferrer" className="gap-2">
                    <FileText className="h-4 w-4" />
                    View Menu
                  </a>
                </Button>
              )}
              {location.links.order && (
                <Button asChild className="flex-1 bg-accent hover:bg-accent/90 text-accent-foreground">
                  <a href={location.links.order} target="_blank" rel="noopener noreferrer" className="gap-2">
                    <ExternalLink className="h-4 w-4" />
                    Order Now
                  </a>
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
