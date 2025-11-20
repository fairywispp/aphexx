import crepesBonaparte from '@/assets/food-trucks/crepes-bonaparte.webp';
import thaiMex from '@/assets/food-trucks/thai-mex.webp';
import wetzelsPretzels from '@/assets/food-trucks/wetzels-pretzel.jpg';
import habitGrill from '@/assets/food-trucks/habit-grill.jpg';
import higherTaste from '@/assets/food-trucks/higher-taste.png';
import citrusRose from '@/assets/food-trucks/citrus-rose.jpg';
import subway from '@/assets/food-trucks/subway.jpg';
import coffeeBean from '@/assets/food-trucks/coffee-bean.webp';
import nuggetGrillExpress from '@/assets/food-trucks/nuggetgrill-express.jpg';
import surferTacoImg from '@/assets/food-trucks/surfer-taco.jpg'; 

export const CURRENT_TIME = new Date();

export interface FoodTruckVendor {
  vendor_id: string;
  name: string;
  category: string;
  cuisine: string[];
  price_range: string;
  status_message: string;
  about: {
    description: string;
    tags: string[];
  };
  images: {
    hero_photo: string;
    food_icon: string;
    slideshow: Array<{
      type: string;
      url: string;
      caption: string;
    }>;
  };
  contact: {
    website_url: string;
    instagram_url: string;
    fooda_order_url: string;
  };
  menu: Array<{
    name: string;
    price: number;
    description: string;
    allergens: string[];
    image_url: string;
  }>;
}

export interface FoodTruckEvent {
  event_id: string;
  vendor_id: string;
  date: string;
  location_name: string;
  start_time: string;
  end_time: string;
}

