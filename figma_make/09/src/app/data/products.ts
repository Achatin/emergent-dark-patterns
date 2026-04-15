export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  rating: number;
  reviewCount: number;
  stock: number;
  features?: string[];
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Premium Wireless Headphones',
    description: 'High-quality wireless headphones with active noise cancellation and superior sound quality. Perfect for music lovers and professionals.',
    price: 299.99,
    image: 'https://images.unsplash.com/photo-1757946718516-fddeb8d3ed9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBoZWFkcGhvbmVzJTIwcHJvZHVjdHxlbnwxfHx8fDE3NzQ4OTk4NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Electronics',
    rating: 4.8,
    reviewCount: 324,
    stock: 45,
    features: [
      'Active Noise Cancellation',
      '30-hour battery life',
      'Premium sound quality',
      'Comfortable over-ear design',
      'Bluetooth 5.0'
    ]
  },
  {
    id: '2',
    name: 'Smart Watch Pro',
    description: 'Advanced fitness tracking and smart notifications in a sleek design. Monitor your health 24/7 with style.',
    price: 399.99,
    image: 'https://images.unsplash.com/photo-1668760180303-fcfe2b899e20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydCUyMHdhdGNoJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NzQ5MDM2MzR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Electronics',
    rating: 4.6,
    reviewCount: 512,
    stock: 32,
    features: [
      'Heart rate monitoring',
      'GPS tracking',
      'Water resistant',
      '7-day battery life',
      'Sleep tracking'
    ]
  },
  {
    id: '3',
    name: 'Ultra HD Laptop',
    description: 'Powerful laptop with stunning display and all-day battery life. Perfect for work and entertainment.',
    price: 1299.99,
    image: 'https://images.unsplash.com/flagged/photo-1576697010739-6373b63f3204?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXB0b3AlMjBjb21wdXRlciUyMGRlc2t8ZW58MXx8fHwxNzc0ODUyMzkwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Electronics',
    rating: 4.9,
    reviewCount: 856,
    stock: 18,
    features: [
      '15.6" 4K display',
      '16GB RAM',
      '512GB SSD',
      'Intel i7 processor',
      '10-hour battery'
    ]
  },
  {
    id: '4',
    name: '5G Smartphone',
    description: 'Latest smartphone with advanced camera system and lightning-fast 5G connectivity.',
    price: 899.99,
    image: 'https://images.unsplash.com/photo-1741061962757-3a96e9dbc9e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydHBob25lJTIwbW9iaWxlJTIwcGhvbmV8ZW58MXx8fHwxNzc0OTExODEwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Electronics',
    rating: 4.7,
    reviewCount: 1203,
    stock: 67,
    features: [
      'Triple camera system',
      '5G connectivity',
      '128GB storage',
      'All-day battery',
      '6.5" OLED display'
    ]
  },
  {
    id: '5',
    name: 'Professional Camera',
    description: 'High-end mirrorless camera for professional photography. Capture stunning images with precision.',
    price: 1899.99,
    image: 'https://images.unsplash.com/photo-1729655669048-a667a0b01148?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW1lcmElMjBwaG90b2dyYXBoeSUyMGVxdWlwbWVudHxlbnwxfHx8fDE3NzQ5MzUxODF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Electronics',
    rating: 4.9,
    reviewCount: 432,
    stock: 12,
    features: [
      '45MP sensor',
      '4K video recording',
      'In-body stabilization',
      'Weather sealed',
      'Dual card slots'
    ]
  },
  {
    id: '6',
    name: 'Portable Bluetooth Speaker',
    description: 'Waterproof speaker with 360-degree sound. Perfect for outdoor adventures.',
    price: 149.99,
    image: 'https://images.unsplash.com/photo-1618532498309-08ba18e6da89?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibHVldG9vdGglMjBzcGVha2VyJTIwbXVzaWN8ZW58MXx8fHwxNzc0ODk2MTM3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Electronics',
    rating: 4.5,
    reviewCount: 678,
    stock: 89,
    features: [
      '360-degree sound',
      'Waterproof IPX7',
      '12-hour battery',
      'Wireless pairing',
      'Built-in microphone'
    ]
  },
  {
    id: '7',
    name: 'Tablet Pro',
    description: 'Versatile tablet for work and play. Stunning display and powerful performance.',
    price: 799.99,
    image: 'https://images.unsplash.com/photo-1769603891182-0316b20ce2aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YWJsZXQlMjBkZXZpY2UlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc3NDkyMDk0MXww&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Electronics',
    rating: 4.7,
    reviewCount: 934,
    stock: 41,
    features: [
      '11" Liquid Retina',
      'All-day battery',
      'Apple Pencil support',
      '256GB storage',
      'Face ID'
    ]
  },
  {
    id: '8',
    name: 'Gaming Console',
    description: 'Next-generation gaming console with stunning graphics and immersive gameplay.',
    price: 499.99,
    image: 'https://images.unsplash.com/photo-1695028644151-1ec92bae9fb0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1pbmclMjBjb25zb2xlJTIwY29udHJvbGxlcnxlbnwxfHx8fDE3NzQ5NTA4MTB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Electronics',
    rating: 4.8,
    reviewCount: 2341,
    stock: 23,
    features: [
      '4K gaming',
      'Ray tracing',
      'Ultra-fast SSD',
      'Wireless controller',
      'HDR support'
    ]
  },
  {
    id: '9',
    name: 'Smart Coffee Maker',
    description: 'Programmable coffee maker with precision temperature control. Wake up to perfect coffee.',
    price: 199.99,
    image: 'https://images.unsplash.com/photo-1607273177147-e7304c4d5d6c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBtYWtlciUyMGtpdGNoZW58ZW58MXx8fHwxNzc0OTI4ODQ2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Home',
    rating: 4.6,
    reviewCount: 445,
    stock: 56,
    features: [
      'Programmable brew',
      'Temperature control',
      '12-cup capacity',
      'Auto-shutoff',
      'Keep warm function'
    ]
  },
  {
    id: '10',
    name: 'Travel Backpack',
    description: 'Durable and spacious backpack with laptop compartment. Perfect for travel and daily use.',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1673505705687-dffbfd02b613?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWNrcGFjayUyMHRyYXZlbCUyMGJhZ3xlbnwxfHx8fDE3NzQ5MTgzNTR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Accessories',
    rating: 4.5,
    reviewCount: 567,
    stock: 134,
    features: [
      'Laptop compartment',
      'Water resistant',
      'Multiple pockets',
      'Padded straps',
      'USB charging port'
    ]
  },
  {
    id: '11',
    name: 'Running Shoes',
    description: 'Lightweight running shoes with superior cushioning and support. Elevate your performance.',
    price: 129.99,
    image: 'https://images.unsplash.com/photo-1695459468644-717c8ae17eed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxydW5uaW5nJTIwc2hvZXMlMjBzbmVha2Vyc3xlbnwxfHx8fDE3NzQ4NzkyOTl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Sports',
    rating: 4.7,
    reviewCount: 789,
    stock: 92,
    features: [
      'Breathable mesh',
      'Cushioned sole',
      'Lightweight design',
      'Arch support',
      'Durable outsole'
    ]
  },
  {
    id: '12',
    name: 'Modern Desk Lamp',
    description: 'Adjustable LED desk lamp with touch controls and multiple brightness levels.',
    price: 69.99,
    image: 'https://images.unsplash.com/photo-1766411503488-f90eef1124bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNrJTIwbGFtcCUyMG1vZGVybiUyMGxpZ2h0aW5nfGVufDF8fHx8MTc3NDg1NzQ4Mnww&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Home',
    rating: 4.4,
    reviewCount: 234,
    stock: 78,
    features: [
      'LED lighting',
      'Touch control',
      'Adjustable arm',
      'USB charging port',
      'Eye-care technology'
    ]
  }
];

export const categories = [
  { id: 'all', name: 'All Products', count: products.length },
  { id: 'electronics', name: 'Electronics', count: products.filter(p => p.category === 'Electronics').length },
  { id: 'home', name: 'Home', count: products.filter(p => p.category === 'Home').length },
  { id: 'sports', name: 'Sports', count: products.filter(p => p.category === 'Sports').length },
  { id: 'accessories', name: 'Accessories', count: products.filter(p => p.category === 'Accessories').length },
];
