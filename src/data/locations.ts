
import habitGrillImg from "@/assets/restaurants/habit-grill.jpg";
import shakeSmartImg from "@/assets/restaurants/shake-smart.png";
import thaiMexImg from "@/assets/restaurants/thai-mex.jpg";
import crepesBonaparteImg from "@/assets/restaurants/crepes-bonaparte.webp";
import wetzelsPretzelImg from "@/assets/restaurants/wetzels-pretzel.jpg";
import caffeineLabImg from "@/assets/restaurants/caffeine-lab.jpg";
import chillsideCafeIcon from "@/assets/restaurants/chillside-cafe-icon.png";
import outpostGrillImg from "@/assets/restaurants/outpost-grill.jpg";
import nuggetGrillExpressImg from "@/assets/restaurants/nuggetgrill-express-1.jpg"


export interface Location {
  id: string;
  name: string;
  category: string;
  subcategory?: string;
  hours: {
    [key: string]: string;
  };
  priceRange: string;
  image: string;
  tags: string[];
  links: {
    menu?: string;
    order?: string;
    directions?: string;
  };
  description?: string;
}

export const locations: Location[] = [
  {
    id: "outpost-grill",
    name: "Outpost Grill",
    category: "Restaurants",
    subcategory: "American",
    description: "All-day American grill serving breakfast, charbroiled burgers, sandwiches, bowls, salads, and pizza. From fluffy pancakes to juicy burgers and signature pizzas, Outpost Grill has something for every craving.",
    hours: {
      Mon: "7:30 AM - 7:00 PM",
      Tue: "7:30 AM - 7:00 PM",
      Wed: "7:30 AM - 7:00 PM",
      Thu: "7:30 AM - 7:00 PM",
      Fri: "7:30 AM - 2:00 PM",
      Sat: "Closed",
      Sun: "Closed",
    },
    priceRange: "$5-15",
    image: outpostGrillImg,
    tags: ["Burgers", "Breakfast", "American", "Pizza"],
    links: {
      menu: undefined,
      order: "https://www.grubhub.com/about/campus?utm_source=campus-partner-email&%243p=e_ab&%24original_url=https%3A%2F%2Fwww.grubhub.com%2Fcampus%2Fadd-campus%2F29287%3Futm_source%3Dcampus-partner-email&utm_medium=email_partner&utm_campaign=campus_2020bts_appinstall&utm_content=promo_3offpickup_newdiner&utm_term=allcampus",
      directions: "https://map.concept3d.com/?id=1314#!m/420437",
    },
  },
  {
    id: "shake-smart",
    name: "Shake Smart",
    category: "Restaurants",
    subcategory: "Smoothies & Bowls",
    description: "Premium smoothies, protein shakes, and acai bowls made with fresh ingredients. Perfect for a healthy meal or post-workout refuel with customizable options to fit your nutritional goals.",
    hours: {
      Mon: "7:00 AM - 10:00 PM",
      Tue: "7:00 AM - 10:00 PM",
      Wed: "7:00 AM - 10:00 PM",
      Thu: "7:00 AM - 10:00 PM",
      Fri: "7:00 AM - 8:00 PM",
      Sat: "Closed",
      Sun: "Closed",
    },
    priceRange: "$8-14",
    image: shakeSmartImg,
    tags: ["Smoothies", "Acai Bowls", "Healthy", "Protein Shakes"],
    links: {
      menu: "https://self-ordering.shakesmart.com/order/venue/34/full-menu",
      order: undefined,
      directions: "https://map.concept3d.com/?id=1314#!m/569184?share",
    },
  },
  {
    id: "caffeine-lab",
    name: "Caffeine Lab",
    category: "Cafés",
    subcategory: "Coffee & Energy Drinks",
    description: "Specialty coffee and energy drinks in a modern setting. Perfect spot for studying or grabbing a quick caffeine boost between classes.",
    hours: {
      Mon: "8:00 AM - 8:00 PM",
      Tue: "8:00 AM - 8:00 PM",
      Wed: "8:00 AM - 8:00 PM",
      Thu: "8:00 AM - 8:00 PM",
      Fri: "8:00 AM - 2:00 PM",
      Sat: "Closed",
      Sun: "1:00 PM - 6:00 PM",
    },
    priceRange: "$4-8",
    image: caffeineLabImg,
    tags: ["Coffee", "Energy Drinks", "Study Space"],
    links: {
      menu: undefined,
      directions: "https://map.concept3d.com/?id=1314#!bm/?ct/41689,42539,42540,42541,42542,44590?m/563161?s/?sbc/",
    },
  },
  {
    id: "nugget-grill-express",
    name: "Nugget Grill Express",
    category: "Restaurants",
    subcategory: "American",
    description: "Quick American grill serving burgers, sandwiches, and more",
    hours: {
      Mon: "8:00 AM - 5:00 PM",
      Tue: "8:00 AM - 5:00 PM",
      Wed: "8:00 AM - 5:00 PM",
      Thu: "8:00 AM - 5:00 PM",
      Fri: "8:00 AM - 2:00 PM",
      Sat: "Closed",
      Sun: "Closed",
    },
    priceRange: "$8-14",
    image: nuggetGrillExpressImg,
    tags: ["Burgers", "Sandwiches", "American"],
    links: {
      menu: undefined,
      order: undefined,
      directions: "https://map.concept3d.com/?id=1314#!m/246763?share",
    },
  },
  {
    id: "habit-grill",
    name: "Habit Grill Trailer",
    category: "Food Trucks",
    subcategory: "Best Burgers",
    description: "Chargrilled burgers, sandwiches, and fresh salads",
    hours: {
      Mon: "10:00 AM - 2:00 PM",
      Tue: "10:00 AM - 2:00 PM",
      Wed: "10:00 AM - 2:00 PM",
      Thu: "10:00 AM - 2:00 PM",
      Fri: "10:00 AM - 2:00 PM",
      Sat: "Closed",
      Sun: "Closed",
    },
    priceRange: "$10-15",
    image: habitGrillImg,
    tags: ["burgers", "fresh", "grilled"],
    links: {
      menu: "https://www.google.com/search?client=safari&rls=en&q=habit+grill+menu&ie=UTF-8&oe=UTF-8",
      order: "https://www.grubhub.com",
    },
  },
  {
    id: "thai-mex-cocina",
    name: "Thai Mex Cocina",
    category: "Food Trucks",
    subcategory: "Fusion",
    description: "Fusion of Thai and Mexican flavors in every bite",
    hours: {
      Mon: "11:00-14:00",
      Wed: "11:00-14:00",
      Fri: "11:00-14:00",
    },
    priceRange: "$10-15",
    image: thaiMexImg,
    tags: ["thai", "mexican", "fusion"],
    links: {
      menu: "https://thaimex-cocina.com",
      order: "https://thaimex-cocina.com",
    },
  },
  {
    id: "crepes-bonaparte",
    name: "Crepes Bonaparte",
    category: "Food Trucks",
    subcategory: "Sweet Treats",
    description: "Authentic French crepes, both sweet and savory",
    hours: {
      Mon: "11:00-14:00",
      Tue: "11:00-14:00",
      Thu: "11:00-14:00",
    },
    priceRange: "$8-14",
    image: crepesBonaparteImg,
    tags: ["french", "crepes", "desserts"],
    links: {
      menu: "https://www.crepesbonaparte.com",
      order: "https://www.crepesbonaparte.com",
    },
  },
  {
    id: "wetzel-pretzel",
    name: "Wetzel's Pretzel",
    category: "Food Trucks",
    subcategory: "Quick Bites",
    description: "Fresh-baked pretzels with a variety of flavors and dips",
    hours: {
      Mon: "10:00-15:00",
      Wed: "10:00-15:00",
      Fri: "10:00-15:00",
    },
    priceRange: "$5-10",
    image: wetzelsPretzelImg,
    tags: ["pretzels", "snacks", "quick"],
    links: {
      menu: "https://wetzsidepretzels.com",
      order: "https://wetzsidepretzels.com",
    },
  },
  {
    id: "chillside-cafe",
    name: "Chillside Café",
    category: "Cafés",
    subcategory: "Coffee & Snacks",
    description: "Coffee, pastries, and quick bites near student spaces.",
    hours: {
      Mon: "8:00 AM - 4:00 PM",
      Tue: "8:00 AM - 4:00 PM",
      Wed: "8:00 AM - 4:00 PM",
      Thu: "8:00 AM - 4:00 PM",
      Fri: "8:00 AM - 2:00 PM",
      Sat: "Closed",
      Sun: "Closed",
    },
    priceRange: "$4-10",
    image: chillsideCafeIcon,
    tags: ["Coffee", "Snacks", "Pastries"],
    links: {
      directions: "https://map.concept3d.com/?id=1314",
    },
  },
];

