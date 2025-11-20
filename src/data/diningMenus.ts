export interface AllergenCode {
  code: string;
  name: string;
  color: string;
}

export const allergens: AllergenCode[] = [
  { code: "M", name: "Milk", color: "hsl(0, 70%, 50%)" },
  { code: "E", name: "Eggs", color: "hsl(45, 90%, 50%)" },
  { code: "F", name: "Fish", color: "hsl(200, 80%, 50%)" },
  { code: "W", name: "Wheat", color: "hsl(30, 60%, 45%)" },
  { code: "P", name: "Peanuts", color: "hsl(25, 70%, 40%)" },
  { code: "TN", name: "Tree Nuts", color: "hsl(20, 50%, 35%)" },
  { code: "S", name: "Soy", color: "hsl(280, 60%, 50%)" },
  { code: "SF-C", name: "Shellfish", color: "hsl(180, 70%, 45%)" },
  { code: "SS", name: "Sesame", color: "hsl(35, 55%, 50%)" },
];

export interface MenuItem {
  name: string;
  allergens: string[];
  image?: string;
}

export interface MenuSection {
  title: string;
  items: MenuItem[];
}

export interface DiningHallMenu {
  breakfast: MenuSection[];
  lunch: MenuSection[];
  dinner: MenuSection[];
}

export interface WeekMenu {
  weekOf: string;
  cycleNumber: number;
  days: {
    [day: string]: {
      [hall: string]: DiningHallMenu;
    };
  };
}

// Week to cycle mapping for Fall 2025
export const weekToCycleMap: { [weekOf: string]: number } = {
  "Aug 25": 1,
  "Sept 1": 2,
  "Sept 8": 3,
  "Sept 15": 4,
  "Sept 22": 5,
  "Sept 29": 1,
  "Oct 6": 2,
  "Oct 13": 3,
  "Oct 20": 4,
  "Oct 27": 5,
  "Nov 3": 1,
  "Nov 10": 2,
  "Nov 17": 3,
  "Dec 1": 1,
};

// Always available items for each meal
export const alwaysAvailable = {
  breakfast: {
    fruit: ["Fresh Fruit"],
    juice: ["Fruit Juice"],
    drinks: ["Milk", "Non-Dairy Milk", "Soft Drinks", "Flavored Water", "Sparkling Water"],
    bars: ["Deli Bar"],
    dessert: ["Breakfast Pastries"],
    staples: ["Scrambled Eggs", "Oatmeal", "Waffle Bar", "Cereals"],
  },
  lunch: {
    fruit: ["Fresh Fruit"],
    juice: ["Fruit Juice"],
    drinks: ["Milk", "Non-Dairy Milk", "Soft Drinks", "Flavored Water", "Sparkling Water"],
    bars: ["Salad Bar", "Deli Bar"],
    dessert: ["Desserts", "Novelty Ice Creams"],
    staples: ["Cereals", "Chef's Choice"],
  },
  dinner: {
    fruit: ["Fresh Fruit"],
    juice: ["Fruit Juice"],
    drinks: ["Milk", "Non-Dairy Milk", "Soft Drinks", "Flavored Water", "Sparkling Water"],
    bars: ["Salad Bar", "Deli Bar"],
    dessert: ["Desserts", "Novelty Ice Creams"],
    staples: ["Cereals", "Chef's Choice"],
  },
};

