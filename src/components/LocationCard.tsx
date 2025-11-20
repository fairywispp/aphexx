import { Location, isOpenNow, getNextOpeningTime } from "@/data/locations";
import { Button } from "@/components/ui/button";
import { ExternalLink, Menu } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

interface LocationCardProps {
  location: Location;
}

export function LocationCard({ location }: LocationCardProps) {
  const isOpen = isOpenNow(location.hours);
  const openingTime = getNextOpeningTime(location.hours);


  const detailLink = (location.category === "Restaurants" || location.category === "Food Trucks" || location.category === "Cafés")
    ? `/restaurant/${location.id}` 
    : `/location/${location.id}`;


  return (
    <div className="group relative overflow-hidden rounded-2xl bg-card border border-border shadow-sm hover:shadow-2xl hover:border-accent/50 transition-all duration-300 hover:-translate-y-1">
      {/* Image with Overlay - Clickable */}
      <Link to={detailLink} className="relative block aspect-[4/3] overflow-hidden">
        <img
          src={location.image}
          alt={location.name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/80" />
        
        {/* Status Badge - Top Right */}
        <div className="absolute top-3 right-3">
          <span 
            className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-bold shadow-xl backdrop-blur-md ${
              isOpen 
                ? "bg-emerald-500 text-white" 
                : "bg-gray-800/90 text-gray-300"
            }`}
          >
            <span className={`relative flex h-2 w-2`}>
              {isOpen && (
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75"></span>
              )}
              <span className={`relative inline-flex h-2 w-2 rounded-full ${isOpen ? "bg-white" : "bg-gray-400"}`} />
            </span>
            {isOpen ? "OPEN" : "CLOSED"}
          </span>
        </div>
      </Link>

      {/* Card Content */}
      <div className="p-5 space-y-3">
        {/* Title and Info */}
        <div>
          <h3 className="text-xl font-bold mb-2">{location.name}</h3>
          <p className="text-sm font-semibold text-muted-foreground">
            {location.priceRange}
            {location.tags && location.tags.length > 0 && (
              <>
                <span className="mx-2">•</span>
                {location.tags[0]}
              </>
            )}
          </p>
        </div>

        {/* Tags */}
        {location.tags && location.tags.length > 1 && (
          <div className="flex flex-wrap gap-1.5">
            {location.tags.slice(1, 4).map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent border border-accent/20"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
