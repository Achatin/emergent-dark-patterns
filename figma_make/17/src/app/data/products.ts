export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  images: string[];
  category: string;
  description: string;
  rating: number;
  reviewCount: number;
  inStock: boolean;
  features: string[];
  sizes?: string[];
  colors?: string[];
  badge?: string;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Premium Wireless Headphones',
    price: 299.99,
    originalPrice: 399.99,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&h=800&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?w=800&h=800&fit=crop'
    ],
    category: 'electronics',
    description: 'Experience superior sound quality with our premium wireless headphones. Featuring active noise cancellation, 30-hour battery life, and premium comfort padding.',
    rating: 4.8,
    reviewCount: 1247,
    inStock: true,
    features: ['Active Noise Cancellation', '30-Hour Battery', 'Premium Comfort', 'Wireless Charging'],
    colors: ['Black', 'Silver', 'Navy'],
    badge: 'Bestseller'
  },
  {
    id: '2',
    name: 'Smart Fitness Watch',
    price: 249.99,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&h=800&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=800&h=800&fit=crop'
    ],
    category: 'electronics',
    description: 'Track your fitness goals with precision. Heart rate monitoring, GPS tracking, and water resistance up to 50m.',
    rating: 4.6,
    reviewCount: 892,
    inStock: true,
    features: ['Heart Rate Monitor', 'GPS Tracking', '50m Water Resistant', '7-Day Battery'],
    colors: ['Black', 'Rose Gold', 'Silver'],
    badge: 'New'
  },
  {
    id: '3',
    name: 'Minimalist Backpack',
    price: 79.99,
    originalPrice: 99.99,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&h=800&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?w=800&h=800&fit=crop'
    ],
    category: 'accessories',
    description: 'Sleek and functional design perfect for daily commute or travel. Water-resistant material with laptop compartment.',
    rating: 4.7,
    reviewCount: 543,
    inStock: true,
    features: ['Water Resistant', 'Laptop Compartment', 'USB Charging Port', 'Ergonomic Design'],
    colors: ['Black', 'Gray', 'Navy']
  },
  {
    id: '4',
    name: 'Organic Cotton T-Shirt',
    price: 29.99,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&h=800&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=800&h=800&fit=crop'
    ],
    category: 'clothing',
    description: 'Sustainably sourced organic cotton t-shirt. Soft, breathable, and perfect for everyday wear.',
    rating: 4.5,
    reviewCount: 1089,
    inStock: true,
    features: ['100% Organic Cotton', 'Sustainable', 'Pre-Shrunk', 'Machine Washable'],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['White', 'Black', 'Navy', 'Gray']
  },
  {
    id: '5',
    name: 'Ceramic Coffee Mug Set',
    price: 39.99,
    image: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=800&h=800&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1517256673644-36ad11246d21?w=800&h=800&fit=crop'
    ],
    category: 'home',
    description: 'Set of 4 handcrafted ceramic mugs. Microwave and dishwasher safe. Perfect for coffee or tea lovers.',
    rating: 4.9,
    reviewCount: 324,
    inStock: true,
    features: ['Set of 4', 'Handcrafted', 'Dishwasher Safe', 'Microwave Safe'],
    badge: 'Top Rated'
  },
  {
    id: '6',
    name: 'Portable Bluetooth Speaker',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=800&h=800&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1545454675-3531b543be5d?w=800&h=800&fit=crop'
    ],
    category: 'electronics',
    description: '360° sound with deep bass. Waterproof design perfect for outdoor adventures. 24-hour battery life.',
    rating: 4.7,
    reviewCount: 678,
    inStock: true,
    features: ['360° Sound', 'Waterproof', '24-Hour Battery', 'Portable Design'],
    colors: ['Black', 'Blue', 'Red']
  },
  {
    id: '7',
    name: 'Designer Sunglasses',
    price: 159.99,
    originalPrice: 199.99,
    image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=800&h=800&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800&h=800&fit=crop'
    ],
    category: 'accessories',
    description: 'UV400 protection with polarized lenses. Stylish design that complements any outfit.',
    rating: 4.6,
    reviewCount: 445,
    inStock: true,
    features: ['UV400 Protection', 'Polarized Lenses', 'Premium Frame', 'Includes Case']
  },
  {
    id: '8',
    name: 'Yoga Mat Premium',
    price: 49.99,
    image: 'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=800&h=800&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1592432678016-e910b452f9a2?w=800&h=800&fit=crop'
    ],
    category: 'sports',
    description: 'Extra thick and cushioned yoga mat with non-slip surface. Eco-friendly materials.',
    rating: 4.8,
    reviewCount: 756,
    inStock: true,
    features: ['Extra Thick', 'Non-Slip', 'Eco-Friendly', 'Carrying Strap Included'],
    colors: ['Purple', 'Blue', 'Pink', 'Black']
  },
  {
    id: '9',
    name: 'Stainless Steel Water Bottle',
    price: 34.99,
    image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=800&h=800&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1523362628745-0c100150b504?w=800&h=800&fit=crop'
    ],
    category: 'accessories',
    description: 'Keep drinks cold for 24 hours or hot for 12 hours. BPA-free and leak-proof design.',
    rating: 4.7,
    reviewCount: 892,
    inStock: true,
    features: ['Insulated', 'BPA-Free', 'Leak-Proof', '24oz Capacity'],
    colors: ['Silver', 'Black', 'Blue', 'Pink']
  },
  {
    id: '10',
    name: 'Desk Organizer Set',
    price: 44.99,
    image: 'https://images.unsplash.com/photo-1588427913697-b6d4d6ea3d7a?w=800&h=800&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1588427913697-b6d4d6ea3d7a?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1582819510988-c6296f1d7fab?w=800&h=800&fit=crop'
    ],
    category: 'home',
    description: 'Modern bamboo desk organizer with multiple compartments. Keep your workspace tidy and organized.',
    rating: 4.5,
    reviewCount: 234,
    inStock: true,
    features: ['Bamboo Material', 'Multiple Compartments', 'Eco-Friendly', 'Modern Design']
  },
  {
    id: '11',
    name: 'Running Shoes Pro',
    price: 129.99,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&h=800&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=800&h=800&fit=crop'
    ],
    category: 'sports',
    description: 'Lightweight running shoes with responsive cushioning. Perfect for long-distance running.',
    rating: 4.8,
    reviewCount: 1456,
    inStock: true,
    features: ['Responsive Cushioning', 'Breathable Mesh', 'Lightweight', 'Durable Sole'],
    sizes: ['7', '8', '9', '10', '11', '12'],
    colors: ['Black', 'White', 'Blue'],
    badge: 'Bestseller'
  },
  {
    id: '12',
    name: 'Leather Wallet',
    price: 59.99,
    image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?w=800&h=800&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1627123424574-724758594e93?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1591561954557-26941169b49e?w=800&h=800&fit=crop'
    ],
    category: 'accessories',
    description: 'Genuine leather wallet with RFID protection. Multiple card slots and bill compartment.',
    rating: 4.6,
    reviewCount: 567,
    inStock: true,
    features: ['Genuine Leather', 'RFID Protection', '8 Card Slots', 'Slim Design'],
    colors: ['Brown', 'Black']
  }
];

