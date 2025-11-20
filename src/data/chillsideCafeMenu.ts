interface MenuItem {
  name: string;
  price: string;
  description: string;
}

interface MenuCategory {
  name: string;
  items: MenuItem[];
}

export const chillsideCafeMenu: MenuCategory[] = [
  {
    name: "Coffee Classics",
    items: [
      { name: "Drip Coffee", price: "$2.95", description: "Freshly brewed daily blend" },
      { name: "Americano", price: "$3.50", description: "Espresso with hot water" },
      { name: "Latte", price: "$4.50", description: "Espresso with steamed milk. Contains milk" },
      { name: "Cappuccino", price: "$4.50", description: "Espresso with foamed milk. Contains milk" },
      { name: "Flat White", price: "$4.75", description: "Ristretto shots with velvety microfoam. Contains milk" },
    ],
  },
  {
    name: "Specialty Lattes",
    items: [
      { name: "Vanilla Latte", price: "$5.00", description: "Smooth vanilla bean with espresso. Contains milk" },
      { name: "Caramel Latte", price: "$5.25", description: "Sweet caramel and espresso blend. Contains milk" },
      { name: "Hazelnut Latte", price: "$5.00", description: "Nutty hazelnut flavor with espresso. Contains milk and tree nuts" },
      { name: "Lavender Honey Latte", price: "$5.50", description: "Floral lavender with sweet honey. Contains milk" },
      { name: "Chai Latte", price: "$4.95", description: "Spiced chai tea with steamed milk. Contains milk" },
    ],
  },
  {
    name: "Iced Coffee & Cold Brew",
    items: [
      { name: "Iced Coffee", price: "$3.75", description: "Cold brewed coffee over ice" },
      { name: "Iced Latte", price: "$4.75", description: "Espresso with cold milk over ice. Contains milk" },
      { name: "Cold Brew", price: "$4.50", description: "Slow-steeped for 12 hours" },
      { name: "Nitro Cold Brew", price: "$5.25", description: "Cold brew infused with nitrogen" },
      { name: "Vietnamese Iced Coffee", price: "$5.00", description: "Strong coffee with sweetened condensed milk. Contains milk" },
    ],
  },
  {
    name: "Pastries & Baked Goods",
    items: [
      { name: "Butter Croissant", price: "$3.25", description: "Flaky, buttery French pastry. Contains wheat, eggs, and milk" },
      { name: "Almond Croissant", price: "$3.95", description: "Filled with almond cream and topped with almonds. Contains wheat, eggs, milk, and tree nuts" },
      { name: "Banana Nut Muffin", price: "$3.50", description: "Moist muffin with walnuts. Contains wheat, eggs, milk, and tree nuts" },
      { name: "Double Chocolate Cookie", price: "$2.95", description: "Chewy chocolate cookie with chocolate chips. Contains wheat, eggs, milk, and soy" },
      { name: "Scone", price: "$3.50", description: "Various flavors available daily. Contains wheat, eggs, and milk" },
    ],
  },
  {
    name: "Quick Bites",
    items: [
      { name: "Bagel with Cream Cheese", price: "$4.50", description: "Fresh bagel, choice of plain or everything. Contains wheat and milk" },
      { name: "Avocado Toast", price: "$6.95", description: "Smashed avocado on multigrain toast. Contains wheat" },
      { name: "Greek Yogurt Parfait", price: "$5.50", description: "Yogurt with granola and fresh berries. Contains milk" },
      { name: "Fruit Cup", price: "$4.25", description: "Fresh seasonal fruit mix" },
      { name: "Granola Bar", price: "$2.75", description: "Oats, honey, and nuts. Contains tree nuts and soy" },
    ],
  },
];
