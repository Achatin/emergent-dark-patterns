export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  description: string;
  details: string[];
  category: string;
  tags: string[];
  images: string[];
  rating: number;
  reviewCount: number;
  sizes?: string[];
  colors?: { name: string; hex: string }[];
  inStock: boolean;
  badge?: string;
}

export const categories = [
  { id: "all", name: "All", icon: "✦" },
  { id: "clothing", name: "Clothing", icon: "👕" },
  { id: "accessories", name: "Accessories", icon: "👜" },
  { id: "footwear", name: "Footwear", icon: "👟" },
  { id: "home", name: "Home & Living", icon: "🏠" },
];

export const products: Product[] = [
  {
    id: "1",
    name: "Oversized Linen Blazer",
    price: 189,
    originalPrice: 249,
    description: "A beautifully tailored oversized blazer crafted from premium European linen. Relaxed silhouette with structured shoulders for an effortlessly polished look.",
    details: ["100% European linen", "Relaxed oversized fit", "Two-button closure", "Patch pockets", "Dry clean recommended"],
    category: "clothing",
    tags: ["new", "bestseller"],
    images: [
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&h=800&fit=crop",
    ],
    rating: 4.8,
    reviewCount: 124,
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: [
      { name: "Sand", hex: "#C2B280" },
      { name: "Charcoal", hex: "#36454F" },
      { name: "Ivory", hex: "#FFFFF0" },
    ],
    inStock: true,
    badge: "Sale",
  },
  {
    id: "2",
    name: "Merino Wool Crewneck",
    price: 95,
    description: "Ultra-soft merino wool crewneck sweater. Lightweight yet warm, perfect for layering or wearing on its own.",
    details: ["100% Merino wool", "Regular fit", "Ribbed cuffs and hem", "Machine washable"],
    category: "clothing",
    tags: ["bestseller"],
    images: [
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=600&h=800&fit=crop",
    ],
    rating: 4.9,
    reviewCount: 287,
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Oatmeal", hex: "#D4C5A9" },
      { name: "Navy", hex: "#000080" },
      { name: "Forest", hex: "#228B22" },
    ],
    inStock: true,
  },
  {
    id: "3",
    name: "Leather Crossbody Bag",
    price: 145,
    description: "Minimalist crossbody bag in full-grain leather. Adjustable strap with clean lines and thoughtful compartments.",
    details: ["Full-grain leather", "Adjustable crossbody strap", "Interior zip pocket", "Magnetic closure"],
    category: "accessories",
    tags: ["new"],
    images: [
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=600&h=800&fit=crop",
    ],
    rating: 4.7,
    reviewCount: 89,
    colors: [
      { name: "Tan", hex: "#D2B48C" },
      { name: "Black", hex: "#000000" },
    ],
    inStock: true,
    badge: "New",
  },
  {
    id: "4",
    name: "Canvas Sneakers",
    price: 78,
    description: "Classic low-top canvas sneakers with vulcanized rubber sole. Timeless design for everyday wear.",
    details: ["Cotton canvas upper", "Vulcanized rubber sole", "Cushioned insole", "Lace-up closure"],
    category: "footwear",
    tags: [],
    images: [
      "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=600&h=800&fit=crop",
    ],
    rating: 4.6,
    reviewCount: 203,
    sizes: ["7", "8", "9", "10", "11", "12"],
    colors: [
      { name: "White", hex: "#FFFFFF" },
      { name: "Black", hex: "#000000" },
    ],
    inStock: true,
  },
  {
    id: "5",
    name: "Ceramic Pour-Over Set",
    price: 62,
    description: "Handcrafted ceramic pour-over coffee set. Includes dripper and carafe in a matte glaze finish.",
    details: ["Handcrafted stoneware", "Matte glaze finish", "Includes dripper + carafe", "Dishwasher safe"],
    category: "home",
    tags: ["bestseller"],
    images: [
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1517256064527-9d91c5e5e8dc?w=600&h=800&fit=crop",
    ],
    rating: 4.9,
    reviewCount: 156,
    colors: [
      { name: "Cream", hex: "#FFFDD0" },
      { name: "Sage", hex: "#B2AC88" },
    ],
    inStock: true,
  },
  {
    id: "6",
    name: "Relaxed Chinos",
    price: 88,
    originalPrice: 110,
    description: "Comfortable relaxed-fit chinos in organic cotton twill. A modern take on the wardrobe essential.",
    details: ["100% Organic cotton", "Relaxed tapered fit", "Button fly", "Side and back pockets"],
    category: "clothing",
    tags: [],
    images: [
      "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=600&h=800&fit=crop",
    ],
    rating: 4.5,
    reviewCount: 98,
    sizes: ["28", "30", "32", "34", "36"],
    colors: [
      { name: "Khaki", hex: "#C3B091" },
      { name: "Olive", hex: "#808000" },
      { name: "Black", hex: "#000000" },
    ],
    inStock: true,
    badge: "Sale",
  },
  {
    id: "7",
    name: "Woven Straw Tote",
    price: 58,
    description: "Natural woven straw tote with leather handles. Spacious interior perfect for markets and beach days.",
    details: ["Natural straw weave", "Genuine leather handles", "Cotton lining", "Interior pocket"],
    category: "accessories",
    tags: ["new"],
    images: [
      "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=800&fit=crop",
    ],
    rating: 4.4,
    reviewCount: 67,
    inStock: true,
    badge: "New",
  },
  {
    id: "8",
    name: "Suede Chelsea Boots",
    price: 225,
    description: "Premium suede Chelsea boots with elastic side panels. Crafted on a comfortable leather sole.",
    details: ["Genuine suede upper", "Elastic side panels", "Leather sole", "Pull tab"],
    category: "footwear",
    tags: ["bestseller"],
    images: [
      "https://images.unsplash.com/photo-1638247025967-b4e38f787b76?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=600&h=800&fit=crop",
    ],
    rating: 4.8,
    reviewCount: 142,
    sizes: ["7", "8", "9", "10", "11", "12"],
    colors: [
      { name: "Camel", hex: "#C19A6B" },
      { name: "Black", hex: "#000000" },
    ],
    inStock: true,
  },
  {
    id: "9",
    name: "Linen Throw Blanket",
    price: 120,
    description: "Luxurious stonewashed linen throw blanket. Soft and breathable for year-round comfort.",
    details: ["100% Stonewashed linen", "140cm x 200cm", "Pre-shrunk", "Machine washable"],
    category: "home",
    tags: [],
    images: [
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1616627547584-bf28cee262db?w=600&h=800&fit=crop",
    ],
    rating: 4.7,
    reviewCount: 73,
    colors: [
      { name: "Natural", hex: "#FAF0E6" },
      { name: "Dusty Rose", hex: "#DCAE96" },
    ],
    inStock: true,
  },
  {
    id: "10",
    name: "Minimal Watch",
    price: 195,
    originalPrice: 245,
    description: "Clean-lined automatic watch with Japanese movement. Sapphire crystal glass on a genuine leather strap.",
    details: ["Japanese automatic movement", "Sapphire crystal glass", "Genuine leather strap", "Water resistant 50m"],
    category: "accessories",
    tags: ["bestseller"],
    images: [
      "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=600&h=800&fit=crop",
    ],
    rating: 4.9,
    reviewCount: 198,
    colors: [
      { name: "Silver/Tan", hex: "#C0C0C0" },
      { name: "Gold/Black", hex: "#FFD700" },
    ],
    inStock: true,
    badge: "Sale",
  },
];

export function getProduct(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getProductsByCategory(category: string): Product[] {
  if (category === "all") return products;
  return products.filter((p) => p.category === category);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.tags.includes("bestseller")).slice(0, 4);
}

export function getNewArrivals(): Product[] {
  return products.filter((p) => p.tags.includes("new") || p.badge === "New");
}
