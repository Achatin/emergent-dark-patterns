import { Product } from '../context/CartContext';

export const products: Product[] = [
  {
    id: '1',
    name: 'Wireless Headphones',
    price: 129.99,
    image: 'https://images.unsplash.com/photo-1612858249937-1cc0852093dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    category: 'Electronics',
    description: 'Premium wireless headphones with active noise cancellation and 30-hour battery life.',
    details: [
      'Active Noise Cancellation technology',
      '30-hour battery life with quick charge',
      'Premium sound quality with deep bass',
      'Comfortable over-ear design',
      'Bluetooth 5.0 connectivity',
      'Includes carrying case and cables'
    ],
    inStock: true,
  },
  {
    id: '2',
    name: 'Ceramic Coffee Mug',
    price: 24.99,
    image: 'https://images.unsplash.com/photo-1751392263818-21c63641a856?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    category: 'Home',
    description: 'Handcrafted ceramic mug with minimalist design, perfect for your daily coffee ritual.',
    details: [
      'Handcrafted ceramic construction',
      '12oz capacity',
      'Microwave and dishwasher safe',
      'Minimalist matte black finish',
      'Comfortable ergonomic handle',
      'Lead-free and non-toxic materials'
    ],
    inStock: true,
  },
  {
    id: '3',
    name: 'Adventure Backpack',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1626992471289-cfc0954e33ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    category: 'Outdoor',
    description: 'Durable 30L backpack designed for outdoor adventures with weatherproof construction.',
    details: [
      '30-liter capacity',
      'Water-resistant materials',
      'Padded laptop compartment (fits 15")',
      'Multiple organizational pockets',
      'Adjustable chest and waist straps',
      'Breathable back panel'
    ],
    inStock: true,
  },
  {
    id: '4',
    name: 'Smart Watch',
    price: 199.99,
    image: 'https://images.unsplash.com/photo-1642592020624-7a57ddec0347?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    category: 'Electronics',
    description: 'Feature-rich smartwatch with health tracking, notifications, and sleek design.',
    details: [
      'Heart rate and sleep tracking',
      'GPS and workout modes',
      'Smartphone notifications',
      '7-day battery life',
      'Water-resistant up to 50m',
      'Customizable watch faces'
    ],
    inStock: true,
  },
  {
    id: '5',
    name: 'Premium Notebook',
    price: 18.99,
    image: 'https://images.unsplash.com/photo-1504520169123-768da2d62b57?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    category: 'Stationery',
    description: 'High-quality hardcover notebook with thick, smooth paper for writing and sketching.',
    details: [
      '192 pages of premium paper (100gsm)',
      'Hardcover with elastic closure',
      'Ribbon bookmark',
      'Expandable inner pocket',
      'Lies flat when open',
      'Ink-resistant paper'
    ],
    inStock: true,
  },
  {
    id: '6',
    name: 'Classic Sunglasses',
    price: 79.99,
    image: 'https://images.unsplash.com/photo-1654274285614-37cad6007665?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    category: 'Accessories',
    description: 'Timeless sunglasses with UV protection and polarized lenses for superior clarity.',
    details: [
      '100% UV protection',
      'Polarized lenses reduce glare',
      'Durable acetate frame',
      'Scratch-resistant coating',
      'Includes protective case',
      'Lightweight and comfortable'
    ],
    inStock: true,
  },
  {
    id: '7',
    name: 'Succulent Plant Pot',
    price: 32.99,
    image: 'https://images.unsplash.com/photo-1540996925740-9d984974af69?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    category: 'Home',
    description: 'Modern ceramic planter with live succulent, adds natural beauty to any space.',
    details: [
      'Live succulent included',
      'Ceramic pot with drainage hole',
      'Low-maintenance care',
      'Modern minimalist design',
      'Includes care instructions',
      'Perfect for desk or shelf'
    ],
    inStock: true,
  },
  {
    id: '8',
    name: 'Digital Camera',
    price: 449.99,
    image: 'https://images.unsplash.com/photo-1632222623518-bbbd5f1f2489?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    category: 'Electronics',
    description: 'Mirrorless digital camera with 24MP sensor and 4K video recording capabilities.',
    details: [
      '24-megapixel APS-C sensor',
      '4K video recording at 30fps',
      'Built-in WiFi and Bluetooth',
      'Tilting touchscreen LCD',
      'Fast autofocus system',
      'Includes 16-50mm kit lens'
    ],
    inStock: false,
  },
];

export const categories = ['All', 'Electronics', 'Home', 'Outdoor', 'Stationery', 'Accessories'];
