import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Premium Wireless Headphones',
    price: 299.99,
    originalPrice: 399.99,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80',
    category: 'Electronics',
    rating: 4.8,
    reviewCount: 2847,
    description: 'Experience crystal-clear audio with our premium wireless headphones. Featuring active noise cancellation, 30-hour battery life, and premium comfort padding.',
    features: [
      'Active Noise Cancellation',
      '30-hour battery life',
      'Premium comfort padding',
      'Bluetooth 5.0',
      'Foldable design',
      'Premium carrying case included'
    ],
    inStock: true,
    badge: 'Best Seller'
  },
  {
    id: '2',
    name: 'Smart Watch Pro',
    price: 449.99,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80',
    category: 'Electronics',
    rating: 4.7,
    reviewCount: 1923,
    description: 'Stay connected and track your fitness goals with our advanced smartwatch. Features include heart rate monitoring, GPS, and 7-day battery life.',
    features: [
      'Heart rate & SpO2 monitoring',
      'Built-in GPS',
      '7-day battery life',
      'Water resistant up to 50m',
      'Sleep tracking',
      'Multiple sport modes'
    ],
    inStock: true,
    badge: 'Trending'
  },
  {
    id: '3',
    name: 'Leather Laptop Backpack',
    price: 129.99,
    originalPrice: 179.99,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80',
    category: 'Accessories',
    rating: 4.6,
    reviewCount: 856,
    description: 'Professional leather backpack with padded laptop compartment. Perfect for work and travel with multiple organizational pockets.',
    features: [
      'Genuine leather construction',
      'Fits up to 15.6" laptop',
      'Multiple compartments',
      'USB charging port',
      'Water-resistant',
      'Ergonomic shoulder straps'
    ],
    inStock: true
  },
  {
    id: '4',
    name: 'Minimalist Desk Lamp',
    price: 79.99,
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800&q=80',
    category: 'Home',
    rating: 4.9,
    reviewCount: 1234,
    description: 'Modern LED desk lamp with adjustable brightness and color temperature. Perfect for any workspace with touch controls.',
    features: [
      'LED technology',
      'Touch controls',
      'Adjustable brightness',
      'Color temperature control',
      'USB charging port',
      'Memory function'
    ],
    inStock: true,
    badge: 'Editor\'s Choice'
  },
  {
    id: '5',
    name: 'Portable Bluetooth Speaker',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=800&q=80',
    category: 'Electronics',
    rating: 4.5,
    reviewCount: 678,
    description: '360-degree sound with deep bass. Waterproof design perfect for outdoor adventures with 20-hour battery life.',
    features: [
      '360-degree sound',
      'IPX7 waterproof',
      '20-hour battery',
      'Wireless stereo pairing',
      'Built-in microphone',
      'Compact design'
    ],
    inStock: true
  },
  {
    id: '6',
    name: 'Ergonomic Office Chair',
    price: 399.99,
    originalPrice: 549.99,
    image: 'https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=800&q=80',
    category: 'Furniture',
    rating: 4.8,
    reviewCount: 1567,
    description: 'Premium ergonomic office chair with lumbar support and adjustable features. Designed for all-day comfort and productivity.',
    features: [
      'Adjustable lumbar support',
      'Breathable mesh back',
      'Height adjustable',
      'Tilt mechanism',
      '360-degree swivel',
      'Weight capacity 300lbs'
    ],
    inStock: true,
    badge: 'Best Seller'
  },
  {
    id: '7',
    name: 'Stainless Steel Water Bottle',
    price: 34.99,
    image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=800&q=80',
    category: 'Lifestyle',
    rating: 4.7,
    reviewCount: 2341,
    description: 'Insulated water bottle keeps drinks cold for 24 hours or hot for 12 hours. Eco-friendly and BPA-free.',
    features: [
      'Double-wall insulation',
      'Keeps cold 24hrs, hot 12hrs',
      'BPA-free',
      '32oz capacity',
      'Leak-proof lid',
      'Dishwasher safe'
    ],
    inStock: true
  },
  {
    id: '8',
    name: 'Wireless Charging Pad',
    price: 49.99,
    image: 'https://images.unsplash.com/photo-1591290619762-d1c83e1725b2?w=800&q=80',
    category: 'Electronics',
    rating: 4.4,
    reviewCount: 543,
    description: 'Fast wireless charging pad compatible with all Qi-enabled devices. Sleek design with LED indicator.',
    features: [
      'Qi-certified',
      'Fast charging 15W',
      'LED indicator',
      'Over-temperature protection',
      'Non-slip surface',
      'Ultra-thin design'
    ],
    inStock: true
  },
  {
    id: '9',
    name: 'Canvas Tote Bag',
    price: 39.99,
    image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=800&q=80',
    category: 'Accessories',
    rating: 4.6,
    reviewCount: 432,
    description: 'Eco-friendly canvas tote bag perfect for shopping, beach, or everyday use. Durable and stylish design.',
    features: [
      '100% organic cotton',
      'Reinforced handles',
      'Large capacity',
      'Machine washable',
      'Multiple pockets',
      'Eco-friendly'
    ],
    inStock: true
  },
  {
    id: '10',
    name: 'Gaming Mouse RGB',
    price: 69.99,
    image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=800&q=80',
    category: 'Electronics',
    rating: 4.7,
    reviewCount: 1876,
    description: 'High-precision gaming mouse with customizable RGB lighting and programmable buttons. Designed for competitive gaming.',
    features: [
      '16,000 DPI sensor',
      'Customizable RGB',
      '8 programmable buttons',
      'Ergonomic design',
      'On-board memory',
      'Braided cable'
    ],
    inStock: true,
    badge: 'Trending'
  },
  {
    id: '11',
    name: 'Yoga Mat Premium',
    price: 59.99,
    image: 'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=800&q=80',
    category: 'Fitness',
    rating: 4.8,
    reviewCount: 1234,
    description: 'Extra-thick yoga mat with superior cushioning and grip. Perfect for yoga, pilates, and floor exercises.',
    features: [
      'Extra thick 6mm',
      'Non-slip surface',
      'Eco-friendly TPE',
      'Easy to clean',
      'Carrying strap included',
      'Free of harmful chemicals'
    ],
    inStock: true
  },
  {
    id: '12',
    name: 'Ceramic Coffee Mug Set',
    price: 44.99,
    image: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=800&q=80',
    category: 'Home',
    rating: 4.5,
    reviewCount: 765,
    description: 'Handcrafted ceramic coffee mug set of 4. Microwave and dishwasher safe with unique glazed finish.',
    features: [
      'Set of 4 mugs',
      'Handcrafted ceramic',
      'Microwave safe',
      'Dishwasher safe',
      '12oz capacity',
      'Unique glazed finish'
    ],
    inStock: true
  }
];

export const categories = [
  { name: 'Electronics', count: 234, icon: '💻' },
  { name: 'Accessories', count: 156, icon: '👜' },
  { name: 'Home', count: 189, icon: '🏠' },
  { name: 'Furniture', count: 87, icon: '🪑' },
  { name: 'Lifestyle', count: 234, icon: '✨' },
  { name: 'Fitness', count: 123, icon: '💪' }
];