export const mockFoodTruckVendors: FoodTruckVendor[] = [
  {
    vendor_id: "dds-chick",
    name: "DD's Chick and Cat Shack LLC",
    category: "Food Trucks",
    cuisine: ["Chicken", "American", "Soul Food"],
    price_range: "$10-16",
    status_message: "Check schedule",
    about: {
      description: "Southern-style chicken and comfort food",
      tags: ["chicken", "soul food", "southern"]
    },
    images: {
      hero_photo: habitGrill,
      food_icon: habitGrill,
      slideshow: []
    },
    contact: {
      website_url: "https://ddschickandcatshack.com/",
      instagram_url: "",
      fooda_order_url: ""
    },
    menu: []
  },
  {
    vendor_id: "wetzels-pretzels",
    name: "Wetzel's Pretzel's",
    category: "Food Trucks",
    cuisine: ["Pretzels", "Snacks", "American"],
    price_range: "$5-10",
    status_message: "Check schedule",
    about: {
      description: "Hand-rolled pretzels, baked fresh",
      tags: ["pretzels", "snacks", "sweet"]
    },
    images: {
      hero_photo: wetzelsPretzels,
      food_icon: wetzelsPretzels,
      slideshow: []
    },
    contact: {
      website_url: "https://www.wetzels.com/menu",
      instagram_url: "",
      fooda_order_url: ""
    },
    // WETZEL'S PRETZEL'S MENU
    menu: [
      { name: "Wetzels Original Pretzel", price: 5.00, description: "Classic hand-rolled pretzel.", allergens: ["W"], image_url: "" },
      { name: "Sinful Cinnamon™", price: 5.50, description: "Pretzel dusted with cinnamon sugar.", allergens: ["W"], image_url: "" },
      { name: "Almond Crunch", price: 6.00, description: "Pretzel topped with sweet almond crunch.", allergens: ["W", "N"], image_url: "" },

      { name: "Cheese Meltdown", price: 7.00, description: "Pretzel topped with melted cheese.", allergens: ["W", "D"], image_url: "" },
      { name: "Pepperoni Twist", price: 7.50, description: "Pretzel with pepperoni and cheese.", allergens: ["W", "D"], image_url: "" },
      { name: "Jalapeno Cheese Melt", price: 7.50, description: "Pretzel with jalapeno and cheese.", allergens: ["W", "D"], image_url: "" },

      { name: "Wetzel Dog", price: 8.00, description: "Hot dog wrapped in pretzel dough.", allergens: ["W"], image_url: "" },
      { name: "Cheese Dog", price: 8.50, description: "Hot dog wrapped in pretzel dough with cheese.", allergens: ["W", "D"], image_url: "" },
      { name: "Dog Bites", price: 6.00, description: "Bite-sized pretzel dogs.", allergens: ["W"], image_url: "" },

      { name: "Wetzel Bitz", price: 5.00, description: "Bite-sized plain pretzel pieces.", allergens: ["W"], image_url: "" },
      { name: "Pizza Bitz", price: 6.50, description: "Pretzel bites with pizza sauce and cheese.", allergens: ["W", "D"], image_url: "" },
      { name: "Cin-A-Bitz", price: 6.00, description: "Sweet cinnamon pretzel bites.", allergens: ["W"], image_url: "" },

      { name: "Lemonade", price: 3.50, description: "Original lemonade.", allergens: [], image_url: "" },
      { name: "Frozen Lemonade", price: 4.50, description: "Blended frozen lemonade.", allergens: [], image_url: "" },
      { name: "Pretzel Dips", price: 1.00, description: "Cheddar, Jalapeno Cheese, Pizza Sauce, Caramel, Sweet Glaze.", allergens: ["D"], image_url: "" },
    ]
  },
  {
    vendor_id: "chronic-tacos",
    name: "Chronic Tacos Truck",
    category: "Food Trucks",
    cuisine: ["Mexican", "Tacos", "Burritos"],
    price_range: "$8-15",
    status_message: "Check schedule",
    about: {
      description: "Fresh California-style Mexican food",
      tags: ["mexican", "tacos", "california"]
    },
    images: {
      hero_photo: citrusRose,
      food_icon: citrusRose,
      slideshow: []
    },
    contact: {
      website_url: "https://www.chronictacos.com/",
      instagram_url: "",
      fooda_order_url: ""
    },
    menu: []
  },
  {
    vendor_id: "babys-burgers",
    name: "Baby's Burgers (LA)",
    category: "Food Trucks",
    cuisine: ["Burgers", "American"],
    price_range: "$10-16",
    status_message: "Check schedule",
    about: {
      description: "Classic smash burgers and loaded fries",
      tags: ["burgers", "american", "classic"]
    },
    images: {
      hero_photo: habitGrill,
      food_icon: habitGrill,
      slideshow: []
    },
    contact: {
      website_url: "https://www.babysburgersla.com/",
      instagram_url: "",
      fooda_order_url: ""
    },
    menu: []
  },
  {
    vendor_id: "aloha-fridays",
    name: "Aloha Fridays (Trailer)",
    category: "Food Trucks",
    cuisine: ["Hawaiian", "BBQ", "Fusion"],
    price_range: "$12-18",
    status_message: "Check schedule",
    about: {
      description: "Hawaiian BBQ and island favorites",
      tags: ["hawaiian", "bbq", "island"]
    },
    images: {
      hero_photo: habitGrill,
      food_icon: habitGrill,
      slideshow: []
    },
    contact: {
      website_url: "https://www.instagram.com/alohafridaysla",
      instagram_url: "https://www.instagram.com/alohafridaysla",
      fooda_order_url: ""
    },
    menu: []
  },
  {
    vendor_id: "crepes-bonaparte",
    name: "Crepes Bonaparte",
    category: "Food Trucks",
    cuisine: ["French", "Crepes", "Desserts"],
    price_range: "$2-12", // Updated range based on new menu
    status_message: "Check schedule",
    about: {
      description: "French crepe catering specializing in authentic, made-to-order sweet and savory crepes.",
      tags: ["french", "crepes", "desserts"]
    },
    images: {
      hero_photo: crepesBonaparte, // Using existing imported image
      food_icon: crepesBonaparte,
      slideshow: []
    },
    contact: {
      website_url: "https://www.crepesbonaparte.com/",
      instagram_url: "https://www.instagram.com/crepesbonaparte",
      fooda_order_url: ""
    },
    //  CREPES BONAPARTE MENU
    menu: [
      // DESSERT CREPES
      { name: "Red Velvet Crepe [Seasonal]", price: 10.00, description: "dark chocolate shavings, strawberries & mascarpone, topped with whipped cream & a chocolate drizzle", allergens: ["D"], image_url: "" },
      { name: "HazelBerryAna®", price: 9.50, description: "strawberries, bananas, Nutella®, whipped cream & a chocolate drizzle", allergens: ["N", "D"], image_url: "" },
      { name: "Apple Pomme Pie", price: 9.50, description: "cinnamon apples, mascarpone, whipped cream & a caramel drizzle", allergens: ["D"], image_url: "" },
      { name: "Bananas Foster", price: 9.50, description: "bananas, mascarpone, cinnamon sugar, whipped cream & a caramel drizzle", allergens: ["D"], image_url: "" },
      { name: "Banutter", price: 9.00, description: "bananas, peanut butter, Nutella®, whipped cream & a chocolate drizzle", allergens: ["P", "N", "D"], image_url: "" },
      { name: "CookieBerryAna", price: 10.00, description: "strawberries, bananas, cookie butter, whipped cream & a chocolate drizzle", allergens: ["W", "D"], image_url: "" },
      { name: "Nutella", price: 6.00, description: "chocolate & hazelnut Nutella spread", allergens: ["N"], image_url: "" },
      { name: "Cookie Butter", price: 7.00, description: "cookie butter spread", allergens: ["W"], image_url: "" },
      { name: "Butter & Sugar", price: 6.00, description: "butter & granulated sugar", allergens: ["D"], image_url: "" },
      { name: "Cinnamon & Sugar", price: 6.00, description: "butter & cinnamon sugar", allergens: ["D"], image_url: "" },
      { name: "Lemon & Sugar", price: 6.00, description: "lemon juice, butter & granulated sugar", allergens: ["D"], image_url: "" },
      { name: "Vegan Cookie Butter", price: 7.00, description: "cookie butter [vegan crepe batter]", allergens: ["W"], image_url: "" },
      { name: "Vegan CookieBerryAna", price: 10.00, description: "strawberries, bananas, cookie butter & a chocolate drizzle [vegan crepe batter]", allergens: ["W"], image_url: "" },
      { name: "Build Your Own Dessert Crepe", price: 5.00, description: "Choose the fillings & toppings you'd like to create your own dessert crepe (includes powdered sugar only)", allergens: [], image_url: "" },
      
      // SAVORY & BREAKFAST CREPES
      { name: "Caprese", price: 12.50, description: "mozzarella, tomatoes, garlic pesto & choice of chicken or mushrooms", allergens: ["D"], image_url: "" },
      { name: "Ham & Cheese", price: 8.50, description: "ham & mozzarella with dijon mustard", allergens: ["D"], image_url: "" },
      { name: "No Joke Artichoke", price: 12.50, description: "spinach artichoke parmesan blend, walnuts & choice of chicken or mushrooms", allergens: ["D", "N"], image_url: "" },
      { name: "SouthWestern", price: 12.75, description: "chicken, avocado, grilled peppers & onions, cheddar & chipotle sauce", allergens: ["D"], image_url: "" },
      { name: "Vegan SouthWestern", price: 12.00, description: "avocado, grilled peppers & onions, vegan cheddar & chipotle sauce [vegan crepe batter]", allergens: [], image_url: "" },
      { name: "Build Your Own Savory Crepe", price: 5.00, description: "Choose the fillings & toppings you'd like to create your own savory crepe", allergens: [], image_url: "" },
      { name: "California Sunrise", price: 12.00, description: "bacon, avocado, tomatoes, cheddar & a cage free scrambled egg", allergens: ["D", "E"], image_url: "" },
      { name: "Huevos Frencheros", price: 11.50, description: "avocado, grilled peppers & onions, cheddar, chipotle sauce & a cage free scrambled egg", allergens: ["D", "E"], image_url: "" },
      { name: "Plain Jane", price: 11.00, description: "bacon, ham, cheddar & a cage free scrambled egg", allergens: ["D", "E"], image_url: "" },
      { name: "Wake Up Call", price: 10.25, description: "mozzarella, tomatoes, garlic pesto & a cage free scrambled egg", allergens: ["D", "E"], image_url: "" },

      // KIDS MEAL
      { name: "PBB (Kids Meal)", price: 7.00, description: "peanut butter & banana (includes juice box or milk)", allergens: ["P", "D"], image_url: "" },
      { name: "Crepe-adilla (Kids Meal)", price: 7.00, description: "choice of cheddar or mozzarella (includes juice box or milk)", allergens: ["D"], image_url: "" },
      
      // DRINKS
      { name: "Lemonade (Large)", price: 5.00, description: "blackberry, strawberry, or lavender", allergens: [], image_url: "" },
      { name: "Iced Tea", price: 4.00, description: "24 fl oz (unsweetened, blackberry, lavender, or strawberry)", allergens: [], image_url: "" },
      { name: "Coke", price: 2.50, description: "12 fl oz can", allergens: [], image_url: "" },
      { name: "Diet Coke", price: 2.50, description: "12 fl oz can", allergens: [], image_url: "" },
      { name: "Water", price: 2.50, description: "12 fl oz can", allergens: [], image_url: "" },
      { name: "Sparkling Water", price: 2.50, description: "12 fl oz can (flavor may vary)", allergens: [], image_url: "" },
      { name: "Juice Box", price: 2.00, description: "6 fl oz", allergens: [], image_url: "" },
      { name: "Milk", price: 3.00, description: "7 fl oz (1% low-fat milk)", allergens: ["D"], image_url: "" },
      { name: "Orange Juice", price: 3.00, description: "12 fl oz", allergens: [], image_url: "" },
      { name: "Nutella Hot Chocolate", price: 4.00, description: "12 fl oz", allergens: ["N", "D"], image_url: "" },
      { name: "Hot Tea", price: 2.25, description: "12 fl oz", allergens: [], image_url: "" },

      // COFFEE
      { name: "Americano", price: 3.00, description: "12 fl oz (hot or iced)", allergens: [], image_url: "" },
      { name: "Cappuccino", price: 4.50, description: "12 fl oz", allergens: ["D"], image_url: "" },
      { name: "Latte (Oat Milk)", price: 4.50, description: "12 fl oz (hot or iced, made with oat milk)", allergens: [], image_url: "" },

      // ALCOHOL
      { name: "El Chango™ Lager (Beer)", price: 7.00, description: "Mexican-american Style Lager. 5.3% ABV. (21+ only)", allergens: ["W"], image_url: "" },
      { name: "Rocco Red Ale (Beer)", price: 7.00, description: "Red Ale. 7.1% ABV. (21+ only)", allergens: ["W"], image_url: "" },
      { name: "Chardonnay (Wine)", price: 7.00, description: "187ml bottle. (21+ only)", allergens: [], image_url: "" },
      { name: "Merlot (Wine)", price: 7.00, description: "187ml bottle. (21+ only)", allergens: [], image_url: "" },

      // ICE CREAM & EXTRAS
      { name: "Vanilla Ice Cream", price: 2.00, description: "4 oz cup", allergens: ["D"], image_url: "" },
      { name: "Single Use Utensil Set", price: 0.00, description: "Includes fork, knife & napkin. Included upon request only.", allergens: [], image_url: "" },
    ]
  },
  {
    vendor_id: "smile-hot-dog",
    name: "Smile Hot Dog",
    category: "Food Trucks",
    cuisine: ["Hot Dogs", "American", "Fast Food"],
    price_range: "$5-12",
    status_message: "Check schedule",
    about: {
      description: "Classic hot dogs and loaded toppings",
      tags: ["hot dogs", "american", "fast food"]
    },
    images: {
      hero_photo: habitGrill,
      food_icon: habitGrill,
      slideshow: []
    },
    contact: {
      website_url: "",
      instagram_url: "",
      fooda_order_url: ""
    },
    menu: []
  },
  {
    vendor_id: "gochu-gang",
    name: "Gochu Gang",
    category: "Food Trucks",
    cuisine: ["Korean", "Asian", "Fusion"],
    price_range: "$12-18",
    status_message: "Check schedule",
    about: {
      description: "Korean fusion street food",
      tags: ["korean", "fusion", "spicy"]
    },
    images: {
      hero_photo: thaiMex,
      food_icon: thaiMex,
      slideshow: []
    },
    contact: {
      website_url: "https://getgochu.com/",
      instagram_url: "",
      fooda_order_url: ""
    },
    menu: []
  },
  {
    vendor_id: "asian-street-food",
    name: "Asian Street Food Truck",
    category: "Food Trucks",
    cuisine: ["Asian", "Street Food", "Fusion"],
    price_range: "$10-16",
    status_message: "Check schedule",
    about: {
      description: "Inspired by street food throughout Asia, offering authentic Asian fusion dishes with bold flavors",
      tags: ["asian", "street food", "fusion", "noodles", "dumplings"]
    },
    images: {
      hero_photo: thaiMex,
      food_icon: thaiMex,
      slideshow: []
    },
    contact: {
      website_url: "https://www.asianstreetfood.net",
      instagram_url: "",
      fooda_order_url: ""
    },
    //  ASIAN STREET FOOD MENU
    menu: [
      { name: "Ginger Scallions - Garlic Noodles (Shrimp)", price: 12, description: "Garlicky noodles with ginger scallion sauce and shrimp", allergens: ["SF", "S", "W"], image_url: "" },
      { name: "Ginger Scallions - Garlic Noodles (Beef Bulgogi)", price: 12, description: "Garlicky noodles with ginger scallion sauce and beef bulgogi", allergens: ["S", "W"], image_url: "" },
      { name: "Ginger Scallions - Garlic Noodles (Tofu)", price: 11, description: "Garlicky noodles with ginger scallion sauce and tofu", allergens: ["S", "W"], image_url: "" },
      { name: "Curry Dumplings (Beef)", price: 10, description: "Pan seared beef dumplings with house curry sauce", allergens: ["W", "S"], image_url: "" },
      { name: "Curry Dumplings (Chicken)", price: 10, description: "Pan seared chicken dumplings with house curry sauce", allergens: ["W", "S"], image_url: "" },
      { name: "Curry Dumplings (Vegetarian)", price: 10, description: "Pan seared vegetarian dumplings with house curry sauce", allergens: ["W", "S"], image_url: "" },
      { name: "Nikutori - Meat Ball Skewer (1 skewer)", price: 5, description: "Fried beef meatball with kecap ponzu sauce", allergens: ["S", "W"], image_url: "" },
      { name: "Teriyaki Bowl (Chicken)", price: 11, description: "Chicken served over rice with steamed vegetables and teriyaki sauce", allergens: ["S", "W"], image_url: "" },
      { name: "Teriyaki Bowl (Shrimp)", price: 13, description: "Shrimp served over rice with steamed vegetables and teriyaki sauce", allergens: ["SF", "S", "W"], image_url: "" },
      { name: "Kushi - Skewers (Chicken + Shrimp)", price: 14, description: "Chicken and shrimp skewers with sweet soy sauce and salad", allergens: ["SF", "S", "W"], image_url: "" },
      { name: "Kushi - Skewers (Tofu/Vegan)", price: 11, description: "Tofu skewers with sweet soy sauce and salad", allergens: ["S", "W"], image_url: "" },
    ]
  },
  {
    vendor_id: "wise-barbecue",
    name: "Wise Barbecue",
    category: "Food Trucks",
    cuisine: ["BBQ", "American", "Smoked"],
    price_range: "$12-20",
    status_message: "Check schedule",
    about: {
      description: "Authentic smoked BBQ",
      tags: ["bbq", "smoked", "american"]
    },
    images: {
      hero_photo: habitGrill,
      food_icon: habitGrill,
      slideshow: []
    },
    contact: {
      website_url: "https://www.wisebarbecue.com/",
      instagram_url: "",
      fooda_order_url: ""
    },
    menu: []
  },
  {
    vendor_id: "8e8-thai",
    name: "8E8 Thai Street Food",
    category: "Food Trucks",
    cuisine: ["Thai", "Street Food", "Asian"],
    price_range: "$8-18", // Updated range
    status_message: "Check schedule",
    about: {
      description: "Authentic Thai street food favorites",
      tags: ["thai", "street food", "asian"]
    },
    images: {
      hero_photo: thaiMex,
      food_icon: thaiMex,
      slideshow: []
    },
    contact: {
  
      website_url: "https://www.bestfoodtrucks.com/truck/8e8-thai-food-truck/menu",
      instagram_url: "",
      fooda_order_url: ""
    },
    //  8E8 THAI STREET FOOD MENU 
    menu: [
      // Entrees
      { name: "Drunken Noodles", price: 12.00, description: "Flat rice noodles, vegetables, spicy basil sauce.", allergens: ["W"], image_url: "" },
      { name: "Pad See Ew", price: 12.00, description: "Flat rice noodles with egg, Chinese broccoli, sweet black soy sauce.", allergens: ["E", "W", "S"], image_url: "" },
      { name: "Pad Thai", price: 12.00, description: "Rice noodles, egg, carrot, Chinese leek and bean sprouts with pad Thai sauce, peanuts, lime.", allergens: ["P", "E", "S"], image_url: "" },
      { name: "Thai Fried Rice", price: 12.00, description: "Rice, egg, onion, Chinese broccoli, tomato.", allergens: ["E", "S"], image_url: "" },
      { name: "Pineapple Fried Rice", price: 12.00, description: "Rice, egg, onion, tomato, pineapple, raisins, cashew nuts.", allergens: ["E", "N", "S"], image_url: "" },
      { name: "Spicy Basil Over Rice", price: 15.00, description: "Stir fried choice of meat or tofu, onion, bell peppers with spicy basil sauce over rice.", allergens: ["S"], image_url: "" },
      { name: "Spicy Fried Rice", price: 12.00, description: "Rice, onion, bell pepper, tomato Chinese broccoli with spicy basil sauce.", allergens: ["E", "S"], image_url: "" },
      { name: "Yellow Curry", price: 18.00, description: "Potato, carrots, onion, choice of protein.", allergens: ["D"], image_url: "" },
      { name: "Massanan Curry", price: 18.00, description: "Potato,onion,peanut coconut masanan curry sauce (choices of meat or tofu) white white rice", allergens: ["P", "D"], image_url: "" },
      { name: "Red Curry", price: 18.00, description: "Eggplant, bamboo, red bell peppers, basil with white rice. Choice of protein.", allergens: ["D"], image_url: "" },
      { name: "Spicy Green Curry", price: 18.00, description: "Spicy Green Curry Past w/ Coconutmilk Eggplant, Bell Pepper, Basil and Choise of Protein", allergens: ["D"], image_url: "" },
      
      // Dessert
      { name: "Mango Sticky Rice", price: 8.00, description: "Sweet sticky rice with fresh mango and coconut milk.", allergens: ["D"], image_url: "" },
      
      // Drinks
      { name: "Thai Ice Tea", price: 5.00, description: "Traditional Thai iced tea.", allergens: ["D"], image_url: "" },
      { name: "Thai Ice Coffee", price: 5.00, description: "Traditional Thai iced coffee.", allergens: ["D"], image_url: "" },
      { name: "Diet Coke", price: 2.00, description: "12 fl oz can.", allergens: [], image_url: "" },
      { name: "Coke", price: 2.00, description: "12 fl oz can.", allergens: [], image_url: "" },
      { name: "Sprite", price: 2.00, description: "12 fl oz can.", allergens: [], image_url: "" },
      { name: "Water", price: 2.00, description: "Bottled water.", allergens: [], image_url: "" },
    ]
  },
  {
    vendor_id: "thai-mex-cocina",
    name: "Thai Mex Cocina",
    category: "Food Trucks",
    cuisine: ["Thai", "Mexican", "Fusion"],
    price_range: "$10-18",
    status_message: "Check schedule",
    about: {
      description: "Unique fusion of Thai and Mexican flavors",
      tags: ["thai", "mexican", "fusion"]
    },
    images: {
      hero_photo: thaiMex,
      food_icon: thaiMex,
      slideshow: []
    },
    contact: {
      website_url: "https://thaimex-cocina.com/",
      instagram_url: "",
      fooda_order_url: ""
    },
    menu: []
  },
  {
    vendor_id: "surfer-taco",
    name: "The Surfer Taco",
    category: "Food Trucks",
    cuisine: ["Mexican", "Tacos", "Beach Food"],
    price_range: "$8-22",
    status_message: "Check schedule",
    about: {
      description: "Fresh tacos with a beach vibe",
      tags: ["mexican", "tacos", "beach"]
    },
    images: {
      hero_photo: surferTacoImg,
      food_icon: surferTacoImg,
      slideshow: []
    },
    contact: {
      website_url: "https://www.bestfoodtrucks.com/truck/the-surfer-taco/menu",
      instagram_url: "",
      fooda_order_url: ""
    },
    //  THE SURFER TACO MENU
    menu: [
      // Entrees
      { name: "Burrito", price: 13.00, description: "Flour Tortilla, choice of meat (carne asada, chicken, al pastor), beans, rice, onions, cilantro, cheese, lettuce and salsa on the side.", allergens: ["D", "W"], image_url: "" },
      { name: "Quesadilla (Vegetarian)", price: 12.00, description: "Flour Tortilla; melted cheese, black beans & pico de Gallo.", allergens: ["D", "W"], image_url: "" },
      { name: "Three Amigos Tacos", price: 18.00, description: "1 Fish Taco, 1 Shrimp Taco & 1 Lobster Taco; topped with cabbage, Pico de Gallo and special sauce.", allergens: ["F", "SF"], image_url: "" },
      { name: "2 Fish Tacos", price: 12.00, description: "2 Fish Tacos; topped with cabbage, tomatoes and special sauce.", allergens: ["F"], image_url: "" },
      { name: "3 Meat Tacos", price: 12.00, description: "Corn Tortillas in a form of Taco; topped with meat, onions & cilantro. Salsa on the side.", allergens: [], image_url: "" },
      { name: "California Burrito", price: 15.00, description: "Your choice of protein, fries, cheese, sour cream and guacamole.", allergens: ["D", "W"], image_url: "" },
      { name: "2 Shrimp Tacos", price: 12.00, description: "Grilled shrimp, cabbage, tomatoes and special sauce.", allergens: ["SF"], image_url: "" },
      { name: "Lobster Quesadilla", price: 22.00, description: "Melted cheese, Lobster, cabbage, pico de Gallo and special sauce.", allergens: ["D", "SF", "W"], image_url: "" },
      { name: "Shrimp Burrito", price: 15.00, description: "Shrimp, beans, rice, onions, cilantro, cabbage, cheese and special sauce.", allergens: ["D", "SF", "W"], image_url: "" },
      { name: "Surfer Loaded Nachos", price: 14.00, description: "Crispy corn tortillas; topped with choice of protein, beans, cheese, sour cream and pico de Gallo.", allergens: ["D"], image_url: "" },
      { name: "2 Lobster Tacos", price: 20.00, description: "Cabbage, pico de gallo and special sauce.", allergens: ["SF"], image_url: "" },
      { name: "Lobster Burrito", price: 22.00, description: "Lobster, beans (black or pinto), rice, cabbage, pico de gallo, salsa and cheese.", allergens: ["D", "SF", "W"], image_url: "" },
      { name: "Tofu Burrito (Vegan/Vegetarian)", price: 16.00, description: "Tofu, beans, rice, onions, cilantro, tomatoes, lettuce & guacamole.", allergens: ["S", "W"], image_url: "" },
      { name: "Surf & Turf Burrito", price: 17.00, description: "Shrimp/steak, chicken or pork .bean, rice, onions, cilantro, lettuce, cheese and special sauce.", allergens: ["D", "SF", "W"], image_url: "" },
      { name: "3 Tofu Tacos (Vegan/Vegetarian)", price: 15.00, description: "Tofu, beans, rice, lettuce, onions, cilantro & guacamole.", allergens: ["S"], image_url: "" },
      { name: "Protein Bowl", price: 13.00, description: "Choice of meat with beans, rice, pico de gallo, cheese, lettuce and bell pepper.", allergens: ["D"], image_url: "" },
      { name: "Bean & Cheese Burrito", price: 8.00, description: "Flour Tortilla in form of Burrito; beans & cheese.", allergens: ["D", "W"], image_url: "" },
      { name: "Cali Breakfast Burrito", price: 15.00, description: "Scrambled eggs, cheese, diced potatoes, guacamole & sour cream.", allergens: ["E", "D", "W"], image_url: "" },
      { name: "Shrimp Quesadilla", price: 15.00, description: "Flour Tortilla filled with melted cheese, shrimp, pico de Gallo & special sauce.", allergens: ["D", "SF", "W"], image_url: "" },
      { name: "Fish Burrito", price: 15.00, description: "Grilled fish, rice, beans, cheese, cabbage, onions, cilantro & special sauce.", allergens: ["F", "D", "W"], image_url: "" },
      
      // Sides/Apps
      { name: "Guacamole", price: 10.00, description: "Smashed Avocados combined with diced tomatoes, onion & cilantro.", allergens: [], image_url: "" },
      { name: "Loaded Fries", price: 14.00, description: "Fries, Сheese, Pico de Gallo, Sour Cream. Choose your meat: Carme Asada, Chicken, Tinga, Al Pastor.", allergens: ["D"], image_url: "" },
      
      // Dessert & Drinks
      { name: "1 Churro", price: 3.00, description: "Fried dough pastry dusted with sugar and cinnamon.", allergens: ["W"], image_url: "" },
      { name: "Mexican Flan", price: 5.00, description: "Made using whole eggs, condensed and evaporated milk, covered with a simple light sugar syrup.", allergens: ["E", "D"], image_url: "" },
      { name: "Coke Products", price: 3.00, description: "Diet coke, sprite, coke zero, regular coke.", allergens: [], image_url: "" },
      { name: "Mexican Coke", price: 5.00, description: "Bottled Coke made with real sugar.", allergens: [], image_url: "" },
      { name: "Jarritos", price: 5.00, description: "Mandarin, Pineapple, Tamarind, Lime flavors.", allergens: [], image_url: "" },
      { name: "Horchata", price: 5.00, description: "Mexican rice, milk cinnamon water.", allergens: ["D"], image_url: "" },
    ]
  },
  {
    vendor_id: "stopbye-cafe",
    name: "StopBye Cafe",
    category: "Food Trucks",
    cuisine: ["Cafe", "Coffee", "Snacks"],
    price_range: "$5-12",
    status_message: "Check schedule",
    about: {
      description: "Quick cafe bites and coffee",
      tags: ["cafe", "coffee", "snacks"]
    },
    images: {
      hero_photo: coffeeBean,
      food_icon: coffeeBean,
      slideshow: []
    },
    contact: {
      website_url: "https://stopbyecafe.com",
      instagram_url: "",
      fooda_order_url: ""
    },
    menu: []
  }
];

