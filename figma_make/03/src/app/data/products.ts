import { Product } from '../context/CartContext';

export const products: Product[] = [
  {
    id: 1,
    name: 'Wireless Headphones',
    price: 89.99,
    description: 'Premium wireless headphones with active noise cancellation and 30-hour battery life. Features comfortable over-ear design and crystal-clear audio quality.',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80',
    category: 'Electronics',
    inStock: true,
    specifications: [
      'Bluetooth 5.0 connectivity',
      '30-hour battery life',
      'Active noise cancellation',
      'Foldable design',
      '40mm drivers'
    ],
    shippingInfo: 'Free shipping on orders over $50. Estimated delivery: 3-5 business days.',
    returnPolicy: '30-day money-back guarantee. Full refund if returned in original condition.'
  },
  {
    id: 2,
    name: 'Smart Watch',
    price: 249.99,
    description: 'Advanced fitness tracking smartwatch with heart rate monitoring, GPS, and smartphone notifications. Water-resistant up to 50 meters.',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80',
    category: 'Electronics',
    inStock: true,
    specifications: [
      'Heart rate monitor',
      'GPS tracking',
      'Water-resistant (50m)',
      '7-day battery life',
      'AMOLED display'
    ],
    shippingInfo: 'Free shipping on orders over $50. Estimated delivery: 3-5 business days.',
    returnPolicy: '30-day money-back guarantee. Full refund if returned in original condition.'
  },
  {
    id: 3,
    name: 'Laptop Backpack',
    price: 59.99,
    description: 'Durable laptop backpack with padded compartments for devices up to 15.6 inches. Features USB charging port and water-resistant material.',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&q=80',
    category: 'Accessories',
    inStock: true,
    specifications: [
      'Fits laptops up to 15.6"',
      'USB charging port',
      'Water-resistant material',
      'Multiple compartments',
      'Ergonomic design'
    ],
    shippingInfo: 'Free shipping on orders over $50. Estimated delivery: 3-5 business days.',
    returnPolicy: '30-day money-back guarantee. Full refund if returned in original condition.'
  },
  {
    id: 4,
    name: 'Stainless Steel Water Bottle',
    price: 24.99,
    description: 'Insulated stainless steel water bottle keeps drinks cold for 24 hours or hot for 12 hours. BPA-free and eco-friendly.',
    image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500&q=80',
    category: 'Home & Kitchen',
    inStock: true,
    specifications: [
      '24oz capacity',
      'Double-wall insulation',
      'BPA-free',
      'Leak-proof lid',
      'Dishwasher safe'
    ],
    shippingInfo: 'Free shipping on orders over $50. Estimated delivery: 3-5 business days.',
    returnPolicy: '30-day money-back guarantee. Full refund if returned in original condition.'
  },
  {
    id: 5,
    name: 'Yoga Mat',
    price: 34.99,
    description: 'Extra-thick yoga mat with non-slip surface and carrying strap. Perfect for yoga, pilates, and floor exercises.',
    image: 'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=500&q=80',
    category: 'Sports & Outdoors',
    inStock: true,
    specifications: [
      '6mm thickness',
      'Non-slip surface',
      '72" x 24" dimensions',
      'Eco-friendly TPE material',
      'Includes carrying strap'
    ],
    shippingInfo: 'Free shipping on orders over $50. Estimated delivery: 3-5 business days.',
    returnPolicy: '30-day money-back guarantee. Full refund if returned in original condition.'
  },
  {
    id: 6,
    name: 'Coffee Maker',
    price: 79.99,
    description: 'Programmable coffee maker with 12-cup capacity and thermal carafe. Features auto-brew function and keep-warm plate.',
    image: 'https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=500&q=80',
    category: 'Home & Kitchen',
    inStock: true,
    specifications: [
      '12-cup capacity',
      'Programmable timer',
      'Thermal carafe',
      'Auto shut-off',
      'Reusable filter'
    ],
    shippingInfo: 'Free shipping on orders over $50. Estimated delivery: 3-5 business days.',
    returnPolicy: '30-day money-back guarantee. Full refund if returned in original condition.'
  },
  {
    id: 7,
    name: 'Desk Lamp',
    price: 45.99,
    description: 'LED desk lamp with adjustable brightness and color temperature. Features USB charging port and modern minimalist design.',
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500&q=80',
    category: 'Home & Office',
    inStock: false,
    specifications: [
      'LED light source',
      'Adjustable brightness (5 levels)',
      'Color temperature control',
      'USB charging port',
      'Touch controls'
    ],
    shippingInfo: 'Currently out of stock. Expected restock: 2-3 weeks.',
    returnPolicy: '30-day money-back guarantee. Full refund if returned in original condition.'
  },
  {
    id: 8,
    name: 'Running Shoes',
    price: 119.99,
    description: 'Lightweight running shoes with responsive cushioning and breathable mesh upper. Designed for comfort during long runs.',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80',
    category: 'Sports & Outdoors',
    inStock: true,
    specifications: [
      'Breathable mesh upper',
      'Responsive cushioning',
      'Durable rubber outsole',
      'Lightweight design',
      'Available in multiple sizes'
    ],
    shippingInfo: 'Free shipping on orders over $50. Estimated delivery: 3-5 business days.',
    returnPolicy: '30-day money-back guarantee. Full refund if returned in original condition.'
  }
];

export const categories = [
  'All Products',
  'Electronics',
  'Accessories',
  'Home & Kitchen',
  'Home & Office',
  'Sports & Outdoors'
];
