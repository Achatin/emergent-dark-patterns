export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  description: string;
  details: string[];
  category: string;
  image: string;
  images: string[];
  badge?: string;
  rating: number;
  reviews: number;
}

export const categories = [
  "All",
  "Clothing",
  "Accessories",
  "Footwear",
  "Home & Living",
  "Electronics",
];

export const products: Product[] = [
  {
    id: "1",
    name: "Merino Wool Overcoat",
    price: 289,
    originalPrice: 350,
    description: "A beautifully tailored overcoat crafted from premium Italian merino wool. Perfect for the colder months with a timeless silhouette.",
    details: ["100% Italian Merino Wool", "Fully lined interior", "Two interior pockets", "Dry clean only"],
    category: "Clothing",
    image: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=600&h=750&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=600&h=750&fit=crop",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=750&fit=crop",
    ],
    badge: "Sale",
    rating: 4.8,
    reviews: 124,
  },
  {
    id: "2",
    name: "Leather Crossbody Bag",
    price: 165,
    description: "Handcrafted from full-grain leather with brass hardware. A versatile everyday companion that ages beautifully.",
    details: ["Full-grain leather", "Brass hardware", "Adjustable strap", "Interior zip pocket"],
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&h=750&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&h=750&fit=crop",
    ],
    rating: 4.6,
    reviews: 89,
  },
  {
    id: "3",
    name: "Minimalist Canvas Sneakers",
    price: 95,
    description: "Clean-lined canvas sneakers with a vulcanized rubber sole. Effortlessly stylish for everyday wear.",
    details: ["Premium canvas upper", "Vulcanized rubber sole", "Cushioned insole", "True to size"],
    category: "Footwear",
    image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=600&h=750&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=600&h=750&fit=crop",
    ],
    badge: "New",
    rating: 4.5,
    reviews: 203,
  },
  {
    id: "4",
    name: "Ceramic Pour-Over Set",
    price: 68,
    description: "A hand-thrown ceramic pour-over coffee set. Each piece is unique with subtle glaze variations.",
    details: ["Hand-thrown stoneware", "Includes dripper & carafe", "Dishwasher safe", "Holds 500ml"],
    category: "Home & Living",
    image: "https://images.unsplash.com/photo-1517256064527-9d164d0f4997?w=600&h=750&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1517256064527-9d164d0f4997?w=600&h=750&fit=crop",
    ],
    rating: 4.9,
    reviews: 67,
  },
  {
    id: "5",
    name: "Wireless Noise-Cancelling Headphones",
    price: 249,
    originalPrice: 299,
    description: "Premium over-ear headphones with adaptive noise cancellation and 30-hour battery life.",
    details: ["Active noise cancellation", "30-hour battery", "Bluetooth 5.2", "Foldable design"],
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=750&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=750&fit=crop",
    ],
    badge: "Sale",
    rating: 4.7,
    reviews: 312,
  },
  {
    id: "6",
    name: "Linen Blend Relaxed Shirt",
    price: 78,
    description: "A breathable linen-cotton blend shirt with a relaxed fit. Perfect for warm-weather layering.",
    details: ["55% Linen, 45% Cotton", "Relaxed fit", "Mother-of-pearl buttons", "Machine washable"],
    category: "Clothing",
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600&h=750&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600&h=750&fit=crop",
    ],
    rating: 4.4,
    reviews: 156,
  },
  {
    id: "7",
    name: "Hand-Poured Soy Candle",
    price: 34,
    description: "A warm, inviting scent of sandalwood and vanilla in a reusable ceramic vessel.",
    details: ["100% soy wax", "60-hour burn time", "Reusable ceramic vessel", "Hand-poured"],
    category: "Home & Living",
    image: "https://images.unsplash.com/photo-1602028915047-37269d1a73f7?w=600&h=750&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1602028915047-37269d1a73f7?w=600&h=750&fit=crop",
    ],
    rating: 4.8,
    reviews: 91,
  },
  {
    id: "8",
    name: "Titanium Aviator Sunglasses",
    price: 195,
    description: "Ultralight titanium frames with polarized lenses. Classic aviator styling meets modern engineering.",
    details: ["Titanium frame", "Polarized CR-39 lenses", "UV400 protection", "Includes hard case"],
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&h=750&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&h=750&fit=crop",
    ],
    badge: "Bestseller",
    rating: 4.6,
    reviews: 178,
  },
];