export const mockFoodTruckEvents: FoodTruckEvent[] = [
  // Tue Nov 18 2025
  { event_id: "evt-001", vendor_id: "asian-street-food", date: "2025-11-18", location_name: "Friendship Walk (HHS1 West Lawn)", start_time: "11:00 AM", end_time: "3:00 PM" },
  
  // Wed Nov 19 2025
  { event_id: "evt-002", vendor_id: "wetzels-pretzels", date: "2025-11-19", location_name: "Friendship Walk (HHS1 West Lawn)", start_time: "11:00 AM", end_time: "3:00 PM" },
  
  // Thu Nov 20 2025
  { event_id: "evt-003", vendor_id: "8e8-thai", date: "2025-11-20", location_name: "Friendship Walk (HHS1 West Lawn)", start_time: "11:00 AM", end_time: "3:00 PM" },
  
  // Mon Dec 01 2025
  { event_id: "evt-004", vendor_id: "surfer-taco", date: "2025-12-01", location_name: "Friendship Walk (HHS1 West Lawn)", start_time: "11:00 AM", end_time: "3:00 PM" },
  
  // Tue Dec 02 2025
  { event_id: "evt-005", vendor_id: "crepes-bonaparte", date: "2025-12-02", location_name: "Friendship Walk (HHS1 West Lawn)", start_time: "11:00 AM", end_time: "3:00 PM" },
  
  // Wed Dec 03 2025
  { event_id: "evt-006", vendor_id: "wetzels-pretzels", date: "2025-12-03", location_name: "Friendship Walk (HHS1 West Lawn)", start_time: "11:00 AM", end_time: "3:00 PM" },
  
  // Thu Dec 04 2025
  { event_id: "evt-007", vendor_id: "stopbye-cafe", date: "2025-12-04", location_name: "Friendship Walk (HHS1 West Lawn)", start_time: "11:00 AM", end_time: "3:00 PM" },
  
  // Mon Dec 08 2025
  { event_id: "evt-008", vendor_id: "thai-mex", date: "2025-12-08", location_name: "Friendship Walk (HHS1 West Lawn)", start_time: "11:00 AM", end_time: "3:00 PM" },
  
  // Tue Dec 09 2025
  { event_id: "evt-009", vendor_id: "crepes-bonaparte", date: "2025-12-09", location_name: "Friendship Walk (HHS1 West Lawn)", start_time: "11:00 AM", end_time: "3:00 PM" },
  
  // Wed Dec 10 2025
  { event_id: "evt-010", vendor_id: "wetzels-pretzels", date: "2025-12-10", location_name: "Friendship Walk (HHS1 West Lawn)", start_time: "11:00 AM", end_time: "3:00 PM" },
  
  // Mon Dec 08 2025
  { event_id: "evt-020", vendor_id: "dds-chick", date: "2025-12-08", location_name: "Central Quad (LH1)", start_time: "11:00 AM", end_time: "3:00 PM" },
  { event_id: "evt-021", vendor_id: "thai-mex-cocina", date: "2025-12-08", location_name: "Friendship Walk (HHS1 West Lawn)", start_time: "11:00 AM", end_time: "3:00 PM" },
  
  // Tue Dec 09 2025
  { event_id: "evt-022", vendor_id: "wetzels-pretzels", date: "2025-12-09", location_name: "Central Quad (LH1)", start_time: "11:00 AM", end_time: "3:00 PM" },
  { event_id: "evt-023", vendor_id: "crepes-bonaparte", date: "2025-12-09", location_name: "Friendship Walk (HHS1 West Lawn)", start_time: "11:00 AM", end_time: "3:00 PM" },
  
  // Wed Dec 10 2025
  { event_id: "evt-024", vendor_id: "crepes-bonaparte", date: "2025-12-10", location_name: "Central Quad (LH1)", start_time: "11:00 AM", end_time: "3:00 PM" },
  { event_id: "evt-025", vendor_id: "wetzels-pretzels", date: "2025-12-10", location_name: "Friendship Walk (HHS1 West Lawn)", start_time: "11:00 AM", end_time: "3:00 PM" }
];

