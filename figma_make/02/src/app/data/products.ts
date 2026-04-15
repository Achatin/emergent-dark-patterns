import { Product } from "../types";

export const products: Product[] = [
  {
    id: "1",
    name: "Premium Wireless Headphones",
    price: 299.99,
    description: "High-quality wireless headphones with active noise cancellation and 30-hour battery life. Experience premium sound quality with deep bass and crystal-clear highs.",
    image: "https://images.unsplash.com/photo-1578517581165-61ec5ab27a19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aXJlbGVzcyUyMGhlYWRwaG9uZXMlMjBwcm9kdWN0fGVufDF8fHx8MTc3NDkwMjYzNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Electronics",
    rating: 4.8,
    reviews: 1247,
    inStock: true,
    features: [
      "Active Noise Cancellation",
      "30-hour battery life",
      "Bluetooth 5.0",
      "Premium sound quality",
      "Comfortable design"
    ]
  },
  {
    id: "2",
    name: "Smart Watch Pro",
    price: 399.99,
    description: "Advanced fitness tracking smartwatch with heart rate monitor, GPS, and water resistance. Stay connected and track your health goals.",
    image: "https://images.unsplash.com/photo-1668760180303-fcfe2b899e20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydCUyMHdhdGNoJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NzQ5MDM2MzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Electronics",
    rating: 4.6,
    reviews: 892,
    inStock: true,
    features: [
      "Heart rate monitor",
      "GPS tracking",
      "Water resistant (50m)",
      "7-day battery life",
      "Sleep tracking"
    ]
  },
  {
    id: "3",
    name: "Ultra-Thin Laptop",
    price: 1299.99,
    description: "Powerful and portable laptop with 13-inch display, perfect for work and creativity. Features the latest processor and all-day battery life.",
    image: "https://images.unsplash.com/flagged/photo-1576697010739-6373b63f3204?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXB0b3AlMjBjb21wdXRlciUyMGRlc2t8ZW58MXx8fHwxNzc0ODUyMzkwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Electronics",
    rating: 4.9,
    reviews: 2134,
    inStock: true,
    features: [
      "13-inch Retina display",
      "16GB RAM",
      "512GB SSD",
      "12-hour battery",
      "Lightweight design"
    ]
  },
  {
    id: "4",
    name: "Professional Camera",
    price: 1899.99,
    description: "Mirrorless camera with 24MP sensor, 4K video recording, and advanced autofocus system. Capture stunning photos and videos.",
    image: "https://images.unsplash.com/photo-1729655669048-a667a0b01148?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW1lcmElMjBwaG90b2dyYXBoeSUyMGVxdWlwbWVudHxlbnwxfHx8fDE3NzQ5MzUxODF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Electronics",
    rating: 4.7,
    reviews: 567,
    inStock: true,
    features: [
      "24MP sensor",
      "4K video recording",
      "Advanced autofocus",
      "Weather-sealed body",
      "In-body stabilization"
    ]
  },
  {
    id: "5",
    name: "Running Shoes Elite",
    price: 129.99,
    description: "Lightweight running shoes with responsive cushioning and breathable mesh upper. Designed for optimal performance and comfort.",
    image: "https://images.unsplash.com/photo-1695459468644-717c8ae17eed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxydW5uaW5nJTIwc2hvZXMlMjBzbmVha2Vyc3xlbnwxfHx8fDE3NzQ4NzkyOTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Sports",
    rating: 4.5,
    reviews: 1893,
    inStock: true,
    features: [
      "Responsive cushioning",
      "Breathable mesh",
      "Lightweight design",
      "Durable outsole",
      "Arch support"
    ]
  },
  {
    id: "6",
    name: "Travel Backpack Pro",
    price: 89.99,
    description: "Spacious travel backpack with multiple compartments, padded laptop sleeve, and water-resistant material. Perfect for daily commutes and adventures.",
    image: "https://images.unsplash.com/photo-1673505705687-dffbfd02b613?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWNrcGFjayUyMHRyYXZlbCUyMGJhZ3xlbnwxfHx8fDE3NzQ5MTgzNTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Accessories",
    rating: 4.4,
    reviews: 756,
    inStock: true,
    features: [
      "Water-resistant",
      "Laptop compartment",
      "Multiple pockets",
      "Comfortable straps",
      "35L capacity"
    ]
  },
  {
    id: "7",
    name: "Smart Coffee Maker",
    price: 149.99,
    description: "Programmable coffee maker with app control, built-in grinder, and thermal carafe. Wake up to freshly brewed coffee every morning.",
    image: "https://images.unsplash.com/photo-1607273177147-e7304c4d5d6c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBtYWtlciUyMGtpdGNoZW58ZW58MXx8fHwxNzc0OTI4ODQ2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Home",
    rating: 4.3,
    reviews: 423,
    inStock: true,
    features: [
      "App control",
      "Built-in grinder",
      "Thermal carafe",
      "Programmable timer",
      "Auto shut-off"
    ]
  },
  {
    id: "8",
    name: "Modern Desk Lamp",
    price: 69.99,
    description: "Adjustable LED desk lamp with touch controls, USB charging port, and multiple brightness levels. Perfect for work and study.",
    image: "https://images.unsplash.com/photo-1766411503488-f90eef1124bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNrJTIwbGFtcCUyMG1vZGVybnxlbnwxfHx8fDE3NzQ5MTExMDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Home",
    rating: 4.6,
    reviews: 981,
    inStock: true,
    features: [
      "Touch controls",
      "USB charging port",
      "Adjustable arm",
      "Multiple brightness",
      "Energy efficient"
    ]
  },
  {
    id: "9",
    name: "Insulated Water Bottle",
    price: 34.99,
    description: "Stainless steel water bottle that keeps drinks cold for 24 hours or hot for 12 hours. BPA-free and leak-proof design.",
    image: "https://images.unsplash.com/photo-1525397053281-a37d8a2ff7ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXRlciUyMGJvdHRsZSUyMHNwb3J0c3xlbnwxfHx8fDE3NzQ5NTY0NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Sports",
    rating: 4.7,
    reviews: 2341,
    inStock: true,
    features: [
      "24h cold / 12h hot",
      "BPA-free",
      "Leak-proof",
      "Stainless steel",
      "Wide mouth opening"
    ]
  },
  {
    id: "10",
    name: "Premium Yoga Mat",
    price: 59.99,
    description: "Extra-thick yoga mat with non-slip surface and eco-friendly materials. Includes carrying strap for easy transport.",
    image: "https://images.unsplash.com/photo-1746796751590-a8c0f15d4900?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b2dhJTIwbWF0JTIwZml0bmVzc3xlbnwxfHx8fDE3NzQ4NDQ4ODB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Sports",
    rating: 4.5,
    reviews: 678,
    inStock: true,
    features: [
      "Extra-thick padding",
      "Non-slip surface",
      "Eco-friendly",
      "Carrying strap",
      "Easy to clean"
    ]
  },
  {
    id: "11",
    name: "Portable Bluetooth Speaker",
    price: 79.99,
    description: "Waterproof Bluetooth speaker with 360° sound, 20-hour battery life, and built-in microphone. Perfect for outdoor adventures.",
    image: "https://images.unsplash.com/photo-1643901102317-b430b45e4cce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibHVldG9vdGglMjBzcGVha2VyJTIwcG9ydGFibGV8ZW58MXx8fHwxNzc0ODYzMTAyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Electronics",
    rating: 4.4,
    reviews: 1432,
    inStock: true,
    features: [
      "Waterproof (IPX7)",
      "360° sound",
      "20-hour battery",
      "Built-in mic",
      "Compact design"
    ]
  },
  {
    id: "12",
    name: "Designer Sunglasses",
    price: 159.99,
    description: "Stylish polarized sunglasses with UV400 protection and lightweight frames. Combines fashion with functionality.",
    image: "https://images.unsplash.com/photo-1764333327297-0ebfd9fda541?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdW5nbGFzc2VzJTIwZmFzaGlvbiUyMGFjY2Vzc29yeXxlbnwxfHx8fDE3NzQ4ODM3MTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Accessories",
    rating: 4.6,
    reviews: 534,
    inStock: true,
    features: [
      "Polarized lenses",
      "UV400 protection",
      "Lightweight frames",
      "Scratch-resistant",
      "Stylish design"
    ]
  }
];