export const categories = [
  { name: "Restaurants", icon: "utensils", count: 2 },
  { name: "Cafés", icon: "coffee", count: 2 },
  { name: "Food Trucks", icon: "truck", count: 4 },
  { name: "Dining Halls", icon: "home", count: 3, link: "/dining-halls" },
  { name: "Vending Machines", icon: "square-stack", count: 5 },
  { name: "Convenience Stores", icon: "shopping-bag", count: 6 },
  { name: "Microwaves", icon: "zap", count: 9 },
];

export const resources = [
  {
    id: "beach-pantry",
    name: "Lauren Chalmers '83 Beach Pantry",
    description: "Free food and essentials for students in need. Open 24/7 with card access.",
    link: "https://asicsulb.org/corporate/discover/beach-pantry",
  },
];

export const studentDeals = [
  {
    id: "outpost-discount",
    name: "Outpost Grill Student Discount",
    description: "10% off all items with valid student ID",
    link: "/restaurants/outpost-grill",
    type: "campus-discount"
  }
];

export const diningApps = [
  {
    id: "fooda",
    name: "Fooda",
    description: "Rotating popup restaurants every weekday. Check today's vendor!",
    link: "https://www.fooda.com/consumer-tech-features",
    icon: "fooda-icon.png"
  },
  {
    id: "grubhub",
    name: "GrubHub",
    description: "Student deals and campus delivery. Order food from your favorite restaurants!",
    link: "https://www.grubhub.com/lets-eat",
    icon: "grubhub-icon.png"
  },
  {
    id: "beach-bites",
    name: "Beach Bites",
    description: "Official CSULB dining app for meal plans, menus, and campus dining info",
    link: "https://csulb.campusdish.com/",
  }
];

