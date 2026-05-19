import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Wireless Bluetooth Headphones',
    price: 89.99,
    originalPrice: 129.99,
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop',
    description: 'Premium wireless headphones with active noise cancellation and 30-hour battery life.',
    details: [
      'Active Noise Cancellation',
      '30-hour battery life',
      'Bluetooth 5.0',
      'Comfortable over-ear design',
      'Built-in microphone for calls'
    ],
    inStock: true,
    rating: 4.5,
    reviewCount: 328
  },
  {
    id: '2',
    name: 'Organic Cotton T-Shirt',
    price: 29.99,
    category: 'Clothing',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop',
    description: 'Comfortable 100% organic cotton t-shirt in classic fit. Available in multiple colors.',
    details: [
      '100% organic cotton',
      'Classic fit',
      'Pre-shrunk',
      'Machine washable',
      'Ethically sourced'
    ],
    inStock: true,
    rating: 4.8,
    reviewCount: 156
  },
  {
    id: '3',
    name: 'Stainless Steel Water Bottle',
    price: 24.99,
    category: 'Home & Kitchen',
    image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500&h=500&fit=crop',
    description: 'Insulated stainless steel water bottle keeps drinks cold for 24 hours or hot for 12 hours.',
    details: [
      'Double-wall vacuum insulation',
      '32 oz capacity',
      'BPA-free',
      'Leak-proof lid',
      'Dishwasher safe'
    ],
    inStock: true,
    rating: 4.7,
    reviewCount: 892
  },
  {
    id: '4',
    name: 'Leather Messenger Bag',
    price: 149.99,
    originalPrice: 199.99,
    category: 'Accessories',
    image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=500&h=500&fit=crop',
    description: 'Handcrafted genuine leather messenger bag with laptop compartment and adjustable strap.',
    details: [
      'Genuine leather',
      'Fits 15-inch laptop',
      'Multiple compartments',
      'Adjustable shoulder strap',
      'Handcrafted quality'
    ],
    inStock: true,
    rating: 4.6,
    reviewCount: 203
  },
  {
    id: '5',
    name: 'Smart Fitness Watch',
    price: 199.99,
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop',
    description: 'Advanced fitness tracking with heart rate monitor, GPS, and 7-day battery life.',
    details: [
      'Heart rate monitoring',
      'Built-in GPS',
      '7-day battery life',
      'Water resistant',
      'Sleep tracking'
    ],
    inStock: true,
    rating: 4.4,
    reviewCount: 567
  },
  {
    id: '6',
    name: 'Yoga Mat Premium',
    price: 44.99,
    category: 'Sports',
    image: 'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=500&h=500&fit=crop',
    description: 'Extra-thick yoga mat with superior cushioning and non-slip surface for all yoga styles.',
    details: [
      '6mm thick padding',
      'Non-slip texture',
      'Eco-friendly materials',
      'Easy to clean',
      'Includes carrying strap'
    ],
    inStock: true,
    rating: 4.9,
    reviewCount: 421
  },
  {
    id: '7',
    name: 'Ceramic Coffee Mug Set',
    price: 34.99,
    category: 'Home & Kitchen',
    image: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=500&h=500&fit=crop',
    description: 'Set of 4 handcrafted ceramic mugs with unique glazing. Microwave and dishwasher safe.',
    details: [
      'Set of 4 mugs',
      'Handcrafted ceramic',
      'Microwave safe',
      'Dishwasher safe',
      '12 oz capacity each'
    ],
    inStock: true,
    rating: 4.7,
    reviewCount: 234
  },
  {
    id: '8',
    name: 'Running Shoes Pro',
    price: 119.99,
    category: 'Sports',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=500&fit=crop',
    description: 'Lightweight running shoes with responsive cushioning and breathable mesh upper.',
    details: [
      'Responsive cushioning',
      'Breathable mesh',
      'Lightweight design',
      'Durable outsole',
      'Available in multiple sizes'
    ],
    inStock: false,
    rating: 4.5,
    reviewCount: 678
  },
  {
    id: '9',
    name: 'Portable Bluetooth Speaker',
    price: 59.99,
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&h=500&fit=crop',
    description: 'Waterproof portable speaker with 360-degree sound and 12-hour battery life.',
    details: [
      'Waterproof (IPX7)',
      '360-degree sound',
      '12-hour battery',
      'Bluetooth 5.0',
      'Compact and portable'
    ],
    inStock: true,
    rating: 4.6,
    reviewCount: 445
  },
  {
    id: '10',
    name: 'Desk Organizer Set',
    price: 39.99,
    category: 'Office',
    image: 'https://images.unsplash.com/photo-1594652634010-275e042ae1d5?w=500&h=500&fit=crop',
    description: 'Bamboo desk organizer set with multiple compartments for a clutter-free workspace.',
    details: [
      'Sustainable bamboo',
      'Multiple compartments',
      'Phone stand included',
      'Cable management',
      'Natural finish'
    ],
    inStock: true,
    rating: 4.8,
    reviewCount: 312
  },
  {
    id: '11',
    name: 'Winter Scarf Wool',
    price: 39.99,
    category: 'Clothing',
    image: 'https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?w=500&h=500&fit=crop',
    description: 'Soft merino wool scarf perfect for cold weather. Hypoallergenic and warm.',
    details: [
      'Merino wool blend',
      'Hypoallergenic',
      'Extra soft texture',
      'Various colors',
      'Hand wash recommended'
    ],
    inStock: true,
    rating: 4.7,
    reviewCount: 189
  },
  {
    id: '12',
    name: 'Plant Growth LED Light',
    price: 79.99,
    category: 'Home & Garden',
    image: 'https://images.unsplash.com/photo-1616628188859-7a11abb6fcc9?w=500&h=500&fit=crop',
    description: 'Full spectrum LED grow light for indoor plants with adjustable brightness and timer.',
    details: [
      'Full spectrum LED',
      'Adjustable brightness',
      'Built-in timer',
      'Energy efficient',
      'Suitable for all plant types'
    ],
    inStock: true,
    rating: 4.5,
    reviewCount: 267
  }
];

export const categories = [
  'All Products',
  'Electronics',
  'Clothing',
  'Home & Kitchen',
  'Accessories',
  'Sports',
  'Office',
  'Home & Garden'
];
