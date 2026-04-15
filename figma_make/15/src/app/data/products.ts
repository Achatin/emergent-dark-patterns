export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  description: string;
  image: string;
  rating: number;
  reviews: number;
  inStock: boolean;
  features: string[];
}

export const products: Product[] = [
  {
    id: "1",
    name: "Premium Wireless Headphones",
    category: "Electronics",
    price: 199.99,
    originalPrice: 249.99,
    description: "Immerse yourself in crystal-clear audio with these premium wireless headphones. Featuring active noise cancellation and 30-hour battery life.",
    image: "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aXJlbGVzcyUyMGhlYWRwaG9uZXMlMjBibGFja3xlbnwxfHx8fDE3NzQ4ODI1ODN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    rating: 4.8,
    reviews: 342,
    inStock: true,
    features: [
      "Active Noise Cancellation",
      "30-hour battery life",
      "Bluetooth 5.0",
      "Premium sound quality",
      "Comfortable over-ear design"
    ]
  },
  {
    id: "2",
    name: "Modern Travel Backpack",
    category: "Accessories",
    price: 79.99,
    description: "Sleek and functional travel backpack with multiple compartments, perfect for daily commutes or weekend adventures.",
    image: "https://images.unsplash.com/photo-1756037020548-add7922c8e11?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBiYWNrcGFjayUyMHRyYXZlbHxlbnwxfHx8fDE3NzQ5NTk1MTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    rating: 4.6,
    reviews: 189,
    inStock: true,
    features: [
      "Water-resistant material",
      "Laptop compartment (up to 15\")",
      "USB charging port",
      "Multiple storage pockets",
      "Ergonomic design"
    ]
  },
  {
    id: "3",
    name: "Professional Running Shoes",
    category: "Footwear",
    price: 129.99,
    originalPrice: 159.99,
    description: "High-performance running shoes designed for comfort and durability. Perfect for both casual runners and athletes.",
    image: "https://images.unsplash.com/photo-1765914448113-ebf0ce8cb918?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxydW5uaW5nJTIwc25lYWtlcnMlMjBhdGhsZXRpY3xlbnwxfHx8fDE3NzQ5NTk1MTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    rating: 4.9,
    reviews: 521,
    inStock: true,
    features: [
      "Breathable mesh upper",
      "Responsive cushioning",
      "Durable rubber outsole",
      "Lightweight construction",
      "Available in multiple colors"
    ]
  },
  {
    id: "4",
    name: "Smart Fitness Watch",
    category: "Electronics",
    price: 249.99,
    description: "Track your health and fitness goals with this advanced smartwatch featuring heart rate monitoring and GPS.",
    image: "https://images.unsplash.com/photo-1665860455418-017fa50d29bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydHdhdGNoJTIwZml0bmVzcyUyMHRyYWNrZXJ8ZW58MXx8fHwxNzc0OTA4MzMyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    rating: 4.7,
    reviews: 278,
    inStock: true,
    features: [
      "Heart rate monitoring",
      "Built-in GPS",
      "Sleep tracking",
      "Water-resistant",
      "7-day battery life"
    ]
  },
  {
    id: "5",
    name: "Genuine Leather Wallet",
    category: "Accessories",
    price: 49.99,
    originalPrice: 69.99,
    description: "Classic bifold wallet crafted from premium genuine leather. Compact yet spacious with RFID protection.",
    image: "https://images.unsplash.com/photo-1620109176332-4f388ca26596?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWF0aGVyJTIwd2FsbGV0JTIwYnJvd258ZW58MXx8fHwxNzc0ODUxMTA5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    rating: 4.5,
    reviews: 156,
    inStock: true,
    features: [
      "Genuine leather",
      "RFID protection",
      "6 card slots",
      "Bill compartment",
      "Slim design"
    ]
  },
  {
    id: "6",
    name: "Designer Sunglasses",
    category: "Accessories",
    price: 89.99,
    description: "Stylish sunglasses with UV400 protection and polarized lenses. Perfect for any outdoor activity.",
    image: "https://images.unsplash.com/photo-1718967807816-414e2f9bc95a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdW5nbGFzc2VzJTIwZmFzaGlvbnxlbnwxfHx8fDE3NzQ4MzY3NjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    rating: 4.4,
    reviews: 93,
    inStock: true,
    features: [
      "UV400 protection",
      "Polarized lenses",
      "Lightweight frame",
      "Includes protective case",
      "Multiple styles available"
    ]
  },
  {
    id: "7",
    name: "Portable Bluetooth Speaker",
    category: "Electronics",
    price: 69.99,
    description: "Powerful portable speaker with 360-degree sound and 12-hour battery life. Perfect for parties and outdoor adventures.",
    image: "https://images.unsplash.com/photo-1674303324806-7018a739ed11?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0YWJsZSUyMHNwZWFrZXIlMjBibHVldG9vdGh8ZW58MXx8fHwxNzc0ODczODE3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    rating: 4.6,
    reviews: 214,
    inStock: true,
    features: [
      "360-degree sound",
      "12-hour battery",
      "Waterproof (IPX7)",
      "Bluetooth 5.0",
      "Compact and portable"
    ]
  },
  {
    id: "8",
    name: "Stainless Steel Water Bottle",
    category: "Home & Kitchen",
    price: 29.99,
    description: "Insulated stainless steel water bottle keeps drinks cold for 24 hours or hot for 12 hours. BPA-free and eco-friendly.",
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXRlciUyMGJvdHRsZSUyMHN0YWlubGVzc3xlbnwxfHx8fDE3NzQ5NDM4NjJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    rating: 4.8,
    reviews: 445,
    inStock: true,
    features: [
      "Double-wall insulation",
      "Keeps cold 24h, hot 12h",
      "BPA-free",
      "Leak-proof lid",
      "750ml capacity"
    ]
  },
  {
    id: "9",
    name: "Premium Yoga Mat",
    category: "Sports",
    price: 39.99,
    originalPrice: 54.99,
    description: "Non-slip yoga mat with extra cushioning for comfort. Made from eco-friendly materials.",
    image: "https://images.unsplash.com/photo-1746796751590-a8c0f15d4900?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b2dhJTIwbWF0JTIwZXhlcmNpc2V8ZW58MXx8fHwxNzc0ODUyNjQ4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    rating: 4.7,
    reviews: 312,
    inStock: true,
    features: [
      "Non-slip surface",
      "6mm thick cushioning",
      "Eco-friendly materials",
      "Includes carrying strap",
      "Easy to clean"
    ]
  },
  {
    id: "10",
    name: "Protective Phone Case",
    category: "Accessories",
    price: 24.99,
    description: "Durable phone case with military-grade protection and wireless charging compatibility.",
    image: "https://images.unsplash.com/photo-1774102620043-d2558221645e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaG9uZSUyMGNhc2UlMjBwcm90ZWN0aXZlfGVufDF8fHx8MTc3NDk1NjUyNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    rating: 4.5,
    reviews: 287,
    inStock: true,
    features: [
      "Military-grade protection",
      "Wireless charging compatible",
      "Raised edges for screen protection",
      "Slim profile",
      "Available for multiple models"
    ]
  },
  {
    id: "11",
    name: "Modern Desk Lamp",
    category: "Home & Kitchen",
    price: 59.99,
    description: "Adjustable LED desk lamp with touch controls and multiple brightness levels. Perfect for work or study.",
    image: "https://images.unsplash.com/photo-1766411503488-f90eef1124bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNrJTIwbGFtcCUyMG1vZGVybnxlbnwxfHx8fDE3NzQ5MTExMDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    rating: 4.6,
    reviews: 178,
    inStock: true,
    features: [
      "Adjustable arm",
      "Touch controls",
      "5 brightness levels",
      "USB charging port",
      "Energy-efficient LED"
    ]
  },
  {
    id: "12",
    name: "Ceramic Coffee Mug Set",
    category: "Home & Kitchen",
    price: 34.99,
    description: "Set of 4 handcrafted ceramic coffee mugs. Microwave and dishwasher safe. Perfect for your morning coffee.",
    image: "https://images.unsplash.com/photo-1666447606111-33167792af81?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBtdWclMjBjZXJhbWljfGVufDF8fHx8MTc3NDg3ODk4Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    rating: 4.8,
    reviews: 421,
    inStock: true,
    features: [
      "Set of 4 mugs",
      "Handcrafted ceramic",
      "Microwave safe",
      "Dishwasher safe",
      "350ml capacity each"
    ]
  }
];

export const categories = [
  "All",
  "Electronics",
  "Accessories",
  "Footwear",
  "Sports",
  "Home & Kitchen"
];
