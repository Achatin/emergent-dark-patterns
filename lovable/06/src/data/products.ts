export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  description: string;
  category: string;
  image: string;
  badge?: "sale" | "new";
  rating: number;
  reviews: number;
  features?: string[];
}

export const categories = [
  "All",
  "Electronics",
  "Home & Living",
  "Fashion",
  "Sports",
  "Books",
] as const;

export type Category = (typeof categories)[number];

export const products: Product[] = [
  {
    id: "1",
    name: "Wireless Noise-Canceling Headphones",
    price: 189.99,
    originalPrice: 249.99,
    description: "Premium over-ear headphones with adaptive noise cancellation, 30-hour battery life, and ultra-comfortable memory foam cushions. Perfect for music lovers and frequent travelers.",
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&q=80",
    badge: "sale",
    rating: 4.8,
    reviews: 342,
    features: ["Active Noise Cancellation", "30hr Battery", "Bluetooth 5.3", "Hi-Res Audio"],
  },
  {
    id: "2",
    name: "Minimalist Ceramic Vase Set",
    price: 64.00,
    description: "Hand-crafted ceramic vases in a set of three complementary sizes. Matte finish in warm neutral tones. A timeless addition to any living space.",
    category: "Home & Living",
    image: "https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?w=600&q=80",
    badge: "new",
    rating: 4.6,
    reviews: 89,
    features: ["Hand-crafted", "Set of 3", "Matte Finish", "Water-safe"],
  },
  {
    id: "3",
    name: "Italian Leather Weekend Bag",
    price: 295.00,
    description: "Full-grain Italian leather duffle bag with brass hardware. Spacious interior with organizer pockets. Ages beautifully with use.",
    category: "Fashion",
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&q=80",
    rating: 4.9,
    reviews: 156,
    features: ["Full-grain Leather", "Brass Hardware", "Cotton Lined", "Lifetime Warranty"],
  },
  {
    id: "4",
    name: "Smart Fitness Watch Pro",
    price: 229.00,
    originalPrice: 299.00,
    description: "Advanced fitness tracker with AMOLED display, GPS, heart rate monitoring, and 14-day battery life. Water resistant to 50m.",
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80",
    badge: "sale",
    rating: 4.7,
    reviews: 521,
    features: ["AMOLED Display", "Built-in GPS", "14-day Battery", "50m Water Resistant"],
  },
  {
    id: "5",
    name: "Organic Cotton Throw Blanket",
    price: 78.00,
    description: "Ultra-soft organic cotton blanket woven on traditional looms. Generous 150x200cm size in a versatile oatmeal color.",
    category: "Home & Living",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80",
    rating: 4.5,
    reviews: 203,
    features: ["100% Organic Cotton", "OEKO-TEX Certified", "Machine Washable", "150x200cm"],
  },
  {
    id: "6",
    name: "Carbon Fiber Running Shoes",
    price: 175.00,
    description: "Competition-grade running shoes with carbon fiber plate for energy return. Engineered mesh upper and responsive foam midsole.",
    category: "Sports",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80",
    badge: "new",
    rating: 4.8,
    reviews: 278,
    features: ["Carbon Fiber Plate", "Engineered Mesh", "Responsive Foam", "Lightweight 215g"],
  },
  {
    id: "7",
    name: "Hardcover Journal — Linen Bound",
    price: 32.00,
    description: "160 pages of premium 100gsm paper in a beautiful linen-bound cover. Lay-flat binding and ribbon bookmark. Perfect for writing and sketching.",
    category: "Books",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=600&q=80",
    rating: 4.4,
    reviews: 94,
    features: ["100gsm Paper", "Lay-flat Binding", "Linen Cover", "160 Pages"],
  },
  {
    id: "8",
    name: "Portable Bluetooth Speaker",
    price: 119.00,
    description: "360° immersive sound in a compact, waterproof design. 20-hour battery and built-in microphone for calls. Pairs instantly with any device.",
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600&q=80",
    rating: 4.6,
    reviews: 412,
    features: ["360° Sound", "IPX7 Waterproof", "20hr Battery", "USB-C Charging"],
  },
  {
    id: "9",
    name: "Merino Wool Crew Sweater",
    price: 125.00,
    originalPrice: 165.00,
    description: "Lightweight merino wool sweater that regulates temperature naturally. Itch-free, odor-resistant, and perfect for layering year-round.",
    category: "Fashion",
    image: "https://images.unsplash.com/photo-1434389677669-e08b4cda3a30?w=600&q=80",
    badge: "sale",
    rating: 4.7,
    reviews: 189,
    features: ["100% Merino Wool", "Temperature Regulating", "Odor Resistant", "Machine Washable"],
  },
  {
    id: "10",
    name: "Yoga Mat — Natural Rubber",
    price: 89.00,
    description: "Eco-friendly natural rubber yoga mat with alignment markings. Non-slip surface, 5mm cushioning, and includes a carrying strap.",
    category: "Sports",
    image: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=600&q=80",
    badge: "new",
    rating: 4.5,
    reviews: 167,
    features: ["Natural Rubber", "Alignment Markings", "5mm Thick", "Non-slip Surface"],
  },
  {
    id: "11",
    name: "Architectural Coffee Table Book",
    price: 55.00,
    description: "A stunning visual journey through contemporary architecture worldwide. 320 pages of full-color photography with essays by leading architects.",
    category: "Books",
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=600&q=80",
    rating: 4.8,
    reviews: 72,
    features: ["320 Pages", "Hardcover", "Full Color", "11x14 Format"],
  },
  {
    id: "12",
    name: "Handblown Glass Pendant Light",
    price: 210.00,
    description: "Artisan handblown glass pendant with subtle amber tint. Includes adjustable cord length and vintage-style Edison bulb.",
    category: "Home & Living",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057ab6fe?w=600&q=80",
    rating: 4.9,
    reviews: 45,
    features: ["Handblown Glass", "Adjustable Cord", "Bulb Included", "Dimmable"],
  },
];
