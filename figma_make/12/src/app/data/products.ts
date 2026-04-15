export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
  description: string;
  rating: number;
  reviews: number;
  inStock: boolean;
  features: string[];
}

export const products: Product[] = [
  {
    id: "1",
    name: "Premium Wireless Headphones",
    price: 299.99,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1695634463848-4db4e47703a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3aXJlbGVzcyUyMGhlYWRwaG9uZXN8ZW58MXx8fHwxNzc0OTAzNjM0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Experience premium sound quality with these state-of-the-art wireless headphones featuring active noise cancellation and 30-hour battery life.",
    rating: 4.8,
    reviews: 234,
    inStock: true,
    features: [
      "Active Noise Cancellation",
      "30-hour battery life",
      "Bluetooth 5.0",
      "Premium comfort padding",
      "Built-in microphone"
    ]
  },
  {
    id: "2",
    name: "Luxury Leather Backpack",
    price: 189.99,
    category: "Bags",
    image: "https://images.unsplash.com/photo-1575376653281-1632fc9c61f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBsZWF0aGVyJTIwYmFja3BhY2t8ZW58MXx8fHwxNzc0OTQ5ODE4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Handcrafted from premium full-grain leather, this backpack combines timeless style with modern functionality.",
    rating: 4.6,
    reviews: 156,
    inStock: true,
    features: [
      "Full-grain leather",
      "Laptop compartment (15-inch)",
      "Multiple pockets",
      "Adjustable straps",
      "Water-resistant"
    ]
  },
  {
    id: "3",
    name: "Smart Fitness Watch",
    price: 249.99,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1669480380743-f76990b9bc44?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydCUyMHdhdGNoJTIwZml0bmVzc3xlbnwxfHx8fDE3NzQ4NzM4MTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Track your fitness goals with precision. Features heart rate monitoring, GPS, and comprehensive health insights.",
    rating: 4.7,
    reviews: 412,
    inStock: true,
    features: [
      "Heart rate monitor",
      "Built-in GPS",
      "7-day battery life",
      "Water resistant (50m)",
      "Sleep tracking"
    ]
  },
  {
    id: "4",
    name: "Minimalist Desk Lamp",
    price: 79.99,
    category: "Home",
    image: "https://images.unsplash.com/photo-1621447980929-6638614633c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwZGVzayUyMGxhbXB8ZW58MXx8fHwxNzc0OTM5NDI4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Modern LED desk lamp with adjustable brightness and color temperature. Perfect for any workspace.",
    rating: 4.5,
    reviews: 89,
    inStock: true,
    features: [
      "LED technology",
      "Adjustable brightness",
      "Color temperature control",
      "Energy efficient",
      "Touch controls"
    ]
  },
  {
    id: "5",
    name: "Portable Bluetooth Speaker",
    price: 129.99,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1589256469067-ea99122bbdc4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0YWJsZSUyMGJsdWV0b290aCUyMHNwZWFrZXJ8ZW58MXx8fHwxNzc0OTI5NTEzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Take your music anywhere with this powerful, waterproof Bluetooth speaker with 360-degree sound.",
    rating: 4.9,
    reviews: 567,
    inStock: true,
    features: [
      "360-degree sound",
      "Waterproof (IP67)",
      "12-hour battery",
      "Wireless connectivity",
      "Compact design"
    ]
  },
  {
    id: "6",
    name: "Professional Mirrorless Camera",
    price: 1299.99,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1697311622332-184b7bb19a46?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW1lcmElMjBtaXJyb3JsZXNzJTIwcGhvdG9ncmFwaHl8ZW58MXx8fHwxNzc0OTYwMzU3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Capture stunning images with this professional-grade mirrorless camera featuring 4K video and advanced autofocus.",
    rating: 4.9,
    reviews: 324,
    inStock: true,
    features: [
      "24.2MP sensor",
      "4K video recording",
      "Fast autofocus",
      "Weather sealed body",
      "WiFi connectivity"
    ]
  },
  {
    id: "7",
    name: "Athletic Running Shoes",
    price: 149.99,
    category: "Shoes",
    image: "https://images.unsplash.com/photo-1765914448113-ebf0ce8cb918?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxydW5uaW5nJTIwc2hvZXMlMjBhdGhsZXRpY3xlbnwxfHx8fDE3NzQ4NzEzODR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "High-performance running shoes with responsive cushioning and breathable mesh upper for maximum comfort.",
    rating: 4.7,
    reviews: 892,
    inStock: true,
    features: [
      "Responsive cushioning",
      "Breathable mesh upper",
      "Durable outsole",
      "Lightweight design",
      "Arch support"
    ]
  },
  {
    id: "8",
    name: "Premium Coffee Maker",
    price: 199.99,
    category: "Home",
    image: "https://images.unsplash.com/photo-1608354580875-30bd4168b351?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBtYWtlciUyMG1hY2hpbmV8ZW58MXx8fHwxNzc0ODQ4MjI0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Brew barista-quality coffee at home with this programmable coffee maker featuring precise temperature control.",
    rating: 4.6,
    reviews: 234,
    inStock: true,
    features: [
      "Programmable timer",
      "Precise temperature control",
      "12-cup capacity",
      "Auto shut-off",
      "Stainless steel carafe"
    ]
  },
  {
    id: "9",
    name: "Premium Yoga Mat",
    price: 69.99,
    category: "Sports",
    image: "https://images.unsplash.com/photo-1746796751590-a8c0f15d4900?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b2dhJTIwbWF0JTIwZXhlcmNpc2V8ZW58MXx8fHwxNzc0ODUyNjQ4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Extra-thick yoga mat with superior grip and cushioning. Made from eco-friendly, non-toxic materials.",
    rating: 4.8,
    reviews: 445,
    inStock: true,
    features: [
      "Extra thick (6mm)",
      "Non-slip surface",
      "Eco-friendly materials",
      "Easy to clean",
      "Includes carrying strap"
    ]
  },
  {
    id: "10",
    name: "Designer Sunglasses",
    price: 159.99,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1764333327297-0ebfd9fda541?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdW5nbGFzc2VzJTIwZmFzaGlvbiUyMGFjY2Vzc29yeXxlbnwxfHx8fDE3NzQ4ODM3MTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Protect your eyes in style with these UV-protective designer sunglasses featuring polarized lenses.",
    rating: 4.7,
    reviews: 178,
    inStock: true,
    features: [
      "UV400 protection",
      "Polarized lenses",
      "Lightweight frame",
      "Designer style",
      "Includes case"
    ]
  },
  {
    id: "11",
    name: "Laptop Computer",
    price: 1499.99,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1706735733956-deebaf5d001c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXB0b3AlMjBjb21wdXRlciUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NzQ5NTU0MjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Powerful laptop with latest processor, high-resolution display, and all-day battery life for professionals on the go.",
    rating: 4.8,
    reviews: 523,
    inStock: true,
    features: [
      "Latest generation processor",
      "16GB RAM",
      "512GB SSD",
      "15.6\" Full HD display",
      "All-day battery"
    ]
  },
  {
    id: "12",
    name: "Stainless Steel Water Bottle",
    price: 34.99,
    category: "Sports",
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXRlciUyMGJvdHRsZSUyMHN0YWlubGVzcyUyMHN0ZWVsfGVufDF8fHx8MTc3NDk2MDM2MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Double-walled insulated water bottle keeps drinks cold for 24 hours or hot for 12 hours. BPA-free and leak-proof.",
    rating: 4.9,
    reviews: 1245,
    inStock: true,
    features: [
      "Double-wall insulation",
      "24-hour cold retention",
      "BPA-free",
      "Leak-proof lid",
      "32oz capacity"
    ]
  }
];

export const categories = [
  "All",
  "Electronics",
  "Home",
  "Sports",
  "Bags",
  "Shoes",
  "Accessories"
];
