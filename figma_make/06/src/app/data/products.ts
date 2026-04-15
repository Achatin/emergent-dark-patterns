import { Product, Review } from '../types/product';

export const products: Product[] = [
  {
    id: '1',
    name: 'Premium Wireless Headphones',
    price: 299,
    originalPrice: 399,
    description: 'Experience crystal-clear audio with our premium wireless headphones. Features active noise cancellation, 30-hour battery life, and premium comfort cushions.',
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&h=800&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?w=800&h=800&fit=crop'
    ],
    rating: 4.8,
    reviews: 1247,
    inStock: true,
    badge: 'bestseller',
    features: [
      'Active Noise Cancellation',
      '30-hour battery life',
      'Premium comfort cushions',
      'Bluetooth 5.0',
      'Built-in microphone'
    ]
  },
  {
    id: '2',
    name: 'Smart Watch Pro',
    price: 399,
    description: 'Track your fitness, stay connected, and monitor your health with the latest smart watch technology. Water-resistant and stylish design.',
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&h=800&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=800&h=800&fit=crop'
    ],
    rating: 4.6,
    reviews: 892,
    inStock: true,
    badge: 'new',
    features: [
      'Heart rate monitoring',
      'GPS tracking',
      'Water-resistant (50m)',
      '7-day battery life',
      'Sleep tracking'
    ]
  },
  {
    id: '3',
    name: 'Leather Messenger Bag',
    price: 179,
    originalPrice: 249,
    description: 'Handcrafted genuine leather messenger bag perfect for work or travel. Multiple compartments and adjustable strap.',
    category: 'Fashion',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&h=800&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&h=800&fit=crop'
    ],
    rating: 4.9,
    reviews: 534,
    inStock: true,
    badge: 'sale',
    features: [
      'Genuine leather',
      'Laptop compartment (15")',
      'Adjustable strap',
      'Multiple pockets',
      'YKK zippers'
    ]
  },
  {
    id: '4',
    name: 'Minimalist Desk Lamp',
    price: 89,
    description: 'Modern LED desk lamp with adjustable brightness and color temperature. Perfect for your workspace or study.',
    category: 'Home',
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800&h=800&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800&h=800&fit=crop'
    ],
    rating: 4.7,
    reviews: 423,
    inStock: true,
    features: [
      'LED technology',
      'Adjustable brightness',
      'Color temperature control',
      'USB charging port',
      'Touch controls'
    ]
  },
  {
    id: '5',
    name: 'Ceramic Coffee Mug Set',
    price: 49,
    description: 'Artisan-crafted ceramic mugs in a set of 4. Perfect for your morning coffee or evening tea.',
    category: 'Home',
    image: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=800&h=800&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=800&h=800&fit=crop'
    ],
    rating: 4.5,
    reviews: 267,
    inStock: true,
    features: [
      'Set of 4 mugs',
      'Dishwasher safe',
      'Microwave safe',
      'Handcrafted ceramic',
      '12 oz capacity'
    ]
  },
  {
    id: '6',
    name: 'Running Shoes Elite',
    price: 149,
    description: 'Professional-grade running shoes with advanced cushioning and breathable mesh. Designed for performance.',
    category: 'Sports',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&h=800&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&h=800&fit=crop'
    ],
    rating: 4.8,
    reviews: 1089,
    inStock: true,
    badge: 'bestseller',
    features: [
      'Responsive cushioning',
      'Breathable mesh',
      'Lightweight design',
      'Durable outsole',
      'Arch support'
    ]
  },
  {
    id: '7',
    name: 'Yoga Mat Premium',
    price: 59,
    description: 'Non-slip yoga mat with extra thickness for comfort. Includes carrying strap.',
    category: 'Sports',
    image: 'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=800&h=800&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=800&h=800&fit=crop'
    ],
    rating: 4.6,
    reviews: 445,
    inStock: true,
    features: [
      'Extra thick (6mm)',
      'Non-slip surface',
      'Eco-friendly material',
      'Carrying strap included',
      'Easy to clean'
    ]
  },
  {
    id: '8',
    name: 'Portable Bluetooth Speaker',
    price: 129,
    originalPrice: 179,
    description: 'Waterproof portable speaker with 360° sound and 24-hour battery life. Perfect for outdoor adventures.',
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=800&h=800&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=800&h=800&fit=crop'
    ],
    rating: 4.7,
    reviews: 678,
    inStock: true,
    badge: 'sale',
    features: [
      'Waterproof (IP67)',
      '360° sound',
      '24-hour battery',
      'Bluetooth 5.0',
      'Built-in microphone'
    ]
  },
  {
    id: '9',
    name: 'Sunglasses Classic',
    price: 159,
    description: 'UV400 protection polarized sunglasses with timeless design. Comes with protective case.',
    category: 'Fashion',
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800&h=800&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800&h=800&fit=crop'
    ],
    rating: 4.5,
    reviews: 312,
    inStock: true,
    features: [
      'UV400 protection',
      'Polarized lenses',
      'Durable frame',
      'Protective case included',
      'Anti-scratch coating'
    ]
  },
  {
    id: '10',
    name: 'Mechanical Keyboard RGB',
    price: 189,
    description: 'Professional mechanical keyboard with customizable RGB lighting and tactile switches. Perfect for gaming and typing.',
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1595225476474-87563907a212?w=800&h=800&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1595225476474-87563907a212?w=800&h=800&fit=crop'
    ],
    rating: 4.9,
    reviews: 923,
    inStock: true,
    badge: 'bestseller',
    features: [
      'Mechanical switches',
      'RGB backlighting',
      'Programmable keys',
      'Aluminum frame',
      'USB-C connection'
    ]
  },
  {
    id: '11',
    name: 'Canvas Backpack',
    price: 79,
    description: 'Durable canvas backpack with laptop compartment and multiple pockets. Vintage-inspired design.',
    category: 'Fashion',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&h=800&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&h=800&fit=crop'
    ],
    rating: 4.4,
    reviews: 289,
    inStock: true,
    features: [
      'Canvas material',
      'Laptop sleeve (15")',
      'Water-resistant',
      'Padded straps',
      'Multiple compartments'
    ]
  },
  {
    id: '12',
    name: 'Aromatherapy Diffuser',
    price: 45,
    description: 'Ultrasonic essential oil diffuser with LED lighting. Creates a relaxing atmosphere in any room.',
    category: 'Home',
    image: 'https://images.unsplash.com/photo-1604948501466-4e9c339b9c24?w=800&h=800&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1604948501466-4e9c339b9c24?w=800&h=800&fit=crop'
    ],
    rating: 4.6,
    reviews: 567,
    inStock: true,
    badge: 'new',
    features: [
      'Ultrasonic technology',
      'LED color changing',
      'Auto shut-off',
      '300ml capacity',
      'Whisper-quiet operation'
    ]
  }
];

