import { Button } from '@/components/ui/button';
import { ExternalLink, MapPin } from 'lucide-react';
import campusMap from '@/assets/campus-map.jpg';

interface CampusMapWidgetProps {
  locationName: string;
  campusLocation: string;
  imageSrc?: string;
  directionsLink?: string;
}

export function CampusMapWidget({ locationName, campusLocation, imageSrc, directionsLink }: CampusMapWidgetProps) {
  const handleViewMap = () => {
    const mapLink = directionsLink || 'https://map.concept3d.com/?id=1314#!ct/41689,42539,42540,42541,42542,44590?s/';
    window.open(mapLink, '_blank');
  };

  return (
    <div className="overflow-hidden rounded-2xl bg-card shadow-elegant">
      <div 
        className="relative h-[280px] overflow-hidden cursor-pointer"
        onClick={handleViewMap}
      >
        <img
          src={imageSrc || campusMap}
          alt={locationName}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60 pointer-events-none" />
      </div>
      <div className="bg-gradient-to-b from-card/95 to-card p-4 backdrop-blur-sm border-t border-border/50">
        <div className="flex items-start gap-3 mb-3">
          <MapPin className="mt-0.5 h-5 w-5 text-accent flex-shrink-0" />
          <div className="flex-1 min-w-0">
            <p className="font-semibold text-foreground truncate">{locationName}</p>
            <p className="text-sm text-muted-foreground">{campusLocation}</p>
          </div>
        </div>
        <Button
          variant="default"
          size="sm"
          onClick={handleViewMap}
          className="w-full gap-2 bg-accent hover:bg-accent/90"
        >
          <ExternalLink className="h-4 w-4" />
          View Campus Map
        </Button>
      </div>
    </div>
  );
}
