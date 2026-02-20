export interface Wedding {
  id: number;
  slug: string;
  names: string;
  location: string;
  venue: string;
  category: string;
  coverImage: string;
  photographer: string;
  featured?: boolean;
  date?: string;
  season?: string;
  story: string;
  excerpt: string;
  details: {
    guests?: string;
    style?: string;
    colors?: string[];
  };
  gallery: string[];
}

export const allWeddings: Wedding[] = [
  {
    id: 1,
    slug: "lena-chappuis-tuscany",
    names: "Lena & Chappuis",
    location: "Tuscany, Italy",
    venue: "Villa Medicea di Lilliano",
    category: "Overseas",
    coverImage: "/attached_assets/stock_images/elegant_wedding_coup_39239bd8.jpg",
    photographer: "Vlasta",
    featured: true,
    season: "Summer",
    excerpt: "Old-world romance in the rolling hills of Italy",
    story: "Lena and Chappuis exchanged vows in the heart of Tuscany, where centuries-old villas and cypress-lined hills provided the perfect backdrop for their love story. The celebration embodied the timeless elegance of Italian romance, with soft candlelight, flowing fabrics, and the warm glow of the setting sun painting the sky in shades of gold.",
    details: {
      guests: "120",
      style: "Classic Italian Romance",
      colors: ["Ivory", "Champagne", "Burgundy", "Gold"]
    },
    gallery: [
      "/attached_assets/stock_images/elegant_wedding_coup_39239bd8.jpg",
      "/attached_assets/stock_images/romantic_wedding_cel_e94bb5cc.jpg",
      "/attached_assets/stock_images/luxury_wedding_venue_9431b021.jpg",
    ]
  },
  {
    id: 2,
    slug: "bifern-sun-lake-como",
    names: "Bifern & Sun",
    location: "Lake Como, Italy",
    venue: "Villa del Balbianello",
    category: "Overseas",
    coverImage: "/attached_assets/stock_images/tropical_beach_weddi_f401ee78.jpg",
    photographer: "Vlasta",
    season: "Spring",
    excerpt: "Lakeside elegance on the shores of Italy's most romantic lake",
    story: "Bifern and Sun's wedding at Lake Como was a dream realized. With the majestic Alps reflected in the pristine waters, they celebrated their union surrounded by architectural grandeur and natural beauty. Every detail was thoughtfully curated to honor the location's storied elegance.",
    details: {
      guests: "80",
      style: "Lakeside Luxury",
      colors: ["White", "Navy", "Silver", "Sage Green"]
    },
    gallery: [
      "/attached_assets/stock_images/tropical_beach_weddi_f401ee78.jpg",
    ]
  },
  {
    id: 3,
    slug: "opal-top-khao-yai",
    names: "Opal & Top",
    location: "Khao Yai",
    venue: "Palio Khao Yai",
    category: "Khao Yai",
    coverImage: "/attached_assets/stock_images/garden_wedding_recep_53267de0.jpg",
    photographer: "Nawaphon",
    season: "Winter",
    excerpt: "A vineyard celebration surrounded by Thailand's wine country",
    story: "Opal and Top chose the rolling vineyards of Khao Yai for their intimate celebration, where Thai countryside charm meets European-inspired elegance. The crisp air and lush landscapes created the perfect atmosphere for their romantic outdoor ceremony.",
    details: {
      guests: "100",
      style: "Vineyard Romance",
      colors: ["Burgundy", "Blush", "Cream", "Forest Green"]
    },
    gallery: [
      "/attached_assets/stock_images/garden_wedding_recep_53267de0.jpg",
    ]
  },
  {
    id: 4,
    slug: "sita-matt-bangkok",
    names: "Sita & Matt",
    location: "Bangkok",
    venue: "The Siam Hotel",
    category: "Bangkok",
    coverImage: "/attached_assets/stock_images/luxury_wedding_venue_93931add.jpg",
    photographer: "Jose Villa",
    season: "Winter",
    excerpt: "Urban sophistication meets Thai elegance in the heart of Bangkok",
    story: "Sita and Matt's Bangkok wedding was a masterful blend of contemporary luxury and traditional Thai elements. Set against the city's glittering skyline, their celebration showcased the best of urban wedding design.",
    details: {
      guests: "150",
      style: "Modern Thai Elegance",
      colors: ["Gold", "White", "Deep Red", "Black"]
    },
    gallery: [
      "/attached_assets/stock_images/luxury_wedding_venue_93931add.jpg",
    ]
  },
  {
    id: 5,
    slug: "june-putt-bangkok",
    names: "June & Putt",
    location: "Bangkok",
    venue: "Rosewood Bangkok",
    category: "Bangkok",
    coverImage: "/attached_assets/stock_images/elegant_wedding_coup_182134fc.jpg",
    photographer: "Stepan Vrzala",
    season: "Fall",
    excerpt: "Timeless elegance in Bangkok's most prestigious venue",
    story: "June and Putt's celebration was the epitome of refined luxury. Every detail, from the floral arrangements to the candlelit reception, spoke to their impeccable taste and the grandeur of their love.",
    details: {
      guests: "200",
      style: "Classic Luxury",
      colors: ["Ivory", "Champagne", "Soft Pink", "Gold"]
    },
    gallery: [
      "/attached_assets/stock_images/elegant_wedding_coup_182134fc.jpg",
    ]
  },
  {
    id: 6,
    slug: "justyna-phu-hua-hin",
    names: "Justyna & Phu",
    location: "Hua Hin",
    venue: "InterContinental Hua Hin Resort",
    category: "Hua Hin",
    coverImage: "/attached_assets/stock_images/tropical_beach_weddi_7880adcb.jpg",
    photographer: "Saya Photography",
    season: "Spring",
    excerpt: "Beachfront bliss with stunning Gulf of Thailand views",
    story: "Justyna and Phu said 'I do' with their toes in the sand and the Gulf of Thailand as their witness. The beachfront setting, combined with elegant tropical touches, created an unforgettable destination wedding.",
    details: {
      guests: "90",
      style: "Beach Elegance",
      colors: ["White", "Coral", "Turquoise", "Gold"]
    },
    gallery: [
      "/attached_assets/stock_images/tropical_beach_weddi_7880adcb.jpg",
    ]
  },
  {
    id: 7,
    slug: "mink-m-hua-hin",
    names: "Mink & M",
    location: "Hua Hin",
    venue: "Veranda Resort Hua Hin",
    category: "Hua Hin",
    coverImage: "/attached_assets/stock_images/garden_wedding_recep_32cd9dd5.jpg",
    photographer: "Ken Tan",
    season: "Summer",
    excerpt: "Garden romance meets coastal charm",
    story: "Mink and M's wedding was a celebration of natural beauty, with lush gardens cascading toward the ocean. The intimate ceremony was framed by tropical blooms and the sound of waves in the distance.",
    details: {
      guests: "70",
      style: "Tropical Garden",
      colors: ["White", "Greenery", "Soft Yellow", "Natural Wood"]
    },
    gallery: [
      "/attached_assets/stock_images/garden_wedding_recep_32cd9dd5.jpg",
    ]
  },
  {
    id: 8,
    slug: "proud-jan-chiang-mai",
    names: "Proud & Jan",
    location: "Chiang Mai",
    venue: "Four Seasons Chiang Mai",
    category: "Chiang Mai",
    coverImage: "/attached_assets/stock_images/romantic_wedding_cel_e94bb5cc.jpg",
    photographer: "Vlasta",
    featured: true,
    season: "Winter",
    excerpt: "A romantic garden celebration in the heart of Northern Thailand",
    story: "Proud and Jan's wedding in Chiang Mai was pure magic. Set within the Four Seasons' lush rice terraces, their celebration honored Northern Thai traditions while embracing modern romance. The mountains provided a breathtaking backdrop as they exchanged vows at sunset.",
    details: {
      guests: "110",
      style: "Garden Romance",
      colors: ["White", "Blush", "Greenery", "Gold"]
    },
    gallery: [
      "/attached_assets/stock_images/romantic_wedding_cel_e94bb5cc.jpg",
    ]
  },
  {
    id: 9,
    slug: "val-lyle-chiang-mai",
    names: "Val & Lyle",
    location: "Chiang Mai",
    venue: "Dhara Dhevi Chiang Mai",
    category: "Chiang Mai",
    coverImage: "/attached_assets/stock_images/luxury_wedding_venue_9431b021.jpg",
    photographer: "Ha Nguyen",
    season: "Fall",
    excerpt: "Enchanting Lanna-inspired celebration",
    story: "Val and Lyle's wedding honored the rich heritage of Lanna culture with intricate details and traditional ceremonies, all while maintaining an air of modern elegance.",
    details: {
      guests: "95",
      style: "Lanna Heritage",
      colors: ["Gold", "Deep Red", "Ivory", "Teak"]
    },
    gallery: [
      "/attached_assets/stock_images/luxury_wedding_venue_9431b021.jpg",
    ]
  },
  {
    id: 10,
    slug: "jenny-alex-krabi",
    names: "Jenny & Alex",
    location: "Krabi",
    venue: "Rayavadee Resort",
    category: "Krabi",
    coverImage: "/attached_assets/stock_images/romantic_wedding_cel_1d0400c0.jpg",
    photographer: "Dani Rodriguez",
    featured: true,
    season: "Spring",
    excerpt: "Beach elegance meets tropical paradise in this stunning Krabi wedding",
    story: "Jenny and Alex's Krabi wedding was the definition of tropical paradise. With limestone karsts rising from turquoise waters and soft white sand beneath their feet, their beachfront ceremony was nothing short of spectacular.",
    details: {
      guests: "85",
      style: "Beach Paradise",
      colors: ["White", "Aqua", "Sand", "Coral"]
    },
    gallery: [
      "/attached_assets/stock_images/romantic_wedding_cel_1d0400c0.jpg",
    ]
  },
  {
    id: 11,
    slug: "emily-vishal-krabi",
    names: "Emily & Vishal",
    location: "Krabi",
    venue: "Phulay Bay, A Ritz-Carlton Reserve",
    category: "Krabi",
    coverImage: "/attached_assets/stock_images/tropical_beach_weddi_f401ee78.jpg",
    photographer: "Cassandra Ladru",
    season: "Winter",
    excerpt: "Luxury beach wedding with breathtaking Andaman Sea views",
    story: "Emily and Vishal's multicultural celebration blended traditions beautifully against the backdrop of Krabi's pristine beaches and luxury resort setting.",
    details: {
      guests: "100",
      style: "Luxury Beach",
      colors: ["Ivory", "Peach", "Gold", "Turquoise"]
    },
    gallery: [
      "/attached_assets/stock_images/tropical_beach_weddi_f401ee78.jpg",
    ]
  },
  {
    id: 12,
    slug: "cheeny-michael-koh-samui",
    names: "Cheeny & Michael",
    location: "Koh Samui",
    venue: "Six Senses Samui",
    category: "Koh Samui",
    coverImage: "/attached_assets/stock_images/tropical_beach_weddi_7880adcb.jpg",
    photographer: "ProudRad",
    season: "Winter",
    excerpt: "Island paradise wedding with panoramic ocean views",
    story: "Cheeny and Michael's Koh Samui celebration was an island dream come true, with sweeping ocean vistas and tropical luxury at every turn.",
    details: {
      guests: "75",
      style: "Island Luxury",
      colors: ["White", "Ocean Blue", "Coral", "Natural"]
    },
    gallery: [
      "/attached_assets/stock_images/tropical_beach_weddi_7880adcb.jpg",
    ]
  },
  {
    id: 13,
    slug: "miranda-fei-koh-samui",
    names: "Miranda & Fei",
    location: "Koh Samui",
    venue: "Conrad Koh Samui",
    category: "Koh Samui",
    coverImage: "/attached_assets/stock_images/luxury_wedding_venue_93931add.jpg",
    photographer: "Ammata's Eyes",
    season: "Spring",
    excerpt: "Hillside elegance overlooking the Gulf of Thailand",
    story: "Miranda and Fei chose the stunning hilltop setting of Conrad Koh Samui for their intimate celebration, where modern design meets natural island beauty.",
    details: {
      guests: "60",
      style: "Contemporary Island",
      colors: ["White", "Navy", "Silver", "Teal"]
    },
    gallery: [
      "/attached_assets/stock_images/luxury_wedding_venue_93931add.jpg",
    ]
  },
  {
    id: 14,
    slug: "lita-calvin-phuket",
    names: "Lita & Calvin",
    location: "Phuket",
    venue: "The Pavilions Phuket",
    category: "Phuket",
    coverImage: "/attached_assets/stock_images/garden_wedding_recep_53267de0.jpg",
    photographer: "Ha Nguyen",
    season: "Fall",
    excerpt: "Intimate hillside celebration with Andaman Sea views",
    story: "Lita and Calvin's Phuket wedding was an intimate affair set high on a hillside, where the Andaman Sea stretched endlessly before them and tropical breezes carried the scent of jasmine.",
    details: {
      guests: "50",
      style: "Intimate Tropical",
      colors: ["White", "Blush", "Greenery", "Teal"]
    },
    gallery: [
      "/attached_assets/stock_images/garden_wedding_recep_53267de0.jpg",
    ]
  },
  {
    id: 15,
    slug: "artemis-stephen-phuket",
    names: "Artemis & Stephen",
    location: "Phuket",
    venue: "Amanpuri",
    category: "Phuket",
    coverImage: "/attached_assets/stock_images/elegant_wedding_coup_39239bd8.jpg",
    photographer: "La Dichosa",
    season: "Winter",
    excerpt: "Ultra-luxury beachfront wedding at Phuket's most exclusive resort",
    story: "Artemis and Stephen's wedding at Amanpuri was the epitome of refined luxury, with every detail crafted to perfection in one of Asia's most prestigious resort settings.",
    details: {
      guests: "65",
      style: "Ultra Luxury",
      colors: ["White", "Gold", "Champagne", "Ocean Blue"]
    },
    gallery: [
      "/attached_assets/stock_images/elegant_wedding_coup_39239bd8.jpg",
    ]
  },
  {
    id: 16,
    slug: "parama-nam-dong-phuket",
    names: "Parama Nam & Dong",
    location: "Phuket",
    venue: "Trisara Resort",
    category: "Phuket",
    coverImage: "/attached_assets/stock_images/garden_wedding_recep_32cd9dd5.jpg",
    photographer: "Nawaphon & Peduckk",
    featured: true,
    season: "Spring",
    excerpt: "Beachfront elegance with Thai cultural touches",
    story: "Parama Nam and Dong's wedding beautifully wove together their Thai heritage with contemporary beach luxury, creating a celebration that was both deeply meaningful and visually stunning.",
    details: {
      guests: "110",
      style: "Thai Contemporary",
      colors: ["Gold", "White", "Deep Red", "Navy"]
    },
    gallery: [
      "/attached_assets/stock_images/garden_wedding_recep_32cd9dd5.jpg",
    ]
  },
  {
    id: 17,
    slug: "ashley-michael-phuket",
    names: "Ashley & Michael",
    location: "Phuket",
    venue: "Anantara Mai Khao",
    category: "Phuket",
    coverImage: "/attached_assets/stock_images/romantic_wedding_cel_e94bb5cc.jpg",
    photographer: "Shane Sheperd",
    featured: true,
    season: "Summer",
    excerpt: "Romantic beach wedding with sunset ceremony",
    story: "Ashley and Michael's sunset beach wedding was pure romance, with golden hour light painting the sky as they said their vows with the Andaman Sea as their witness.",
    details: {
      guests: "95",
      style: "Romantic Beach",
      colors: ["Blush", "Champagne", "White", "Sunset Orange"]
    },
    gallery: [
      "/attached_assets/stock_images/romantic_wedding_cel_e94bb5cc.jpg",
    ]
  },
  {
    id: 18,
    slug: "melanie-brian-phuket",
    names: "Melanie & Brian",
    location: "Phuket",
    venue: "Sri Panwa",
    category: "Phuket",
    coverImage: "/attached_assets/stock_images/luxury_wedding_venue_9431b021.jpg",
    photographer: "darinimages",
    featured: true,
    season: "Winter",
    excerpt: "Cliffside luxury with panoramic ocean views",
    story: "Melanie and Brian's wedding on Phuket's famous cliffside was a spectacular affair, with 360-degree ocean views and luxury at every turn.",
    details: {
      guests: "120",
      style: "Cliffside Luxury",
      colors: ["White", "Navy", "Gold", "Ocean Blue"]
    },
    gallery: [
      "/attached_assets/stock_images/luxury_wedding_venue_9431b021.jpg",
    ]
  },
  {
    id: 19,
    slug: "anisha-naj-phuket",
    names: "Anisha & Naj",
    location: "Phuket",
    venue: "The Surin Phuket",
    category: "Phuket",
    coverImage: "/attached_assets/stock_images/tropical_beach_weddi_f401ee78.jpg",
    photographer: "Alice Mahran & ProudRad",
    featured: true,
    season: "Fall",
    excerpt: "Multicultural beach celebration blending traditions",
    story: "Anisha and Naj's wedding was a beautiful fusion of cultures, honoring both their heritages while celebrating on Phuket's pristine Pansea Beach.",
    details: {
      guests: "105",
      style: "Multicultural Beach",
      colors: ["Gold", "Burgundy", "Ivory", "Teal"]
    },
    gallery: [
      "/attached_assets/stock_images/tropical_beach_weddi_f401ee78.jpg",
    ]
  },
  {
    id: 20,
    slug: "janie-mikey-koh-samui",
    names: "Janie & Mikey",
    location: "Koh Samui",
    venue: "Four Seasons Koh Samui",
    category: "Koh Samui",
    coverImage: "/attached_assets/stock_images/elegant_wedding_coup_182134fc.jpg",
    photographer: "Alen Karupovic",
    season: "Spring",
    excerpt: "Tropical elegance on Samui's pristine shores",
    story: "Janie and Mikey's Four Seasons wedding was a masterclass in tropical luxury, with every detail reflecting the island's natural beauty.",
    details: {
      guests: "88",
      style: "Tropical Elegance",
      colors: ["White", "Turquoise", "Coral", "Natural"]
    },
    gallery: [
      "/attached_assets/stock_images/elegant_wedding_coup_182134fc.jpg",
    ]
  },
  {
    id: 21,
    slug: "emily-vanya-koh-samui",
    names: "Emily & Vanya",
    location: "Koh Samui",
    venue: "W Koh Samui",
    category: "Koh Samui",
    coverImage: "/attached_assets/stock_images/romantic_wedding_cel_1d0400c0.jpg",
    photographer: "Hipster Wedding Asia",
    season: "Winter",
    excerpt: "Modern beach wedding with vibrant tropical vibes",
    story: "Emily and Vanya brought their fun-loving energy to W Koh Samui, creating a vibrant celebration that was equal parts chic and playful.",
    details: {
      guests: "70",
      style: "Modern Beach",
      colors: ["White", "Bright Coral", "Yellow", "Turquoise"]
    },
    gallery: [
      "/attached_assets/stock_images/romantic_wedding_cel_1d0400c0.jpg",
    ]
  },
  {
    id: 22,
    slug: "cassandra-jeffree-koh-samui",
    names: "Cassandra & Jeffree",
    location: "Koh Samui",
    venue: "InterContinental Samui Baan Taling Ngam",
    category: "Koh Samui",
    coverImage: "/attached_assets/stock_images/garden_wedding_recep_53267de0.jpg",
    photographer: "ProudRad",
    season: "Fall",
    excerpt: "Sunset clifftop ceremony with Gulf of Thailand panoramas",
    story: "Cassandra and Jeffree's clifftop wedding offered breathtaking sunset views over the Gulf, with a ceremony space that seemed to float above the sea.",
    details: {
      guests: "92",
      style: "Clifftop Elegance",
      colors: ["Blush", "White", "Gold", "Sunset Tones"]
    },
    gallery: [
      "/attached_assets/stock_images/garden_wedding_recep_53267de0.jpg",
    ]
  },
  {
    id: 23,
    slug: "maggie-yueyang-koh-samui",
    names: "Maggie & Yueyang",
    location: "Koh Samui",
    venue: "Belmond Napasai",
    category: "Koh Samui",
    coverImage: "/attached_assets/stock_images/luxury_wedding_venue_93931add.jpg",
    photographer: "Erich Mcvey",
    season: "Spring",
    excerpt: "Intimate beachfront celebration with refined tropical elegance",
    story: "Maggie and Yueyang's intimate Samui wedding was a study in understated elegance, with soft colors and natural beauty taking center stage.",
    details: {
      guests: "55",
      style: "Refined Tropical",
      colors: ["Ivory", "Champagne", "Soft Pink", "Greenery"]
    },
    gallery: [
      "/attached_assets/stock_images/luxury_wedding_venue_93931add.jpg",
    ]
  },
  {
    id: 24,
    slug: "li-paul-krabi",
    names: "Li & Paul",
    location: "Krabi",
    venue: "Pimalai Resort & Spa",
    category: "Krabi",
    coverImage: "/attached_assets/stock_images/tropical_beach_weddi_7880adcb.jpg",
    photographer: "Hipster Weddings Asia",
    season: "Fall",
    excerpt: "Rainforest luxury meets beachfront paradise",
    story: "Li and Paul's wedding at Pimalai was the perfect blend of jungle and beach, with lush rainforest meeting pristine white sand.",
    details: {
      guests: "78",
      style: "Rainforest Beach",
      colors: ["White", "Greenery", "Teal", "Natural Wood"]
    },
    gallery: [
      "/attached_assets/stock_images/tropical_beach_weddi_7880adcb.jpg",
    ]
  },
];

export function getWeddingBySlug(slug: string): Wedding | undefined {
  return allWeddings.find(w => w.slug === slug);
}

export function getFeaturedWeddings(): Wedding[] {
  return allWeddings.filter(w => w.featured);
}

export function getWeddingsByCategory(category: string): Wedding[] {
  if (category === "All") return allWeddings;
  return allWeddings.filter(w => w.category === category);
}
