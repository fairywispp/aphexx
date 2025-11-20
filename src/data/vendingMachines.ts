import farmersFridgeIcon from '@/assets/vending/farmers-fridge-icon.webp';
import instachefMachine from '@/assets/vending/instachef-hero.webp';
import pizzafornoIcon from '@/assets/vending/pizzaforno-icon.webp';
import craveRoboticsMachine from '@/assets/vending/crave-robotics-machine.jpg';
import mychaDrink from '@/assets/vending/mycha-drink.jpeg';
import mychaDrinkAlt from '@/assets/vending/mycha-drink-alt.webp';
import campusVendingMap from '@/assets/vending/campus-vending-map.jpg';
import pizzafornoHero from '@/assets/vending/pizzaforno-hero.webp';

export interface VendingLocation {
  id: string;
  name: string;
  location: string;
  hours: string;
  menuLink: string;
  campusMapLink?: string;
  directionText?: string;
}

export interface PopularItem {
  id: string;
  name: string;
  description: string;
  price: string;
  calories?: string;
  image?: string;
}

export interface VendingVendor {
  id: string;
  name: string;
  description: string;
  icon: string;
  heroImage?: string;
  website?: string;
  locations: VendingLocation[];
  studentDeals?: string;
  popularItems?: PopularItem[];
}

export const vendingVendors: VendingVendor[] = [
  {
    id: 'farmers-fridge',
    name: "Farmer's Fridge",
    description: "Fresh, healthy meals and snacks from white automated fridges",
    icon: farmersFridgeIcon,
    locations: [
      {
        id: 'ff-breezeway',
        name: 'Breezeway',
        location: 'Lecture Hall 151 (LH151)',
        hours: '24/7',
        menuLink: 'https://www.farmersfridge.com/locations/ca-la-csu-long-beach-breezeway/',
        campusMapLink: 'https://map.concept3d.com/?id=1314#!m/1013312?s/LH',
        directionText: 'LH 151 (breezeway vending area)'
      },
      {
        id: 'ff-cob',
        name: 'College of Business',
        location: 'Outdoor Vending Bank',
        hours: '24/7',
        menuLink: 'https://www.farmersfridge.com/locations/ca-la-csu-long-beach-business/',
        campusMapLink: 'https://map.concept3d.com/?id=1314#!m/1011859?share',
        directionText: 'Located in the outdoor vending bank'
      },
      {
        id: 'ff-music',
        name: 'Music & Dance',
        location: 'Music and Dance Building Atrium',
        hours: '24/7',
        menuLink: 'https://www.farmersfridge.com/locations/ca-la-csu-long-beach-music-dance/',
        campusMapLink: 'https://map.concept3d.com/?id=1314#!m/441250?share',
        directionText: 'Located in the atrium'
      }
    ],
    popularItems: [
      {
        id: 'ff-medi-bowl',
        name: 'High Protein Medi Chicken Bowl',
        description: 'with couscous, cucumber salad, hummus, and creamy cilantro sauce',
        calories: 'Bowl: 440 Cal / Sauce: 270 Cal',
        price: '$13.59'
      }
    ]
  },
  {
    id: 'pizzaforno',
    name: 'PizzaForno',
    description: "Hot, fresh pizza from orange vending machines - InstaChef technology",
    icon: pizzafornoIcon,
    heroImage: pizzafornoHero,
    website: 'https://pizzaforno.com/locations/pizzaforno-long-beach-ca-csu-long-beach',
    studentDeals: 'Get VIP Deals: Join Our Pizza-Club! Enter your email to save deals.',
    locations: [
      {
        id: 'pf-hhs1',
        name: 'HHS1 Lawn',
        location: 'Near Nugget Grill Express',
        hours: '24/7',
        menuLink: 'https://pizzaforno.com/menu',
        campusMapLink: 'https://map.concept3d.com/?id=1314#!bm/?m/1075949?s/?sbc/',
        directionText: 'Lower Campus Health and Human Services 1 Lawn (HHS1)'
      }
    ],
    popularItems: [
      {
        id: 'pf-cheese',
        name: 'Classic Cheese Pizza',
        description: 'Fresh mozzarella on crispy crust',
        price: '$8.99'
      }
    ]
  },
  {
    id: 'crave-robotics',
    name: 'Crave Robotics',
    description: "Advanced automated gourmet vending experience",
    icon: craveRoboticsMachine,
    locations: [
      {
        id: 'cr-fo3',
        name: 'Outside FO3',
        location: 'FO3 Building Exterior',
        hours: 'During Campus Hours',
        menuLink: 'https://www.craverobotics.co/category/all-products',
        campusMapLink: 'https://map.concept3d.com/?id=1314#!m/413900?share',
        directionText: 'Faculty Offices 3 (FO3)'
      }
    ]
  },
  {
    id: 'instachef',
    name: 'InstaChef',
    description: "Fresh, fast and delicious chef-crafted meals 24/7",
    icon: instachefMachine,
    heroImage: instachefMachine,
    locations: [
      {
        id: 'ic-breezeway',
        name: 'Breezeway',
        location: 'LH151 Breezeway Vending Area',
        hours: 'Until 11pm',
        menuLink: 'https://www.instachef247.com/browse-menu-usa/',
        campusMapLink: 'https://map.concept3d.com/?id=1314#!m/1013312?s/LH',
        directionText: 'LH 151 (breezeway vending area)'
      }
    ]
  },
  {
    id: 'mycha',
    name: 'MyCha',
    description: "Freshly made milk tea and specialty drinks",
    icon: mychaDrink,
    website: 'https://www.mychachicago.com/menu',
    locations: [
      {
        id: 'mc-breezeway',
        name: 'Breezeway',
        location: 'LH151 Breezeway Vending Area',
        hours: '24/7',
        menuLink: 'https://www.mychachicago.com/locations/check/9c94f0ac-eca6-4762-a3bd-3d79b645944a',
        campusMapLink: 'https://map.concept3d.com/?id=1314#!m/1013312?s/LH',
        directionText: 'LH 151 (breezeway vending area)'
      }
    ]
  }
];

export const vendingMapInfo = {
  image: campusVendingMap,
  mapLink: 'https://map.concept3d.com/?id=1314#!ct/41689,42539,42540,42541,42542,44590?m/420429?s/Vend?sbc/'
};
