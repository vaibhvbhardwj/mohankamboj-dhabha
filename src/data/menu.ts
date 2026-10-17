export type MenuCategory = {
  id: string;
  name: string;
  description: string;
};

export type MenuItem = {
  id: string;
  name: string;
  description?: string;
  categoryId: string;
  price?: number;
  available: boolean;
  featured?: boolean;
};

export const menuCategories: MenuCategory[] = [
  {
    id: "tandoori-parantha",
    name: "Tandoori Paranthas (With Butter)",
    description: "Our signature Murthal paranthas baked in authentic clay tandoor and served with generous white butter."
  },
  {
    id: "tawa-parantha",
    name: "Tawa Paranthas",
    description: "Homestyle griddle-crisped paranthas prepared fresh to order."
  },
  {
    id: "dal-special",
    name: "Dal Special",
    description: "Slow-simmered, rich and comforting dals infused with desi tadka."
  },
  {
    id: "paneer-specialities",
    name: "Paneer Specialities",
    description: "Fresh cottage cheese simmered in rich tomato, cashew, and aromatic herb gravies."
  },
  {
    id: "thali",
    name: "Royal Thalis",
    description: "Complete feast platters featuring paneer, dal makhani, breads, rice, raita, salad, and dessert."
  },
  {
    id: "tandoori-snacks",
    name: "Tandoori Snacks & Starters",
    description: "Smoky tikkas, crispy chaap, kebabs, and authentic North Indian road-trip bites."
  },
  {
    id: "tandoori-breads",
    name: "Tandoori Breads",
    description: "Crispy naans, layered lachha paranthas, and tandoori rotis fresh from the clay oven."
  },
  {
    id: "south-street",
    name: "South Indian & Street Food",
    description: "Crispy dosas, fluffy idlis, chaat, gol gappe, and raj kachori."
  },
  {
    id: "asian-chopsuey",
    name: "Asian & Noodles",
    description: "Indo-Chinese favourites, wok-tossed noodles, fried rice, and sizzling gravies."
  },
  {
    id: "beverages",
    name: "Tea, Coffee & Desi Drinks",
    description: "Highway kullad chai, thick sweet lassi, coolers, and refreshing shakes."
  },
  {
    id: "sweet-dish",
    name: "Sweet Dishes",
    description: "Spl. Desi Ghee Jalebi, rabri, gulab jamun, and traditional thandi kheer."
  }
];

