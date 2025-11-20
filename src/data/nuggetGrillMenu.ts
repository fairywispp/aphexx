export interface MenuItem {
  name: string;
  price: number;
  description: string;
}

export interface MenuCategory {
  name: string;
  items: MenuItem[];
}

export const nuggetGrillMenu: MenuCategory[] = [
  {
    name: "Breakfast",
    items: [
      {
        name: "Breakfast Burrito",
        price: 10.49,
        description: "Two scrambled eggs, tator nuggets, cheddar cheese, choice of bacon or turkey sausage, wrapped in a flour tortilla. Served with a side of roasted salsa. Contains eggs, milk, soy, and wheat"
      },
      {
        name: "Breakfast Burrito no meat",
        price: 8.29,
        description: "Two scrambled eggs, crispy tater tots, cheddar cheese. Served with a side of salsa. Contains eggs, milk, soy, and wheat"
      },
      {
        name: "Breakfast Sandwich",
        price: 7.49,
        description: "Scrambled eggs, cheddar cheese, choice of bacon or turkey sausage on sourdough or bagel (plain or everything). Contains eggs, milk, soy, and wheat"
      },
      {
        name: "Breakfast Sandwich no meat",
        price: 4.99,
        description: "Scrambled eggs, cheddar cheese on sourdough or bagel (plain or everything). Contains eggs, milk, soy, and wheat"
      },
      {
        name: "Bagel & Shmear",
        price: 4.49,
        description: "Choice of toasted bagel plain or everything with your choice of cream cheese: plain, garlic herb, or strawberry. Contains milk, wheat, and sesame seeds"
      },
      {
        name: "Beachside Toast",
        price: 9.49,
        description: "Open faced toast with garlic herb cream cheese, avocado, tomato, cucumber, shaved red onion, capers, dill, and herb vinaigrette. Choice of plain bagel, everything or sourdough toast. Contains milk, wheat, and sesame seeds"
      },
      {
        name: "Avocado Toast",
        price: 7.99,
        description: "Toasted sourdough, smashed avocado, hard-boiled egg, pickled red onion, & drizzled with sriracha mayo. Contains eggs, soy, and wheat"
      },
      {
        name: "Spam & Egg Burrito",
        price: 9.99,
        description: "Grilled spam, scrambled eggs, wrapped in a flour tortilla. Contains eggs, wheat, soy, and milk"
      },
      {
        name: "Spam & Egg Bowl",
        price: 10.99,
        description: "Grilled spam, scrambled eggs, served in a bowl. Contains eggs, soy, and milk"
      },
      {
        name: "Pupusa Special",
        price: 10.99,
        description: "Bean and Cheese pupusas with curtido, lime zest crema, yucca fries and sriracha ketchup. Contains milk, soy, and wheat"
      }
    ]
  },
  {
    name: "Lunch",
    items: [
      {
        name: "Falafel Salad Wrap",
        price: 8.99,
        description: "Crispy falafel, lettuce, tomato, cucumbers, onion, feta cheese, tzatziki sauce in a warm tortilla. Contains milk, soy, wheat, and sesame seeds"
      },
      {
        name: "K-town Sunrise Wrap",
        price: 9.99,
        description: "Crispy tofu, kimchi slaw, cheddar cheese, and gochujang mayo wrapped in a warm flour tortilla. Contains milk, soy, and wheat"
      },
      {
        name: "Spicy Honey Crunch Chicken Sandwich",
        price: 12.29,
        description: "Crispy chicken tossed in honey-sriracha sauce with slaw on a toasted brioche bun. Contains eggs, soy, and wheat"
      },
      {
        name: "Turkey Blat",
        price: 8.99,
        description: "Roasted turkey, bacon, lettuce, avocado, tomato and mayo on toasted sourdough. Contains eggs, soy, and wheat"
      },
      {
        name: "Grilled Cheese",
        price: 5.49,
        description: "Cheddar cheese on grilled sourdough bread. Contains milk, soy, and wheat"
      },
      {
        name: "BLT",
        price: 7.29,
        description: "Crispy bacon, lettuce, and tomato with mayo on toasted sourdough. Contains soy and wheat"
      },
      {
        name: "Honey Crisp Chicken Sandwich",
        price: 7.99,
        description: "Crispy southern-style fried chicken, with honey Dijon dressing, & pickles, served on a brioche bun. Contains eggs, soy, and wheat"
      },
      {
        name: "Cali Cheeseburger",
        price: 9.49,
        description: "Beef patty, pepperjack cheese, chipotle aioli, jalapenos, lettuce, tomato, onion, avocado, pickles on a toasted brioche bun. Contains eggs, milk, soy, and wheat"
      },
      {
        name: "Chicken Tenders",
        price: 7.89,
        description: "Southern style breaded chicken tenders served with your choice of dipping sauce. Contains wheat and soy"
      },
      {
        name: "Chicken Tenders & Tator Nuggets",
        price: 11.38,
        description: "Southern style breaded chicken tenders served with golden Tator Nuggets and your choice of dipping sauce. Contains wheat and soy"
      },
      {
        name: "Tator tots",
        price: 3.00,
        description: "Crispy golden tator nuggets. Contains soy"
      },
      {
        name: "Birria Loaded Tots",
        price: 6.99,
        description: "Golden Tator Nuggets topped with cheese, birria made with beef, onions, cilantro, jalapenos, and sour cream. Contains milk and soy"
      },
      {
        name: "Tender Town",
        price: 8.89,
        description: "All things fried chicken tenders tossed in your favorite sauce! Contains wheat and soy"
      },
      {
        name: "Birria Burrito",
        price: 11.99,
        description: "Savory beef birria, frijoles de olla, cilantro rice, Pico de Gallo, shredded cheddar cheese, avocado, wrapped in a flour tortilla. Served with roasted red salsa. Contains milk, soy, and wheat"
      },
      {
        name: "Crispy Chicken Cobb Salad",
        price: 12.99,
        description: "Herb marinated crispy chicken, lettuce, tomato, cucumber, bacon, shredded cheese, cheddar cheese, hardboiled egg, served with choice of BBQ ranch dressing or honey dijon dressing. Contains eggs, milk, and soy"
      },
      {
        name: "Garden Salad",
        price: 3.29,
        description: "Lettuce, tomatoes, cucumbers"
      }
    ]
  },
  {
    name: "Breakfast Sides",
    items: [
      {
        name: "Sourdough Toast",
        price: 2.89,
        description: "Toasted sourdough. Contains wheat and soy"
      },
      {
        name: "Toasted Bagel with cream cheese",
        price: 4.49,
        description: "Choice of plain or everything. Contains milk, wheat, and sesame seeds"
      },
      {
        name: "Toasted Bagel with butter",
        price: 4.49,
        description: "Choice of plain or everything. Contains milk, wheat, and sesame seeds"
      },
      {
        name: "Side 2 Egg",
        price: 4.69,
        description: "Two eggs any style. Contains eggs"
      }
    ]
  },
  {
    name: "Sides",
    items: [
      {
        name: "Side Ranch",
        price: 0.80,
        description: "Ranch dipping sauce. Contains milk and eggs"
      },
      {
        name: "Side Salsa",
        price: 0.80,
        description: "Roasted salsa"
      },
      {
        name: "Side Buffalo",
        price: 0.80,
        description: "Buffalo sauce"
      },
      {
        name: "Side 1000",
        price: 0.80,
        description: "Thousand Island dressing. Contains eggs"
      },
      {
        name: "Side BBQ",
        price: 0.80,
        description: "BBQ sauce"
      },
      {
        name: "Side Gochujang",
        price: 0.80,
        description: "Gochujang mayo. Contains eggs and soy"
      },
      {
        name: "Side Honey Dijon",
        price: 0.80,
        description: "Honey Dijon dressing. Contains eggs"
      },
      {
        name: "Side Chipotle",
        price: 0.80,
        description: "Chipotle aioli. Contains eggs"
      },
      {
        name: "Plain Cream Cheese",
        price: 0.80,
        description: "Plain cream cheese. Contains milk"
      }
    ]
  },
  {
    name: "Dessert",
    items: [
      {
        name: "Strawberry Italian Ice Squeeze Ups",
        price: 2.99,
        description: "Frozen strawberry Italian ice"
      },
      {
        name: "Icee Blue Raspberry Squeeze Ups",
        price: 2.99,
        description: "Frozen blue raspberry ice"
      }
    ]
  },
  {
    name: "Drinks",
    items: [
      {
        name: "Pepsi 20oz",
        price: 2.14,
        description: "Pepsi cola"
      },
      {
        name: "Starry 20oz",
        price: 2.14,
        description: "Starry lemon-lime soda"
      },
      {
        name: "Diet Pepsi 20oz",
        price: 2.14,
        description: "Diet Pepsi"
      },
      {
        name: "Pepsi Cherry 20oz",
        price: 2.14,
        description: "Cherry Pepsi"
      },
      {
        name: "Pepsi Zero 20oz",
        price: 2.14,
        description: "Pepsi Zero Sugar"
      },
      {
        name: "Mountain Dew 20oz",
        price: 2.14,
        description: "Mountain Dew"
      },
      {
        name: "Mountain Dew Diet 20oz",
        price: 2.14,
        description: "Diet Mountain Dew"
      },
      {
        name: "Mountain Dew Baja 20oz",
        price: 2.14,
        description: "Mountain Dew Baja Blast"
      },
      {
        name: "Crush Orange 20oz",
        price: 2.14,
        description: "Orange Crush"
      },
      {
        name: "Mug Root Beer 20oz",
        price: 2.14,
        description: "Mug Root Beer"
      },
      {
        name: "Aquafina Aluminum 16oz",
        price: 2.34,
        description: "Bottled water"
      },
      {
        name: "Gatorade Lime Cucumber 20oz",
        price: 2.14,
        description: "Lime cucumber Gatorade"
      },
      {
        name: "Gatorade Glacier Freeze 20oz",
        price: 2.14,
        description: "Glacier freeze Gatorade"
      },
      {
        name: "Gatorade Lemon Lime 20oz",
        price: 2.14,
        description: "Lemon lime Gatorade"
      },
      {
        name: "Gatorade Fruit Punch 20oz",
        price: 2.14,
        description: "Fruit punch Gatorade"
      },
      {
        name: "Gatorade Zero 20oz",
        price: 2.09,
        description: "Gatorade Zero"
      },
      {
        name: "Lipton Pure Leaf Unsweetened 16.9oz",
        price: 2.64,
        description: "Unsweetened black tea"
      },
      {
        name: "Lipton Pure Leaf Sweet 16.9oz",
        price: 2.64,
        description: "Sweet tea"
      },
      {
        name: "Starbucks Espresso and Cream 6.5oz",
        price: 4.69,
        description: "Starbucks espresso drink. Contains milk"
      },
      {
        name: "Celsius Peach Vibes 12oz",
        price: 4.04,
        description: "Peach vibes energy drink"
      },
      {
        name: "Celsius Tropical Vibe 11oz",
        price: 4.04,
        description: "Tropical vibe energy drink"
      },
      {
        name: "Celsius Peach Mango 12oz",
        price: 4.04,
        description: "Peach mango energy drink"
      },
      {
        name: "Muscle Milk Vanilla 14oz",
        price: 5.59,
        description: "Vanilla protein shake. Contains milk"
      },
      {
        name: "Muscle Milk Chocolate 14oz",
        price: 5.59,
        description: "Chocolate protein shake. Contains milk"
      }
    ]
  }
];
