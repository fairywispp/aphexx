import { ArrowLeft, ZoomIn, ZoomOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState } from "react";
import campusMapImage from "@/assets/campus-map.jpg";

export default function CampusMap() {
  const [zoom, setZoom] = useState(1);

  const handleZoomIn = () => {
    setZoom((prev) => Math.min(prev + 0.2, 3));
  };

  const handleZoomOut = () => {
    setZoom((prev) => Math.max(prev - 0.2, 0.5));
  };

  return (
    <div className="min-h-screen">
      <div className="container px-4 py-8">
        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
          <div>
            <Link to="/resources">
              <Button variant="ghost" size="sm" className="gap-2 mb-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Resources
              </Button>
            </Link>
            <h1 className="text-3xl font-bold">Campus Map</h1>
            <p className="text-muted-foreground">
              Find microwave locations across campus
            </p>
          </div>
          
          {/* Zoom Controls */}
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={handleZoomOut}
              disabled={zoom <= 0.5}
            >
              <ZoomOut className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={handleZoomIn}
              disabled={zoom >= 3}
            >
              <ZoomIn className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Map Container */}
        <div className="rounded-lg border-2 border-primary/20 bg-card p-4 shadow-lg overflow-auto">
          <div className="relative w-full h-[600px] overflow-auto">
            <img
              src={campusMapImage}
              alt="CSULB Campus Map showing microwave locations"
              className="w-full h-auto transition-transform duration-300"
              style={{ transform: `scale(${zoom})`, transformOrigin: "top left" }}
            />
          </div>
        </div>

        {/* Legend */}
        <div className="mt-6 rounded-lg border bg-card p-6">
          <h2 className="mb-4 text-lg font-semibold">Legend</h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex items-center gap-3">
              <div className="h-4 w-4 rounded-full bg-primary" />
              <span className="text-sm">Microwave Locations</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="h-4 w-4 rounded-full bg-blue-500" />
              <span className="text-sm">Dining Halls</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="h-4 w-4 rounded-full bg-green-500" />
              <span className="text-sm">Restaurants</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
