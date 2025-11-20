import beachHut from "@/assets/locations/beach-hut.jpg";
import bookstore from "@/assets/locations/bookstore.jpg";
import outpost from "@/assets/locations/outpost.jpg";
import artStore from "@/assets/locations/art-store.jpg";
import petersonHall from "@/assets/locations/peterson-hall.jpg";
import wellnessCenter from "@/assets/locations/wellness-center.jpg";

export interface MicrowaveLocation {
  id: string;
  name: string;
  location: string;
  building?: string;
  image: string;
  mapLink: string;
}

export const microwaveLocations: MicrowaveLocation[] = [
  {
    id: "srwc-microwave",
    name: "Student Recreation & Wellness Center",
    location: "First Floor Lobby",
    image: wellnessCenter,
    mapLink: "https://map.concept3d.com/?id=1314#!m/569184?share"
  },
  {
    id: "bookstore-microwave",
    name: "Bookstore Convenience Store",
    location: "Convenience Store",
    image: bookstore,
    mapLink: "https://map.concept3d.com/?id=1314#!m/1013518?share"
  },
  {
    id: "beach-hut-microwave",
    name: "Beach Hut Convenience Store",
    location: "Convenience Store",
    image: beachHut,
    mapLink: "https://map.concept3d.com/?id=1314#!m/1013231?share"
  },
  {
    id: "outpost-microwave",
    name: "Outpost Convenience Store",
    location: "Campus Center",
    image: outpost,
    mapLink: "https://map.concept3d.com/?id=1314#!m/420442?share"
  },
  {
    id: "art-store-microwave",
    name: "Art Store Convenience Store",
    location: "FA-3",
    image: artStore,
    mapLink: "https://map.concept3d.com/?id=1314#!m/563161?share"
  },
  {
    id: "ph1-231-microwave",
    name: "PH-1 Room 231",
    location: "Peterson Hall",
    image: petersonHall,
    mapLink: "https://map.concept3d.com/?id=1314#!m/1013411?share"
  },
  {
    id: "ph1-1st-floor-microwave",
    name: "PH-1 First Floor Vending Machines",
    location: "Peterson Hall",
    image: petersonHall,
    mapLink: "https://map.concept3d.com/?id=1314#!m/1013411?share"
  }
];
