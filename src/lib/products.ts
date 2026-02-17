export interface Product {
  id: string;
  slug: string;
  title: string;
  price: number;
  originalPrice: number;
  discount: string;
  image: string;
  images: string[];
  category: string;
  badge?: string;
  description: string;
  material: string;
  variants: { label: string; color: string }[];
  tags: string[];
  rating: number;
  reviewCount: number;
  inStock: boolean;
}

const BASE = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1986fa04-8206-49a7-be07-1bd19cd9a939-palmonas-com/assets/images";

export const products: Product[] = [
  {
    id: "1",
    slug: "hearts-all-over-bracelet",
    title: "Hearts All Over Bracelet",
    price: 2229,
    originalPrice: 3184,
    discount: "30%",
    image: `${BASE}/BR076_1_75eb07aa-efa8-42e3-9ec2-e38e33f78021-6.jpg`,
    images: [
      `${BASE}/BR076_1_75eb07aa-efa8-42e3-9ec2-e38e33f78021-6.jpg`,
      `${BASE}/image_df54bd5b-9c3c-4b6b-a5b4-454f57db849e-8.jpg`,
    ],
    category: "BRACELETS",
    badge: "Buy 1 Get 1",
    description: "Adorn your wrist with this delicate Hearts All Over Bracelet. Featuring a series of interlocking heart motifs crafted in 18K gold vermeil, this bracelet is the perfect everyday accessory that transitions from office to evening.",
    material: "18K Gold Vermeil over Sterling Silver",
    variants: [
      { label: "Gold", color: "#e5c07b" },
      { label: "Rose Gold", color: "#ceb2a0" },
      { label: "Silver", color: "#c0c0c0" },
    ],
    tags: ["bracelets", "best-seller", "gifts-for-her", "new-arrivals", "daily-wear"],
    rating: 4.8,
    reviewCount: 124,
    inStock: true,
  },
  {
    id: "2",
    slug: "crystal-love-bangle-bracelet",
    title: "Crystal Love Bangle Bracelet",
    price: 2659,
    originalPrice: 3799,
    discount: "30%",
    image: `${BASE}/image_df54bd5b-9c3c-4b6b-a5b4-454f57db849e-8.jpg`,
    images: [
      `${BASE}/image_df54bd5b-9c3c-4b6b-a5b4-454f57db849e-8.jpg`,
      `${BASE}/BR076_1_75eb07aa-efa8-42e3-9ec2-e38e33f78021-6.jpg`,
    ],
    category: "BRACELETS",
    badge: "Buy 1 Get 1",
    description: "The Crystal Love Bangle Bracelet features sparkling cubic zirconia stones set in a sleek bangle design. Perfect for stacking or wearing alone for a minimalist look.",
    material: "18K Gold Vermeil, Cubic Zirconia",
    variants: [
      { label: "Gold", color: "#e5c07b" },
      { label: "Rose Gold", color: "#ceb2a0" },
      { label: "Silver", color: "#c0c0c0" },
    ],
    tags: ["bracelets", "best-seller", "gifts-for-her", "party-wear"],
    rating: 4.7,
    reviewCount: 89,
    inStock: true,
  },
  {
    id: "3",
    slug: "athena-solitaire-hoop-earrings",
    title: "Athena Solitaire Hoop Earrings",
    price: 2258,
    originalPrice: 3226,
    discount: "30%",
    image: `${BASE}/PM-EARRINGS-032_3_0040-7.jpg`,
    images: [
      `${BASE}/PM-EARRINGS-032_3_0040-7.jpg`,
      `${BASE}/BR076_1_75eb07aa-efa8-42e3-9ec2-e38e33f78021-6.jpg`,
    ],
    category: "EARRINGS",
    badge: "Buy 1 Get 1",
    description: "Classic hoop earrings reimagined with a single solitaire stone. The Athena Solitaire Hoop Earrings add a touch of sophistication to any look.",
    material: "18K Gold Vermeil, Lab-Grown Diamond",
    variants: [
      { label: "Gold", color: "#e5c07b" },
      { label: "Rose Gold", color: "#ceb2a0" },
      { label: "Silver", color: "#c0c0c0" },
    ],
    tags: ["earrings", "best-seller", "gifts-for-her", "office-wear", "new-arrivals"],
    rating: 4.9,
    reviewCount: 203,
    inStock: true,
  },
  {
    id: "4",
    slug: "diamond-affair-bracelet",
    title: "Diamond Affair Bracelet",
    price: 2553,
    originalPrice: 3647,
    discount: "30%",
    image: `${BASE}/NK-40_1_0040-9.jpg`,
    images: [
      `${BASE}/NK-40_1_0040-9.jpg`,
      `${BASE}/BR076_1_75eb07aa-efa8-42e3-9ec2-e38e33f78021-6.jpg`,
    ],
    category: "BRACELETS",
    badge: "Buy 1 Get 1",
    description: "The Diamond Affair Bracelet is a stunning piece featuring lab-grown diamonds set in a delicate chain. Perfect for adding a touch of luxury to everyday wear.",
    material: "18K Gold Vermeil, Lab-Grown Diamonds",
    variants: [
      { label: "Gold", color: "#e5c07b" },
      { label: "Rose Gold", color: "#ceb2a0" },
      { label: "Silver", color: "#c0c0c0" },
    ],
    tags: ["bracelets", "best-seller", "gifts-for-her", "gifts-for-him", "party-wear"],
    rating: 4.6,
    reviewCount: 76,
    inStock: true,
  },
  {
    id: "5",
    slug: "crystal-peak-9kt-gold-diamond-studs",
    title: "Crystal Peak 9KT Gold Lab Grown Diamond Studs for Multiple Piercings",
    price: 8499,
    originalPrice: 8999,
    discount: "5%",
    image: `${BASE}/PMWSTMR010-G-5_0040-25.jpg`,
    images: [
      `${BASE}/PMWSTMR010-G-5_0040-25.jpg`,
      `${BASE}/PMWSTMR004-G-5_0040-26.jpg`,
    ],
    category: "EARRINGS",
    badge: "Flat 5% Off",
    description: "Minimalist diamond studs perfect for multiple piercings. Crafted in 9KT solid gold with lab-grown diamonds for an ethical sparkle.",
    material: "9KT Solid Gold, Lab-Grown Diamonds",
    variants: [
      { label: "Rose Gold", color: "#ceb2a0" },
      { label: "Silver", color: "#c0c0c0" },
      { label: "Yellow Gold", color: "#e5c07b" },
    ],
    tags: ["earrings", "fine-gold", "new-arrivals", "gifts-for-her", "office-wear"],
    rating: 4.8,
    reviewCount: 56,
    inStock: true,
  },
  {
    id: "6",
    slug: "orba-shine-9kt-gold-diamond-bracelet",
    title: "Orba Shine 9KT Gold Lab Grown Diamond Bracelet",
    price: 15999,
    originalPrice: 16999,
    discount: "5%",
    image: `${BASE}/PMWSTMR004-G-5_0040-26.jpg`,
    images: [
      `${BASE}/PMWSTMR004-G-5_0040-26.jpg`,
      `${BASE}/PMWSTMR001-G-5-27.jpg`,
    ],
    category: "BRACELETS",
    badge: "Flat 5% Off",
    description: "A sophisticated bracelet crafted in 9KT solid gold adorned with lab-grown diamonds. The Orba Shine bracelet makes a statement with its elegant orb-shaped links.",
    material: "9KT Solid Gold, Lab-Grown Diamonds",
    variants: [
      { label: "Rose Gold", color: "#ceb2a0" },
      { label: "Silver", color: "#c0c0c0" },
      { label: "Yellow Gold", color: "#e5c07b" },
    ],
    tags: ["bracelets", "fine-gold", "gifts-for-her", "party-wear"],
    rating: 4.9,
    reviewCount: 34,
    inStock: true,
  },
  {
    id: "7",
    slug: "stellar-bloom-9kt-gold-diamond-pendant",
    title: "Stellar Bloom 9KT Gold Lab Grown Diamond Pendant",
    price: 12499,
    originalPrice: 12999,
    discount: "5%",
    image: `${BASE}/PMWSTMR001-G-5-27.jpg`,
    images: [
      `${BASE}/PMWSTMR001-G-5-27.jpg`,
      `${BASE}/PMWSTMN016-G-28.jpg`,
    ],
    category: "NECKLACES",
    badge: "Flat 5% Off",
    description: "A bloom-inspired pendant crafted in 9KT solid gold with a sparkling lab-grown diamond at the center. Perfect for everyday elegance.",
    material: "9KT Solid Gold, Lab-Grown Diamonds",
    variants: [
      { label: "Rose Gold", color: "#ceb2a0" },
      { label: "Silver", color: "#c0c0c0" },
      { label: "Yellow Gold", color: "#e5c07b" },
    ],
    tags: ["necklaces", "fine-gold", "gifts-for-her", "daily-wear"],
    rating: 4.7,
    reviewCount: 45,
    inStock: true,
  },
  {
    id: "8",
    slug: "floral-whisper-9kt-gold-diamond-studs",
    title: "Floral Whisper 9KT Gold Lab Grown Diamond Studs for Multiple Piercings",
    price: 7999,
    originalPrice: 8499,
    discount: "5%",
    image: `${BASE}/PMWSTMN016-G-28.jpg`,
    images: [
      `${BASE}/PMWSTMN016-G-28.jpg`,
      `${BASE}/PMWSTMR010-G-5_0040-25.jpg`,
    ],
    category: "EARRINGS",
    badge: "Flat 5% Off",
    description: "Delicate floral-shaped diamond studs crafted in 9KT solid gold. Their petite size makes them ideal for multiple piercings and everyday wear.",
    material: "9KT Solid Gold, Lab-Grown Diamonds",
    variants: [
      { label: "Rose Gold", color: "#ceb2a0" },
      { label: "Silver", color: "#c0c0c0" },
      { label: "Yellow Gold", color: "#e5c07b" },
    ],
    tags: ["earrings", "fine-gold", "gifts-for-her", "daily-wear", "office-wear"],
    rating: 4.6,
    reviewCount: 28,
    inStock: true,
  },
  {
    id: "9",
    slug: "eternal-chain-necklace",
    title: "Eternal Chain Necklace",
    price: 2799,
    originalPrice: 3999,
    discount: "30%",
    image: `${BASE}/NK-40_1_0040-9.jpg`,
    images: [
      `${BASE}/NK-40_1_0040-9.jpg`,
      `${BASE}/PM-EARRINGS-032_3_0040-7.jpg`,
    ],
    category: "NECKLACES",
    badge: "Best Seller",
    description: "A timeless chain necklace featuring a delicate link design in 18K gold vermeil. Layerable and versatile for any occasion.",
    material: "18K Gold Vermeil over Sterling Silver",
    variants: [
      { label: "Gold", color: "#e5c07b" },
      { label: "Rose Gold", color: "#ceb2a0" },
      { label: "Silver", color: "#c0c0c0" },
    ],
    tags: ["necklaces", "best-seller", "gifts-for-her", "gifts-for-him", "daily-wear", "new-arrivals"],
    rating: 4.8,
    reviewCount: 167,
    inStock: true,
  },
  {
    id: "10",
    slug: "solitaire-promise-ring",
    title: "Solitaire Promise Ring",
    price: 1899,
    originalPrice: 2714,
    discount: "30%",
    image: `${BASE}/BR076_1_75eb07aa-efa8-42e3-9ec2-e38e33f78021-6.jpg`,
    images: [
      `${BASE}/BR076_1_75eb07aa-efa8-42e3-9ec2-e38e33f78021-6.jpg`,
      `${BASE}/image_df54bd5b-9c3c-4b6b-a5b4-454f57db849e-8.jpg`,
    ],
    category: "RINGS",
    badge: "Buy 1 Get 1",
    description: "A beautiful solitaire ring featuring a sparkling cubic zirconia stone in a classic setting. Perfect for everyday wear or as a meaningful gift.",
    material: "18K Gold Vermeil, Cubic Zirconia",
    variants: [
      { label: "Gold", color: "#e5c07b" },
      { label: "Rose Gold", color: "#ceb2a0" },
      { label: "Silver", color: "#c0c0c0" },
    ],
    tags: ["rings", "best-seller", "gifts-for-her", "party-wear", "new-arrivals"],
    rating: 4.7,
    reviewCount: 98,
    inStock: true,
  },
  {
    id: "11",
    slug: "classic-cuban-chain-mens",
    title: "Classic Cuban Chain for Men",
    price: 3299,
    originalPrice: 4714,
    discount: "30%",
    image: `${BASE}/NK-40_1_0040-9.jpg`,
    images: [
      `${BASE}/NK-40_1_0040-9.jpg`,
      `${BASE}/PM-EARRINGS-032_3_0040-7.jpg`,
    ],
    category: "MENS",
    badge: "Best Seller",
    description: "A bold Cuban chain crafted for the modern man. This 18K gold vermeil chain is perfect for everyday wear with a premium feel.",
    material: "18K Gold Vermeil over Sterling Silver",
    variants: [
      { label: "Gold", color: "#e5c07b" },
      { label: "Silver", color: "#c0c0c0" },
    ],
    tags: ["mens", "necklaces", "best-seller", "gifts-for-him"],
    rating: 4.8,
    reviewCount: 72,
    inStock: true,
  },
  {
    id: "12",
    slug: "pearl-drop-mangalsutra",
    title: "Pearl Drop Mangalsutra",
    price: 3499,
    originalPrice: 4999,
    discount: "30%",
    image: `${BASE}/PM-EARRINGS-032_3_0040-7.jpg`,
    images: [
      `${BASE}/PM-EARRINGS-032_3_0040-7.jpg`,
      `${BASE}/image_df54bd5b-9c3c-4b6b-a5b4-454f57db849e-8.jpg`,
    ],
    category: "MANGALSUTRA",
    badge: "Trending",
    description: "A modern mangalsutra featuring a delicate pearl drop pendant on a sleek black beaded chain. The perfect blend of tradition and contemporary design.",
    material: "18K Gold Vermeil, Freshwater Pearl, Black Beads",
    variants: [
      { label: "Gold", color: "#e5c07b" },
      { label: "Rose Gold", color: "#ceb2a0" },
    ],
    tags: ["mangalsutra", "best-seller", "gifts-for-her", "daily-wear", "new-arrivals"],
    rating: 4.9,
    reviewCount: 145,
    inStock: true,
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: string): Product[] {
  if (category === "ALL") return products;
  return products.filter((p) => p.category === category);
}

export function getProductsByTag(tag: string): Product[] {
  return products.filter((p) => p.tags.includes(tag));
}

export const CATEGORIES = [
  "ALL",
  "NECKLACES",
  "BRACELETS",
  "EARRINGS",
  "RINGS",
  "MENS",
  "MANGALSUTRA",
];

export const COLLECTION_MAP: Record<string, { title: string; tag: string; description: string }> = {
  "best-seller": {
    title: "Best Sellers",
    tag: "best-seller",
    description: "Our most loved pieces, chosen by thousands of happy customers.",
  },
  "new-arrivals": {
    title: "New Arrivals",
    tag: "new-arrivals",
    description: "Fresh designs to elevate your everyday style.",
  },
  "gifts-for-her": {
    title: "Gifts For Her",
    tag: "gifts-for-her",
    description: "Curated jewellery pieces that make the perfect gift for the special women in your life.",
  },
  "gifts-for-him": {
    title: "Gifts For Him",
    tag: "gifts-for-him",
    description: "Handpicked jewellery for the modern man.",
  },
  "office-wear": {
    title: "Office Wear",
    tag: "office-wear",
    description: "Subtle, elegant pieces perfect for the workplace.",
  },
  "daily-wear": {
    title: "Daily Wear",
    tag: "daily-wear",
    description: "Comfortable, skin-safe jewellery for everyday styling.",
  },
  "party-wear": {
    title: "Party Wear",
    tag: "party-wear",
    description: "Statement pieces that shine at every celebration.",
  },
  "fine-gold": {
    title: "9KT Fine Gold",
    tag: "fine-gold",
    description: "Luxury 9KT solid gold pieces with lab-grown diamonds.",
  },
  "shop-by-category": {
    title: "Demi-Fine Jewellery",
    tag: "best-seller",
    description: "Explore our full collection of everyday demi-fine jewellery.",
  },
};
