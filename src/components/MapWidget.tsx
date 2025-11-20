import { Button } from '@/components/ui/button';
import { ExternalLink, MapPin } from 'lucide-react';
import campusMapImg from '@/assets/campus-map.jpg';

interface MapWidgetProps {
  locationName: string;
  address: string;
  imageSrc?: string;
  directionsLink?: string;
}

export function MapWidget({ locationName, address, imageSrc, directionsLink }: MapWidgetProps) {
  const handleGetDirections = () => {
    if (directionsLink) {
      window.open(directionsLink, '_blank');
    } else {
      // Fallback to campus map
      window.open('https://map.concept3d.com/?id=1314', '_blank');
    }
  };

  return (
    <div className="overflow-hidden rounded-2xl bg-card shadow-elegant">
      <div className="relative h-[280px] overflow-hidden">
        <img
          src={imageSrc || campusMapImg}
          alt={`Map showing ${locationName}`}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60 pointer-events-none" />
      </div>
      <div className="bg-gradient-to-b from-card/95 to-card p-4 backdrop-blur-sm border-t border-border/50">
        <div className="flex items-start gap-3 mb-3">
          <MapPin className="mt-0.5 h-5 w-5 text-accent flex-shrink-0" />
          <div className="flex-1 min-w-0">
            <p className="font-semibold text-foreground truncate">{locationName}</p>
            <p className="text-sm text-muted-foreground">{address}</p>
          </div>
        </div>
        <Button
          variant="default"
          size="sm"
          onClick={handleGetDirections}
          className="w-full gap-2 bg-accent hover:bg-accent/90"
        >
          <ExternalLink className="h-4 w-4" />
          Get Directions
        </Button>
      </div>
    </div>
  );
}