export const menuItems: MenuItem[] = [
  // Tandoori Parantha with Butter
  { id: "tp-aloo", name: "Aloo Parantha", description: "Clay tandoor baked, stuffed with spiced potato and topped with butter", categoryId: "tandoori-parantha", price: 110, available: true, featured: true },
  { id: "tp-onion", name: "Onion Parantha", description: "Spiced onion stuffing baked crisp in tandoor", categoryId: "tandoori-parantha", price: 110, available: true },
  { id: "tp-aloo-pyaaz", name: "Aloo Pyaaz Parantha", description: "Classic spiced potato and diced onion blend", categoryId: "tandoori-parantha", price: 110, available: true, featured: true },
  { id: "tp-mix", name: "Mix Parantha", description: "Hearty mix of seasonal vegetables, paneer and spices", categoryId: "tandoori-parantha", price: 120, available: true, featured: true },
  { id: "tp-paneer", name: "Paneer Parantha", description: "Rich crumbled paneer filling with green chillies and fresh herbs", categoryId: "tandoori-parantha", price: 130, available: true, featured: true },
  { id: "tp-paneer-pyaaz", name: "Paneer Pyaaz Parantha", description: "Paneer and fresh chopped onions with roasted spices", categoryId: "tandoori-parantha", price: 130, available: true },
  { id: "tp-gobhi", name: "Gobhi Parantha", description: "Freshly grated spiced cauliflower stuffing", categoryId: "tandoori-parantha", price: 110, available: true },
  { id: "tp-mooli", name: "Mooli Parantha", description: "Traditional grated radish and carom seed filling", categoryId: "tandoori-parantha", price: 110, available: true },
  { id: "tp-aloo-methi", name: "Aloo Methi Parantha", description: "Potatoes tossed with fragrant fenugreek leaves", categoryId: "tandoori-parantha", price: 110, available: true },
  { id: "tp-aloo-misiya", name: "Aloo Misiya Parantha", description: "Gram-flour blend parantha stuffed with spiced potato", categoryId: "tandoori-parantha", price: 120, available: true },
  { id: "tp-paneer-misiya", name: "Paneer Misiya Parantha", description: "Gram-flour missi dough stuffed with seasoned paneer", categoryId: "tandoori-parantha", price: 140, available: true },

  // Tawa Parantha
  { id: "tw-plain", name: "Plain Tawa Parantha", description: "Golden layered homestyle parantha", categoryId: "tawa-parantha", price: 98, available: true },
  { id: "tw-aloo", name: "Aloo Tawa Parantha", description: "Griddle-crisped with seasoned potato filling", categoryId: "tawa-parantha", price: 128, available: true },
  { id: "tw-onion", name: "Onion Tawa Parantha", description: "Griddle parantha stuffed with finely chopped onions", categoryId: "tawa-parantha", price: 128, available: true },
  { id: "tw-aloo-pyaaz", name: "Aloo Pyaaz Tawa Parantha", description: "Potato and onion spiced filling on tawa", categoryId: "tawa-parantha", price: 128, available: true },
  { id: "tw-mix", name: "Mix Tawa Parantha", description: "Wholesome mixed veggie filling crisped with desi ghee", categoryId: "tawa-parantha", price: 145, available: true },
  { id: "tw-paneer", name: "Paneer Tawa Parantha", description: "Generous cottage cheese filling on tawa", categoryId: "tawa-parantha", price: 150, available: true },

  // Dal Special
  { id: "dal-makhani", name: "Dal Makhani", description: "Slow-cooked black lentils simmered overnight with cream and butter", categoryId: "dal-special", price: 279, available: true, featured: true },
  { id: "dal-fry", name: "Dal Fry", description: "Yellow lentils tempered with cumin, garlic, tomatoes and desi ghee", categoryId: "dal-special", price: 259, available: true },
  { id: "yellow-dal", name: "Yellow Dal Tadka", description: "Comforting yellow dal with double aromatic tadka", categoryId: "dal-special", price: 259, available: true },
  { id: "panchratan-dal", name: "Panchratan Dal", description: "Harmonious blend of five lentils cooked with royal spices", categoryId: "dal-special", price: 269, available: true },
  { id: "amritsari-chholye", name: "Amritsari Chholye", description: "Authentic dark spiced Amritsari chickpea curry", categoryId: "dal-special", price: 269, available: true, featured: true },
  { id: "chana-masala", name: "Chana Masala", description: "Robust chickpeas cooked in a tangy tomato-onion gravy", categoryId: "dal-special", price: 259, available: true },

  // Paneer Specialities
  { id: "paneer-shahi", name: "Shahi Paneer", description: "Royal cottage cheese cubes in silky cream and cashew gravy", categoryId: "paneer-specialities", price: 349, available: true, featured: true },
  { id: "paneer-kadhai", name: "Kadhai Paneer", description: "Paneer tossed with bell peppers, onions and freshly pounded coriander seeds", categoryId: "paneer-specialities", price: 349, available: true, featured: true },
  { id: "paneer-butter-masala", name: "Paneer Butter Masala", description: "Tender paneer in rich buttery tomato velvet gravy", categoryId: "paneer-specialities", price: 349, available: true },
  { id: "paneer-handi", name: "Paneer Handi", description: "Earthen pot cooked paneer with thick aromatic masala", categoryId: "paneer-specialities", price: 349, available: true },
  { id: "paneer-do-pyaza", name: "Paneer Do Pyaza", description: "Cottage cheese with caramelized and crunchy onions", categoryId: "paneer-specialities", price: 349, available: true },
  { id: "paneer-bhurji", name: "Punjabi Paneer Bhurji", description: "Scrambled paneer cooked with tomatoes, green chillies and fresh coriander", categoryId: "paneer-specialities", price: 349, available: true },
  { id: "malai-kofta", name: "Malai Kofta", description: "Melt-in-mouth paneer and potato dumplings in luscious golden gravy", categoryId: "paneer-specialities", price: 349, available: true },
  { id: "palak-paneer", name: "Palak Paneer", description: "Fresh pureed spinach gravy with seasoned paneer cubes", categoryId: "paneer-specialities", price: 349, available: true },

  // Thalis
  {
    id: "thali-special",
    name: "Special Mohan Kamboj Thali",
    description: "Paneer dish + Dal Makhani + Mix Veg + Pulao + Raita + Salad + Papad + 1 Lachha Parantha + 1 Naan + Sweet Dish",
    categoryId: "thali",
    price: 449,
    available: true,
    featured: true
  },
  {
    id: "thali-deluxe",
    name: "Deluxe Thali",
    description: "Paneer dish + Dal Makhani/Mix Veg + Pulao + Raita + Salad + Papad + 1 Lachha Parantha + 1 Naan + Sweet Dish",
    categoryId: "thali",
    price: 399,
    available: true,
    featured: true
  },

  // Tandoori Snacks & Starters
  { id: "snack-paneer-tikka", name: "Paneer Tikka", description: "Charcoal-grilled cottage cheese marinated in hung curd and tandoori spices", categoryId: "tandoori-snacks", price: 249, available: true, featured: true },
  { id: "snack-paneer-malai", name: "Paneer Malai Tikka", description: "Mildly spiced paneer skewered with rich cream and cardamom", categoryId: "tandoori-snacks", price: 259, available: true },
  { id: "snack-soya-malai", name: "Soya Malai Tikka", description: "Juicy soya chaap bathed in cream and mild tandoori spices", categoryId: "tandoori-snacks", price: 295, available: true },
  { id: "snack-afghani-chaap", name: "Afghani Chaap Tikka", description: "Smoky tandoori chaap coated in authentic Afghan style cream marinade", categoryId: "tandoori-snacks", price: 299, available: true },
  { id: "snack-hara-bhara", name: "Hara Bhara Kebab", description: "Crisp pan-fried patties made with spinach, green peas and potatoes", categoryId: "tandoori-snacks", price: 199, available: true },
  { id: "snack-dahi-sholey", name: "Dahi Sholey", description: "Crispy bread rolls stuffed with spiced hung curd filling", categoryId: "tandoori-snacks", price: 199, available: true },
  { id: "snack-chholey-bhature", name: "Chholey Bhature", description: "Puffed bhaturas served with spicy Amritsari chhole, pickle and onions", categoryId: "tandoori-snacks", price: 199, available: true, featured: true },
  { id: "snack-pav-bhaji", name: "Pav Bhaji", description: "Mashed spiced vegetable bhaji with buttered toasted pav", categoryId: "tandoori-snacks", price: 159, available: true },

  // Tandoori Breads
  { id: "tb-butter-naan", name: "Butter Naan", description: "Tender leavened flatbread brushed with fresh butter", categoryId: "tandoori-breads", price: 99, available: true, featured: true },
  { id: "tb-garlic-naan", name: "Garlic Naan", description: "Infused with chopped garlic and coriander butter", categoryId: "tandoori-breads", price: 109, available: true, featured: true },
  { id: "tb-lachha", name: "Lachhedar Parantha", description: "Multi-layered flaky parantha straight from the clay oven", categoryId: "tandoori-breads", price: 89, available: true },
  { id: "tb-amritsari-kulcha", name: "Amritsari Kulcha (1 Pc)", description: "Crispy stuffed kulcha prepared the traditional way", categoryId: "tandoori-breads", price: 105, available: true },
  { id: "tb-butter-roti", name: "Butter Roti", description: "Whole wheat tandoori roti with butter", categoryId: "tandoori-breads", price: 48, available: true },
  { id: "tb-plain-roti", name: "Plain Roti", description: "Classic clay-oven baked whole wheat roti", categoryId: "tandoori-breads", price: 40, available: true },
  { id: "tb-missi-roti", name: "Missi Roti", description: "Spiced gram flour flatbread with chopped onions and ajwain", categoryId: "tandoori-breads", price: 65, available: true },
  { id: "tb-stuffed-naan", name: "Stuffed Naan", description: "Tandoori naan loaded with spiced fillings", categoryId: "tandoori-breads", price: 119, available: true },

  // South Indian & Street Food
  { id: "dosa-mk-spl", name: "Mohan Kamboj Spl. Dosa", description: "Chef's signature crispy dosa loaded with special paneer stuffing", categoryId: "south-street", price: 249, available: true, featured: true },
  { id: "dosa-butter-masala", name: "Butter Masala Dosa", description: "Golden butter dosa stuffed with spiced potato masala", categoryId: "south-street", price: 219, available: true },
  { id: "south-idli-sambar", name: "Idli Sambar (2 Pcs)", description: "Steamed fluffy rice cakes with piping hot sambar and coconut chutney", categoryId: "south-street", price: 149, available: true },
  { id: "street-gol-gappe", name: "Gol Gappe (6 Pcs) Suji/Atta", description: "Crispy puris filled with spicy tangy water and stuffing", categoryId: "south-street", price: 95, available: true },
  { id: "street-raj-kachori", name: "Raj Kachori", description: "Crispy royal kachori filled with sprouts, sweet curd, and chutneys", categoryId: "south-street", price: 160, available: true, featured: true },
  { id: "street-dahi-bhalla", name: "Dahi Bhalla", description: "Soft lentil dumplings soaked in sweet yogurt and tamarind chutney", categoryId: "south-street", price: 150, available: true },

  // Asian & Noodles
  { id: "asian-momos", name: "Veg Momos (Steamed/Fried)", description: "Delicate dumplings packed with crunchy minced vegetables", categoryId: "asian-chopsuey", price: 160, available: true },
  { id: "asian-chilli-paneer", name: "Chilli Paneer (Dry/Gravy)", description: "Crisp cottage cheese tossed in spicy soy-chilli and bell peppers", categoryId: "asian-chopsuey", price: 349, available: true, featured: true },
  { id: "asian-hakka-noodles", name: "Veg. Hakka Noodles", description: "Wok-tossed noodles with shredded vegetables and garlic aromatics", categoryId: "asian-chopsuey", price: 190, available: true },
  { id: "asian-fried-rice", name: "Veg. Fried Rice", description: "Aromatic basmati rice stir-fried with garden veggies", categoryId: "asian-chopsuey", price: 229, available: true },

  // Beverages & Desi Drinks
  { id: "bev-kullad-chai", name: "Special Kullad Chai", description: "Authentic slow-brewed highway tea served in an earthen clay cup", categoryId: "beverages", price: 50, available: true, featured: true },
  { id: "bev-masala-tea", name: "Masala Tea", description: "Spiced ginger and cardamom tea", categoryId: "beverages", price: 35, available: true },
  { id: "bev-sweet-lassi", name: "Sweet Lassi", description: "Thick, creamy Punjabi sweet curd lassi served chilled", categoryId: "beverages", price: 119, available: true, featured: true },
  { id: "bev-masala-chaas", name: "Masala Chaas", description: "Spiced cooling buttermilk with roasted cumin and mint", categoryId: "beverages", price: 89, available: true },
  { id: "bev-cold-coffee", name: "Cold Coffee", description: "Frothy chilled coffee blend", categoryId: "beverages", price: 149, available: true },
  { id: "bev-cold-coffee-icecream", name: "Cold Coffee with Ice Cream", description: "Creamy cold coffee crowned with a vanilla scoop", categoryId: "beverages", price: 179, available: true },

  // Sweet Dishes
  { id: "sw-desi-ghee-jalebi", name: "Spl. Desi Ghee Jalebi (Per Plate)", description: "Freshly made crispy golden jalebis soaked in fragrant sugar syrup", categoryId: "sweet-dish", price: 165, available: true, featured: true },
  { id: "sw-jalebi-rabri", name: "Jalebi with Rabri", description: "Hot crispy jalebi paired with thick malai rabri", categoryId: "sweet-dish", price: 124, available: true, featured: true },
  { id: "sw-gulab-jamun", name: "Gulab Jamun (1 Pc)", description: "Warm, soft mawa dumplings steeped in cardamom syrup", categoryId: "sweet-dish", price: 47, available: true },
  { id: "sw-kheer", name: "Spl. Thandi Kheer", description: "Slow-cooked rice pudding infused with saffron, nuts and cardamom", categoryId: "sweet-dish", price: 119, available: true, featured: true }
];