export const categories = [
  { id: 'all', name: 'All Products', icon: '🛍️' },
  { id: 'electronics', name: 'Electronics', icon: '📱' },
  { id: 'clothing', name: 'Clothing', icon: '👕' },
  { id: 'accessories', name: 'Accessories', icon: '👜' },
  { id: 'home', name: 'Home & Living', icon: '🏠' },
  { id: 'sports', name: 'Sports & Fitness', icon: '⚽' }
];

export const reviews = [
  {
    id: '1',
    productId: '1',
    author: 'Sarah Johnson',
    rating: 5,
    date: '2026-03-15',
    title: 'Best headphones I\'ve ever owned!',
    content: 'The sound quality is absolutely incredible and the noise cancellation works perfectly. Worth every penny!',
    verified: true
  },
  {
    id: '2',
    productId: '1',
    author: 'Mike Chen',
    rating: 5,
    date: '2026-03-10',
    title: 'Amazing battery life',
    content: 'I charge these once a week and use them daily. The comfort is also top-notch for long listening sessions.',
    verified: true
  },
  {
    id: '3',
    productId: '1',
    author: 'Emma Davis',
    rating: 4,
    date: '2026-03-05',
    title: 'Great but a bit pricey',
    content: 'Sound quality is excellent and features are great. Only wish they were a bit more affordable.',
    verified: true
  }
];