export function isOpenNow(hours: { [key: string]: string }): boolean {
  const now = new Date();
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const currentDay = days[now.getDay()];
  const currentTime = now.getHours() * 60 + now.getMinutes();

  const todayHours = hours[currentDay];
  if (!todayHours || todayHours === "Closed") return false;

  // Parse time strings like "8:00 AM - 8:00 PM"
  const timePattern = /(\d+):(\d+)\s*(AM|PM)\s*-\s*(\d+):(\d+)\s*(AM|PM)/i;
  const match = todayHours.match(timePattern);
  
  if (!match) return false;

  let openHour = parseInt(match[1]);
  const openMin = parseInt(match[2]);
  const openPeriod = match[3].toUpperCase();
  let closeHour = parseInt(match[4]);
  const closeMin = parseInt(match[5]);
  const closePeriod = match[6].toUpperCase();

  // Convert to 24-hour format
  if (openPeriod === "PM" && openHour !== 12) openHour += 12;
  if (openPeriod === "AM" && openHour === 12) openHour = 0;
  if (closePeriod === "PM" && closeHour !== 12) closeHour += 12;
  if (closePeriod === "AM" && closeHour === 12) closeHour = 0;

  const openTime = openHour * 60 + openMin;
  const closeTime = closeHour * 60 + closeMin;

  return currentTime >= openTime && currentTime <= closeTime;
}

export function getNextOpeningTime(hours: { [key: string]: string }): string {
  const now = new Date();
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const currentDay = days[now.getDay()];
  
  // Check if open today
  const todayHours = hours[currentDay];
  if (todayHours) {
    const [open] = todayHours.split("-");
    return `Opens ${currentDay} at ${open}`;
  }
  
  // Find next open day
  for (let i = 1; i <= 7; i++) {
    const nextDayIndex = (now.getDay() + i) % 7;
    const nextDay = days[nextDayIndex];
    if (hours[nextDay]) {
      const [open] = hours[nextDay].split("-");
      return `Opens ${nextDay} at ${open}`;
    }
  }
  
  return "Hours not available";
}
