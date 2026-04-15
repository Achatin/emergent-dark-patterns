export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  description: string;
  details: string[];
  images: string[];
  badge?: string;
}

export const categories = [
  "All",
  "Apparel",
  "Accessories",
  "Home",
  "Electronics",
] as const;

export const products: Product[] = [
  {
    id: "1",
    name: "Linen Relaxed Shirt",
    price: 89,
    category: "Apparel",
    description: "A beautifully crafted linen shirt with a relaxed silhouette. Perfect for warm days and layered looks.",
    details: ["100% European linen", "Relaxed fit", "Mother-of-pearl buttons", "Machine washable"],
    images: ["https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600&h=750&fit=crop"],
    badge: "New",
  },
  {
    id: "2",
    name: "Merino Wool Beanie",
    price: 45,
    category: "Accessories",
    description: "Soft merino wool beanie in a classic ribbed knit. Keeps you warm without the itch.",
    details: ["100% Merino wool", "Ribbed knit", "One size fits most", "Hand wash recommended"],
    images: ["https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?w=600&h=750&fit=crop"],
  },
  {
    id: "3",
    name: "Ceramic Pour-Over Set",
    price: 68,
    category: "Home",
    description: "Handmade ceramic pour-over coffee dripper with matching mug. Each piece is unique.",
    details: ["Handmade stoneware", "Includes dripper + mug", "Dishwasher safe", "Holds 12oz"],
    images: ["https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=600&h=750&fit=crop"],
    badge: "Popular",
  },
  {
    id: "4",
    name: "Canvas Weekender Bag",
    price: 145,
    category: "Accessories",
    description: "Waxed canvas weekender with leather handles. Built to age beautifully over time.",
    details: ["Waxed canvas exterior", "Full-grain leather handles", "Cotton lining", "Brass hardware"],
    images: ["https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=750&fit=crop"],
  },
  {
    id: "5",
    name: "Organic Cotton Tee",
    price: 42,
    category: "Apparel",
    description: "Essential crew neck tee in heavyweight organic cotton. Pre-shrunk for a consistent fit.",
    details: ["100% organic cotton", "220 GSM heavyweight", "Pre-shrunk", "Ethically made"],
    images: ["https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=750&fit=crop"],
  },
  {
    id: "6",
    name: "Wireless Charging Pad",
    price: 55,
    category: "Electronics",
    description: "Minimalist wireless charging pad in natural walnut. Fast charges all Qi-compatible devices.",
    details: ["15W fast charging", "Walnut veneer finish", "LED indicator", "USB-C cable included"],
    images: ["https://images.unsplash.com/photo-1586953208270-767889fa9b0e?w=600&h=750&fit=crop"],
  },
  {
    id: "7",
    name: "Hand-Thrown Vase",
    price: 95,
    category: "Home",
    description: "Sculptural ceramic vase with an organic, asymmetric form. A statement piece for any shelf.",
    details: ["Hand-thrown ceramic", "Matte glaze finish", "Watertight", "Approx. 8\" tall"],
    images: ["https://images.unsplash.com/photo-1578500494198-246f612d3b3d?w=600&h=750&fit=crop"],
  },
  {
    id: "8",
    name: "Leather Card Wallet",
    price: 38,
    category: "Accessories",
    description: "Slim vegetable-tanned leather card wallet. Holds up to 6 cards with a center cash slot.",
    details: ["Vegetable-tanned leather", "6 card slots", "Center cash slot", "Will patina over time"],
    images: ["https://images.unsplash.com/photo-1627123424574-724758594e93?w=600&h=750&fit=crop"],
    badge: "Bestseller",
  },
];
