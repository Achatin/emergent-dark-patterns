export interface Product {
  id: string;
  name: string;
  slug: string;
  price: number;
  originalPrice?: number;
  description: string;
  details: string[];
  images: string[];
  category: string;
  badge?: "sale" | "new" | "bestseller";
  rating: number;
  reviewCount: number;
  colors?: string[];
  sizes?: string[];
  inStock: boolean;
}

export const categories = [
  "All",
  "Apparel",
  "Accessories",
  "Home",
  "Outdoor",
] as const;

export type Category = (typeof categories)[number];

export const products: Product[] = [
  {
    id: "1",
    name: "Merino Wool Sweater",
    slug: "merino-wool-sweater",
    price: 89,
    originalPrice: 120,
    description: "Premium merino wool sweater crafted for warmth and style. Naturally temperature-regulating and ultra-soft against the skin.",
    details: ["100% Merino Wool", "Temperature regulating", "Machine washable", "Relaxed fit"],
    images: ["/images/sweater-1.jpg", "/images/sweater-2.jpg"],
    category: "Apparel",
    badge: "sale",
    rating: 4.8,
    reviewCount: 234,
    colors: ["Oatmeal", "Charcoal", "Forest"],
    sizes: ["XS", "S", "M", "L", "XL"],
    inStock: true,
  },
  {
    id: "2",
    name: "Canvas Weekender Bag",
    slug: "canvas-weekender-bag",
    price: 145,
    description: "Durable waxed canvas weekender with leather handles. Perfect for short trips and daily carry.",
    details: ["Waxed canvas exterior", "Leather handles", "Interior zip pocket", "Brass hardware"],
    images: ["/images/bag-1.jpg", "/images/bag-2.jpg"],
    category: "Accessories",
    badge: "bestseller",
    rating: 4.9,
    reviewCount: 412,
    colors: ["Tan", "Olive", "Navy"],
    inStock: true,
  },
  {
    id: "3",
    name: "Ceramic Pour-Over Set",
    slug: "ceramic-pour-over-set",
    price: 68,
    description: "Handmade ceramic pour-over coffee set. Clean lines and a matte finish bring calm to your morning ritual.",
    details: ["Handmade ceramic", "Includes dripper + carafe", "Holds 500ml", "Dishwasher safe"],
    images: ["/images/pourover-1.jpg", "/images/pourover-2.jpg"],
    category: "Home",
    badge: "new",
    rating: 4.7,
    reviewCount: 89,
    colors: ["White", "Sand", "Slate"],
    inStock: true,
  },
  {
    id: "4",
    name: "Linen Camp Shirt",
    slug: "linen-camp-shirt",
    price: 72,
    description: "Lightweight linen camp collar shirt. Effortlessly cool for warm-weather days.",
    details: ["100% French Linen", "Camp collar", "Relaxed fit", "Coconut buttons"],
    images: ["/images/shirt-1.jpg", "/images/shirt-2.jpg"],
    category: "Apparel",
    rating: 4.6,
    reviewCount: 156,
    colors: ["Sky", "Sand", "Sage"],
    sizes: ["S", "M", "L", "XL"],
    inStock: true,
  },
  {
    id: "5",
    name: "Hammock Chair",
    slug: "hammock-chair",
    price: 195,
    originalPrice: 240,
    description: "Hand-woven cotton rope hammock chair. Transform any corner into a relaxation zone.",
    details: ["Hand-woven cotton", "Steel spreader bar", "Weight capacity: 250lb", "Indoor/outdoor use"],
    images: ["/images/hammock-1.jpg", "/images/hammock-2.jpg"],
    category: "Outdoor",
    badge: "sale",
    rating: 4.8,
    reviewCount: 327,
    colors: ["Natural", "Charcoal"],
    inStock: true,
  },
  {
    id: "6",
    name: "Leather Card Wallet",
    slug: "leather-card-wallet",
    price: 45,
    description: "Slim vegetable-tanned leather card wallet. Develops a rich patina over time.",
    details: ["Vegetable-tanned leather", "4 card slots", "Center pocket", "Hand-stitched"],
    images: ["/images/wallet-1.jpg", "/images/wallet-2.jpg"],
    category: "Accessories",
    badge: "new",
    rating: 4.9,
    reviewCount: 198,
    colors: ["Cognac", "Black", "Olive"],
    inStock: true,
  },
  {
    id: "7",
    name: "Stoneware Mug Set",
    slug: "stoneware-mug-set",
    price: 54,
    description: "Set of 4 artisan stoneware mugs. Each one is subtly unique with a reactive glaze finish.",
    details: ["Set of 4", "Reactive glaze", "12oz capacity", "Microwave safe"],
    images: ["/images/mugs-1.jpg", "/images/mugs-2.jpg"],
    category: "Home",
    rating: 4.7,
    reviewCount: 145,
    colors: ["Earth", "Ocean"],
    inStock: true,
  },
  {
    id: "8",
    name: "Recycled Fleece Jacket",
    slug: "recycled-fleece-jacket",
    price: 128,
    description: "Cozy fleece jacket made from recycled materials. Warm enough for cold mornings, light enough for layering.",
    details: ["100% Recycled polyester", "YKK zippers", "Two hand pockets", "Chest pocket"],
    images: ["/images/fleece-1.jpg", "/images/fleece-2.jpg"],
    category: "Outdoor",
    badge: "bestseller",
    rating: 4.8,
    reviewCount: 389,
    colors: ["Moss", "Slate", "Cream"],
    sizes: ["XS", "S", "M", "L", "XL"],
    inStock: true,
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: Category): Product[] {
  if (category === "All") return products;
  return products.filter((p) => p.category === category);
}

export function getRelatedProducts(productId: string, limit = 4): Product[] {
  const product = products.find((p) => p.id === productId);
  if (!product) return [];
  return products
    .filter((p) => p.id !== productId && p.category === product.category)
    .slice(0, limit)
    .concat(products.filter((p) => p.id !== productId && p.category !== product.category))
    .slice(0, limit);
}
