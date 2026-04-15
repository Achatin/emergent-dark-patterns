import { Product } from '../context/CartContext';

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'Premium Wireless Headphones',
    price: 299.99,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500',
    category: 'Electronics',
    rating: 4.8,
    reviews: 2847,
    description: 'Experience crystal-clear audio with active noise cancellation and 30-hour battery life.',
    features: ['Active Noise Cancellation', '30-hour battery', 'Premium sound quality', 'Comfortable fit'],
    stock: 45
  },
  {
    id: 2,
    name: 'Smart Fitness Watch',
    price: 249.99,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500',
    category: 'Electronics',
    rating: 4.6,
    reviews: 1923,
    description: 'Track your health and fitness with advanced sensors and a stunning AMOLED display.',
    features: ['Heart rate monitor', 'GPS tracking', 'Water resistant', '7-day battery'],
    stock: 67
  },
  {
    id: 3,
    name: 'Designer Leather Backpack',
    price: 189.99,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500',
    category: 'Bags',
    rating: 4.9,
    reviews: 856,
    description: 'Handcrafted leather backpack with laptop compartment and premium finishing.',
    features: ['Genuine leather', 'Laptop compartment', 'Water resistant', 'Lifetime warranty'],
    stock: 23
  },
  {
    id: 4,
    name: 'Professional Camera Kit',
    price: 1299.99,
    image: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=500',
    category: 'Electronics',
    rating: 4.9,
    reviews: 634,
    description: 'Capture stunning photos with this complete camera kit including lenses and accessories.',
    features: ['24MP sensor', '4K video', '3 lenses included', 'Weather sealed'],
    stock: 12
  },
  {
    id: 5,
    name: 'Minimalist Desk Lamp',
    price: 79.99,
    image: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=500',
    category: 'Home',
    rating: 4.7,
    reviews: 1456,
    description: 'Modern LED desk lamp with adjustable brightness and color temperature.',
    features: ['LED technology', 'Touch control', 'USB charging port', 'Energy efficient'],
    stock: 89
  },
  {
    id: 6,
    name: 'Portable Bluetooth Speaker',
    price: 129.99,
    image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500',
    category: 'Electronics',
    rating: 4.5,
    reviews: 2134,
    description: 'Waterproof speaker with 360° sound and 20-hour battery life.',
    features: ['Waterproof IPX7', '20-hour battery', '360° sound', 'Compact design'],
    stock: 156
  },
  {
    id: 7,
    name: 'Organic Cotton T-Shirt',
    price: 34.99,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500',
    category: 'Clothing',
    rating: 4.8,
    reviews: 3421,
    description: 'Sustainable and comfortable t-shirt made from 100% organic cotton.',
    features: ['100% organic cotton', 'Pre-shrunk', 'Fair trade', 'Multiple colors'],
    stock: 234
  },
  {
    id: 8,
    name: 'Stainless Steel Water Bottle',
    price: 29.99,
    image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500',
    category: 'Accessories',
    rating: 4.7,
    reviews: 1876,
    description: 'Keep drinks cold for 24 hours or hot for 12 hours with double-wall insulation.',
    features: ['Double-wall insulated', 'BPA free', 'Leak proof', '24oz capacity'],
    stock: 178
  },
  {
    id: 9,
    name: 'Yoga Mat Pro',
    price: 59.99,
    image: 'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=500',
    category: 'Fitness',
    rating: 4.6,
    reviews: 987,
    description: 'Extra thick, non-slip yoga mat with alignment lines and carrying strap.',
    features: ['6mm thick', 'Non-slip surface', 'Eco-friendly', 'Alignment guides'],
    stock: 67
  },
  {
    id: 10,
    name: 'Wireless Keyboard & Mouse',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500',
    category: 'Electronics',
    rating: 4.5,
    reviews: 1567,
    description: 'Ergonomic wireless combo with quiet keys and precision tracking.',
    features: ['Wireless 2.4GHz', 'Ergonomic design', 'Quiet keys', 'Long battery life'],
    stock: 92
  },
  {
    id: 11,
    name: 'Ceramic Coffee Mug Set',
    price: 39.99,
    image: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=500',
    category: 'Home',
    rating: 4.8,
    reviews: 2341,
    description: 'Set of 4 handcrafted ceramic mugs with beautiful glazed finish.',
    features: ['Set of 4', 'Microwave safe', 'Dishwasher safe', 'Handcrafted'],
    stock: 145
  },
  {
    id: 12,
    name: 'Running Shoes Pro',
    price: 139.99,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500',
    category: 'Footwear',
    rating: 4.7,
    reviews: 1789,
    description: 'Lightweight running shoes with responsive cushioning and breathable mesh.',
    features: ['Responsive cushioning', 'Breathable mesh', 'Lightweight', 'Durable outsole'],
    stock: 78
  },
];

export const CATEGORIES = [
  { name: 'Electronics', count: 198 },
  { name: 'Clothing', count: 342 },
  { name: 'Home', count: 156 },
  { name: 'Fitness', count: 89 },
  { name: 'Bags', count: 67 },
  { name: 'Accessories', count: 234 },
  { name: 'Footwear', count: 123 },
];
