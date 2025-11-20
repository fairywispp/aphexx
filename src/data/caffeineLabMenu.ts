interface MenuItem {
  name: string;
  price: string;
  description: string;
}

interface MenuCategory {
  name: string;
  items: MenuItem[];
}

export const caffeineLabMenu: MenuCategory[] = [
  {
    name: "Signature Coffee Drinks",
    items: [
      { name: "Classic Espresso", price: "$3.50", description: "Rich, bold espresso shot with smooth crema. Contains milk" },
      { name: "Cappuccino", price: "$4.75", description: "Equal parts espresso, steamed milk, and foam. Contains milk" },
      { name: "Caramel Macchiato", price: "$5.25", description: "Vanilla syrup, steamed milk, espresso, and caramel drizzle. Contains milk" },
      { name: "Mocha Latte", price: "$5.50", description: "Espresso with chocolate and steamed milk. Contains milk and soy" },
      { name: "White Chocolate Mocha", price: "$5.75", description: "Creamy white chocolate with espresso and milk. Contains milk and soy" },
    ],
  },
  {
    name: "Seasonal Specials",
    items: [
      { name: "Pumpkin Spice Latte", price: "$6.00", description: "Fall favorite with pumpkin, cinnamon, and nutmeg. Contains milk" },
      { name: "Maple Pecan Latte", price: "$6.25", description: "Maple syrup and toasted pecan flavors. Contains milk and tree nuts" },
      { name: "Gingerbread Latte", price: "$5.95", description: "Warm gingerbread spices with steamed milk. Contains milk and wheat" },
      { name: "Peppermint Mocha", price: "$6.00", description: "Chocolate and peppermint holiday blend. Contains milk and soy" },
    ],
  },
  {
    name: "Energy Drinks",
    items: [
      { name: "Classic Red Bull", price: "$4.50", description: "Original energy boost formula" },
      { name: "Sugar-Free Red Bull", price: "$4.50", description: "Zero sugar, same energy" },
      { name: "Celsius Energy", price: "$4.75", description: "Fitness energy drink with metabolism support" },
      { name: "Bang Energy", price: "$4.75", description: "High caffeine energy drink, multiple flavors" },
      { name: "Monster Energy", price: "$4.50", description: "Classic energy drink in various flavors" },
    ],
  },
  {
    name: "Iced Beverages",
    items: [
      { name: "Iced Americano", price: "$4.25", description: "Espresso shots over ice with cold water" },
      { name: "Iced Latte", price: "$4.95", description: "Espresso with cold milk over ice. Contains milk" },
      { name: "Cold Brew Coffee", price: "$4.75", description: "Smooth, less acidic cold-steeped coffee" },
      { name: "Iced Caramel Macchiato", price: "$5.50", description: "Vanilla, milk, espresso, and caramel over ice. Contains milk" },
      { name: "Vanilla Sweet Cream Cold Brew", price: "$5.25", description: "Cold brew topped with sweet vanilla cream. Contains milk" },
    ],
  },
  {
    name: "Pastries & Snacks",
    items: [
      { name: "Blueberry Muffin", price: "$3.50", description: "Fresh-baked with real blueberries. Contains wheat, eggs, and milk" },
      { name: "Chocolate Croissant", price: "$3.75", description: "Buttery croissant filled with chocolate. Contains wheat, eggs, and milk" },
      { name: "Cinnamon Roll", price: "$4.25", description: "Warm cinnamon swirl with cream cheese frosting. Contains wheat, eggs, and milk" },
      { name: "Breakfast Sandwich", price: "$6.50", description: "Egg, cheese, and choice of bacon or sausage. Contains eggs, milk, and wheat" },
      { name: "Protein Bar", price: "$3.25", description: "High-protein energy bar, various flavors. Contains soy and tree nuts" },
    ],
  },
];
