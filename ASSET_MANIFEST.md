# Asset Manifest

The website uses owner-supplied property and archive photographs alongside licensed food/reference imagery. The current shared mappings are in `src/data/images.ts`; timeline photographs are mapped in `src/components/HeritageTimeline.tsx`.

## Timeline and food alignment — October 2026

- The owner's `time/` folder supplies `public/images/timeline/`: `_main` files are the four main year photographs; numbered files supply the three cards behind each year. Missing back-card slots repeat photos from the same year: 1990 uses `1, 1, 1`; 2004 and 2019 use `1, 2, 1`; 2026 uses `1, 2, 3`.
- The owner's authentic Mohan Kamboj food photography supplies `public/images/food/`:
  - `royal-murthal-thali.jpeg`: Special Mohan Kamboj Thali with paneer, dal, sabzi, naan basket and accompaniments.
  - `dal-makhani.jpg`: North Indian curry feast with dal tadka, rich paneer gravy, raita, chutney, and tandoori breads.
  - `steamed-momos.jpg` (also preserved as `aloo-paratha.jpg`): Freshly steamed handcrafted vegetable momos in a bamboo steamer with spicy red chutney and garlic dip.
  All three dishes feature Mohan Kamboj Dhaba & Hotel branded table settings and are served across Home, Dining, and the gallery.
- `public/reels/posters/reel-1.jpg` through `reel-4.jpg` are still frames extracted from the corresponding supplied videos. Reels 2–4 now describe kitchen preparation, jalebi making, and the hotel walkthrough respectively. Reel 1's title and description are unchanged.
- Property photo mappings now use the supplied 2026 facade, actual guest room, existing property washroom archive, and the 2019 frontage/parking photo instead of unrelated reference scenes.

The older reference list below records the initial prototype sources; it is not a list of photographs currently displayed on every route.

## Required Client Replacement Photos

| Purpose | Current reference key | Needed client asset |
| --- | --- | --- |
| Hero exterior/night arrival | `exteriorNight`, `patioNight` | Dusk or night facade with Mohan Kamboj sign visible, plus mobile crop |
| Dining hall | `interiorWarm`, `interiorDelhi`, `interiorArches`, `interiorModern` | Wide dining hall, entrance, seating detail and rebuilt-property ambience |
| Food table spread | `curryNaan`, `thali`, `naanSpread` | Paratha, dal, paneer, breads, table setting and approved signature dishes |
| Tea/lassi/coffee | `chaiBrass`, `chaiPour`, `clayChai` | Tea, coffee, lassi and beverage service |
| Hospitality moment | `familyDining` | Real family/staff/service photograph with consent |
| Rooms | `roomBlue`, `roomWarm` | One wide and two detail photos per confirmed room type |
| Bathroom | `bathroom` | Clean bathroom photo per room type |
| Parking | `parking` | Parking overview showing the actual property, without private plates |
| EV charging | `evCharging` | Charger in Mohan Kamboj property context, after operator/spec confirmation |

## Source Of Truth

Update `src/data/images.ts` first. Gallery, homepage, room, facilities and visual sections should reference that central data rather than hard-coded image paths.
