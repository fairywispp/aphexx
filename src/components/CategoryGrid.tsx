import { Link } from "react-router-dom";
import { Utensils, Coffee, Truck, Home, SquareStack, ShoppingBag, Zap } from "lucide-react";
import { categories } from "@/data/locations";

const iconMap: { [key: string]: React.ElementType } = {
  utensils: Utensils,
  coffee: Coffee,
  truck: Truck,
  home: Home,
  "square-stack": SquareStack,
  "shopping-bag": ShoppingBag,
  zap: Zap,
};

const categoryDescriptions: { [key: string]: string } = {
  "Restaurants": "Full-service dining locations",
  "Cafés": "Coffee, snacks, and quick bites",
  "Food Trucks": "Rolling flavors across campus",
  "Dining Halls": "All-you-can-eat meal plans",
  "Vending Machines": "24/7 grab-and-go options",
  "Convenience Stores": "Snacks, drinks, and essentials",
  "Microwaves": "Heat your meals on campus",
};

export function CategoryGrid() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {categories.map((category) => {
        const Icon = iconMap[category.icon];
        const link = (category as any).link || `/category/${category.name.toLowerCase().replace(/\s+/g, "-")}`;
        const description = categoryDescriptions[category.name] || "";
        
        return (
          <Link
            key={category.name}
            to={link}
            className="group relative overflow-hidden rounded-2xl bg-card border border-border shadow-sm hover:shadow-2xl hover:border-accent/50 transition-all duration-300 hover:-translate-y-1"
          >
            <div className="p-6 flex items-start gap-4">
              <div className="flex-shrink-0 rounded-xl bg-accent/10 p-3 transition-smooth group-hover:bg-accent group-hover:scale-110">
                <Icon className="h-6 w-6 text-accent group-hover:text-white transition-smooth" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-lg mb-1 text-card-foreground">{category.name}</h3>
                <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
