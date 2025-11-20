import beachHut from "@/assets/locations/beach-hut.jpg";
import bookstore from "@/assets/locations/bookstore.jpg";
import outpost from "@/assets/locations/outpost.jpg";
import artStore from "@/assets/locations/art-store.jpg";

export interface ConvenienceStore {
  id: string;
  name: string;
  hours: string;
  image: string;
  mapLink: string;
  tags: string[];
}

export const convenienceStores: ConvenienceStore[] = [
  {
    id: "bookstore-cs",
    name: "Bookstore Convenience Store",
    hours: "Mon-Thu 7am-7pm, Fri 7am-4pm, Sat 11am-4pm, Sun Closed",
    image: bookstore,
    mapLink: "https://map.concept3d.com/?id=1314#!m/1013518?share",
    tags: ["Snacks", "Drinks", "Printer", "School Supplies"]
  },
  {
    id: "beach-hut-cs",
    name: "Beach Hut",
    hours: "Mon-Thu 7am-10pm, Fri 7am-4pm, Sat 10am-4pm, Sun 12pm-8pm",
    image: beachHut,
    mapLink: "https://map.concept3d.com/?id=1314#!m/1013231?share",
    tags: ["Microwaves", "Snacks", "Drinks", "Grab & Go"]
  },
  {
    id: "outpost-cs",
    name: "Outpost Convenience Store",
    hours: "Mon-Thu 7:30am-8:30pm, Fri 7:30am-4pm, Sat 9:30am-3pm, Sun Closed",
    image: outpost,
    mapLink: "https://map.concept3d.com/?id=1314#!m/420442?share",
    tags: ["Microwaves", "Snacks", "Drinks", "Essentials"]
  },
  {
    id: "art-store-cs",
    name: "Art Convenience Store",
    hours: "Mon-Thu 8am-7pm, Fri 8am-4pm, Sat-Sun Closed",
    image: artStore,
    mapLink: "https://map.concept3d.com/?id=1314#!m/563161?share",
    tags: ["Art Supplies", "Snacks", "Drinks", "Microwaves"]
  },
  {
    id: "caffeine-lab-cs",
    name: "The Caffeine Lab",
    hours: "Mon-Thu 8am-8pm, Fri 8am-2pm, Sat Closed, Sun 1pm-6pm",
    image: outpost,
    mapLink: "https://map.concept3d.com/?id=1314#!bm/?ct/41689,42539,42540,42541,42542,44590?m/563161?s/?sbc/",
    tags: ["Coffee", "Energy Drinks", "Snacks"]
  },
  {
    id: "wallstreat-cs",
    name: "WallstrEAT Cafe",
    hours: "Mon-Thu 7:30am-7pm, Fri 7:30am-4pm, Sat-Sun Closed",
    image: bookstore,
    mapLink: "https://map.concept3d.com/?id=1314#!bm/?ct/41689,42539,42540,42541,42542,44590?m/563161?s/?sbc/",
    tags: ["Coffee", "Pastries", "Snacks"]
  }
];
