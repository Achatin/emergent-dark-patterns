export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
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
    image: "https://images.unsplash.com/photo-1764557159396-419b85356035?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBlbGVjdHJvbmljcyUyMGhlYWRwaG9uZXN8ZW58MXx8fHwxNzc0ODU3MzM1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Electronics",
    description: "Experience crystal-clear audio with our premium wireless headphones. Featuring active noise cancellation and 30-hour battery life.",
    rating: 4.8,
    reviews: 256,
    inStock: true,
    features: [
      "Active Noise Cancellation",
      "30-hour battery life",
      "Bluetooth 5.0",
      "Premium leather ear cups",
      "Foldable design"
    ]
  },
  {
    id: "2",
    name: "Mechanical Wireless Keyboard",
    price: 149.99,
    image: "https://images.unsplash.com/photo-1589401806207-2381455bce76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aXJlbGVzcyUyMGtleWJvYXJkJTIwc2V0dXB8ZW58MXx8fHwxNzc0OTU5MzQxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Electronics",
    description: "Professional-grade mechanical keyboard with customizable RGB lighting and hot-swappable switches.",
    rating: 4.6,
    reviews: 189,
    inStock: true,
    features: [
      "Hot-swappable switches",
      "RGB backlighting",
      "Wireless & USB-C connectivity",
      "Aluminum frame",
      "Programmable keys"
    ]
  },
  {
    id: "3",
    name: "Fitness Smartwatch Pro",
    price: 399.99,
    image: "https://images.unsplash.com/photo-1665860455418-017fa50d29bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydHdhdGNoJTIwZml0bmVzcyUyMHRyYWNrZXJ8ZW58MXx8fHwxNzc0OTA4MzMyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Wearables",
    description: "Advanced fitness tracking with heart rate monitoring, GPS, and comprehensive health insights.",
    rating: 4.7,
    reviews: 412,
    inStock: true,
    features: [
      "Heart rate monitoring",
      "Built-in GPS",
      "Sleep tracking",
      "Water resistant up to 50m",
      "7-day battery life"
    ]
  },
  {
    id: "4",
    name: "Portable Bluetooth Speaker",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1674303324806-7018a739ed11?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0YWJsZSUyMHNwZWFrZXIlMjBibHVldG9vdGh8ZW58MXx8fHwxNzc0ODczODE3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Electronics",
    description: "High-quality portable speaker with 360-degree sound and waterproof design for outdoor adventures.",
    rating: 4.5,
    reviews: 328,
    inStock: true,
    features: [
      "360-degree sound",
      "IPX7 waterproof",
      "12-hour battery",
      "USB-C charging",
      "Built-in microphone"
    ]
  },
  {
    id: "5",
    name: "Ultra Performance Laptop",
    price: 1299.99,
    image: "https://images.unsplash.com/flagged/photo-1576697010739-6373b63f3204?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXB0b3AlMjBjb21wdXRlciUyMGRlc2t8ZW58MXx8fHwxNzc0ODUyMzkwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Electronics",
    description: "Powerful laptop with the latest processor, stunning display, and all-day battery life for professionals.",
    rating: 4.9,
    reviews: 567,
    inStock: true,
    features: [
      "Intel Core i7 processor",
      "16GB RAM",
      "512GB SSD",
      "15.6\" 4K display",
      "Up to 12 hours battery"
    ]
  },
  {
    id: "6",
    name: "Professional Camera Kit",
    price: 899.99,
    image: "https://images.unsplash.com/photo-1729655669048-a667a0b01148?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW1lcmElMjBwaG90b2dyYXBoeSUyMGVxdWlwbWVudHxlbnwxfHx8fDE3NzQ5MzUxODF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Electronics",
    description: "Complete camera kit for photography enthusiasts with high-resolution sensor and versatile lens.",
    rating: 4.8,
    reviews: 234,
    inStock: true,
    features: [
      "24MP sensor",
      "4K video recording",
      "18-55mm lens included",
      "WiFi connectivity",
      "Optical image stabilization"
    ]
  },
  {
    id: "7",
    name: "5G Smartphone",
    price: 799.99,
    image: "https://images.unsplash.com/photo-1646719223599-9864b351e242?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydHBob25lJTIwbW9iaWxlJTIwZGV2aWNlfGVufDF8fHx8MTc3NDkxNjg0Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Electronics",
    description: "Latest 5G smartphone with triple camera system and stunning edge-to-edge display.",
    rating: 4.6,
    reviews: 891,
    inStock: true,
    features: [
      "5G connectivity",
      "Triple camera system",
      "6.5\" OLED display",
      "128GB storage",
      "Fast charging"
    ]
  },
  {
    id: "8",
    name: "Pro Tablet",
    price: 649.99,
    image: "https://images.unsplash.com/photo-1740637977676-c8040b41dc7a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YWJsZXQlMjBkZXZpY2UlMjBzY3JlZW58ZW58MXx8fHwxNzc0OTQwMzE4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Electronics",
    description: "Versatile tablet perfect for work and play with stylus support and powerful performance.",
    rating: 4.7,
    reviews: 445,
    inStock: true,
    features: [
      "11\" LCD display",
      "Stylus included",
      "8GB RAM",
      "256GB storage",
      "All-day battery"
    ]
  },
  {
    id: "9",
    name: "Gaming Mouse RGB",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1690439440176-ba5dc3114dd1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1pbmclMjBtb3VzZSUyMG1lY2hhbmljYWx8ZW58MXx8fHwxNzc0OTU5MzQ0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Electronics",
    description: "Precision gaming mouse with customizable RGB lighting and programmable buttons.",
    rating: 4.4,
    reviews: 672,
    inStock: true,
    features: [
      "16,000 DPI sensor",
      "8 programmable buttons",
      "RGB lighting",
      "Ergonomic design",
      "On-board memory"
    ]
  },
  {
    id: "10",
    name: "Travel Backpack Pro",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1770183970859-7bc84b67d3f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWNrcGFjayUyMHRyYXZlbCUyMGFjY2Vzc29yaWVzfGVufDF8fHx8MTc3NDk1OTM0NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Accessories",
    description: "Durable travel backpack with multiple compartments and laptop sleeve for the modern traveler.",
    rating: 4.6,
    reviews: 298,
    inStock: true,
    features: [
      "Water-resistant material",
      "Laptop compartment (up to 15.6\")",
      "USB charging port",
      "Anti-theft zipper",
      "Comfortable shoulder straps"
    ]
  },
  {
    id: "11",
    name: "Designer Sunglasses",
    price: 159.99,
    image: "https://images.unsplash.com/photo-1764333327297-0ebfd9fda541?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdW5nbGFzc2VzJTIwZmFzaGlvbiUyMGFjY2Vzc29yeXxlbnwxfHx8fDE3NzQ4ODM3MTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Accessories",
    description: "Stylish designer sunglasses with UV protection and premium acetate frames.",
    rating: 4.5,
    reviews: 187,
    inStock: true,
    features: [
      "100% UV protection",
      "Polarized lenses",
      "Premium acetate frame",
      "Scratch-resistant",
      "Includes case and cloth"
    ]
  },
  {
    id: "12",
    name: "Performance Running Shoes",
    price: 139.99,
    image: "https://images.unsplash.com/photo-1695459468644-717c8ae17eed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxydW5uaW5nJTIwc2hvZXMlMjBzbmVha2Vyc3xlbnwxfHx8fDE3NzQ4NzkyOTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Accessories",
    description: "Lightweight running shoes designed for comfort and performance with responsive cushioning.",
    rating: 4.7,
    reviews: 523,
    inStock: true,
    features: [
      "Responsive cushioning",
      "Breathable mesh upper",
      "Durable rubber outsole",
      "Lightweight design",
      "Reflective details"
    ]
  }
];

export const categories = [
  "All",
  "Electronics",
  "Wearables",
  "Accessories"
];
