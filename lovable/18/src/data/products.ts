export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  description: string;
  details: string[];
  category: string;
  image: string;
  rating: number;
  reviewCount: number;
  inStock: boolean;
  tags: string[];
}

export const categories = [
  "All",
  "Accessories",
  "Home & Living",
  "Stationery",
  "Bags",
  "Wellness",
] as const;

export const products: Product[] = [
  {
    id: "1",
    name: "Heritage Leather Wallet",
    price: 59.00,
    originalPrice: 75.00,
    description: "Hand-stitched full-grain leather bifold wallet with RFID protection. Designed to age beautifully over years of use.",
    details: ["Full-grain vegetable-tanned leather", "RFID blocking technology", "6 card slots, 2 bill compartments", "Dimensions: 4.5\" × 3.5\"", "1 year warranty"],
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=600&h=600&fit=crop",
    rating: 4.8,
    reviewCount: 124,
    inStock: true,
    tags: ["bestseller"],
  },
  {
    id: "2",
    name: "Ceramic Pour-Over Set",
    price: 42.00,
    description: "Handmade ceramic dripper and carafe set for the perfect morning ritual. Each piece is unique with subtle glaze variations.",
    details: ["Handmade stoneware ceramic", "Includes dripper + 600ml carafe", "Dishwasher safe", "Fits standard #2 filters", "Made in small batches"],
    category: "Home & Living",
    image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=600&h=600&fit=crop",
    rating: 4.9,
    reviewCount: 87,
    inStock: true,
    tags: ["new"],
  },
  {
    id: "3",
    name: "Linen-Bound Journal",
    price: 28.00,
    description: "160 pages of acid-free paper bound in natural linen. Lay-flat binding for effortless writing.",
    details: ["100% natural linen cover", "160 pages, 100gsm acid-free paper", "Lay-flat Swiss binding", "Ribbon bookmark", "5.5\" × 8.5\""],
    category: "Stationery",
    image: "https://images.unsplash.com/photo-1531346878377-a5be20888e57?w=600&h=600&fit=crop",
    rating: 4.7,
    reviewCount: 203,
    inStock: true,
    tags: [],
  },
  {
    id: "4",
    name: "Canvas Weekender Bag",
    price: 128.00,
    description: "Waxed canvas and leather trim duffel built for weekend getaways. Water-resistant and built to last.",
    details: ["18oz waxed canvas", "Genuine leather handles & trim", "Interior laptop sleeve", "Brass hardware", "Dimensions: 20\" × 11\" × 10\""],
    category: "Bags",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=600&fit=crop",
    rating: 4.6,
    reviewCount: 56,
    inStock: true,
    tags: [],
  },
  {
    id: "5",
    name: "Botanical Soy Candle",
    price: 34.00,
    description: "Hand-poured soy wax candle infused with essential oils. Burns clean for up to 50 hours.",
    details: ["100% natural soy wax", "Essential oil fragrance (no synthetics)", "Cotton wick", "50-hour burn time", "Reusable ceramic vessel"],
    category: "Wellness",
    image: "https://images.unsplash.com/photo-1602028915047-37269d1a73f7?w=600&h=600&fit=crop",
    rating: 4.9,
    reviewCount: 312,
    inStock: true,
    tags: ["bestseller"],
  },
  {
    id: "6",
    name: "Minimalist Sunglasses",
    price: 89.00,
    description: "Lightweight acetate frames with polarized lenses. Timeless design for everyday wear.",
    details: ["Italian acetate frames", "Polarized CR-39 lenses", "UV400 protection", "Spring hinges", "Includes hard case & cloth"],
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&h=600&fit=crop",
    rating: 4.5,
    reviewCount: 78,
    inStock: true,
    tags: [],
  },
  {
    id: "7",
    name: "Copper Desk Lamp",
    price: 96.00,
    originalPrice: 120.00,
    description: "Adjustable solid copper lamp with a warm ambient glow. Develops a natural patina over time.",
    details: ["Solid copper construction", "Adjustable arm & shade", "E26 bulb socket (bulb not included)", "Weighted base", "On/off toggle switch"],
    category: "Home & Living",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057ab6fe?w=600&h=600&fit=crop",
    rating: 4.7,
    reviewCount: 41,
    inStock: true,
    tags: ["sale"],
  },
  {
    id: "8",
    name: "Organic Cotton Tote",
    price: 24.00,
    description: "Heavyweight organic cotton tote with reinforced handles. Simple, sturdy, and sustainable.",
    details: ["12oz organic cotton canvas", "Reinforced handles", "Interior pocket", "Dimensions: 15\" × 16\" × 4\"", "GOTS certified"],
    category: "Bags",
    image: "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?w=600&h=600&fit=crop",
    rating: 4.4,
    reviewCount: 167,
    inStock: false,
    tags: [],
  },
];
