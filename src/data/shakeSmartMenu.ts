export interface MenuItem {
  name: string;
  price: number;
  description: string;
}

export interface MenuCategory {
  name: string;
  items: MenuItem[];
}

export const shakeSmartMenu: MenuCategory[] = [
  {
    name: "Shakes",
    items: [
      {
        name: "Chocolate Frosty",
        price: 7.25,
        description: "wendy has nothing on us"
      },
      {
        name: "Vanilla Thrilla",
        price: 7.25,
        description: "the bean that gets you lean!"
      },
      {
        name: "Cookies n' Cream",
        price: 7.25,
        description: "need we say more?"
      },
      {
        name: "Shake Your Coffee",
        price: 7.25,
        description: "cold brew coffee plus protein"
      },
      {
        name: "Strawberry Fields",
        price: 8.25,
        description: "strawberry, vanilla protein"
      },
      {
        name: "Banana Split",
        price: 8.25,
        description: "strawberry, banana, chocolate protein"
      },
      {
        name: "P-B Squared",
        price: 8.25,
        description: "banana, chocolate protein, all natural peanut butter"
      },
      {
        name: "Grammy's Goods",
        price: 8.25,
        description: "cookies n' cream protein, all natural peanut butter"
      },
      {
        name: "Matcha Mentality",
        price: 8.25,
        description: "green tea matcha, vanilla protein"
      },
      {
        name: "Greens to Go",
        price: 8.75,
        description: "spinach, banana, pineapple, orange juice, protein"
      },
      {
        name: "Carrot Cake",
        price: 8.75,
        description: "cinnamon, banana, carrot juice, vanilla protein"
      },
      {
        name: "Organic Supershake",
        price: 9.25,
        description: "organic superfood, banana, vanilla protein, all natural peanut butter"
      },
      {
        name: "A Perfect 10",
        price: 8.75,
        description: "blueberry, banana, vanilla protein, all natural peanut butter"
      },
      {
        name: "Acai Energy",
        price: 8.75,
        description: "acai, banana, vanilla protein, all natural peanut butter"
      },
      {
        name: "Chocolate Covered Strawberry",
        price: 8.75,
        description: "strawberry, acai, chocolate protein"
      },
      {
        name: "Breakfast to Go",
        price: 8.75,
        description: "strawberry, pineapple, acai, orange juice, vanilla protein"
      },
      {
        name: "Fruitopia",
        price: 8.75,
        description: "strawberry, banana, acai, apple juice, protein"
      },
      {
        name: "Mea Aloha",
        price: 8.75,
        description: "pineapple, banana, acai, apple juice, protein"
      },
      {
        name: "Pink Cadillac",
        price: 8.75,
        description: "pitaya, pineapple, orange juice, vanilla protein"
      },
      {
        name: "Shake Your Smoothie",
        price: 8.75,
        description: "caution: you picked them, not us!"
      },
      {
        name: "Shake of the Month",
        price: 8.75,
        description: "ask a team member for more details!"
      }
    ]
  },
  {
    name: "Bowls",
    items: [
      {
        name: "Rawcai Acai Bowl",
        price: 9.75,
        description: "scoops of organic acai, strawberry, topped with granola, banana slices, chia, and coconut flakes"
      },
      {
        name: "Raw-PB Acai Bowl",
        price: 9.75,
        description: "scoops of organic acai, topped with granola, banana slices, dark chocolate, and all natural peanut butter"
      },
      {
        name: "The Buzz Bowl",
        price: 9.75,
        description: "scoops of organic acai, pitaya, pineapple, topped with granola, coconut flakes, and bee pollen"
      },
      {
        name: "Build Your Bowl",
        price: 9.95,
        description: "scoops of organic acai, including not one, not two, not three, but four toppings crafted by you!"
      },
      {
        name: "Original Acai Bowl",
        price: 9.75,
        description: "organic acai, strawberry, apple juice, protein, topped with granola, coconut, and banana slices"
      },
      {
        name: "PB&A Acai Bowl",
        price: 9.75,
        description: "organic acai, strawberry, almond milk, protein, all natural peanut butter, topped with granola, banana slices, and dark chocolate"
      },
      {
        name: "Dragon Bowl",
        price: 9.75,
        description: "pitaya, pineapple, orange juice, vanilla protein, topped with granola, chia, and coconut flakes"
      }
    ]
  },
  {
    name: "Toast",
    items: [
      {
        name: "Peanut Butter Toast",
        price: 4.95,
        description: "all natural peanut butter, hemp seeds, cinnamon, banana slices"
      },
      {
        name: "Almond Butter Toast",
        price: 5.45,
        description: "all natural almond butter, hemp seeds, cinnamon, banana slices"
      },
      {
        name: "Avocado Toast",
        price: 6.25,
        description: "mashed avocados, crumbled feta, sun dried tomatoes, himalayan sea salt, lemon crystals, crushed red pepper"
      },
      {
        name: "Hummus Toast",
        price: 6.25,
        description: "hummus, crumbled feta, sun dried tomatoes, himalayan sea salt, lemon crystals, crushed red pepper"
      },
      {
        name: "Tuna Toast",
        price: 6.25,
        description: "tuna, carrot, onion, celery, swiss cheese, choice of mustard, himalayan sea salt"
      }
    ]
  },
  {
    name: "Beverages & Bites",
    items: [
      {
        name: "Cold Brew Coffee",
        price: 4.45,
        description: "the perfect natural pre-workout or pick me up"
      },
      {
        name: "Green Tea Matcha",
        price: 4.95,
        description: "100% premium matcha, natural caffeine boost"
      },
      {
        name: "Cookie Dough Protein Ball",
        price: 3.95,
        description: "peanut butter, oats, vanilla protein, chia seeds, dark chocolate, cinnamon, organic agave nectar"
      },
      {
        name: "Magic Matcha Protein Ball",
        price: 3.95,
        description: "peanut butter, oats, vanilla protein, green tea matcha, hemp seeds, coconut, organic agave nectar"
      },
      {
        name: "Brownie Batter Protein Ball",
        price: 3.95,
        description: "peanut butter, oats, chocolate plant protein, chia seeds, organic agave nectar"
      },
      {
        name: "16 oz Aluminum Aquafina",
        price: 2.35,
        description: ""
      },
      {
        name: "Sports Cap Life Water",
        price: 2.79,
        description: ""
      },
      {
        name: "1 Liter Life Water",
        price: 3.49,
        description: ""
      },
      {
        name: "Gatorade",
        price: 2.25,
        description: ""
      },
      {
        name: "Bubly Water",
        price: 1.99,
        description: ""
      },
      {
        name: "Apple Juice",
        price: 3.95,
        description: ""
      },
      {
        name: "Carrot Juice",
        price: 4.95,
        description: ""
      },
      {
        name: "Orange Juice",
        price: 3.95,
        description: ""
      },
      {
        name: "G2G Bar",
        price: 3.95,
        description: "fresh. healthy. delicious. protein bars"
      },
      {
        name: "Aloha Bar",
        price: 3.95,
        description: "plant based protein bars packed with nutrition"
      }
    ]
  },
  {
    name: "Craft Your Cup",
    items: [
      {
        name: "Classic Oatmeal",
        price: 4.95,
        description: "classic oatmeal with a steel cut texture"
      },
      {
        name: "Overnight Smart Oats",
        price: 5.45,
        description: "soaked in oat milk, you choose the toppings!"
      },
      {
        name: "Greek Yogurt",
        price: 5.95,
        description: "vanilla greek yogurt base, with a combination of your fave four toppings"
      },
      {
        name: "Chia Seed Pudding",
        price: 5.95,
        description: "chia seed pudding base soaked in almond milk"
      }
    ]
  },
  {
    name: "Wraps",
    items: [
      {
        name: "Veggie Delight",
        price: 9.95,
        description: "spinach, hummus, sun dried tomatoes, artichoke, cucumber, a side of avocado mash"
      },
      {
        name: "Turks and 'Matoes",
        price: 9.95,
        description: "turkey, spinach, onions, sun dried tomatoes, swiss cheese"
      },
      {
        name: "Rubi's Tuna Salad",
        price: 9.95,
        description: "tuna, onions, carrots, celery, spinach, swiss cheese"
      }
    ]
  }
];
