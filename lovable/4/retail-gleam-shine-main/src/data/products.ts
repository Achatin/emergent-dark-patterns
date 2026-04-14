export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  longDescription: string;
  category: string;
  image: string;
  images: string[];
  badge?: string;
  rating: number;
  reviews: number;
  sizes?: string[];
  colors?: { name: string; hex: string }[];
}

export const categories = [
  "All",
  "Apparel",
  "Accessories",
  "Home",
  "Lifestyle",
] as const;

export const products: Product[] = [
  {
    id: "1",
    name: "Linen Overshirt",
    price: 128,
    description: "Relaxed-fit linen overshirt in sand.",
    longDescription: "Crafted from premium European linen, this relaxed-fit overshirt features a subtle sand tone that pairs effortlessly with any wardrobe. Double-stitched seams, horn buttons, and a single chest pocket complete the timeless silhouette.",
    category: "Apparel",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=750&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=750&fit=crop",
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600&h=750&fit=crop",
    ],
    badge: "New",
    rating: 4.8,
    reviews: 42,
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: [
      { name: "Sand", hex: "#C4A882" },
      { name: "Charcoal", hex: "#3A3A3A" },
      { name: "Sage", hex: "#8B9D77" },
    ],
  },
  {
    id: "2",
    name: "Canvas Tote",
    price: 58,
    description: "Heavy-weight cotton canvas tote bag.",
    longDescription: "Our signature tote is made from 16oz cotton canvas, built to carry everything from groceries to laptops. Reinforced handles, interior pocket, and a natural unbleached finish that develops beautiful patina over time.",
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=750&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=750&fit=crop",
      "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=600&h=750&fit=crop",
    ],
    rating: 4.9,
    reviews: 87,
    colors: [
      { name: "Natural", hex: "#E8DCC8" },
      { name: "Black", hex: "#1A1A1A" },
    ],
  },
  {
    id: "3",
    name: "Ceramic Mug Set",
    price: 45,
    description: "Hand-thrown stoneware mug, set of 2.",
    longDescription: "Each mug is hand-thrown by artisans using locally-sourced stoneware clay. The reactive glaze creates unique patterns on every piece. Dishwasher and microwave safe. 12oz capacity.",
    category: "Home",
    image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=600&h=750&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=600&h=750&fit=crop",
      "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=600&h=750&fit=crop",
    ],
    badge: "Best Seller",
    rating: 4.7,
    reviews: 156,
    colors: [
      { name: "Cream", hex: "#F0E6D3" },
      { name: "Slate", hex: "#6B7B8D" },
    ],
  },
  {
    id: "4",
    name: "Wool Beanie",
    price: 38,
    description: "Merino wool ribbed beanie.",
    longDescription: "Knitted from superfine merino wool for warmth without bulk. The classic ribbed construction provides a comfortable, adaptable fit. Fold the brim for a snugger look or wear it slouched.",
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?w=600&h=750&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?w=600&h=750&fit=crop",
    ],
    rating: 4.6,
    reviews: 34,
    sizes: ["One Size"],
    colors: [
      { name: "Oat", hex: "#D4C5A9" },
      { name: "Charcoal", hex: "#3A3A3A" },
      { name: "Rust", hex: "#B5503C" },
    ],
  },
  {
    id: "5",
    name: "Essential Tee",
    price: 42,
    description: "Organic cotton crew neck t-shirt.",
    longDescription: "Our everyday essential, crafted from 100% GOTS-certified organic cotton. Medium weight, pre-shrunk, with a relaxed crew neck. The subtle texture and perfect drape make it the last basic tee you'll ever need.",
    category: "Apparel",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=750&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=750&fit=crop",
    ],
    rating: 4.9,
    reviews: 203,
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "White", hex: "#F5F5F0" },
      { name: "Black", hex: "#1A1A1A" },
      { name: "Sage", hex: "#8B9D77" },
    ],
  },
  {
    id: "6",
    name: "Soy Candle",
    price: 32,
    description: "Hand-poured soy candle, cedarwood & sage.",
    longDescription: "Hand-poured using 100% natural soy wax and premium fragrance oils. Notes of warm cedarwood, sage, and a hint of bergamot create a grounding atmosphere. Cotton wick, 45-hour burn time. Reusable ceramic vessel.",
    category: "Home",
    image: "https://images.unsplash.com/photo-1602028915047-37269d1a73f7?w=600&h=750&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1602028915047-37269d1a73f7?w=600&h=750&fit=crop",
    ],
    rating: 4.8,
    reviews: 91,
  },
  {
    id: "7",
    name: "Leather Wallet",
    price: 78,
    description: "Vegetable-tanned leather bi-fold wallet.",
    longDescription: "Made from full-grain vegetable-tanned leather that ages beautifully. Six card slots, two bill compartments, and a slim profile that fits comfortably in any pocket. Hand-stitched edges for lasting durability.",
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=600&h=750&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1627123424574-724758594e93?w=600&h=750&fit=crop",
    ],
    rating: 4.7,
    reviews: 64,
    colors: [
      { name: "Tan", hex: "#B8884B" },
      { name: "Black", hex: "#1A1A1A" },
    ],
  },
  {
    id: "8",
    name: "Notebook Set",
    price: 24,
    description: "Recycled paper notebook, set of 3.",
    longDescription: "Three notebooks with 64 pages each, made from 100% post-consumer recycled paper. Dot grid layout, lay-flat binding, and soy-based ink covers. Perfect for sketching, journaling, or note-taking.",
    category: "Lifestyle",
    image: "https://images.unsplash.com/photo-1531346878377-a5be20888e57?w=600&h=750&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1531346878377-a5be20888e57?w=600&h=750&fit=crop",
    ],
    badge: "New",
    rating: 4.5,
    reviews: 28,
  },
];
