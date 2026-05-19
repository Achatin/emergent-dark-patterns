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

export const products: Product[] = [
  {
    id: "1",
    name: "Organic Cotton Tote Bag",
    price: 24.00,
    description: "A durable, ethically-sourced tote bag made from 100% organic cotton. Perfect for everyday errands.",
    details: ["100% organic cotton canvas", "Reinforced handles", "Machine washable", "Dimensions: 38cm × 42cm × 10cm", "Weight: 280g"],
    category: "Bags",
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?w=600&h=600&fit=crop",
    rating: 4.7,
    reviewCount: 128,
    inStock: true,
    tags: ["organic", "eco-friendly"],
  },
  {
    id: "2",
    name: "Ceramic Pour-Over Coffee Set",
    price: 48.00,
    description: "Hand-finished ceramic dripper and server set. Brew café-quality coffee at home with this minimalist set.",
    details: ["Handmade stoneware ceramic", "Includes dripper + 500ml server", "Dishwasher safe", "Comes with 10 paper filters", "Matte glaze finish"],
    category: "Kitchen",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&h=600&fit=crop",
    rating: 4.9,
    reviewCount: 74,
    inStock: true,
    tags: ["handmade"],
  },
  {
    id: "3",
    name: "Recycled Wool Throw Blanket",
    price: 68.00,
    originalPrice: 85.00,
    description: "Cozy throw blanket made from 70% recycled wool. Warm, sustainable, and beautifully textured.",
    details: ["70% recycled wool, 30% polyester", "Dimensions: 130cm × 170cm", "Dry clean recommended", "Made in Portugal", "OEKO-TEX certified"],
    category: "Home",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=600&fit=crop",
    rating: 4.6,
    reviewCount: 53,
    inStock: true,
    tags: ["recycled", "eco-friendly"],
  },
  {
    id: "4",
    name: "Bamboo Desk Organizer",
    price: 32.00,
    description: "Keep your workspace tidy with this minimal bamboo organizer. Multiple compartments for pens, cards, and devices.",
    details: ["Sustainably-sourced bamboo", "5 compartments", "Phone stand slot", "Dimensions: 25cm × 15cm × 12cm", "Natural oil finish"],
    category: "Office",
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?w=600&h=600&fit=crop",
    rating: 4.4,
    reviewCount: 91,
    inStock: true,
    tags: ["sustainable"],
  },
  {
    id: "5",
    name: "Linen Apron – Sage",
    price: 36.00,
    description: "Stonewashed linen apron in a calming sage green. Adjustable neck strap and deep pockets.",
    details: ["100% European linen", "Pre-washed for softness", "Adjustable leather neck strap", "Two front pockets", "One size fits most"],
    category: "Kitchen",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=600&fit=crop",
    rating: 4.8,
    reviewCount: 42,
    inStock: true,
    tags: ["linen", "handmade"],
  },
  {
    id: "6",
    name: "Soy Wax Candle – Cedar & Moss",
    price: 22.00,
    description: "Hand-poured soy wax candle with natural cedar and moss fragrance. Burns clean for up to 45 hours.",
    details: ["100% soy wax", "Cotton wick", "45-hour burn time", "Reusable glass jar", "No synthetic fragrances"],
    category: "Home",
    image: "https://images.unsplash.com/photo-1602028915047-37269d1a73f7?w=600&h=600&fit=crop",
    rating: 4.5,
    reviewCount: 167,
    inStock: true,
    tags: ["natural", "handmade"],
  },
  {
    id: "7",
    name: "Stainless Steel Water Bottle",
    price: 28.00,
    description: "Double-walled insulated bottle that keeps drinks cold for 24h or hot for 12h. No plastic, no BPA.",
    details: ["18/8 stainless steel", "500ml capacity", "Double-wall vacuum insulation", "Leak-proof cap", "BPA-free"],
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=600&h=600&fit=crop",
    rating: 4.6,
    reviewCount: 203,
    inStock: true,
    tags: ["eco-friendly"],
  },
  {
    id: "8",
    name: "Merino Wool Beanie",
    price: 30.00,
    originalPrice: 38.00,
    description: "Ultra-soft merino wool beanie. Breathable, itch-free, and naturally temperature-regulating.",
    details: ["100% extra-fine merino wool", "Rib-knit construction", "One size fits most", "Hand wash cold", "Made in Scotland"],
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?w=600&h=600&fit=crop",
    rating: 4.7,
    reviewCount: 88,
    inStock: false,
    tags: ["wool"],
  },
];

export const categories = ["All", "Bags", "Kitchen", "Home", "Office", "Accessories"];