/**
 * Check if a vendor is currently open based on real-time
 */
export function isVendorOpenNow(vendorId: string): boolean {
  const now = CURRENT_TIME;
  const today = now.toISOString().split('T')[0];
  const currentDay = now.getDay();
  const currentHours = now.getHours();
  const currentMinutes = now.getMinutes();
  
  // Specific vendor hours
  if (vendorId === 'habit-grill') {
    return currentDay >= 1 && currentDay <= 5 && currentHours >= 10 && currentHours < 14;
  }
  if (vendorId === 'nugget-grill-express') {
    if (currentDay >= 1 && currentDay <= 4) return currentHours >= 8 && currentHours < 17;
    if (currentDay === 5) return currentHours >= 8 && currentHours < 14;
    return false;
  }
  if (vendorId === 'thai-mex-cocina' || vendorId === 'wetzels-pretzels') {
    return currentHours >= 11 && currentHours < 15;
  }
  
  const todayEvents = mockFoodTruckEvents.filter(e => e.vendor_id === vendorId && e.date === today);
  if (todayEvents.length === 0) return false;
  
  return todayEvents.some(event => {
    // Handling time string conversion (AM/PM)
    const parseTime = (timeStr: string) => {
        let [hourStr, minuteStr] = timeStr.split(':').map(s => s.trim());
        const isPM = minuteStr.includes('PM');
        
        // Remove AM/PM and parse
        minuteStr = minuteStr.replace(/ (AM|PM)/i, '');
        let hour = parseInt(hourStr);
        const minute = parseInt(minuteStr);
        
        if (isPM && hour !== 12) hour += 12;
        if (!isPM && hour === 12) hour = 0; // Midnight case
        
        return hour * 60 + minute;
    };
    
    const startMinutes = parseTime(event.start_time);
    const endMinutes = parseTime(event.end_time);
    const currentMinutes = now.getHours() * 60 + now.getMinutes();
    
    // Check for event open period
    return currentMinutes >= startMinutes && currentMinutes <= endMinutes;
  });
}

/**
 * Get events happening today for specific locations
 */
export function getTodaysEventsByLocation(locationName?: string): FoodTruckEvent[] {
  const today = CURRENT_TIME.toISOString().split('T')[0];
  let events = mockFoodTruckEvents.filter(event => event.date === today);
  
  if (locationName) {
    events = events.filter(event => event.location_name === locationName);
  }
  
  return events;
}