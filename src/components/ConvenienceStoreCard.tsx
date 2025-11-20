import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, ExternalLink } from "lucide-react";

interface ConvenienceStoreCardProps {
  name: string;
  image: string;
  mapLink: string;
  tags: string[];
}

export function ConvenienceStoreCard({ name, image, mapLink, tags }: ConvenienceStoreCardProps) {
  return (
    <Card className="overflow-hidden border border-border shadow-sm hover:shadow-2xl hover:border-accent/50 transition-all duration-300 hover:-translate-y-1">
      <CardContent className="p-0">
        {/* Image */}
        <div className="relative h-48 overflow-hidden">
          <img 
            src={image} 
            alt={name}
            className="h-full w-full object-cover transition-transform hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40" />
        </div>

        {/* Content */}
        <div className="p-5 space-y-4">
          <div>
            <h3 className="text-xl font-bold mb-3">{name}</h3>
            
            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <Badge 
                  key={tag} 
                  variant="secondary"
                  className="text-xs font-medium"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          {/* Directions Button */}
          <Button 
            variant="default"
            size="sm" 
            className="w-full gap-2"
            asChild
          >
            <a href={mapLink} target="_blank" rel="noopener noreferrer">
              <MapPin className="h-4 w-4" />
              Get Directions
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