// Sample menu data
export const menuCycles: WeekMenu[] = [
  // Cycle 3 - Nov 17 week
  {
    weekOf: "Nov 17",
    cycleNumber: 3,
    days: {
      Monday: {
        Parkside: {
          breakfast: [
            {
              title: "Hot Breakfast",
              items: [
                { name: "French Toast", allergens: ["E", "M", "W"] },
                { name: "Kielbasa", allergens: [] },
                { name: "Hash Browns", allergens: [] },
              ],
            },
          ],
          lunch: [
            {
              title: "Soups",
              items: [
                { name: "Broccoli Cheddar Soup", allergens: ["M", "W", "S"] },
                { name: "Chicken and Rice Soup", allergens: [] },
              ],
            },
            {
              title: "Salads",
              items: [
                { name: "Citrus Kale Salad", allergens: [] },
              ],
            },
            {
              title: "Main Entrées",
              items: [
                { name: "Italian Beef Sandwich", allergens: ["W"] },
                { name: "Baked Feta Pasta", allergens: ["W", "M"] },
                { name: "Chef's Choice", allergens: [] },
              ],
            },
            {
              title: "Pizza",
              items: [
                { name: "Veggie Pizza", allergens: ["M", "W"] },
              ],
            },
          ],
          dinner: [
            {
              title: "Soups",
              items: [
                { name: "Broccoli Cheddar Soup", allergens: ["M", "W", "S"] },
                { name: "Chicken and Rice Soup", allergens: [] },
              ],
            },
            {
              title: "Salads",
              items: [
                { name: "Citrus Kale Salad", allergens: [] },
              ],
            },
            {
              title: "Main Entrées",
              items: [
                { name: "Beijing Beef", allergens: ["S", "W", "SF-C"] },
                { name: "Fiesta Pork Bowl", allergens: [] },
                { name: "Plant-Based Fish Tacos", allergens: ["W", "S"] },
                { name: "Chef's Choice", allergens: [] },
              ],
            },
            {
              title: "Pizza",
              items: [
                { name: "Veggie Pizza", allergens: ["M", "W"] },
              ],
            },
          ],
        },
        Hillside: {
          breakfast: [
            {
              title: "Hot Breakfast",
              items: [
                { name: "Chocolate Chip Pancakes", allergens: ["M", "W", "S"] },
                { name: "Sausage Patties", allergens: [] },
                { name: "Country Potatoes", allergens: [] },
              ],
            },
          ],
          lunch: [
            {
              title: "Soups",
              items: [
                { name: "Coconut Curry Soup", allergens: [] },
                { name: "Potato and Bacon Soup", allergens: ["M", "W", "S"] },
              ],
            },
            {
              title: "Salads",
              items: [
                { name: "Mandarin Spinach Salad", allergens: ["S", "W"] },
              ],
            },
            {
              title: "Main Entrées",
              items: [
                { name: "Crispy Fish Po Boy Sandwich", allergens: ["F", "W", "S"] },
                { name: "Chicken Fajitas", allergens: [] },
                { name: "Vegan Cauliflower Tacos", allergens: [] },
                { name: "Chef's Choice", allergens: [] },
              ],
            },
            {
              title: "Specialty",
              items: [
                { name: "Crab Cakes", allergens: ["F", "E", "W", "S", "SF-C"] },
              ],
            },
          ],
          dinner: [
            {
              title: "Soups",
              items: [
                { name: "Coconut Curry Soup", allergens: [] },
                { name: "Potato and Bacon Soup", allergens: ["M", "W", "S"] },
              ],
            },
            {
              title: "Salads",
              items: [
                { name: "Mandarin Spinach Salad", allergens: ["S", "W"] },
              ],
            },
            {
              title: "Main Entrées",
              items: [
                { name: "Kahlua Pork Bowl", allergens: ["W", "S"] },
                { name: "Pasta with Turkey Meat Sauce", allergens: ["W", "M"] },
                { name: "Thai Chickpea Curry", allergens: [] },
                { name: "Chef's Choice", allergens: [] },
              ],
            },
            {
              title: "Specialty",
              items: [
                { name: "Crab Cakes", allergens: ["F", "E", "W", "S", "SF-C"] },
              ],
            },
          ],
        },
        Beachside: {
          breakfast: [
            {
              title: "Hot Breakfast",
              items: [
                { name: "Sausage, Egg and Cheese Sandwich on English Muffin", allergens: ["W", "E", "M", "S"] },
                { name: "Kielbasa", allergens: [] },
                { name: "Homestyle Potatoes", allergens: [] },
              ],
            },
          ],
          lunch: [
            {
              title: "Soups",
              items: [
                { name: "Chicken Noodle Soup", allergens: ["W", "E"] },
              ],
            },
            {
              title: "Main Entrées",
              items: [
                { name: "Orange Chicken", allergens: ["S", "W"] },
                { name: "Vegetable Chow Mein", allergens: ["S", "W", "SS"] },
                { name: "Carnitas Torta", allergens: ["W", "M"] },
                { name: "Chef's Choice", allergens: [] },
              ],
            },
            {
              title: "Pizza",
              items: [
                { name: "Pepperoni and Cheese Pizza", allergens: ["W", "M", "S"] },
              ],
            },
          ],
          dinner: [
            {
              title: "Soups",
              items: [
                { name: "Chicken Noodle Soup", allergens: ["W", "E"] },
              ],
            },
            {
              title: "Main Entrées",
              items: [
                { name: "Chicken and Shrimp Fajita", allergens: ["SF-C"] },
                { name: "Vegan Jackfruit Chile Verde", allergens: ["S"] },
                { name: "Spicy Ramen Soup with Chicken", allergens: ["W", "E", "S"] },
                { name: "Chef's Choice", allergens: [] },
              ],
            },
            {
              title: "Pizza",
              items: [
                { name: "Pepperoni and Cheese Pizza", allergens: ["W", "M", "S"] },
              ],
            },
          ],
        },
      },
      Tuesday: {
        Parkside: {
          breakfast: [
            {
              title: "Hot Breakfast",
              items: [
                { name: "Sausage, Egg and Cheese Sandwich on English Muffin", allergens: ["W", "E", "M", "S"] },
                { name: "Bacon", allergens: [] },
                { name: "Hash Brown Patties", allergens: [] },
              ],
            },
          ],
          lunch: [
            {
              title: "Soups",
              items: [
                { name: "Miso Soup", allergens: ["F", "S", "M"] },
                { name: "Minestrone Soup", allergens: ["W"] },
              ],
            },
            {
              title: "Salads",
              items: [
                { name: "Jicama Ceviche", allergens: [] },
              ],
            },
            {
              title: "Main Entrées",
              items: [
                { name: "Grilled Mongolian Chicken", allergens: ["W", "S"] },
                { name: "Beef Fajitas", allergens: ["W"] },
                { name: "Firecracker Chickpea Bowl", allergens: [] },
                { name: "Chef's Choice", allergens: [] },
              ],
            },
            {
              title: "Pizza",
              items: [
                { name: "Veggie Pizza", allergens: ["M", "W"] },
              ],
            },
          ],
          dinner: [
            {
              title: "Soups",
              items: [
                { name: "Miso Soup", allergens: ["F", "S", "M"] },
                { name: "Minestrone Soup", allergens: ["W"] },
              ],
            },
            {
              title: "Salads",
              items: [
                { name: "Jicama Ceviche", allergens: [] },
              ],
            },
            {
              title: "Main Entrées",
              items: [
                { name: "Mac and Cheese", allergens: ["M", "W", "S"] },
                { name: "Fried Chicken Plate", allergens: ["W", "M"] },
                { name: "Gardein Beef Teriyaki Bowl", allergens: ["S", "W"] },
                { name: "Chef's Choice", allergens: [] },
              ],
            },
            {
              title: "Pizza",
              items: [
                { name: "Veggie Pizza", allergens: ["M", "W"] },
              ],
            },
          ],
        },
        Hillside: {
          breakfast: [
            {
              title: "Hot Breakfast",
              items: [
                { name: "Chilaquiles Verdes", allergens: ["M"] },
                { name: "Bacon", allergens: [] },
                { name: "Hash Browns", allergens: [] },
              ],
            },
          ],
          lunch: [
            {
              title: "Soups",
              items: [
                { name: "Corn Chowder", allergens: ["M", "S", "W"] },
                { name: "Chicken Tortilla Soup", allergens: ["W", "S"] },
              ],
            },
            {
              title: "Salads",
              items: [
                { name: "BBQ Chicken Salad", allergens: ["M"] },
              ],
            },
            {
              title: "Main Entrées",
              items: [
                { name: "Chicken Shawarma", allergens: ["W", "M", "E"] },
                { name: "Pesto Alfredo Tortellini", allergens: ["M", "W", "E"] },
                { name: "Edamame Fried Rice", allergens: ["S", "W"] },
                { name: "Chef's Choice", allergens: [] },
              ],
            },
            {
              title: "Specialty",
              items: [
                { name: "Beef and Vegetables Stir-Fry", allergens: ["S", "W"] },
              ],
            },
          ],
          dinner: [
            {
              title: "Soups",
              items: [
                { name: "Corn Chowder", allergens: ["M", "S", "W"] },
                { name: "Chicken Tortilla Soup", allergens: ["W", "S"] },
              ],
            },
            {
              title: "Salads",
              items: [
                { name: "BBQ Chicken Salad", allergens: ["M"] },
              ],
            },
            {
              title: "Main Entrées",
              items: [
                { name: "Kimchi Fried Rice with Beef", allergens: ["S", "W", "F", "SF-C"] },
                { name: "Chicken Al Pastor Tacos", allergens: [] },
                { name: "Gardein Orange Chicken", allergens: ["S", "W"] },
                { name: "Chef's Choice", allergens: [] },
              ],
            },
            {
              title: "Specialty",
              items: [
                { name: "Beef and Vegetables Stir-Fry", allergens: ["S", "W"] },
              ],
            },
          ],
        },
        Beachside: {
          breakfast: [
            {
              title: "Hot Breakfast",
              items: [
                { name: "French Toast", allergens: ["E", "M", "W", "S"] },
                { name: "Chorizo Patties", allergens: [] },
                { name: "Hash Browns", allergens: [] },
              ],
            },
          ],
          lunch: [
            {
              title: "Soups",
              items: [
                { name: "Pork Pozole", allergens: [] },
              ],
            },
            {
              title: "Main Entrées",
              items: [
                { name: "Surf and Turf Fries", allergens: ["S", "W", "M", "SF-C"] },
                { name: "Vegetarian Chili with Sweet Potato", allergens: ["S"] },
                { name: "Beef Mulita", allergens: ["M", "S"] },
                { name: "Chef's Choice", allergens: [] },
              ],
            },
            {
              title: "Pizza",
              items: [
                { name: "Pepperoni and Cheese Pizza", allergens: ["W", "M", "S"] },
              ],
            },
          ],
          dinner: [
            {
              title: "Soups",
              items: [
                { name: "Pork Pozole", allergens: [] },
              ],
            },
            {
              title: "Main Entrées",
              items: [
                { name: "Korean Beef Bowl", allergens: ["S", "W", "SS"] },
                { name: "Spicy Harissa Tofu", allergens: ["S"] },
                { name: "Southwest Chicken Quesadilla", allergens: ["W", "M"] },
                { name: "Chef's Choice", allergens: [] },
              ],
            },
            {
              title: "Pizza",
              items: [
                { name: "Pepperoni and Cheese Pizza", allergens: ["W", "M", "S"] },
              ],
            },
          ],
        },
      },
      Wednesday: {
        Parkside: {
          breakfast: [
            {
              title: "Hot Breakfast",
              items: [
                { name: "Hawaiian Breakfast", allergens: ["E", "S", "W"] },
                { name: "Spam", allergens: [] },
                { name: "Country Potatoes and Rice", allergens: [] },
              ],
            },
          ],
          lunch: [
            {
              title: "Soups",
              items: [
                { name: "Tomato Basil Soup", allergens: ["M", "W"] },
                { name: "Vegetable Noodle Soup", allergens: ["E", "W"] },
              ],
            },
            {
              title: "Main Entrées",
              items: [
                { name: "Roll Your Own Tempura Roll", allergens: ["SF-C", "W"] },
                { name: "BBQ Pork Ribs", allergens: [] },
                { name: "Ortega Chili & Cheese Quesadilla", allergens: ["W", "M"] },
                { name: "Kung Pao Deep Fried Tofu", allergens: ["S", "W"] },
                { name: "Chef's Choice", allergens: [] },
              ],
            },
            {
              title: "Pizza",
              items: [
                { name: "Veggie Pizza", allergens: ["M", "W"] },
              ],
            },
          ],
          dinner: [
            {
              title: "Soups",
              items: [
                { name: "Tomato Basil Soup", allergens: ["M", "W"] },
                { name: "Vegetable Noodle Soup", allergens: ["E", "W"] },
              ],
            },
            {
              title: "Main Entrées",
              items: [
                { name: "Roll Your Own Tempura Roll", allergens: ["SF-C", "W"] },
                { name: "Pasta Bar", allergens: ["W", "M"] },
                { name: "Mozzarella Sticks with Marinara Sauce", allergens: ["M", "W"] },
                { name: "Lentil Tacos", allergens: [] },
                { name: "Chef's Choice", allergens: [] },
              ],
            },
            {
              title: "Pizza",
              items: [
                { name: "Veggie Pizza", allergens: ["M", "W"] },
              ],
            },
          ],
        },
        Hillside: {
          breakfast: [
            {
              title: "Hot Breakfast",
              items: [
                { name: "French Toast", allergens: ["E", "M", "W"] },
                { name: "Pork Links", allergens: [] },
                { name: "Tater Tots", allergens: [] },
              ],
            },
          ],
          lunch: [
            {
              title: "Soups",
              items: [
                { name: "Cream of Broccoli Soup", allergens: ["M", "W", "S"] },
                { name: "Albondigas Soup", allergens: ["E"] },
              ],
            },
            {
              title: "Salads",
              items: [
                { name: "Lemon Basil Pasta Salad", allergens: ["M", "W"] },
              ],
            },
            {
              title: "Main Entrées",
              items: [
                { name: "Hamburgers", allergens: ["W"] },
                { name: "Chicken Meatballs with Plum Sauce", allergens: ["S", "W"] },
                { name: "Vegetable Strudel", allergens: ["W"] },
                { name: "Chef's Choice", allergens: [] },
                { name: "Breakfast Bowl", allergens: ["E", "M"] },
              ],
            },
          ],
          dinner: [
            {
              title: "Soups",
              items: [
                { name: "Cream of Broccoli Soup", allergens: ["M", "W", "S"] },
                { name: "Albondigas Soup", allergens: ["E"] },
              ],
            },
            {
              title: "Salads",
              items: [
                { name: "Lemon Basil Pasta Salad", allergens: ["M", "W"] },
              ],
            },
            {
              title: "Main Entrées",
              items: [
                { name: "Teriyaki Chicken", allergens: ["S", "W"] },
                { name: "Brisket Mac and Cheese", allergens: ["M", "W", "S"] },
                { name: "Teriyaki Tofu", allergens: ["S", "W"] },
                { name: "Chef's Choice", allergens: [] },
                { name: "Breakfast Bowl", allergens: ["E", "M"] },
              ],
            },
          ],
        },
        Beachside: {
          breakfast: [
            {
              title: "Hot Breakfast",
              items: [
                { name: "Breakfast Quesadilla", allergens: ["E", "W", "M"] },
                { name: "Turkey Sausage", allergens: [] },
                { name: "Papas Ala Mexicana", allergens: [] },
              ],
            },
          ],
          lunch: [
            {
              title: "Soups",
              items: [
                { name: "Vegetable Noodle Soup", allergens: ["W", "E"] },
              ],
            },
            {
              title: "Main Entrées",
              items: [
                { name: "Chicken Marsala", allergens: ["W", "M"] },
                { name: "Vegetable Pad Thai", allergens: ["S", "W", "SS"] },
                { name: "Italian Sausage Sandwich", allergens: ["W", "SS"] },
                { name: "Chef's Choice", allergens: [] },
              ],
            },
            {
              title: "Pizza",
              items: [
                { name: "Pepperoni and Cheese Pizza", allergens: ["W", "M", "S"] },
              ],
            },
          ],
          dinner: [
            {
              title: "Soups",
              items: [
                { name: "Vegetable Noodle Soup", allergens: ["W", "E"] },
              ],
            },
            {
              title: "Main Entrées",
              items: [
                { name: "Roasted Turkey Breast", allergens: [] },
                { name: "Vegan Lasagna", allergens: ["S"] },
                { name: "BBQ Quesadilla", allergens: ["M", "W"] },
                { name: "Chef's Choice", allergens: [] },
              ],
            },
            {
              title: "Pizza",
              items: [
                { name: "Pepperoni and Cheese Pizza", allergens: ["W", "M", "S"] },
              ],
            },
          ],
        },
      },
      Thursday: {
        Parkside: {
          breakfast: [
            {
              title: "Hot Breakfast",
              items: [
                { name: "Blueberry Pancakes", allergens: ["M", "W", "S"] },
                { name: "Pork Links", allergens: [] },
                { name: "Tater Tots", allergens: [] },
              ],
            },
          ],
          lunch: [
            {
              title: "Soups",
              items: [
                { name: "Potato Chowder", allergens: ["W", "M", "S"] },
                { name: "Chicken Pozole with Tomatillo", allergens: [] },
              ],
            },
            {
              title: "Salads",
              items: [
                { name: "BBQ Chicken Salad", allergens: ["E", "M", "S"] },
              ],
            },
            {
              title: "Main Entrées",
              items: [
                { name: "Cheese Ravioli with Creamy Tomato Sauce", allergens: ["W", "M"] },
                { name: "Crispy Chicken Sandwich", allergens: ["M", "W", "S"] },
                { name: "Gardein Beef Burrito", allergens: ["W", "S"] },
                { name: "Chef's Choice", allergens: [] },
              ],
            },
            {
              title: "Pizza",
              items: [
                { name: "Veggie Pizza", allergens: ["M", "W"] },
              ],
            },
          ],
          dinner: [
            {
              title: "Soups",
              items: [
                { name: "Potato Chowder", allergens: ["W", "M", "S"] },
                { name: "Chicken Pozole w/ Tomatillo", allergens: [] },
              ],
            },
            {
              title: "Salads",
              items: [
                { name: "BBQ Chicken Salad", allergens: ["E", "M", "S"] },
              ],
            },
            {
              title: "Main Entrées",
              items: [
                { name: "Grilled Turkey Pesto Sandwich", allergens: ["M", "W", "E"] },
                { name: "Carne Asada Fries", allergens: ["M"] },
                { name: "Tofu and Vegetables Fried Rice", allergens: ["S", "W", "SS"] },
                { name: "Chef's Choice", allergens: [] },
              ],
            },
            {
              title: "Pizza",
              items: [
                { name: "Veggie Pizza", allergens: ["M", "W"] },
              ],
            },
          ],
        },
        Hillside: {
          breakfast: [
            {
              title: "Hot Breakfast",
              items: [
                { name: "Breakfast Quesadilla", allergens: ["E", "W", "M"] },
                { name: "Turkey Sausage Patties", allergens: [] },
                { name: "Hash Brown Patties", allergens: [] },
              ],
            },
          ],
          lunch: [
            {
              title: "Soups",
              items: [
                { name: "Vegetable Noodle Soup", allergens: ["W", "E"] },
                { name: "Tomato Basil Soup", allergens: ["M", "W"] },
              ],
            },
            {
              title: "Salads",
              items: [
                { name: "Israeli Couscous on Arugula", allergens: ["W"] },
              ],
            },
            {
              title: "Main Entrées",
              items: [
                { name: "Cuban Mojo Chicken", allergens: [] },
                { name: "Loaded Grilled Cheese Sandwich", allergens: ["W", "M", "S"] },
                { name: "Pasta Arrabbiata", allergens: ["W"] },
                { name: "Chef's Choice", allergens: [] },
                { name: "Chicken Mulitas", allergens: ["M"] },
              ],
            },
          ],
          dinner: [
            {
              title: "Soups",
              items: [
                { name: "Vegetable Noodle Soup", allergens: ["W"] },
                { name: "Tomato Basil Soup", allergens: ["M", "W"] },
              ],
            },
            {
              title: "Salads",
              items: [
                { name: "Israeli Couscous on Arugula", allergens: ["W"] },
              ],
            },
            {
              title: "Main Entrées",
              items: [
                { name: "Orange Chicken", allergens: ["S", "W"] },
                { name: "Beef Flank Steak with Chimichurri Sauce", allergens: [] },
                { name: "Gardein Chicken Fajitas", allergens: ["S", "W"] },
                { name: "Chef's Choice", allergens: [] },
                { name: "Chicken Mulitas", allergens: ["M"] },
              ],
            },
          ],
        },
        Beachside: {
          breakfast: [
            {
              title: "Hot Breakfast",
              items: [
                { name: "Waffle Sticks", allergens: ["E", "M", "S", "W"] },
                { name: "Bacon", allergens: [] },
                { name: "Country Style Potatoes", allergens: [] },
              ],
            },
          ],
          lunch: [
            {
              title: "Soups",
              items: [
                { name: "Italian Wedding Soup", allergens: ["W", "M", "S"] },
              ],
            },
            {
              title: "Main Entrées",
              items: [
                { name: "Chicken Katsu", allergens: ["W", "S", "M"] },
                { name: "Gardein Orange Chicken", allergens: ["S", "W"] },
                { name: "Poke Bowl", allergens: ["F", "S", "SS", "W"] },
                { name: "Chef's Choice", allergens: [] },
              ],
            },
            {
              title: "Pizza",
              items: [
                { name: "Pepperoni and Cheese Pizza", allergens: ["W", "M", "S"] },
              ],
            },
          ],
          dinner: [
            {
              title: "Soups",
              items: [
                { name: "Italian Wedding Soup", allergens: ["W", "M", "S"] },
              ],
            },
            {
              title: "Main Entrées",
              items: [
                { name: "Al Pastor Bowl", allergens: ["W", "S"] },
                { name: "Crispy Brussel Sprouts Fried Rice with Gardein Crumbles", allergens: ["S", "W"] },
                { name: "Meatball Sandwich", allergens: ["W", "M", "S", "SS"] },
                { name: "Chef's Choice", allergens: [] },
              ],
            },
            {
              title: "Pizza",
              items: [
                { name: "Pepperoni and Cheese Pizza", allergens: ["W", "M", "S"] },
              ],
            },
          ],
        },
      },
      Friday: {
        Parkside: {
          breakfast: [
            {
              title: "Hot Breakfast",
              items: [
                { name: "Egg, Potato and Cheese Breakfast Burrito", allergens: ["E", "W", "M"] },
                { name: "Turkey Sausage", allergens: [] },
                { name: "Potatoes O'Brien", allergens: [] },
              ],
            },
          ],
          lunch: [
            {
              title: "Soups",
              items: [
                { name: "Clam Chowder", allergens: ["M", "W", "S", "SF-C"] },
                { name: "Chef's Choice Soup", allergens: [] },
              ],
            },
            {
              title: "Salads",
              items: [
                { name: "Arugula Salad", allergens: ["M"] },
              ],
            },
            {
              title: "Main Entrées",
              items: [
                { name: "Beef Tri Tip Roast", allergens: [] },
                { name: "Firecracker Salmon", allergens: ["F", "S", "W"] },
                { name: "Spicy Tofu and Veggies", allergens: ["S"] },
                { name: "Chef's Choice", allergens: [] },
              ],
            },
            {
              title: "Pizza",
              items: [
                { name: "Veggie Pizza", allergens: ["M", "W"] },
              ],
            },
          ],
          dinner: [
            {
              title: "Soups",
              items: [
                { name: "Clam Chowder", allergens: ["M", "W", "S", "SF-C"] },
                { name: "Chef's Choice Soup", allergens: [] },
              ],
            },
            {
              title: "Salads",
              items: [
                { name: "Arugula Salad", allergens: ["M"] },
              ],
            },
            {
              title: "Main Entrées",
              items: [
                { name: "Sweet and Spicy Pork", allergens: ["W", "S"] },
                { name: "Shrimp Scampi", allergens: ["SF-C", "W", "M"] },
                { name: "Pasta with Gardein Meat Sauce", allergens: ["S", "W"] },
                { name: "Chef's Choice", allergens: [] },
              ],
            },
            {
              title: "Pizza",
              items: [
                { name: "Veggie Pizza", allergens: ["M", "W"] },
              ],
            },
          ],
        },
        Hillside: {
          breakfast: [
            {
              title: "Hot Breakfast",
              items: [
                { name: "Ham, Egg and Cheese English Muffin Sandwich", allergens: ["E", "W", "M", "S"] },
                { name: "Chicken and Apple Sausage", allergens: [] },
                { name: "Homestyle Potatoes", allergens: [] },
              ],
            },
          ],
          lunch: [
            {
              title: "Soups",
              items: [
                { name: "Caldo de Camaron", allergens: ["SF-C"] },
                { name: "Lentil and Vegetable Soup", allergens: [] },
              ],
            },
            {
              title: "Salads",
              items: [
                { name: "Chicken Waldorf Salad", allergens: ["E", "M", "W"] },
              ],
            },
            {
              title: "Main Entrées",
              items: [
                { name: "Hot Dog Bar", allergens: ["M", "W", "S"] },
                { name: "Shrimp Pasta Alfredo", allergens: ["SF-C", "M", "E", "W"] },
                { name: "Tofu and Kimchi Stew with White Rice", allergens: ["S"] },
                { name: "Chef's Choice", allergens: [] },
              ],
            },
            {
              title: "Specialty",
              items: [
                { name: "Mongolian Stir-Fry Chicken", allergens: ["S", "W"] },
              ],
            },
          ],
          dinner: [
            {
              title: "Soups",
              items: [
                { name: "Caldo de Camaron", allergens: ["SF-C"] },
                { name: "Lentil and Vegetable Soup", allergens: [] },
              ],
            },
            {
              title: "Salads",
              items: [
                { name: "Chicken Waldorf Salad", allergens: ["E", "M", "W"] },
              ],
            },
            {
              title: "Main Entrées",
              items: [
                { name: "Pork Udon", allergens: ["W", "F", "E", "S"] },
                { name: "Citrus Peppercorn Tilapia with Mango Salsa", allergens: ["F"] },
                { name: "Sweet Potato Patties", allergens: ["E", "M", "W"] },
                { name: "Chef's Choice", allergens: [] },
              ],
            },
            {
              title: "Specialty",
              items: [
                { name: "Mongolian Stir-Fry Chicken", allergens: ["S", "W"] },
              ],
            },
          ],
        },
        Beachside: {
          breakfast: [
            {
              title: "Hot Breakfast",
              items: [
                { name: "Egg, Turkey and Cheese Sandwich on Croissant", allergens: ["E", "M", "S", "W"] },
                { name: "Pork Link Sausage", allergens: [] },
                { name: "Tater Tots", allergens: [] },
              ],
            },
          ],
          lunch: [
            {
              title: "Soups",
              items: [
                { name: "Clam Chowder", allergens: ["M", "W", "SF-C"] },
              ],
            },
            {
              title: "Main Entrées",
              items: [
                { name: "Spicy Beef Noodles", allergens: ["W", "S", "SS"] },
                { name: "Eggplant and Tofu with Sweet and Sour Sauce", allergens: ["S", "W"] },
                { name: "Chef's Choice", allergens: [] },
              ],
            },
            {
              title: "Pizza",
              items: [
                { name: "Pepperoni and Cheese Pizza", allergens: ["W", "M", "S"] },
              ],
            },
          ],
          dinner: [
            {
              title: "Soups",
              items: [
                { name: "Clam Chowder", allergens: ["M", "W", "SF-C"] },
              ],
            },
            {
              title: "Main Entrées",
              items: [
                { name: "BBQ Chicken", allergens: [] },
                { name: "Pasta Alla Norma", allergens: ["W"] },
                { name: "Chef's Choice", allergens: [] },
              ],
            },
            {
              title: "Pizza",
              items: [
                { name: "Pepperoni and Cheese Pizza", allergens: ["W", "M", "S"] },
              ],
            },
          ],
        },
      },
      Saturday: {
        Hillside: {
          breakfast: [
            {
              title: "Brunch",
              items: [
                { name: "Pancakes with Fruit Topping", allergens: ["M", "W", "S"] },
                { name: "Turkey Bacon", allergens: [] },
                { name: "Tater Tots", allergens: [] },
              ],
            },
          ],
          lunch: [
            {
              title: "Soup & Salad",
              items: [
                { name: "Vegetable Rice Soup", allergens: [] },
                { name: "Beef and Barley Soup", allergens: ["W"] },
                { name: "Yogurt Parfait Bar", allergens: ["M", "W"] },
                { name: "Chef's Choice", allergens: [] },
              ],
            },
          ],
          dinner: [
            {
              title: "Comfort Food",
              items: [
                { name: "Vegetable Rice Soup", allergens: [] },
                { name: "Beef and Barley Soup", allergens: ["W"] },
                { name: "Tuna Rotini Pasta Salad", allergens: ["M", "W", "F"] },
                { name: "Cajun Pasta", allergens: ["M", "W"] },
                { name: "Hot Honey Chicken Sandwich", allergens: ["W", "S", "E", "M"] },
                { name: "Vegetable and Tofu Fried Rice", allergens: ["S", "W", "SS"] },
                { name: "Mac and Cheese Bites", allergens: ["W", "M", "S"] },
              ],
            },
          ],
        },
        Beachside: {
          breakfast: [
            {
              title: "Brunch",
              items: [
                { name: "Blueberry Pancakes", allergens: ["M", "W", "S"] },
                { name: "Chicken Apple Sausage", allergens: [] },
                { name: "Potatoes O'Brien", allergens: [] },
              ],
            },
          ],
          lunch: [
            {
              title: "Lunch Specials",
              items: [
                { name: "Chicken Chili Poblano Soup", allergens: ["W", "M"] },
                { name: "Roasted Rosemary Chicken", allergens: [] },
                { name: "Gardein Fish and Chips", allergens: ["S", "W"] },
                { name: "Pepperoni and Cheese Pizza", allergens: ["W", "M", "S"] },
              ],
            },
          ],
          dinner: [
            {
              title: "Dinner Specials",
              items: [
                { name: "Chicken Chili Poblano Soup", allergens: ["W", "M"] },
                { name: "Chicken Enchilada", allergens: ["S", "M", "W"] },
                { name: "Crispy Tofu with Noodles", allergens: ["S", "W"] },
                { name: "Chef's Choice", allergens: [] },
                { name: "Pepperoni and Cheese Pizza", allergens: ["W", "M", "S"] },
              ],
            },
          ],
        },
      },
      Sunday: {
        Parkside: {
          breakfast: [
            {
              title: "Brunch",
              items: [
                { name: "French Toast Sticks", allergens: ["E", "M", "W", "S"] },
                { name: "Sausage Links", allergens: [] },
                { name: "Hash Brown Patties", allergens: [] },
              ],
            },
          ],
          lunch: [
            {
              title: "Lunch Specials",
              items: [
                { name: "Albondigas Soup", allergens: ["E"] },
                { name: "Chef's Choice Soup", allergens: [] },
                { name: "Yogurt Parfait Bar", allergens: ["W", "M"] },
                { name: "Chef's Choice", allergens: [] },
                { name: "Pepperoni and Cheese Pizza", allergens: ["M", "W"] },
              ],
            },
          ],
          dinner: [
            {
              title: "Dinner Specials",
              items: [
                { name: "Albondigas Soup", allergens: [] },
                { name: "Chef's Choice Soup", allergens: [] },
                { name: "Red Chile Colorado", allergens: [] },
                { name: "Chicken Chipotle Pesto Pasta", allergens: ["M", "W"] },
                { name: "Gardein Beef Fajitas", allergens: ["S", "W"] },
                { name: "Pepperoni and Cheese Pizza", allergens: ["M", "W"] },
              ],
            },
          ],
        },
        Beachside: {
          breakfast: [
            {
              title: "Brunch",
              items: [
                { name: "French Toast", allergens: ["E", "M", "S", "W"] },
                { name: "Bacon", allergens: [] },
                { name: "Hash Brown Patties", allergens: [] },
              ],
            },
          ],
          lunch: [
            {
              title: "Lunch Specials",
              items: [
                { name: "Tomato Basil Soup", allergens: ["W", "M"] },
                { name: "Taquito Bar", allergens: ["W", "M", "S"] },
                { name: "Vegetable and Chickpea Curry", allergens: [] },
                { name: "Chef's Choice", allergens: [] },
                { name: "Pepperoni and Cheese Pizza", allergens: ["W", "M", "S"] },
              ],
            },
          ],
          dinner: [
            {
              title: "Dinner Specials",
              items: [
                { name: "Tomato Basil Soup", allergens: ["W", "M"] },
                { name: "Chicken Bacon Alfredo Pasta", allergens: ["M", "W"] },
                { name: "Gardein Chicken and Broccoli", allergens: ["S", "W"] },
                { name: "Turkey Pesto on Flat Bread", allergens: ["W", "S", "M", "E"] },
                { name: "Chef's Choice", allergens: [] },
                { name: "Pepperoni and Cheese Pizza", allergens: ["W", "M", "S"] },
              ],
            },
          ],
        },
      },
    },
  },
];

export const quickLinks = [
  {
    title: "Policies & Procedures",
    description: "Dining hall guidelines and rules",
    link: "/dining-policies",
  },
  {
    title: "Dining Hours",
    description: "View hours for all dining locations",
    link: "/dining-hours",
  },
  {
    title: "Meal Plans",
    description: "Guest and dining meal plan information",
    link: "/meal-plans",
  },
  {
    title: "Request Form",
    description: "Submit online dining hall requests",
    link: "/dining-request",
  },
  {
    title: "FAQs",
    description: "Frequently asked questions",
    link: "/dining-faq",
  },
];