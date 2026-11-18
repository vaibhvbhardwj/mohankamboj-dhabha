export type ReferenceImageKey =
  | "exteriorNight"
  | "interiorWarm"
  | "interiorDelhi"
  | "interiorArches"
  | "interiorModern"
  | "curryNaan"
  | "thali"
  | "naanSpread"
  | "chaiBrass"
  | "chaiPour"
  | "clayChai"
  | "familyDining"
  | "roomBlue"
  | "roomWarm"
  | "bathroom"
  | "evCharging"
  | "parking"
  | "patioNight";
 
export type FoodImageKey = "parantha" | "momos" | "dalMakhani";

export type ReferenceImage = {
  key: ReferenceImageKey | FoodImageKey;
  src: string;
  alt: string;
  credit: string;
  source: string;
  replacementPurpose: string;
  license?: { name: string; url: string };
  modifications?: string;
};

export const referenceImages: Record<ReferenceImageKey | FoodImageKey, ReferenceImage> = {
  parantha: {
    key: "parantha",
    src: "/images/food/steamed-momos.jpg",
    alt: "Steamed vegetable momos served in a traditional bamboo steamer with spicy red chutney and garlic mayo dip",
    credit: "Mohan Kamboj Dhaba & Hotel",
    source: "Owner-supplied dish photograph",
    replacementPurpose: "Steamed momos dish photograph"
  },
  momos: {
    key: "momos",
    src: "/images/food/steamed-momos.jpg",
    alt: "Steamed vegetable momos served in a traditional bamboo steamer with spicy red chutney and garlic mayo dip",
    credit: "Mohan Kamboj Dhaba & Hotel",
    source: "Owner-supplied dish photograph",
    replacementPurpose: "Steamed momos dish photograph"
  },
  dalMakhani: {
    key: "dalMakhani",
    src: "/images/food/dal-makhani.jpg",
    alt: "North Indian curry feast featuring yellow dal tadka, rich paneer gravy, boondi raita, green chutney, and tandoori breads",
    credit: "Mohan Kamboj Dhaba & Hotel",
    source: "Owner-supplied dish photograph",
    replacementPurpose: "Dal and North Indian curry spread dish photograph"
  },
  exteriorNight: {
    key: "exteriorNight",
    src: "/images/timeline/2026_main.jpeg",
    alt: "Mohan Kamboj Dhaba and Hotel illuminated facade and entrance in 2026",
    credit: "Mohan Kamboj Dhaba & Hotel",
    source: "Owner-supplied 2026 archive",
    replacementPurpose: "Mohan Kamboj exterior or night facade with sign visible"
  },
  interiorWarm: {
    key: "interiorWarm",
    src: "/images/reference/restaurant-interior-bengaluru-hemant-lakshman.jpg",
    alt: "Warm restaurant interior with tables and hanging lights",
    credit: "Hemant Lakshman / Pexels",
    source: "https://www.pexels.com/photo/interior-of-restaurant-23877500/",
    replacementPurpose: "Dining hall wide shot"
  },
  interiorDelhi: {
    key: "interiorDelhi",
    src: "/images/reference/new-delhi-restaurant-interior-vidit-goel.jpg",
    alt: "Indian restaurant dining room with warm chairs and patterned floor",
    credit: "Vidit Goel / Pexels",
    source: "https://www.pexels.com/photo/lamps-over-tables-and-chairs-in-restaurant-19447626/",
    replacementPurpose: "Interior seating and family dining area"
  },
  interiorArches: {
    key: "interiorArches",
    src: "/images/reference/indian-restaurant-arches-abhishek-shekhawat.jpg",
    alt: "Indian restaurant interior with arches and elegant table setting",
    credit: "Abhishek Shekhawat / Pexels",
    source: "https://www.pexels.com/photo/elegant-indian-restaurant-interior-with-ornate-decor-32657750/",
    replacementPurpose: "Premium dining or entrance feature"
  },
  interiorModern: {
    key: "interiorModern",
    src: "/images/reference/modern-restaurant-bengaluru-prajwal.jpg",
    alt: "Modern restaurant interior with elegant furniture and lighting",
    credit: "Prajwal / Pexels",
    source: "https://www.pexels.com/photo/modern-design-of-a-restaurant-24499488/",
    replacementPurpose: "Rebuilt dining hall or lounge detail"
  },
  curryNaan: {
    key: "curryNaan",
    src: "/images/reference/indian-curry-naan-jack-baghel.jpg",
    alt: "Indian curry dishes with naan on a stone table",
    credit: "Jack Baghel / Pexels",
    source: "https://www.pexels.com/photo/delicious-indian-curry-dishes-on-stone-table-38807027/",
    replacementPurpose: "Dal, paneer and main-course table spread"
  },
  thali: {
    key: "thali",
    src: "/images/food/royal-murthal-thali.jpeg",
    alt: "Special Mohan Kamboj Thali with Shahi Paneer, Dal Makhani, Mix Veg, Jeera Rice, Boondi Raita, salad, papad, garlic naan, and sweet dish",
    credit: "Mohan Kamboj Dhaba & Hotel",
    source: "Owner-supplied thali photograph",
    replacementPurpose: "Special Mohan Kamboj Thali photograph"
  },
  naanSpread: {
    key: "naanSpread",
    src: "/images/reference/naan-curry-spices-jack-baghel.jpg",
    alt: "Seasoned rice with raita, tea and salad on a dark table",
    credit: "Jack Baghel / Pexels",
    source: "https://www.pexels.com/photo/indian-naan-bread-with-additions-20446413/",
    replacementPurpose: "Paratha, naan or bread spread"
  },
  chaiBrass: {
    key: "chaiBrass",
    src: "/images/reference/indian-chai-aditya-mara.jpg",
    alt: "Chai served in a white cup on a wooden tray",
    credit: "Aditya Mara / Pexels",
    source: "https://www.pexels.com/photo/tea-in-cup-17473023/",
    replacementPurpose: "Tea or coffee service"
  },
  chaiPour: {
    key: "chaiPour",
    src: "/images/reference/chai-pour-deepak-ramesha.jpg",
    alt: "Chai being poured during preparation",
    credit: "Deepak Ramesha / Pexels",
    source: "https://www.pexels.com/photo/a-person-holding-a-cup-8286220/",
    replacementPurpose: "Tea service or staff preparation moment"
  },
  clayChai: {
    key: "clayChai",
    src: "/images/reference/clay-cup-chai-pinaki-panda.jpg",
    alt: "Indian chai in clay cups",
    credit: "Pinaki Panda / Pexels",
    source: "https://www.pexels.com/photo/traditional-indian-chai-in-clay-cups-33104714/",
    replacementPurpose: "Tea, coffee or beverage detail"
  },
  familyDining: {
    key: "familyDining",
    src: "/images/dining-hall.jpg",
    alt: "Mohan Kamboj grand dining hall with crystal chandeliers, geometric flooring, and Buddha bas-relief",
    credit: "Mohan Kamboj Dhaba & Hotel",
    source: "Property Archive",
    replacementPurpose: "Authentic dining hall ambience"
  },
  roomBlue: {
    key: "roomBlue",
    src: "/images/gallery/gallery-3.jpeg",
    alt: "Mohan Kamboj hotel guest room with a double bed, wooden finishes and bedside seating",
    credit: "Mohan Kamboj Dhaba & Hotel",
    source: "Property archive",
    replacementPurpose: "Room wide shot with bathroom context"
  },
  roomWarm: {
    key: "roomWarm",
    src: "/images/gallery/gallery-3.jpeg",
    alt: "Bed and warm wood interiors in a Mohan Kamboj hotel guest room",
    credit: "Mohan Kamboj Dhaba & Hotel",
    source: "Property archive",
    replacementPurpose: "Room bed and linen detail"
  },
  bathroom: {
    key: "bathroom",
    src: "/images/justdial/jd-10.jpg",
    alt: "Washroom with sinks, mirrors and private cubicles at Mohan Kamboj",
    credit: "Mohan Kamboj Dhaba & Hotel / existing property archive",
    source: "Existing property archive",
    replacementPurpose: "Bathroom per room type"
  },
  evCharging: {
    key: "evCharging",
    src: "/images/reference/ev-charging-parking-philippe-weickmann.jpg",
    alt: "Electric vehicle charging station in a parking lot",
    credit: "Philippe WEICKMANN / Pexels",
    source: "https://www.pexels.com/photo/electric-vehicle-charging-station-in-parking-lot-37029446/",
    replacementPurpose: "EV charger in Mohan Kamboj property context"
  },
  parking: {
    key: "parking",
    src: "/images/timeline/2019_main.jpeg",
    alt: "Archive view of parked cars outside Mohan Kamboj Dhaba in 2019",
    credit: "Mohan Kamboj Dhaba & Hotel",
    source: "Owner-supplied 2019 archive",
    replacementPurpose: "Parking overview with property context"
  },
  patioNight: {
    key: "patioNight",
    src: "/images/reference/illuminated-restaurant-patio-aysegul-aytoren.jpg",
    alt: "Illuminated restaurant patio at night",
    credit: "Aysegul Aytoren / Pexels",
    source: "https://www.pexels.com/photo/illuminated-facade-of-restaurant-14949413/",
    replacementPurpose: "Night ambience or exterior arrival"
  }
};

export const image = (key: ReferenceImageKey | FoodImageKey) => referenceImages[key];

