export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  image: string;
  description: string;
  features: string[];
  inStock: number;
  badge?: 'bestseller' | 'new' | 'limited';
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  date: string;
  comment: string;
  verified: boolean;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Premium Wireless Headphones',
    category: 'Electronics',
    price: 299.99,
    originalPrice: 399.99,
    rating: 4.8,
    reviews: 1247,
    image: 'https://images.unsplash.com/photo-1738920424218-3d28b951740a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3aXJlbGVzcyUyMGhlYWRwaG9uZXMlMjBwcm9kdWN0fGVufDF8fHx8MTc3NTMwMzA0OHww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Experience premium sound quality with active noise cancellation. Perfect for music lovers and professionals who demand the best audio experience.',
    features: ['Active Noise Cancellation', '40-hour battery life', 'Premium comfort design', 'Multi-device pairing'],
    inStock: 23,
    badge: 'bestseller'
  },
  {
    id: '2',
    name: 'Smart Fitness Watch Pro',
    category: 'Wearables',
    price: 249.99,
    rating: 4.6,
    reviews: 892,
    image: 'https://images.unsplash.com/photo-1665860455418-017fa50d29bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydHdhdGNoJTIwZml0bmVzcyUyMHRyYWNrZXJ8ZW58MXx8fHwxNzc1MjQ4Mjc2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Track your fitness goals with advanced health monitoring. Features heart rate, sleep tracking, and 50+ workout modes.',
    features: ['Heart rate monitor', 'GPS tracking', 'Water resistant', '7-day battery'],
    inStock: 45,
    badge: 'new'
  },
  {
    id: '3',
    name: 'Ultra Performance Laptop',
    category: 'Electronics',
    price: 1299.99,
    originalPrice: 1499.99,
    rating: 4.9,
    reviews: 2341,
    image: 'https://images.unsplash.com/photo-1706735733956-deebaf5d001c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXB0b3AlMjBjb21wdXRlciUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NzUyOTA0NzR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Powerful performance for work and play. Features latest processor, stunning display, and all-day battery life.',
    features: ['16GB RAM', '512GB SSD', '15.6" 4K display', '12-hour battery'],
    inStock: 12,
    badge: 'bestseller'
  },
  {
    id: '4',
    name: 'Professional DSLR Camera',
    category: 'Electronics',
    price: 899.99,
    rating: 4.7,
    reviews: 567,
    image: 'https://images.unsplash.com/photo-1532272278764-53cd1fe53f72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW1lcmElMjBwaG90b2dyYXBoeSUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NzUyOTI4NzB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Capture stunning photos and 4K video with professional-grade image quality. Perfect for content creators.',
    features: ['24.2MP sensor', '4K video recording', 'WiFi connectivity', 'Dual card slots'],
    inStock: 18,
  },
  {
    id: '5',
    name: 'Ultra Comfort Running Shoes',
    category: 'Sports',
    price: 129.99,
    originalPrice: 159.99,
    rating: 4.5,
    reviews: 1523,
    image: 'https://images.unsplash.com/photo-1695459468644-717c8ae17eed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxydW5uaW5nJTIwc2hvZXMlMjBzbmVha2Vyc3xlbnwxfHx8fDE3NzUzMzQ5NTF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Engineered for performance and comfort. Advanced cushioning and support for your best runs.',
    features: ['Responsive cushioning', 'Breathable mesh', 'Lightweight design', 'Durable outsole'],
    inStock: 67,
  },
  {
    id: '6',
    name: 'Designer Polarized Sunglasses',
    category: 'Fashion',
    price: 189.99,
    rating: 4.4,
    reviews: 432,
    image: 'https://images.unsplash.com/photo-1766928102358-86e329eef03b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdW5nbGFzc2VzJTIwZmFzaGlvbiUyMGFjY2Vzc29yaWVzfGVufDF8fHx8MTc3NTMyOTMyNHww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Premium sunglasses with 100% UV protection and polarized lenses. Style meets function.',
    features: ['UV400 protection', 'Polarized lenses', 'Scratch resistant', 'Premium case included'],
    inStock: 34,
    badge: 'new'
  },
  {
    id: '7',
    name: 'Travel Backpack Pro',
    category: 'Travel',
    price: 79.99,
    rating: 4.6,
    reviews: 891,
    image: 'https://images.unsplash.com/photo-1673505705691-ea8b4f4580e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWNrcGFjayUyMHRyYXZlbCUyMGJhZ3xlbnwxfHx8fDE3NzUyODU2NDJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Your perfect travel companion with smart organization and anti-theft features. TSA-friendly design.',
    features: ['30L capacity', 'USB charging port', 'Water resistant', 'Laptop compartment'],
    inStock: 56,
  },
  {
    id: '8',
    name: 'Smart Coffee Maker',
    category: 'Home',
    price: 159.99,
    rating: 4.3,
    reviews: 723,
    image: 'https://images.unsplash.com/photo-1760278679190-ca627281de03?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBtYWtlciUyMGtpdGNoZW4lMjBhcHBsaWFuY2V8ZW58MXx8fHwxNzc1Mjg0ODg4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Brew the perfect cup with smart controls and programmable settings. WiFi enabled for remote brewing.',
    features: ['WiFi enabled', 'Programmable timer', 'Auto shut-off', 'Temperature control'],
    inStock: 41,
  },
  {
    id: '9',
    name: 'Pro Gaming Controller',
    category: 'Gaming',
    price: 69.99,
    originalPrice: 89.99,
    rating: 4.7,
    reviews: 1876,
    image: 'https://images.unsplash.com/photo-1695028644151-1ec92bae9fb0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1pbmclMjBjb25zb2xlJTIwY29udHJvbGxlcnxlbnwxfHx8fDE3NzUyNjU0Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Elevate your gaming with precision controls and customizable buttons. Compatible with all major platforms.',
    features: ['Cross-platform', 'Customizable buttons', '40-hour battery', 'Low latency'],
    inStock: 8,
    badge: 'limited'
  },
  {
    id: '10',
    name: 'Modern LED Desk Lamp',
    category: 'Home',
    price: 49.99,
    rating: 4.5,
    reviews: 634,
    image: 'https://images.unsplash.com/photo-1766411503489-c6fe7b008bd6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNrJTIwbGFtcCUyMG1vZGVybiUyMGxpZ2h0aW5nfGVufDF8fHx8MTc3NTMzNDk1M3ww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Eye-caring LED lamp with adjustable brightness and color temperature. Perfect for work and study.',
    features: ['5 brightness levels', 'Touch control', 'USB charging port', 'Eye protection'],
    inStock: 78,
  },
  {
    id: '11',
    name: 'Premium Yoga Mat',
    category: 'Sports',
    price: 39.99,
    rating: 4.6,
    reviews: 945,
    image: 'https://images.unsplash.com/photo-1767605545968-a102fc151b08?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b2dhJTIwbWF0JTIwZml0bmVzcyUyMGVxdWlwbWVudHxlbnwxfHx8fDE3NzUzMzQ5NTN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Extra thick yoga mat with superior grip and cushioning. Eco-friendly and non-toxic materials.',
    features: ['6mm thickness', 'Non-slip surface', 'Eco-friendly', 'Carrying strap included'],
    inStock: 92,
  },
  {
    id: '12',
    name: 'Portable Bluetooth Speaker',
    category: 'Electronics',
    price: 89.99,
    originalPrice: 119.99,
    rating: 4.4,
    reviews: 1124,
    image: 'https://images.unsplash.com/photo-1675319245480-215961c129f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0YWJsZSUyMHNwZWFrZXIlMjBibHVldG9vdGh8ZW58MXx8fHwxNzc1MjYxNDcwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    description: '360-degree sound with deep bass. Waterproof design perfect for outdoor adventures.',
    features: ['Waterproof IPX7', '24-hour playtime', '360° sound', 'Wireless pairing'],
    inStock: 37,
  },
];

export const reviews: { [productId: string]: Review[] } = {
  '1': [
    {
      id: 'r1',
      author: 'Sarah M.',
      rating: 5,
      date: 'March 15, 2026',
      comment: 'Best headphones I\'ve ever owned! The noise cancellation is incredible and the battery lasts forever.',
      verified: true
    },
    {
      id: 'r2',
      author: 'John D.',
      rating: 4,
      date: 'March 10, 2026',
      comment: 'Great sound quality and comfort. Only wish the case was a bit smaller.',
      verified: true
    },
    {
      id: 'r3',
      author: 'Emily R.',
      rating: 5,
      date: 'March 5, 2026',
      comment: 'Worth every penny. The noise cancellation works perfectly on flights!',
      verified: true
    }
  ]
};

export const categories = [
  { name: 'Electronics', count: 5 },
  { name: 'Sports', count: 2 },
  { name: 'Fashion', count: 1 },
  { name: 'Travel', count: 1 },
  { name: 'Home', count: 2 },
  { name: 'Gaming', count: 1 },
  { name: 'Wearables', count: 1 },
];
