import { locations, isOpenNow } from "@/data/locations";
import { LocationCard } from "@/components/LocationCard";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

export function OpenNowCarousel() {
  const openLocations = locations.filter((location) => isOpenNow(location.hours));

  if (openLocations.length === 0) {
    return (
      <div className="rounded-lg border border-dashed border-border bg-muted/50 p-8 text-center">
        <p className="text-muted-foreground">No locations are currently open. Check back later!</p>
      </div>
    );
  }

  return (
    <ScrollArea className="w-full">
      <div className="flex gap-4 pb-4">
        {openLocations.map((location) => (
          <div key={location.id} className="w-80 flex-shrink-0">
            <LocationCard location={location} />
          </div>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
}
