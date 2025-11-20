import { useState, useRef, useEffect } from "react";
import { Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { locations } from "@/data/locations";
import { mockFoodTruckVendors } from "@/data/mockFoodTruckData";

interface SearchBarProps {
  onSearch?: (query: string) => void;
  className?: string;
  placeholder?: string;
  compact?: boolean;
}

export function SearchBar({ onSearch, className = "", placeholder = "Search dining locations...", compact = false }: SearchBarProps) {
  const [query, setQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [suggestions, setSuggestions] = useState<any[]>([]);
  const navigate = useNavigate();
  const wrapperRef = useRef<HTMLDivElement>(null);

  // Close suggestions when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Update suggestions based on query
  useEffect(() => {
    if (query.trim().length > 0) {
      const searchLower = query.toLowerCase();

      // Build results: exclude Food Trucks from locations (to avoid duplicates)
      const nonFoodTruckLocations = locations
        .filter((loc) => loc.category.toLowerCase() !== 'food trucks')
        .map((loc) => ({ ...loc, type: 'location' }));

      // Only allow vetted food truck vendors and prefer accurate images from locations when available
      const allowedVendors = new Set([
        'crepes-bonaparte',
        'thai-mex-cocina',
        'wetzels-pretzels',
        'habit-grill',
        'nugget-grill-express'
      ]);

      const vendorItems = mockFoodTruckVendors
        .filter((vendor) => allowedVendors.has(vendor.vendor_id))
        .map((vendor) => {
          const locMatch = locations.find(
            (l) => l.id === vendor.vendor_id || l.name.toLowerCase() === vendor.name.toLowerCase()
          );
          return {
            id: vendor.vendor_id,
            name: vendor.name,
            category: vendor.category,
            image: locMatch?.image || vendor.images?.hero_photo,
            tags: vendor.cuisine,
            type: 'food-truck',
          };
        });

      // Combine and de-duplicate by name
      const combined = [...nonFoodTruckLocations, ...vendorItems];
      const uniqueByName = Array.from(
        combined.reduce((map, item) => {
          const key = item.name.toLowerCase();
          if (!map.has(key)) map.set(key, item);
          return map;
        }, new Map<string, any>()).values()
      );

      const filtered = uniqueByName
        .filter((item) => {
          return (
            item.name.toLowerCase().includes(searchLower) ||
            item.category?.toLowerCase().includes(searchLower) ||
            item.tags?.some((tag: string) => tag.toLowerCase().includes(searchLower))
          );
        })
        .slice(0, 5);

      setSuggestions(filtered);
      setShowSuggestions(true);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  }, [query]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      if (onSearch) {
        onSearch(query);
      } else {
        navigate(`/search?q=${encodeURIComponent(query)}`);
      }
      setShowSuggestions(false);
    }
  };

  const handleSuggestionClick = (item: any) => {
    if (item.type === 'food-truck') {
      navigate(`/food-truck/${item.id}`);
    } else {
      navigate(`/restaurant/${item.id}`);
    }
    setQuery("");
    setShowSuggestions(false);
  };

  const handleClear = () => {
    setQuery("");
    setSuggestions([]);
    setShowSuggestions(false);
    if (onSearch) {
      onSearch("");
    }
  };

  return (
    <div ref={wrapperRef} className={`relative ${className}`}>
      <form onSubmit={handleSearch} className="relative">
        <Search className={`absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground ${compact ? "h-4 w-4" : "h-5 w-5"}`} />
        <Input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => query.trim() && setShowSuggestions(true)}
          placeholder={placeholder}
          className={`${compact ? "h-10 pl-10 pr-10" : "h-14 pl-12 pr-12 text-lg"} w-full rounded-full border-2 bg-card shadow-card transition-smooth focus-visible:shadow-elevated`}
        />
        {query && (
          <Button
            type="button"
            variant="ghost"
            size="icon"
            onClick={handleClear}
            className={`absolute right-2 top-1/2 -translate-y-1/2 ${compact ? "h-6 w-6" : "h-8 w-8"} rounded-full`}
          >
            <X className={compact ? "h-4 w-4" : "h-5 w-5"} />
          </Button>
        )}
      </form>

      {/* Suggestions Dropdown */}
      {showSuggestions && suggestions.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-card border-2 border-border rounded-2xl shadow-elevated overflow-hidden z-50">
          {suggestions.map((item, index) => (
            <button
              key={`${item.type}-${item.id}`}
              onClick={() => handleSuggestionClick(item)}
              className="w-full flex items-center gap-4 p-4 hover:bg-accent/10 transition-smooth border-b border-border last:border-0 text-left"
            >
              {item.image && (
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-12 h-12 rounded-lg object-cover flex-shrink-0"
                />
              )}
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-foreground truncate">{item.name}</p>
                <p className="text-sm text-muted-foreground truncate">{item.category}</p>
              </div>
              <Search className="h-4 w-4 text-muted-foreground flex-shrink-0" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
