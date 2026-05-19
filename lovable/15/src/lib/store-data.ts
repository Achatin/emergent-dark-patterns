export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  description: string;
  longDescription: string;
  category: string;
  image: string;
  rating: number;
  reviewCount: number;
  inStock: boolean;
  materials?: string;
  origin?: string;
  tags: string[];
}

export const categories = [
  "All",
  "Clothing",
  "Accessories",
  "Home & Living",
  "Electronics",
];

export const products: Product[] = [
  {
    id: "1",
    name: "Organic Cotton Tee",
    price: 38,
    description: "Soft, breathable organic cotton t-shirt. Ethically made.",
    longDescription: "Crafted from 100% GOTS-certified organic cotton, this everyday tee offers a relaxed fit with a clean silhouette. Ethically manufactured in Portugal with fair-wage labor practices. Pre-shrunk and garment-dyed for lasting softness.",
    category: "Clothing",
    image: "",
    rating: 4.7,
    reviewCount: 124,
    inStock: true,
    materials: "100% Organic Cotton",
    origin: "Made in Portugal",
    tags: ["organic", "sustainable"],
  },
  {
    id: "2",
    name: "Merino Wool Beanie",
    price: 32,
    description: "Warm merino wool beanie. Temperature-regulating and itch-free.",
    longDescription: "This lightweight merino wool beanie naturally regulates temperature, keeping you warm without overheating. The fine 18.5-micron fibers are naturally soft and itch-free. Responsibly sourced from New Zealand farms.",
    category: "Accessories",
    image: "",
    rating: 4.8,
    reviewCount: 89,
    inStock: true,
    materials: "100% Merino Wool",
    origin: "Sourced from New Zealand",
    tags: ["wool", "winter"],
  },
  {
    id: "3",
    name: "Ceramic Pour-Over Set",
    price: 54,
    description: "Handmade ceramic pour-over coffee set. Minimalist design.",
    longDescription: "Each pour-over set is hand-thrown by artisans in Kyoto, Japan. The porous ceramic filters oils naturally, producing a clean, bright cup. Includes dripper and 350ml server. Slight variations in glaze are a mark of authenticity.",
    category: "Home & Living",
    image: "",
    rating: 4.9,
    reviewCount: 67,
    inStock: true,
    materials: "Stoneware Ceramic",
    origin: "Handmade in Kyoto, Japan",
    tags: ["handmade", "coffee"],
  },
  {
    id: "4",
    name: "Recycled Canvas Tote",
    price: 28,
    description: "Sturdy recycled canvas tote bag. Built to last.",
    longDescription: "Made from 100% recycled cotton canvas, this oversized tote carries everything from groceries to gym gear. Reinforced stitching at stress points ensures years of use. Interior pocket for essentials.",
    category: "Accessories",
    image: "",
    rating: 4.5,
    reviewCount: 203,
    inStock: true,
    materials: "Recycled Cotton Canvas",
    origin: "Made in India (Fair Trade Certified)",
    tags: ["recycled", "eco"],
  },
  {
    id: "5",
    name: "Linen Throw Blanket",
    price: 89,
    description: "Stonewashed linen throw. Naturally softens with every wash.",
    longDescription: "This generously sized throw is woven from European flax linen and stonewashed for immediate softness. Linen is naturally hypoallergenic, moisture-wicking, and gets softer with each wash. 140cm × 200cm.",
    category: "Home & Living",
    image: "",
    rating: 4.8,
    reviewCount: 56,
    inStock: true,
    materials: "100% European Flax Linen",
    origin: "Woven in Lithuania",
    tags: ["linen", "cozy"],
  },
  {
    id: "6",
    name: "Bamboo Wireless Charger",
    price: 42,
    description: "Fast wireless charger with natural bamboo surface.",
    longDescription: "Qi-compatible fast wireless charger with a sustainably harvested bamboo top plate. Delivers up to 15W fast charging for compatible devices. Built-in LED indicator and over-charge protection. Works through most phone cases.",
    category: "Electronics",
    image: "",
    rating: 4.4,
    reviewCount: 145,
    inStock: true,
    materials: "Bamboo, Recycled ABS Plastic",
    origin: "Designed in Sweden, Assembled in China",
    tags: ["tech", "bamboo"],
  },
  {
    id: "7",
    name: "Hand-Knit Wool Scarf",
    price: 65,
    originalPrice: 78,
    description: "Luxuriously soft hand-knit scarf in earthy tones.",
    longDescription: "Each scarf is hand-knit by women artisans in the Peruvian highlands using traditional techniques passed down through generations. The alpaca-wool blend provides exceptional warmth without bulk. 180cm × 30cm.",
    category: "Accessories",
    image: "",
    rating: 4.9,
    reviewCount: 34,
    inStock: true,
    materials: "70% Alpaca, 30% Wool",
    origin: "Hand-knit in Peru",
    tags: ["handmade", "alpaca"],
  },
  {
    id: "8",
    name: "Soy Wax Candle Trio",
    price: 36,
    description: "Set of three hand-poured soy wax candles. Clean burn.",
    longDescription: "These clean-burning candles are hand-poured from 100% soy wax with cotton wicks and scented with essential oils only — no synthetic fragrances. Set includes Cedar & Sage, Lavender Field, and Citrus Grove. Each burns for approximately 40 hours.",
    category: "Home & Living",
    image: "",
    rating: 4.6,
    reviewCount: 178,
    inStock: true,
    materials: "100% Soy Wax, Cotton Wick, Essential Oils",
    origin: "Hand-poured in Vermont, USA",
    tags: ["candles", "natural"],
  },
];

export interface CartItem {
  product: Product;
  quantity: number;
}