export const reviews: Review[] = [
  {
    id: 'r1',
    productId: '1',
    author: 'Sarah M.',
    rating: 5,
    comment: 'Best headphones I\'ve ever owned! The noise cancellation is incredible and they\'re so comfortable.',
    date: '2026-03-15',
    verified: true
  },
  {
    id: 'r2',
    productId: '1',
    author: 'Mike T.',
    rating: 5,
    comment: 'Worth every penny. Great sound quality and battery life is exactly as advertised.',
    date: '2026-03-20',
    verified: true
  },
  {
    id: 'r3',
    productId: '1',
    author: 'Jennifer L.',
    rating: 4,
    comment: 'Excellent headphones, only minor complaint is they can get warm after long use.',
    date: '2026-03-22',
    verified: true
  },
  {
    id: 'r4',
    productId: '2',
    author: 'David K.',
    rating: 5,
    comment: 'This watch has transformed my fitness routine. Love all the tracking features!',
    date: '2026-03-18',
    verified: true
  },
  {
    id: 'r5',
    productId: '2',
    author: 'Emma R.',
    rating: 4,
    comment: 'Great smartwatch with lots of features. Battery life is good but not amazing.',
    date: '2026-03-25',
    verified: true
  },
  {
    id: 'r6',
    productId: '3',
    author: 'Robert P.',
    rating: 5,
    comment: 'Beautiful craftsmanship! The leather quality is outstanding and it looks even better in person.',
    date: '2026-03-10',
    verified: true
  }
];
