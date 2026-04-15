// Simple global store using React context
import { createContext, useContext } from "react";

export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  images: string[];
  category: string;
  rating: number;
  reviews: number;
  description: string;
  features: string[];
  badge?: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export const CATEGORIES = [
  "All",
  "Clothing",
  "Accessories",
  "Home & Living",
  "Electronics",
  "Outdoor",
] as const;

export const PRODUCTS: Product[] = [
  {
    id: "1",
    name: "Premium Merino Wool Sweater",
    price: 89,
    originalPrice: 120,
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&h=700&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&h=700&fit=crop",
      "https://images.unsplash.com/photo-1434389677669-e08b4cda3a42?w=600&h=700&fit=crop",
    ],
    category: "Clothing",
    rating: 4.8,
    reviews: 234,
    description: "Crafted from 100% Australian merino wool, this sweater combines timeless elegance with exceptional warmth. The breathable fabric keeps you comfortable year-round.",
    features: ["100% Merino Wool", "Temperature regulating", "Machine washable", "Ethically sourced"],
    badge: "Best Seller",
  },
  {
    id: "2",
    name: "Leather Crossbody Bag",
    price: 145,
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&h=700&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&h=700&fit=crop",
    ],
    category: "Accessories",
    rating: 4.9,
    reviews: 189,
    description: "Hand-stitched from full-grain Italian leather, this crossbody bag ages beautifully with use. Features an adjustable strap and multiple interior pockets.",
    features: ["Full-grain leather", "Adjustable strap", "Interior pockets", "Brass hardware"],
    badge: "New Arrival",
  },
  {
    id: "3",
    name: "Ceramic Pour-Over Set",
    price: 64,
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&h=700&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&h=700&fit=crop",
    ],
    category: "Home & Living",
    rating: 4.7,
    reviews: 312,
    description: "Elevate your morning ritual with this handmade ceramic pour-over coffee set. Each piece is individually crafted by artisans.",
    features: ["Handmade ceramic", "Includes dripper & carafe", "Dishwasher safe", "Gift-ready packaging"],
  },
  {
    id: "4",
    name: "Wireless Noise-Canceling Headphones",
    price: 199,
    originalPrice: 249,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=700&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=700&fit=crop",
    ],
    category: "Electronics",
    rating: 4.6,
    reviews: 567,
    description: "Immerse yourself in crystal-clear audio with active noise cancellation. 30-hour battery life and premium comfort for all-day listening.",
    features: ["Active noise cancellation", "30-hour battery", "Bluetooth 5.2", "Foldable design"],
    badge: "20% Off",
  },
  {
    id: "5",
    name: "Canvas Field Jacket",
    price: 165,
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&h=700&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&h=700&fit=crop",
    ],
    category: "Clothing",
    rating: 4.8,
    reviews: 156,
    description: "A rugged yet refined field jacket in heavyweight waxed canvas. Water-resistant and built to last with copper rivets and brass snaps.",
    features: ["Waxed canvas", "Water-resistant", "Copper rivets", "Multiple pockets"],
  },
  {
    id: "6",
    name: "Minimalist Analog Watch",
    price: 225,
    image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=600&h=700&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=600&h=700&fit=crop",
    ],
    category: "Accessories",
    rating: 4.9,
    reviews: 98,
    description: "Clean lines and Swiss movement define this minimalist watch. The sapphire crystal face and Italian leather strap ensure durability and style.",
    features: ["Swiss movement", "Sapphire crystal", "Italian leather strap", "5ATM water resistant"],
  },
  {
    id: "7",
    name: "Hand-Thrown Stoneware Mug Set",
    price: 48,
    image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=600&h=700&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=600&h=700&fit=crop",
    ],
    category: "Home & Living",
    rating: 4.7,
    reviews: 423,
    description: "Set of 4 hand-thrown stoneware mugs in earthy tones. Each mug is unique with subtle variations that celebrate the handmade process.",
    features: ["Set of 4", "Hand-thrown", "Microwave safe", "Lead-free glaze"],
    badge: "Popular",
  },
  {
    id: "8",
    name: "Ultralight Hiking Daypack",
    price: 112,
    originalPrice: 140,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=700&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=700&fit=crop",
    ],
    category: "Outdoor",
    rating: 4.8,
    reviews: 287,
    description: "Weighing just 14oz, this 25L daypack is built from recycled ripstop nylon. Perfect for day hikes and daily commutes.",
    features: ["25L capacity", "Recycled nylon", "Water bottle pockets", "Padded laptop sleeve"],
    badge: "Eco-Friendly",
  },
];

export function formatPrice(price: number): string {
  return `$${price.toFixed(2)}`;
}
