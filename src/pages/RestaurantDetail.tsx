import { useParams, Link } from "react-router-dom";
import { locations, isOpenNow, getNextOpeningTime } from "@/data/locations";
import { shakeSmartMenu } from "@/data/shakeSmartMenu";
import { nuggetGrillMenu } from "@/data/nuggetGrillMenu";
import { caffeineLabMenu } from "@/data/caffeineLabMenu";
import { chillsideCafeMenu } from "@/data/chillsideCafeMenu";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, ArrowLeft, Clock, DollarSign, MapPin, Star, Utensils } from "lucide-react";
import { MapWidget } from "@/components/MapWidget";
import { CampusMapWidget } from "@/components/CampusMapWidget";
import { Separator } from "@/components/ui/separator";
import { Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import grubhubIcon from "@/assets/apps/grubhub-icon.png";
import { cn } from "@/lib/utils";

const foodTruckSchedule = [
  {
    vendor: "Thai Mex Cocina",
    date: "Mon Oct 06 2025",
    location: "Central Quad (LH1)",
    website: "https://thaimex-cocina.com"
  },
  {
    vendor: "Crepes Bonaparte",
    date: "Mon Oct 06 2025",
    location: "Friendship Walk (HHS1 West Lawn)",
    website: "https://www.crepesbonaparte.com"
  },
  {
    vendor: "Wetzel's Pretzel's",
    date: "Mon Oct 06 2025",
    location: "CPACE/SSPAN Lawn",
    website: "https://wetzsidepretzels.com"
  },
  {
    vendor: "Crepes Bonaparte",
    date: "Tue Oct 07 2025",
    location: "Central Quad (LH1)",
    website: "https://www.crepesbonaparte.com"
  }
];


interface MenuItem {
  name: string;
  price: string;
  description: string;
  image?: string;
  allergens?: string[];
}

// Allergen codes based on dining halls format
const allergenCodes: Record<string, { code: string; color: string; name: string }> = {
  "milk": { code: "M", color: "#3b82f6", name: "Milk" },
  "eggs": { code: "E", color: "#eab308", name: "Eggs" },
  "fish": { code: "F", color: "#06b6d4", name: "Fish" },
  "shellfish": { code: "SF", color: "#8b5cf6", name: "Shellfish" },
  "tree nuts": { code: "TN", color: "#f97316", name: "Tree Nuts" },
  "peanuts": { code: "P", color: "#dc2626", name: "Peanuts" },
  "wheat": { code: "W", color: "#65a30d", name: "Wheat" },
  "soy": { code: "S", color: "#0891b2", name: "Soy" },
  "sesame": { code: "SS", color: "#c026d3", name: "Sesame" }
};

// Function to extract allergens from description
const extractAllergens = (description: string): string[] => {
  const allergens: string[] = [];
  const lowerDesc = description.toLowerCase();
  
  Object.entries(allergenCodes).forEach(([allergen, data]) => {
    if (lowerDesc.includes(`contains ${allergen}`) || lowerDesc.includes(allergen)) {
      allergens.push(data.code);
    }
  });
  
  return allergens;
};

const outpostMenuItems: Record<string, MenuItem[]> = {
  "Breakfast Classics": [
    { name: "Pancakes", price: "$5.29", description: "Two pancakes served with whipped butter. Contains milk, soy, and wheat" },
    { name: "French Toast", price: "$6.99", description: "Two slices of double-thick white bread, served with whipped butter. Contains eggs, soy, and wheat" },
    { name: "Two Eggs w/Meat", price: "$10.79", description: "Two eggs any style, choice of meat (smoked bacon, sausage, turkey sausage, or Spam), served with hash browns and choice of toast. Contains eggs, soy, and wheat" },
    { name: "Two Eggs Breakfast", price: "$8.29", description: "Two eggs any style, hash browns and choice of toast. Contains eggs, soy, and wheat" },
    { name: "Cheddar Cheese Omelet", price: "$7.99", description: "Two egg omelet with cheddar cheese and choice of meat, served with hash browns. Contains eggs, milk, and soy" },
    { name: "Feta Cheese Omelet", price: "$7.99", description: "Two egg omelet with feta cheese, spinach, tomato, served with hash browns. Contains eggs, milk, and soy" },
  ],
  "Breakfast Sandwiches": [
    { name: "Sunrise Bagel Sandwich", price: "$7.99", description: "Over hard egg, honey Dijon mustard, tomato, cucumber & red onion, on an everything bagel. Contains eggs, wheat, soy, and sesame seeds" },
    { name: "The B.E.T. Bagel Sandwich", price: "$9.99", description: "Over hard egg, smoked bacon, cheddar cheese, tomato, sriracha mayo & hash browns, on an everything bagel. Contains eggs, milk, wheat, soy, and sesame seeds" },
    { name: "Breakfast Sandwich", price: "$7.49", description: "Scrambled egg, cheddar cheese and choice of meat on toasted bread. Contains eggs, milk, wheat, and soy" },
  ],
  "Breakfast Burritos": [
    { name: "Breakfast Burrito", price: "$10.49", description: "Two scrambled eggs, choice of meat, hash browns and cheddar cheese, wrapped in a flour tortilla with salsa. Contains eggs, milk, soy, and wheat" },
    { name: "Elbee Burrito", price: "$13.99", description: "Two scrambled eggs, smoked bacon, hash browns, cheddar cheese, avocado and chipotle sauce. Contains eggs, milk, soy, and wheat" },
    { name: "Spam & Egg Burrito", price: "$9.99", description: "Grilled spam, scrambled eggs, green onion, white rice and sriracha mayo. Contains eggs, wheat, soy, and milk" },
    { name: "Spinach and Mushroom Burrito", price: "$8.99", description: "Two scrambled eggs, hash browns, sautéed spinach and mushroom, wrapped in a flour tortilla. Contains eggs, soy, and wheat" },
  ],
  "Breakfast Bowls": [
    { name: "Breakfast Bowl", price: "$10.99", description: "Two scrambled eggs, choice of meat, hash browns and cheddar cheese, with salsa. Contains eggs, milk, soy, and wheat" },
    { name: "Spam & Egg Bowl", price: "$10.99", description: "Two scrambled eggs, grilled Spam, white rice and green onions, drizzled with sriracha mayo. Contains eggs, soy, and milk" },
    { name: "Loco Moco", price: "$9.99", description: "A sunny side egg served on a juicy charbroiled beef patty over white rice with savory onion and mushroom gravy. Contains eggs and soy" },
  ],
  "Breakfast Sides": [
    { name: "Toast", price: "$2.49", description: "Choice of wheat, sourdough, or English muffin, with butter. Contains soy and wheat" },
    { name: "Bagel with Cream Cheese", price: "$4.49", description: "Choice of plain or everything bagel. Contains milk, wheat, and sesame seeds" },
    { name: "Side of Smoked Bacon", price: "$2.99", description: "3 Slices of smoked bacon" },
    { name: "Side of Hash Brown", price: "$2.69", description: "Shredded hash brown potatoes. Contains soy" },
  ],
  "Charbroiled Burgers": [
    { name: "Cali Cheeseburger", price: "$9.49", description: "Beef patty, pepper jack cheese, chipotle dressing, jalapeños, lettuce, tomato, red onion, avocado and pickles. Contains eggs, milk, soy, and wheat" },
    { name: "Hamburger", price: "$7.89", description: "Beef patty, Thousand Island dressing, lettuce, tomato, red onion and pickles. Contains eggs, milk, soy, and wheat" },
    { name: "Turkey Burger", price: "$7.39", description: "Turkey patty, Thousand Island dressing, lettuce, tomato, red onion and pickles. Contains eggs, soy, and wheat" },
    { name: "BBQ Bacon Cheeseburger", price: "$9.79", description: "Beef patty, smoked bacon, cheddar cheese, onion ring and Sweet Baby Ray's® BBQ sauce. Contains milk, soy, and wheat" },
    { name: "Gardenburger®", price: "$7.89", description: "Gardenburger® veggie patty, Thousand Island dressing, lettuce, tomato, red onion and pickles. Contains eggs, milk, soy, and wheat" },
    { name: "Bacon Cheeseburger", price: "$9.69", description: "Beef patty, smoked bacon, cheddar cheese, Thousand Island dressing, lettuce, tomato, red onion and pickles. Contains eggs, soy, and wheat" },
    { name: "Brunch Burger", price: "$12.29", description: "Beef patty, over medium egg, hash brown patty, smoked bacon and cheddar cheese. Contains eggs, milk, soy, and wheat" },
    { name: "Hawaiian Cheeseburger", price: "$8.99", description: "Beef patty, Swiss cheese, grilled pineapple, teriyaki sauce, lettuce, tomato, red onion and pickles. Contains eggs, milk, soy, wheat, and sesame seeds" },
    { name: "Mushroom & Swiss Cheeseburger", price: "$10.49", description: "Beef patty, Swiss cheese, sautéed mushrooms and caramelized onion. Contains eggs, milk, soy, and wheat" },
  ],
  "Bowls": [
    { name: "Signature Bowl", price: "$10.49", description: "Charbroiled chicken, avocado, brown rice, black beans, lettuce, cucumber, pepper jack cheese, chipotle ranch, pico de gallo. Contains eggs, milk, and soy" },
    { name: "Chicken Pesto Bowl", price: "$8.29", description: "Charbroiled chicken, brown rice and zucchini with creamy pesto sauce. Contains eggs, milk, and soy" },
    { name: "Carnitas Bowl", price: "$9.99", description: "Carnitas, avocado, cilantro lime rice, pinto beans, pico de gallo, and cheddar cheese with corn tortilla chips. Contains milk, soy, and wheat" },
    { name: "Chicken Teriyaki Bowl", price: "$8.49", description: "Charbroiled teriyaki glazed chicken, white rice, green onion, and cabbage. Contains soy and wheat" },
    { name: "Falafel & Rice Bowl", price: "$8.49", description: "Brown rice, green chickpea falafel with tzatziki sauce, herb vinaigrette, feta cheese, lettuce, tomato, red onion and cucumber, served with pita bread. Contains milk, soy, wheat, and sesame seeds" },
    { name: "Butter Chicken Bowl", price: "$8.79", description: "Chicken breast, rice, butter sauce, served with naan bread. Contains eggs, milk, wheat, and soy" },
    { name: "Beach Bowl", price: "$6.69", description: "Roasted deli turkey, brown rice, black beans, cucumber, pico de gallo, and herb vinaigrette. Contains soy" },
  ],
  "Salads": [
    { name: "BBQ Chicken", price: "$10.99", description: "Charbroiled chicken breast, avocado, lettuce, BBQ Sauce, tomato, black beans, corn, cheddar cheese and chipotle dressing. Contains eggs, milk, and soy" },
    { name: "Sesame Chicken", price: "$10.49", description: "Charbroiled chicken breast, lettuce, shredded carrots, crispy noodles, cucumber, green onion and sesame vinaigrette dressing. Contains soy and sesame seeds" },
    { name: "Honey Crisp Chicken", price: "$12.29", description: "Crispy southern-style fried chicken, lettuce, tomato, cucumber, bacon, corn, cheddar cheese and honey Dijon dressing. Contains eggs, soy, and wheat" },
    { name: "Chicken Caesar", price: "$10.99", description: "Charbroiled chicken breast, lettuce, parmesan cheese, croutons and Caesar dressing. Contains eggs, milk, fish, and soy" },
    { name: "Buffalo Crispy Chicken", price: "$10.29", description: "Crispy southern-style fried chicken, lettuce, buffalo sauce, cucumber, shredded carrots, celery and ranch dressing. Contains eggs, milk, soy, and wheat" },
    { name: "Garden Side Salad", price: "$3.29", description: "Lettuce, tomato, cucumber and choice of dressing" },
  ],
  "Sandwiches": [
    { name: "Turkey California", price: "$8.49", description: "Roasted deli turkey, avocado, cheddar cheese, lettuce, and tomato, on grilled sourdough bread. Contains milk, soy, and wheat" },
    { name: "Honey Crisp Chicken", price: "$7.69", description: "Crispy southern-style fried chicken tenderloins, honey Dijon dressing and pickles. Contains eggs, soy​, and wheat" },
    { name: "BBQ Pulled Pork Sandwich", price: "$6.79", description: "Roasted pork carnitas, Sweet Baby Ray's® BBQ sauce and coleslaw. Contains eggs, milk, soy, and wheat" },
    { name: "Chicken Sandwich", price: "$9.29", description: "Charbroiled chicken breast, pepper jack cheese, chipotle sauce, tomato, red onion, pickles and lettuce. Contains eggs, milk, soy, and wheat" },
    { name: "Chicken Pesto Sandwich", price: "$10.29", description: "Charbroiled chicken breast, provolone cheese, creamy pesto sauce, lettuce and tomato. Contains milk, soy, and wheat" },
    { name: "BLT", price: "$7.29", description: "Smoked bacon, lettuce and tomato, with mayo, on toasted sourdough bread. Contains soy and wheat" },
    { name: "Turkey and Bacon Sandwich", price: "$8.99", description: "Roasted deli turkey, smoked bacon, mayo, lettuce & tomatoes, on toasted sourdough bread. Contains eggs, soy, and wheat" },
    { name: "Falafel Sandwich", price: "$7.99", description: "Green chickpea falafel with tzatziki sauce, herb vinaigrette, feta cheese, lettuce, tomato, red onion and cucumber. Contains milk, soy, wheat, and sesame seeds" },
    { name: "Patty Melt Sandwich", price: "$8.49", description: "Beef patty, cheddar cheese, grilled onions and Thousand Island dressing, on grilled sourdough bread. Contains eggs, milk, soy, and wheat" },
  ],
  "Grilled Cheese": [
    { name: "Grilled Cheese", price: "$5.49", description: "Cheddar & mozzarella cheese on grilled sourdough bread. Contains milk, soy, and wheat" },
  ],
  "Papa John's Pizza": [
    { name: "Cheese Pizza", price: "$6.99", description: "8\" pizza with real cheese made from mozzarella, and signature pizza sauce" },
    { name: "Pepperoni Pizza", price: "$7.29", description: "8\" pizza with premium pepperoni" },
    { name: "Pepperoni & Sausage Pizza", price: "$7.49", description: "8\" pizza with premium pepperoni and Italian sausage" },
    { name: "The Works Pizza", price: "$8.99", description: "8\" pizza with Italian sausage, Canadian bacon, mushroom, green pepper, onion, black olives & pepperoni" },
    { name: "Hawaiian BBQ Chicken Pizza", price: "$7.99", description: "8\" pizza with BBQ sauce, bacon, chicken, onion & pineapple" },
    { name: "Garden Fresh Pizza", price: "$7.79", description: "8\" pizza with mushroom, green pepper, onion, black olives & tomato" },
  ],
  "Pizza Sides": [
    { name: "PJ Wings (6 Piece)", price: "$9.79", description: "Choice of Sauce: Honey Chipotle, BBQ sauce, and Buffalo" },
    { name: "PJ Wings (8 Piece)", price: "$12.49", description: "Choice of Sauce: Honey Chipotle, BBQ sauce, and Buffalo" },
    { name: "Garlic Knotts", price: "$5.99", description: "Freshly baked dough knots topped with garlic sauce" },
    { name: "Cheese Sticks", price: "$6.49", description: "Fresh dough covered with special garlic sauce and mozzarella cheese" },
  ],
  "Appetizers & Fries": [
    { name: "Chicken Quesadilla", price: "$8.49", description: "Charbroiled chicken breast, pepper jack cheese, sour cream & salsa. Contains milk, soy, and wheat" },
    { name: "Carnitas Quesadilla", price: "$8.49", description: "Roasted pork carnitas, pepper jack cheese, sour cream & salsa. Contains milk, soy, and wheat" },
    { name: "Chicken Tenders", price: "$7.89", description: "Crispy southern-style fried chicken tenderloins. Contains wheat and soy" },
    { name: "Fries", price: "$3.09", description: "House-seasoned fries with salt, pepper & garlic. Contains soy" },
    { name: "Onion Rings", price: "$4.49", description: "Crispy beer-battered onion rings. Contains soy and wheat" },
    { name: "Spicy Cauliflower Bites", price: "$4.99", description: "Fried Cauliflower florets in spicy batter made with Aleppo pepper & cumin, served with ranch dressing. Contains milk, soy, and wheat" },
  ],
  "All Day Breakfast": [
    { name: "Breakfast Sandwich", price: "$7.49", description: "Scrambled egg, cheddar cheese and smoked bacon on toasted bread. Contains eggs, milk, wheat, and soy" },
    { name: "Breakfast Wrap", price: "$10.49", description: "Two scrambled eggs, smoked bacon, and cheddar cheese, wrapped in a flour tortilla with salsa. Contains eggs, milk, soy, and wheat" },
  ],
  "Beverages": [
    { name: "Fountain Drinks (24 oz)", price: "$3.09", description: "Coke, Sprite, Dr. Pepper, and more" },
    { name: "Fountain Drinks (32 oz)", price: "$3.29", description: "Coke, Sprite, Dr. Pepper, and more" },
    { name: "Coffee (12 oz)", price: "$3.09", description: "Proudly serving Starbucks coffee" },
    { name: "Coffee (16 oz)", price: "$3.29", description: "Proudly serving Starbucks coffee" },
    { name: "Cold-Brew® (Grande)", price: "$4.45", description: "Starbucks Cold-Brew" },
    { name: "Cafe 57 (12 oz)", price: "$3.09", description: "Specialty coffee" },
    { name: "Cafe 57 (16 oz)", price: "$3.29", description: "Specialty coffee" },
  ],
};

const shakeSmartMenuItems: Record<string, MenuItem[]> = {
  "Signature Items": [
    { name: "Build Your Own Smoothie", price: "Varies", description: "Customize your smoothie with your choice of proteins, fruits, and boosters" },
    { name: "Acai Bowl", price: "Varies", description: "Fresh acai topped with granola, banana, and your choice of toppings" },
    { name: "Protein Shake", price: "Varies", description: "High-protein shakes perfect for post-workout recovery" },
  ],
};

export default function RestaurantDetail() {
  const { id } = useParams();
  const location = locations.find((loc) => loc.id === id);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  // Filter states for restaurants with filtering
  const [mealFilterOpen, setMealFilterOpen] = useState(false);
  const [priceFilterOpen, setPriceFilterOpen] = useState(false);
  const [selectedMeal, setSelectedMeal] = useState("all");
  const [selectedPrice, setSelectedPrice] = useState("all");

  if (!location) {
    return (
      <div className="container px-4 py-16 text-center">
        <h1 className="mb-4 text-3xl font-bold">Location Not Found</h1>
        <Link to="/">
          <Button variant="outline">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>
      </div>
    );
  }

  const isOpen = isOpenNow(location.hours);
  const openingTime = getNextOpeningTime(location.hours);
  const isFoodTruck = location.category === "Food Trucks";
  
  // Select menu based on location and add allergens
  let menuItems: Record<string, MenuItem[]>;
  if (location.id === "shake-smart") {
    menuItems = Object.fromEntries(
      shakeSmartMenu.map(category => [
        category.name,
        category.items.map(item => ({
          name: item.name,
          price: `$${item.price.toFixed(2)}`,
          description: item.description,
          allergens: extractAllergens(item.description)
        }))
      ])
    );
  } else if (location.id === "nugget-grill-express") {
    menuItems = Object.fromEntries(
      nuggetGrillMenu.map(category => [
        category.name,
        category.items.map(item => ({
          name: item.name,
          price: `$${item.price.toFixed(2)}`,
          description: item.description,
          allergens: extractAllergens(item.description)
        }))
      ])
    );
  } else if (location.id === "caffeine-lab") {
    menuItems = Object.fromEntries(
      caffeineLabMenu.map(category => [
        category.name,
        category.items.map(item => ({
          name: item.name,
          price: item.price,
          description: item.description,
          allergens: extractAllergens(item.description)
        }))
      ])
    );
  } else if (location.id === "chillside-cafe") {
    menuItems = Object.fromEntries(
      chillsideCafeMenu.map(category => [
        category.name,
        category.items.map(item => ({
          name: item.name,
          price: item.price,
          description: item.description,
          allergens: extractAllergens(item.description)
        }))
      ])
    );
  } else {
    menuItems = Object.fromEntries(
      Object.entries(outpostMenuItems).map(([category, items]) => [
        category,
        items.map(item => ({
          ...item,
          allergens: extractAllergens(item.description)
        }))
      ])
    );
  }
  
  // Define meal categories for different restaurants
  const outpostBreakfastCategories = ["Breakfast Classics", "Breakfast Sandwiches", "Breakfast Burritos", "Breakfast Bowls", "Breakfast Sides", "All Day Breakfast"];
  const outpostLunchDinnerCategories = ["Charbroiled Burgers", "Bowls", "Salads", "Sandwiches", "Grilled Cheese", "Papa John's Pizza", "Pizza Sides", "Appetizers & Fries"];
  const outpostAllDayCategories = ["All Day Breakfast", "Beverages"];
  
  // Shake Smart categories by meal type
  const shakeSmartBreakfastCategories = ["Toast", "Craft Your Cup"];
  const shakeSmartLunchDinnerCategories = ["Shakes", "Bowls", "Wraps"];
  const shakeSmartAllDayCategories = ["Beverages & Bites"];
  
  // Nugget Grill Express categories
  const nuggetBreakfastCategories = ["Breakfast", "Breakfast Sides"];
  const nuggetLunchDinnerCategories = ["Lunch"];
  const nuggetAllDayCategories = ["Sides", "Dessert", "Drinks"];
  
  // Caffeine Lab categories
  const caffeineLabBreakfastCategories = ["Pastries & Snacks"];
  const caffeineLabLunchDinnerCategories = ["Signature Coffee Drinks", "Seasonal Specials"];
  const caffeineLabAllDayCategories = ["Energy Drinks", "Iced Beverages"];
  
  // Chillside Cafe categories  
  const chillsideBreakfastCategories = ["Coffee Classics", "Pastries & Baked Goods", "Quick Bites"];
  const chillsideLunchDinnerCategories = ["Specialty Lattes"];
  const chillsideAllDayCategories = ["Iced Coffee & Cold Brew"];

  // Filter and sort menu items based on meal type and price
  const filterMenuItems = (items: MenuItem[], category: string) => {
    let filtered = items.filter(item => {
      // Filter by meal type for each restaurant
      if (selectedMeal !== "all") {
        let isBreakfastCategory = false;
        let isLunchDinnerCategory = false;
        
        if (location.id === "outpost-grill") {
          isBreakfastCategory = outpostBreakfastCategories.includes(category);
          isLunchDinnerCategory = outpostLunchDinnerCategories.includes(category);
        } else if (location.id === "nugget-grill-express") {
          isBreakfastCategory = nuggetBreakfastCategories.includes(category);
          isLunchDinnerCategory = nuggetLunchDinnerCategories.includes(category);
        } else if (location.id === "shake-smart") {
          isBreakfastCategory = shakeSmartBreakfastCategories.includes(category);
          isLunchDinnerCategory = shakeSmartLunchDinnerCategories.includes(category);
        } else if (location.id === "caffeine-lab") {
          isBreakfastCategory = caffeineLabBreakfastCategories.includes(category);
          isLunchDinnerCategory = caffeineLabLunchDinnerCategories.includes(category);
        } else if (location.id === "chillside-cafe") {
          isBreakfastCategory = chillsideBreakfastCategories.includes(category);
          isLunchDinnerCategory = chillsideLunchDinnerCategories.includes(category);
        }
        
        if (selectedMeal === "breakfast" && !isBreakfastCategory) return false;
        if (selectedMeal === "lunch" && !isLunchDinnerCategory) return false;
      }
      
      // Filter by price range
      if (selectedPrice !== "all") {
        const priceNum = parseFloat(item.price.replace("$", ""));
        if (selectedPrice === "low" && priceNum > 8) return false;
        if (selectedPrice === "high" && priceNum <= 8) return false;
      }
      
      return true;
    });
    
    // Always sort by price (low to high) when any price filter is active
    if (selectedPrice !== "all") {
      filtered = filtered.sort((a, b) => {
        const priceA = parseFloat(a.price.replace("$", ""));
        const priceB = parseFloat(b.price.replace("$", ""));
        return priceA - priceB;
      });
    }
    
    return filtered;
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Image */}
      <div className="relative h-[400px] w-full overflow-hidden">
        <img
          src={location.image}
          alt={location.name}
          className={cn(
            "h-full w-full object-cover",
            location.id === "outpost-grill" ? "scale-90" : ""
          )}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80" />
        <div className="absolute bottom-0 left-0 right-0 pb-8">
          <div className="container px-4">
            <Link to={`/category/${location.category.toLowerCase().replace(/\s+/g, '-')}`}>
              <Button variant="ghost" size="sm" className="mb-4 gap-2 text-white/90 hover:text-white hover:bg-white/10">
                <ArrowLeft className="h-4 w-4" />
                Back to {location.category}
              </Button>
            </Link>
            <h1 className="mb-3 text-5xl font-bold text-white">
              {location.name}
            </h1>
            <div className="flex flex-wrap items-center gap-3">
              <span className={`inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-sm font-semibold ${
                isOpen ? "bg-success text-white" : "bg-muted text-muted-foreground"
              }`}>
              <span className={`h-2 w-2 rounded-full ${isOpen ? "bg-white" : "bg-muted-foreground"}`} />
                {isOpen ? "Open Now" : "Closed"}
              </span>
              <span className="rounded-full bg-white/10 backdrop-blur-sm px-3 py-1.5 text-sm font-semibold text-white">
                {location.priceRange}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="container px-4 py-8">
        <div className="grid gap-8 lg:grid-cols-[300px_1fr]">
          {/* Sidebar */}
          <aside className="space-y-6">
            {/* Operating Hours Card */}
            <Card className="border-2">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-5">
                  <div className="p-2.5 rounded-xl bg-accent/15">
                    <Clock className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold">Operating Hours</h3>
                </div>

                <div className="space-y-1">
                  {(() => {
                    const weekShort = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"] as const;
                    const todayStr = weekShort[new Date().getDay()];
                    
                    // Group consecutive days with same hours
                    const grouped: Array<{ days: string[]; hours: string }> = [];
                    const entries = Object.entries(location.hours);
                    
                    for (let i = 0; i < entries.length; i++) {
                      const [day, hours] = entries[i];
                      // Don't group Saturday and Sunday together
                      const prevGroup = grouped[grouped.length - 1];
                      const shouldGroup = prevGroup && 
                                        prevGroup.hours === hours && 
                                        !(prevGroup.days[prevGroup.days.length - 1] === 'Sat' && day === 'Sun');
                      
                      if (grouped.length === 0 || !shouldGroup) {
                        grouped.push({ days: [day], hours });
                      } else {
                        grouped[grouped.length - 1].days.push(day);
                      }
                    }
                    
                    return grouped.map((group, idx) => {
                      const hasToday = group.days.includes(todayStr);
                      const dayRange = group.days.length > 1 
                        ? `${group.days[0]} - ${group.days[group.days.length - 1]}`
                        : group.days[0];
                      const isClosed = group.hours === "Closed";
                      
                      return (
                        <div 
                          key={idx}
                          className={cn(
                            "flex items-center justify-between px-4 py-3.5 rounded-lg transition-colors",
                            hasToday 
                              ? "bg-accent/10" 
                              : "bg-muted/30 hover:bg-muted/50"
                          )}
                        >
                          <span className={cn(
                            "text-base font-bold",
                            hasToday ? "text-accent" : "text-muted-foreground"
                          )}>
                            {dayRange}
                          </span>
                          <span className={cn(
                            "text-lg font-bold tabular-nums",
                            hasToday ? "text-accent" : "text-muted-foreground"
                          )}>
                            {group.hours}
                          </span>
                        </div>
                      );
                    });
                  })()}
                </div>
              </CardContent>
            </Card>

            {/* Order Online Card */}
            {location.links.order && (
              <Card className="border-2 overflow-hidden">
                <CardContent className="p-0">
                  <div className="bg-gradient-to-br from-accent/10 to-accent/5 p-6 border-b border-border">
                    <div className="flex items-center gap-4 mb-3">
                      <img 
                        src={grubhubIcon} 
                        alt="Grubhub"
                        className="h-16 w-16 rounded-lg object-cover border-2 border-border shadow-sm"
                      />
                      <div>
                        <p className="text-sm text-muted-foreground">Order via</p>
                        <p className="font-bold text-lg">Grubhub</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <Button
                      asChild
                      size="lg"
                      className="w-full gap-2 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
                    >
                      <a href={location.links.order} target="_blank" rel="noopener noreferrer">
                        Order Online
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Map Widget */}
            {["outpost-grill", "shake-smart"].includes(location.id) || isFoodTruck ? (
              <CampusMapWidget 
                locationName={location.name}
                campusLocation={location.id === "habit-grill" ? "Lower Campus" : "Upper Campus"}
                directionsLink={location.links.directions}
              />
            ) : (
              <MapWidget 
                locationName={location.name} 
                address="6049 E 7th St, Long Beach, CA 90840"
                directionsLink={location.links.directions}
              />
            )}
          </aside>

          {/* Main Content */}
          <main className="space-y-8">
            {/* Description */}
            <section>
              <h2 className="mb-4 text-2xl font-bold">About</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">{location.description}</p>
              
              {(location.id === "outpost-grill" || location.id === "shake-smart" || location.id === "nugget-grill-express" || location.id === "caffeine-lab" || location.id === "chillside-cafe") && (
                <div className="flex gap-3 mb-4">
                  {/* Meal Filter */}
                  <div className="relative flex-1">
                    <button
                      onClick={() => {
                        setMealFilterOpen(!mealFilterOpen);
                        setPriceFilterOpen(false);
                      }}
                      className={cn(
                        "w-full px-6 py-3 rounded-xl transition-all text-sm font-semibold border-2",
                        mealFilterOpen
                          ? "bg-slate-500/20 text-foreground border-slate-500/30 backdrop-blur-sm"
                          : "bg-card text-foreground border-border hover:border-accent/50"
                      )}
                    >
                      Meal
                    </button>
                    {mealFilterOpen && (
                      <div className="absolute top-full mt-2 left-0 right-0 bg-card border-2 border-border rounded-xl shadow-xl p-4 z-10">
                        <div className="space-y-2 mb-3">
                          {["all", "breakfast", "lunch"].map((meal) => (
                            <button
                              key={meal}
                              onClick={() => setSelectedMeal(meal)}
                              className={cn(
                                "w-full px-4 py-2.5 rounded-lg text-left transition-all text-sm font-medium capitalize",
                                selectedMeal === meal
                                  ? "bg-slate-500/20 text-foreground border border-slate-500/30 backdrop-blur-sm"
                                  : "bg-muted/50 text-foreground hover:bg-muted"
                              )}
                            >
                              {meal}
                            </button>
                          ))}
                        </div>
                        <button
                          onClick={() => setMealFilterOpen(false)}
                          className="w-full px-4 py-1.5 rounded-lg bg-blue-500/20 text-blue-600 dark:text-blue-400 font-medium hover:bg-blue-500/30 transition-all backdrop-blur-sm"
                        >
                          Done
                        </button>
                      </div>
                    )}
                  </div>

                  {/* Price Filter */}
                  <div className="relative flex-1">
                    <button
                      onClick={() => {
                        setPriceFilterOpen(!priceFilterOpen);
                        setMealFilterOpen(false);
                      }}
                      className={cn(
                        "w-full px-6 py-3 rounded-xl transition-all text-sm font-semibold border-2",
                        priceFilterOpen
                          ? "bg-slate-500/20 text-foreground border-slate-500/30 backdrop-blur-sm"
                          : "bg-card text-foreground border-border hover:border-accent/50"
                      )}
                    >
                      Price
                    </button>
                    {priceFilterOpen && (
                      <div className="absolute top-full mt-2 left-0 right-0 bg-card border-2 border-border rounded-xl shadow-xl p-4 z-10">
                        <div className="space-y-2 mb-3">
                          <button
                            onClick={() => setSelectedPrice("all")}
                            className={cn(
                              "w-full px-4 py-2.5 rounded-lg text-left transition-all text-sm font-medium",
                              selectedPrice === "all"
                                ? "bg-slate-500/20 text-foreground border border-slate-500/30 backdrop-blur-sm"
                                : "bg-muted/50 text-foreground hover:bg-muted"
                            )}
                          >
                            All
                          </button>
                          <button
                            onClick={() => setSelectedPrice("low")}
                            className={cn(
                              "w-full px-4 py-2.5 rounded-lg text-left transition-all text-sm font-medium",
                              selectedPrice === "low"
                                ? "bg-slate-500/20 text-foreground border border-slate-500/30 backdrop-blur-sm"
                                : "bg-muted/50 text-foreground hover:bg-muted"
                            )}
                          >
                            Low ($8 or less)
                          </button>
                          <button
                            onClick={() => setSelectedPrice("high")}
                            className={cn(
                              "w-full px-4 py-2.5 rounded-lg text-left transition-all text-sm font-medium",
                              selectedPrice === "high"
                                ? "bg-slate-500/20 text-foreground border border-slate-500/30 backdrop-blur-sm"
                                : "bg-muted/50 text-foreground hover:bg-muted"
                            )}
                          >
                            High (over $8)
                          </button>
                        </div>
                        <button
                          onClick={() => setPriceFilterOpen(false)}
                          className="w-full px-4 py-1.5 rounded-lg bg-blue-500/20 text-blue-600 dark:text-blue-400 font-medium hover:bg-blue-500/30 transition-all backdrop-blur-sm"
                        >
                          Done
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </section>

            {/* Menu */}
            <section>
              {location.id === "outpost-grill" ? (
                // Linear menu format with categories for Outpost Grill
                <div className="space-y-10">
                   {/* Breakfast Section - only show when filter is "all" or "breakfast" */}
                   {(selectedMeal === "all" || selectedMeal === "breakfast") && (
                   <Card className="border-2 bg-card/50 backdrop-blur-sm">
                     <CardContent className="p-6">
                       <div className="mb-6">
                         <h3 className="text-2xl font-bold mb-3 text-accent">OUTPOST BREAKFAST</h3>
                         <div className="text-sm text-muted-foreground space-y-1">
                           <p>Served before 10:50 AM*</p>
                           <p>Additional costs may apply for food substitutions.</p>
                           <p className="text-xs italic">*Hours subject to change without notice. Check menu for select all day breakfast items.</p>
                         </div>
                       </div>
                       <div className="space-y-4">
                         {["Breakfast Classics", "Breakfast Sandwiches", "Breakfast Burritos", "Breakfast Bowls", "Breakfast Sides"].map(category => {
                           const displayCategory = category.replace("Breakfast ", "");
                           const filteredItems = filterMenuItems(menuItems[category], category);
                           
                           // Category-specific notes
                           const getCategoryNote = (cat: string) => {
                             if (cat === "Breakfast Classics") {
                               return "Add two eggs any style and your choice of meat (smoked bacon, sausage, turkey sausage, or Spam) for $3.99.";
                             }
                             return null;
                           };
                           
                           const categoryNote = getCategoryNote(category);
                           
                           return filteredItems.length > 0 && (
                             <div key={category} className="space-y-3">
                               <div className="mb-3">
                                 <h4 className="text-base font-bold text-accent uppercase tracking-wide">{displayCategory}</h4>
                                 {categoryNote && (
                                   <p className="text-xs text-muted-foreground mt-1">{categoryNote}</p>
                                 )}
                                 <div className="h-px bg-border mt-2"></div>
                               </div>
                               {filteredItems.map((item: MenuItem) => (
                                 <div key={item.name} className="rounded-xl bg-card p-4 border border-border hover:bg-muted/30 transition-colors">
                                   <div className="flex items-start justify-between gap-4">
                                     <div className="flex-1">
                                       <h5 className="font-semibold mb-1">{item.name}</h5>
                                       <p className="text-sm text-muted-foreground">{item.description}</p>
                                     </div>
                                     <div className="flex flex-col items-end gap-2 flex-shrink-0">
                                       <span className="text-lg font-bold text-primary whitespace-nowrap">{item.price}</span>
                                       {item.allergens && item.allergens.length > 0 && (
                                         <div className="flex flex-wrap gap-1.5 justify-end">
                                           {item.allergens.map((code) => {
                                             const allergenInfo = Object.values(allergenCodes).find(a => a.code === code);
                                             return allergenInfo ? (
                                               <span
                                                 key={code}
                                                 className="flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold text-white"
                                                 style={{ backgroundColor: allergenInfo.color }}
                                                 title={allergenInfo.name}
                                               >
                                                 {code}
                                               </span>
                                             ) : null;
                                           })}
                                         </div>
                                       )}
                                     </div>
                                   </div>
                                 </div>
                               ))}
                             </div>
                           );
                         })}
                       </div>
                     </CardContent>
                   </Card>
                   )}

                   {/* Lunch Section - only show when filter is "all" or "lunch" */}
                   {(selectedMeal === "all" || selectedMeal === "lunch") && (
                  <Card className="border-2 bg-card/50 backdrop-blur-sm">
                    <CardContent className="p-6">
                      <div className="mb-6">
                        <h3 className="text-2xl font-bold mb-3 text-accent">OUTPOST LUNCH</h3>
                        <div className="text-sm text-muted-foreground space-y-1">
                          <p>Served after 11:00 AM</p>
                          <p className="font-semibold">MAKE IT A COMBO: Add fries and a 24 oz fountain drink for $4.99.</p>
                          <p className="text-xs">*Combos are not available on Bowls, Salads & Sides.</p>
                          <p className="text-xs">Upgrade to onion rings or garden salad for an additional cost.</p>
                          <p className="text-xs">Additional costs may apply for food substitutions.</p>
                        </div>
                      </div>
                      <div className="space-y-4">
                        {["Charbroiled Burgers", "Bowls", "Salads", "Sandwiches", "Grilled Cheese"].map(category => {
                          const filteredItems = filterMenuItems(menuItems[category], category);
                          
                          // Category-specific notes
                          const getCategoryNote = (cat: string) => {
                            if (cat === "Charbroiled Burgers") {
                              return (
                                <div className="space-y-1">
                                  <p className="font-semibold">BURGER ADD-ONS:</p>
                                  <p>Add cheddar cheese $.60 • Add smoked bacon $1.69 • Add avocado $1.69</p>
                                  <p>Add grilled onions $.25 • Make it a double $2.50</p>
                                  <p className="italic">Protein style available upon request.</p>
                                  <p className="font-semibold mt-1">MAKE IT A COMBO: Add fries and a 24 oz fountain drink for $4.99.</p>
                                </div>
                              );
                            }
                            if (cat === "Grilled Cheese") {
                              return (
                                <div className="space-y-1">
                                  <p>SUB vegan mozzarella cheese $2.00 • Add ham $1.99 • Add bacon $2.99</p>
                                  <p>Add avocado $1.69 • Add deli turkey $2.99 • Add tomato $.80 • Add grilled onions $.25</p>
                                </div>
                              );
                            }
                            return null;
                          };
                          
                          const categoryNote = getCategoryNote(category);
                          
                          return filteredItems.length > 0 && (
                            <div key={category} className="space-y-3">
                              <div className="mb-3">
                                <h4 className="text-base font-bold text-accent uppercase tracking-wide">{category}</h4>
                                {categoryNote && (
                                  <div className="text-xs text-muted-foreground mt-1">{categoryNote}</div>
                                )}
                                <div className="h-px bg-border mt-2"></div>
                              </div>
                              {filteredItems.map((item: MenuItem) => (
                                <div key={item.name} className="rounded-xl bg-card p-4 border border-border hover:bg-muted/30 transition-colors">
                                  <div className="flex items-start justify-between gap-4">
                                    <div className="flex-1">
                                      <h5 className="font-semibold mb-1">{item.name}</h5>
                                      <p className="text-sm text-muted-foreground">{item.description}</p>
                                    </div>
                                    <div className="flex flex-col items-end gap-2 flex-shrink-0">
                                      <span className="text-lg font-bold text-primary whitespace-nowrap">{item.price}</span>
                                      {item.allergens && item.allergens.length > 0 && (
                                        <div className="flex flex-wrap gap-1.5 justify-end">
                                          {item.allergens.map((code) => {
                                            const allergenInfo = Object.values(allergenCodes).find(a => a.code === code);
                                            return allergenInfo ? (
                                              <span
                                                key={code}
                                                className="flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold text-white"
                                                style={{ backgroundColor: allergenInfo.color }}
                                                title={allergenInfo.name}
                                              >
                                                {code}
                                              </span>
                                            ) : null;
                                          })}
                                        </div>
                                      )}
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          );
                        })}
                      </div>
                     </CardContent>
                   </Card>
                   )}

                   {/* Papa John's Pizza & Snacks Section - only show when filter is "all" */}
                   {selectedMeal === "all" && (
                   <Card className="border-2 bg-card/50 backdrop-blur-sm">
                    <CardContent className="p-6">
                      <div className="mb-6">
                        <h3 className="text-2xl font-bold mb-3 text-accent">PAPA JOHN'S PIZZA & SNACKS</h3>
                        <div className="text-sm text-muted-foreground space-y-1">
                          <p>8" PIZZAS - Express Menu</p>
                          <p className="font-semibold">MAKE ANY 8" PIZZA A COMBO: Add fries and a 24 oz fountain drink for $4.99</p>
                        </div>
                      </div>
                      <div className="space-y-4">
                        {["Papa John's Pizza", "Pizza Sides", "Appetizers & Fries"].map(category => {
                          const filteredItems = filterMenuItems(menuItems[category], category);
                          
                          return filteredItems.length > 0 && (
                            <div key={category} className="space-y-3">
                              <div className="mb-3">
                                <h4 className="text-base font-bold text-accent uppercase tracking-wide">{category}</h4>
                                <div className="h-px bg-border mt-2"></div>
                              </div>
                              {filteredItems.map((item: MenuItem) => (
                                <div key={item.name} className="rounded-xl bg-card p-4 border border-border hover:bg-muted/30 transition-colors">
                                  <div className="flex items-start justify-between gap-4">
                                    <div className="flex-1">
                                      <h5 className="font-semibold mb-1">{item.name}</h5>
                                      <p className="text-sm text-muted-foreground">{item.description}</p>
                                    </div>
                                    <div className="flex flex-col items-end gap-2 flex-shrink-0">
                                      <span className="text-lg font-bold text-primary whitespace-nowrap">{item.price}</span>
                                      {item.allergens && item.allergens.length > 0 && (
                                        <div className="flex flex-wrap gap-1.5 justify-end">
                                          {item.allergens.map((code) => {
                                            const allergenInfo = Object.values(allergenCodes).find(a => a.code === code);
                                            return allergenInfo ? (
                                              <span
                                                key={code}
                                                className="flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold text-white"
                                                style={{ backgroundColor: allergenInfo.color }}
                                                title={allergenInfo.name}
                                              >
                                                {code}
                                              </span>
                                            ) : null;
                                          })}
                                        </div>
                                      )}
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          );
                        })}
                      </div>
                     </CardContent>
                   </Card>
                   )}

                   {/* All Day & Services Section - only show when filter is "all" */}
                   {selectedMeal === "all" && (
                   <Card className="border-2 bg-card/50 backdrop-blur-sm">
                    <CardContent className="p-6">
                      <div className="mb-6">
                        <h3 className="text-2xl font-bold mb-2 text-accent">ALL DAY & SERVICES</h3>
                        <p className="text-sm text-muted-foreground">Items available all day and general resources</p>
                      </div>
                      <div className="space-y-4">
                        {["All Day Breakfast", "Beverages"].map(category => {
                          const filteredItems = filterMenuItems(menuItems[category], category);
                          
                          return filteredItems.length > 0 && (
                            <div key={category} className="space-y-3">
                              <div className="mb-3">
                                <h4 className="text-base font-bold text-accent uppercase tracking-wide">{category}</h4>
                                <div className="h-px bg-border mt-2"></div>
                              </div>
                              {filteredItems.map((item: MenuItem) => (
                                <div key={item.name} className="rounded-xl bg-card p-4 border border-border hover:bg-muted/30 transition-colors">
                                  <div className="flex items-start justify-between gap-4">
                                    <div className="flex-1">
                                      <h5 className="font-semibold mb-1">{item.name}</h5>
                                      <p className="text-sm text-muted-foreground">{item.description}</p>
                                    </div>
                                    <div className="flex flex-col items-end gap-2 flex-shrink-0">
                                      <span className="text-lg font-bold text-primary whitespace-nowrap">{item.price}</span>
                                      {item.allergens && item.allergens.length > 0 && (
                                        <div className="flex flex-wrap gap-1.5 justify-end">
                                          {item.allergens.map((code) => {
                                            const allergenInfo = Object.values(allergenCodes).find(a => a.code === code);
                                            return allergenInfo ? (
                                              <span
                                                key={code}
                                                className="flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold text-white"
                                                style={{ backgroundColor: allergenInfo.color }}
                                                title={allergenInfo.name}
                                              >
                                                {code}
                                              </span>
                                            ) : null;
                                          })}
                                        </div>
                                      )}
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          );
                         })}
                       </div>
                     </CardContent>
                   </Card>
                   )}
                 </div>
              ) : location.id === "nugget-grill-express" ? (
                // Nugget Grill Express menu format with filters
                <div className="space-y-10">
                  {/* Breakfast Section */}
                  {(selectedMeal === "all" || selectedMeal === "breakfast") && (
                    <Card className="border-2 bg-card/50 backdrop-blur-sm">
                      <CardContent className="p-6">
                        <div className="mb-6">
                          <h3 className="text-2xl font-bold mb-3 text-accent">NUGGET GRILL BREAKFAST</h3>
                          <div className="text-sm text-muted-foreground space-y-1">
                            <p>Fresh breakfast options to start your day</p>
                          </div>
                        </div>
                        <div className="space-y-4">
                          {["Breakfast", "Breakfast Sides"].map(category => {
                            const filteredItems = filterMenuItems(menuItems[category] || [], category);
                            
                            return filteredItems.length > 0 && (
                              <div key={category} className="space-y-3">
                                <div className="mb-3">
                                  <h4 className="text-base font-bold text-accent uppercase tracking-wide">{category}</h4>
                                  <div className="h-px bg-border mt-2"></div>
                                </div>
                                {filteredItems.map((item: MenuItem) => (
                                  <div key={item.name} className="rounded-xl bg-card p-4 border border-border hover:bg-muted/30 transition-colors">
                                    <div className="flex items-start justify-between gap-4">
                                      <div className="flex-1">
                                        <h5 className="font-semibold mb-1">{item.name}</h5>
                                        <p className="text-sm text-muted-foreground">{item.description}</p>
                                      </div>
                                      <div className="flex flex-col items-end gap-2 flex-shrink-0">
                                        <span className="text-lg font-bold text-primary whitespace-nowrap">{item.price}</span>
                                        {item.allergens && item.allergens.length > 0 && (
                                          <div className="flex flex-wrap gap-1.5 justify-end">
                                            {item.allergens.map((code) => {
                                              const allergenInfo = Object.values(allergenCodes).find(a => a.code === code);
                                              return allergenInfo ? (
                                                <span
                                                  key={code}
                                                  className="flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold text-white"
                                                  style={{ backgroundColor: allergenInfo.color }}
                                                  title={allergenInfo.name}
                                                >
                                                  {code}
                                                </span>
                                              ) : null;
                                            })}
                                          </div>
                                        )}
                                      </div>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            );
                          })}
                        </div>
                      </CardContent>
                    </Card>
                  )}

                  {/* Lunch Section */}
                  {(selectedMeal === "all" || selectedMeal === "lunch") && (
                    <Card className="border-2 bg-card/50 backdrop-blur-sm">
                      <CardContent className="p-6">
                        <div className="mb-6">
                          <h3 className="text-2xl font-bold mb-3 text-accent">NUGGET GRILL LUNCH</h3>
                          <div className="text-sm text-muted-foreground space-y-1">
                            <p>Burgers, sandwiches, wraps and more</p>
                          </div>
                        </div>
                        <div className="space-y-4">
                          {["Lunch"].map(category => {
                            const filteredItems = filterMenuItems(menuItems[category] || [], category);
                            
                            return filteredItems.length > 0 && (
                              <div key={category} className="space-y-3">
                                <div className="mb-3">
                                  <h4 className="text-base font-bold text-accent uppercase tracking-wide">{category}</h4>
                                  <div className="h-px bg-border mt-2"></div>
                                </div>
                                {filteredItems.map((item: MenuItem) => (
                                  <div key={item.name} className="rounded-xl bg-card p-4 border border-border hover:bg-muted/30 transition-colors">
                                    <div className="flex items-start justify-between gap-4">
                                      <div className="flex-1">
                                        <h5 className="font-semibold mb-1">{item.name}</h5>
                                        <p className="text-sm text-muted-foreground">{item.description}</p>
                                      </div>
                                      <div className="flex flex-col items-end gap-2 flex-shrink-0">
                                        <span className="text-lg font-bold text-primary whitespace-nowrap">{item.price}</span>
                                        {item.allergens && item.allergens.length > 0 && (
                                          <div className="flex flex-wrap gap-1.5 justify-end">
                                            {item.allergens.map((code) => {
                                              const allergenInfo = Object.values(allergenCodes).find(a => a.code === code);
                                              return allergenInfo ? (
                                                <span
                                                  key={code}
                                                  className="flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold text-white"
                                                  style={{ backgroundColor: allergenInfo.color }}
                                                  title={allergenInfo.name}
                                                >
                                                  {code}
                                                </span>
                                              ) : null;
                                            })}
                                          </div>
                                        )}
                                      </div>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            );
                          })}
                        </div>
                      </CardContent>
                    </Card>
                  )}

                  {/* All Day Section */}
                  {selectedMeal === "all" && (
                    <Card className="border-2 bg-card/50 backdrop-blur-sm">
                      <CardContent className="p-6">
                        <div className="mb-6">
                          <h3 className="text-2xl font-bold mb-2 text-accent">SIDES, DESSERTS & DRINKS</h3>
                          <p className="text-sm text-muted-foreground">Available all day</p>
                        </div>
                        <div className="space-y-4">
                          {["Sides", "Dessert", "Drinks"].map(category => {
                            const filteredItems = filterMenuItems(menuItems[category] || [], category);
                            
                            return filteredItems.length > 0 && (
                              <div key={category} className="space-y-3">
                                <div className="mb-3">
                                  <h4 className="text-base font-bold text-accent uppercase tracking-wide">{category}</h4>
                                  <div className="h-px bg-border mt-2"></div>
                                </div>
                                {filteredItems.map((item: MenuItem) => (
                                  <div key={item.name} className="rounded-xl bg-card p-4 border border-border hover:bg-muted/30 transition-colors">
                                    <div className="flex items-start justify-between gap-4">
                                      <div className="flex-1">
                                        <h5 className="font-semibold mb-1">{item.name}</h5>
                                        <p className="text-sm text-muted-foreground">{item.description}</p>
                                      </div>
                                      <div className="flex flex-col items-end gap-2 flex-shrink-0">
                                        <span className="text-lg font-bold text-primary whitespace-nowrap">{item.price}</span>
                                        {item.allergens && item.allergens.length > 0 && (
                                          <div className="flex flex-wrap gap-1.5 justify-end">
                                            {item.allergens.map((code) => {
                                              const allergenInfo = Object.values(allergenCodes).find(a => a.code === code);
                                              return allergenInfo ? (
                                                <span
                                                  key={code}
                                                  className="flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold text-white"
                                                  style={{ backgroundColor: allergenInfo.color }}
                                                  title={allergenInfo.name}
                                                >
                                                  {code}
                                                </span>
                                              ) : null;
                                            })}
                                          </div>
                                        )}
                                      </div>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            );
                          })}
                        </div>
                      </CardContent>
                    </Card>
                  )}
                </div>
              ) : location.id === "shake-smart" ? (
                // Shake Smart menu format with filters
                <div className="space-y-10">
                  {/* Breakfast Section */}
                  {(selectedMeal === "all" || selectedMeal === "breakfast") && (
                    <Card className="border-2 bg-card/50 backdrop-blur-sm">
                      <CardContent className="p-6">
                        <div className="mb-6">
                          <h3 className="text-2xl font-bold mb-3 text-accent">BREAKFAST</h3>
                          <div className="text-sm text-muted-foreground space-y-1">
                            <p>Start your day right with nutritious options</p>
                          </div>
                        </div>
                        <div className="space-y-4">
                          {["Toast", "Craft Your Cup"].map(category => {
                            const filteredItems = filterMenuItems(menuItems[category] || [], category);
                            
                            return filteredItems.length > 0 && (
                              <div key={category} className="space-y-3">
                                <div className="mb-3">
                                  <h4 className="text-base font-bold text-accent uppercase tracking-wide">{category}</h4>
                                  <div className="h-px bg-border mt-2"></div>
                                </div>
                                {filteredItems.map((item: MenuItem) => (
                                  <div key={item.name} className="rounded-xl bg-card p-4 border border-border hover:bg-muted/30 transition-colors">
                                    <div className="flex items-start justify-between gap-4">
                                      <div className="flex-1">
                                        <h5 className="font-semibold mb-1">{item.name}</h5>
                                        <p className="text-sm text-muted-foreground">{item.description}</p>
                                      </div>
                                      <div className="flex flex-col items-end gap-2 flex-shrink-0">
                                        <span className="text-lg font-bold text-primary whitespace-nowrap">{item.price}</span>
                                        {item.allergens && item.allergens.length > 0 && (
                                          <div className="flex flex-wrap gap-1.5 justify-end">
                                            {item.allergens.map((code) => {
                                              const allergenInfo = Object.values(allergenCodes).find(a => a.code === code);
                                              return allergenInfo ? (
                                                <span
                                                  key={code}
                                                  className="flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold text-white"
                                                  style={{ backgroundColor: allergenInfo.color }}
                                                  title={allergenInfo.name}
                                                >
                                                  {code}
                                                </span>
                                              ) : null;
                                            })}
                                          </div>
                                        )}
                                      </div>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            );
                          })}
                        </div>
                      </CardContent>
                    </Card>
                  )}

                  {/* Lunch & Anytime Section */}
                  {(selectedMeal === "all" || selectedMeal === "lunch") && (
                    <Card className="border-2 bg-card/50 backdrop-blur-sm">
                      <CardContent className="p-6">
                        <div className="mb-6">
                          <h3 className="text-2xl font-bold mb-3 text-accent">SHAKES, BOWLS & WRAPS</h3>
                          <div className="text-sm text-muted-foreground space-y-1">
                            <p>Fresh, healthy options to fuel your day</p>
                          </div>
                        </div>
                        <div className="space-y-4">
                          {["Shakes", "Bowls", "Wraps"].map(category => {
                            const filteredItems = filterMenuItems(menuItems[category] || [], category);
                            
                            return filteredItems.length > 0 && (
                              <div key={category} className="space-y-3">
                                <div className="mb-3">
                                  <h4 className="text-base font-bold text-accent uppercase tracking-wide">{category}</h4>
                                  <div className="h-px bg-border mt-2"></div>
                                </div>
                                {filteredItems.map((item: MenuItem) => (
                                  <div key={item.name} className="rounded-xl bg-card p-4 border border-border hover:bg-muted/30 transition-colors">
                                    <div className="flex items-start justify-between gap-4">
                                      <div className="flex-1">
                                        <h5 className="font-semibold mb-1">{item.name}</h5>
                                        <p className="text-sm text-muted-foreground">{item.description}</p>
                                      </div>
                                      <div className="flex flex-col items-end gap-2 flex-shrink-0">
                                        <span className="text-lg font-bold text-primary whitespace-nowrap">{item.price}</span>
                                        {item.allergens && item.allergens.length > 0 && (
                                          <div className="flex flex-wrap gap-1.5 justify-end">
                                            {item.allergens.map((code) => {
                                              const allergenInfo = Object.values(allergenCodes).find(a => a.code === code);
                                              return allergenInfo ? (
                                                <span
                                                  key={code}
                                                  className="flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold text-white"
                                                  style={{ backgroundColor: allergenInfo.color }}
                                                  title={allergenInfo.name}
                                                >
                                                  {code}
                                                </span>
                                              ) : null;
                                            })}
                                          </div>
                                        )}
                                      </div>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            );
                          })}
                        </div>
                      </CardContent>
                    </Card>
                  )}

                  {/* All Day Section */}
                  {selectedMeal === "all" && (
                    <Card className="border-2 bg-card/50 backdrop-blur-sm">
                      <CardContent className="p-6">
                        <div className="mb-6">
                          <h3 className="text-2xl font-bold mb-2 text-accent">BEVERAGES & BITES</h3>
                          <p className="text-sm text-muted-foreground">Available all day</p>
                        </div>
                        <div className="space-y-4">
                          {["Beverages & Bites"].map(category => {
                            const filteredItems = filterMenuItems(menuItems[category] || [], category);
                            
                            return filteredItems.length > 0 && (
                              <div key={category} className="space-y-3">
                                <div className="mb-3">
                                  <h4 className="text-base font-bold text-accent uppercase tracking-wide">{category}</h4>
                                  <div className="h-px bg-border mt-2"></div>
                                </div>
                                {filteredItems.map((item: MenuItem) => (
                                  <div key={item.name} className="rounded-xl bg-card p-4 border border-border hover:bg-muted/30 transition-colors">
                                    <div className="flex items-start justify-between gap-4">
                                      <div className="flex-1">
                                        <h5 className="font-semibold mb-1">{item.name}</h5>
                                        <p className="text-sm text-muted-foreground">{item.description}</p>
                                      </div>
                                      <div className="flex flex-col items-end gap-2 flex-shrink-0">
                                        <span className="text-lg font-bold text-primary whitespace-nowrap">{item.price}</span>
                                        {item.allergens && item.allergens.length > 0 && (
                                          <div className="flex flex-wrap gap-1.5 justify-end">
                                            {item.allergens.map((code) => {
                                              const allergenInfo = Object.values(allergenCodes).find(a => a.code === code);
                                              return allergenInfo ? (
                                                <span
                                                  key={code}
                                                  className="flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold text-white"
                                                  style={{ backgroundColor: allergenInfo.color }}
                                                  title={allergenInfo.name}
                                                >
                                                  {code}
                                                </span>
                                              ) : null;
                                            })}
                                          </div>
                                        )}
                                      </div>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            );
                          })}
                        </div>
                      </CardContent>
                    </Card>
                  )}
                </div>
              ) : location.id === "caffeine-lab" || location.id === "chillside-cafe" ? (
                // Café menu format matching Outpost Grill layout
                <div className="space-y-8">
                  {Object.entries(menuItems).map(([category, items]) => {
                    const filteredItems = filterMenuItems(items, category);
                    
                    return filteredItems.length > 0 && (
                      <Card key={category} className="border-2 bg-card/50 backdrop-blur-sm">
                        <CardContent className="p-6">
                          <div className="mb-6">
                            <h3 className="text-2xl font-bold mb-3 text-accent">{category.toUpperCase()}</h3>
                            <div className="h-px bg-border"></div>
                          </div>
                          <div className="space-y-3">
                            {filteredItems.map((item: MenuItem) => (
                              <div key={item.name} className="rounded-xl bg-card p-4 border border-border hover:bg-muted/30 transition-colors">
                                <div className="flex items-start justify-between gap-4">
                                  <div className="flex-1">
                                    <h5 className="font-semibold mb-1">{item.name}</h5>
                                    <p className="text-sm text-muted-foreground">{item.description}</p>
                                  </div>
                                  <div className="flex flex-col items-end gap-2 flex-shrink-0">
                                    <span className="text-lg font-bold text-primary whitespace-nowrap">{item.price}</span>
                                    {item.allergens && item.allergens.length > 0 && (
                                      <div className="flex flex-wrap gap-1.5 justify-end">
                                        {item.allergens.map((code) => {
                                          const allergenInfo = Object.values(allergenCodes).find(a => a.code === code);
                                          return allergenInfo ? (
                                            <span
                                              key={code}
                                              className="flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold text-white"
                                              style={{ backgroundColor: allergenInfo.color }}
                                              title={allergenInfo.name}
                                            >
                                              {code}
                                            </span>
                                          ) : null;
                                        })}
                                      </div>
                                    )}
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              ) : (
                // Default menu layout for other restaurants
                <div className="space-y-8">
                  {Object.entries(menuItems).map(([category, items]) => (
                    <div key={category} className="space-y-3">
                      <h3 className="text-xl font-bold uppercase tracking-wide text-accent border-b pb-2">{category}</h3>
                      {items.map((item) => (
                        <div
                          key={item.name}
                          className="rounded-xl bg-card p-4 border border-border hover:bg-accent/5 transition-colors"
                        >
                          <div className="flex items-start justify-between gap-4">
                            <div className="flex-1">
                              <h4 className="font-semibold mb-1">{item.name}</h4>
                              <p className="text-sm text-muted-foreground">{item.description}</p>
                            </div>
                            <div className="flex items-start gap-3 flex-shrink-0">
                              <span className="text-lg font-bold text-accent whitespace-nowrap">{item.price}</span>
                              <div className="flex flex-wrap gap-1.5 max-w-[80px]">
                                {item.allergens?.map((code) => {
                                  const allergenInfo = Object.values(allergenCodes).find(a => a.code === code);
                                  return allergenInfo ? (
                                    <span
                                      key={code}
                                      className="flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold text-white"
                                      style={{ backgroundColor: allergenInfo.color }}
                                      title={allergenInfo.name}
                                    >
                                      {code}
                                    </span>
                                  ) : null;
                                })}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </section>

          </main>
        </div>
      </div>
    </div>
  );
}
