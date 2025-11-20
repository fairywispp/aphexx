interface MenuItem {
  name: string;
  price: number;
  description: string;
}

interface MenuCategory {
  name: string;
  items: MenuItem[];
}

export const stopbyeCafeMenu: MenuCategory[] = [
  {
    name: "Coffee & Espresso",
    items: [
      { name: "Americano", price: 3.25, description: "Bold espresso with hot water" },
      { name: "Latte", price: 4.50, description: "Smooth espresso with steamed milk" },
      { name: "Cappuccino", price: 4.50, description: "Equal parts espresso, steamed milk, and foam" },
      { name: "Mocha", price: 5.00, description: "Espresso with chocolate and steamed milk" },
      { name: "Drip Coffee", price: 2.75, description: "Freshly brewed house blend" },
    ],
  },
  {
    name: "Cold Beverages",
    items: [
      { name: "Iced Coffee", price: 3.75, description: "Cold brew over ice" },
      { name: "Iced Latte", price: 4.95, description: "Espresso with cold milk over ice" },
      { name: "Cold Brew", price: 4.25, description: "Smooth, slow-steeped coffee" },
      { name: "Iced Mocha", price: 5.25, description: "Chocolate espresso over ice" },
      { name: "Frappuccino", price: 5.50, description: "Blended coffee drink with whipped cream" },
    ],
  },
  {
    name: "Breakfast Items",
    items: [
      { name: "Breakfast Burrito", price: 6.95, description: "Eggs, cheese, potatoes, choice of bacon or sausage" },
      { name: "Bagel with Cream Cheese", price: 3.50, description: "Fresh bagel, choice of plain or everything" },
      { name: "Avocado Toast", price: 6.50, description: "Smashed avocado on multigrain toast" },
      { name: "Egg & Cheese Sandwich", price: 5.95, description: "Fresh eggs and cheddar on a toasted English muffin" },
    ],
  },
  {
    name: "Pastries & Snacks",
    items: [
      { name: "Blueberry Muffin", price: 3.25, description: "Fresh-baked with real blueberries" },
      { name: "Croissant", price: 2.95, description: "Buttery, flaky French pastry" },
      { name: "Banana Bread", price: 3.50, description: "Moist homemade banana bread" },
      { name: "Cookies", price: 2.50, description: "Chocolate chip or oatmeal raisin" },
      { name: "Granola Bar", price: 2.25, description: "Healthy snack bar with oats and honey" },
    ],
  },
  {
    name: "Quick Bites",
    items: [
      { name: "Turkey Sandwich", price: 7.95, description: "Fresh turkey, lettuce, tomato, and mayo" },
      { name: "Ham & Cheese", price: 7.50, description: "Sliced ham with Swiss cheese" },
      { name: "Veggie Wrap", price: 6.95, description: "Hummus, veggies, and greens in a tortilla" },
      { name: "Fruit Cup", price: 4.25, description: "Fresh seasonal fruit mix" },
    ],
  },
];
