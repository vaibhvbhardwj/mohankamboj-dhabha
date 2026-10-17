export type ReelItem = {
  id: string;
  title: string;
  category: string;
  duration: string;
  poster: string;
  videoUrl: string;
  instagramUrl?: string;
  caption: string;
};

export const reelsData: ReelItem[] = [
  {
    id: "reel-1",
    title: "The Iconic Murthal Experience",
    category: "Signature Dhaba",
    duration: "0:09",
    poster: "/reels/posters/reel-1.jpg",
    videoUrl: "/reels/reel1.mp4",
    instagramUrl: "https://www.instagram.com/mohankambojhotel_murthal/",
    caption: "Experience the legendary flavours of Murthal at Mohan Kamboj — sizzling tandoori paranthas with fresh homemade makhan and rich Punjabi curries."
  },
  {
    id: "reel-2",
    title: "Careful Cooking in Our Kitchen",
    category: "Kitchen & Hygiene",
    duration: "0:38",
    poster: "/reels/posters/reel-2.jpg",
    videoUrl: "/reels/reel2.mp4",
    instagramUrl: "https://www.instagram.com/mohankambojhotel_murthal/",
    caption: "Watch our chef prepare food in a clean, organised kitchen, wearing protective kitchen attire and following careful food-handling practices."
  },
  {
    id: "reel-3",
    title: "Fresh Jalebi, Made by Hand",
    category: "Jalebi Making",
    duration: "0:14",
    poster: "/reels/posters/reel-3.jpg",
    videoUrl: "/reels/reel3.mp4",
    instagramUrl: "https://www.instagram.com/mohankambojhotel_murthal/",
    caption: "Follow our chef as fresh jalebi is shaped and fried in the kitchen, then served golden and crisp. A closer look at a favourite Indian sweet."
  },
  {
    id: "reel-4",
    title: "A Walk Through Our Hotel",
    category: "Hotel Walkthrough",
    duration: "0:09",
    poster: "/reels/posters/reel-4.jpg",
    videoUrl: "/reels/reeel4.mp4",
    instagramUrl: "https://www.instagram.com/mohankambojhotel_murthal/",
    caption: "Take a walk through the hotel corridors and into our guest rooms, with a closer look at the room interiors and details awaiting your stay."
  }
];
