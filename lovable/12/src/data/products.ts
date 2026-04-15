export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  description: string;
  details: string[];
  category: string;
  images: string[];
  badge?: 'sale' | 'new';
  rating: number;
  reviewCount: number;
  sizes?: string[];
  colors?: { name: string; hex: string }[];
  inStock: boolean;
}

export const categories = [
  { id: 'all', name: 'All' },
  { id: 'clothing', name: 'Clothing' },
  { id: 'accessories', name: 'Accessories' },
  { id: 'home', name: 'Home' },
  { id: 'essentials', name: 'Essentials' },
];

export const products: Product[] = [
  {
    id: '1',
    name: 'Merino Wool Overshirt',
    price: 148,
    originalPrice: 195,
    description: 'Crafted from premium Italian merino wool, this overshirt bridges the gap between casual and refined. Layer it over a tee or wear it buttoned as a lightweight jacket.',
    details: ['100% Italian merino wool', 'Relaxed fit', 'Two chest pockets', 'Made in Portugal', 'Machine wash cold'],
    category: 'clothing',
    images: ['https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=800&q=80'],
    badge: 'sale',
    rating: 4.8,
    reviewCount: 124,
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: [{ name: 'Charcoal', hex: '#36454F' }, { name: 'Camel', hex: '#C19A6B' }],
    inStock: true,
  },
  {
    id: '2',
    name: 'Organic Cotton Tee',
    price: 38,
    description: 'The perfect everyday tee. Made from 100% organic cotton with a lived-in softness from the first wear.',
    details: ['100% organic cotton', 'Regular fit', 'Crew neck', 'Pre-shrunk', 'Ethically made'],
    category: 'clothing',
    images: ['https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&q=80'],
    badge: 'new',
    rating: 4.6,
    reviewCount: 89,
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: [{ name: 'White', hex: '#FAFAFA' }, { name: 'Black', hex: '#1A1A1A' }, { name: 'Sage', hex: '#9CAF88' }],
    inStock: true,
  },
  {
    id: '3',
    name: 'Leather Weekender Bag',
    price: 285,
    description: 'Full-grain vegetable-tanned leather that develops a rich patina over time. Spacious enough for a weekend away.',
    details: ['Full-grain leather', 'Cotton canvas lining', 'Brass hardware', 'Detachable shoulder strap', 'Interior zip pocket'],
    category: 'accessories',
    images: ['https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80'],
    rating: 4.9,
    reviewCount: 67,
    colors: [{ name: 'Cognac', hex: '#9A4E2C' }, { name: 'Black', hex: '#1A1A1A' }],
    inStock: true,
  },
  {
    id: '4',
    name: 'Hand-thrown Ceramic Mug',
    price: 32,
    description: 'Each mug is individually hand-thrown by artisans in our partner studio. No two are exactly alike.',
    details: ['Stoneware clay', 'Food-safe glaze', 'Microwave safe', 'Dishwasher safe', '12oz capacity'],
    category: 'home',
    images: ['https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=800&q=80'],
    badge: 'new',
    rating: 4.7,
    reviewCount: 203,
    colors: [{ name: 'Speckled White', hex: '#F5F0E8' }, { name: 'Midnight', hex: '#2C3E50' }],
    inStock: true,
  },
  {
    id: '5',
    name: 'Cashmere Scarf',
    price: 120,
    originalPrice: 165,
    description: 'Woven from Grade A Mongolian cashmere, this scarf is impossibly soft and warm without the bulk.',
    details: ['100% Grade A cashmere', '180cm x 30cm', 'Hand-finished edges', 'Dry clean only'],
    category: 'accessories',
    images: ['https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?w=800&q=80'],
    badge: 'sale',
    rating: 4.9,
    reviewCount: 156,
    colors: [{ name: 'Oatmeal', hex: '#D4C5A9' }, { name: 'Charcoal', hex: '#36454F' }],
    inStock: true,
  },
  {
    id: '6',
    name: 'Soy Wax Candle Set',
    price: 45,
    description: 'Three hand-poured soy wax candles in complementary scents: cedar, bergamot, and white tea.',
    details: ['100% soy wax', 'Cotton wicks', '40-hour burn time each', 'Reusable glass vessels', 'Phthalate-free fragrance'],
    category: 'home',
    images: ['https://images.unsplash.com/photo-1602028915047-37269d1a73f7?w=800&q=80'],
    rating: 4.5,
    reviewCount: 312,
    inStock: true,
  },
  {
    id: '7',
    name: 'Linen Relaxed Trousers',
    price: 95,
    description: 'Garment-dyed European linen trousers with an easy, relaxed silhouette. Perfect for warm-weather days.',
    details: ['100% European linen', 'Relaxed fit', 'Elastic waistband with drawstring', 'Side pockets', 'Machine wash'],
    category: 'clothing',
    images: ['https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=800&q=80'],
    rating: 4.4,
    reviewCount: 78,
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: [{ name: 'Sand', hex: '#C2B280' }, { name: 'Navy', hex: '#1B2838' }],
    inStock: true,
  },
  {
    id: '8',
    name: 'Natural Bristle Body Brush',
    price: 24,
    description: 'Dry brushing stimulates circulation and exfoliates skin naturally. Made with sustainably sourced beechwood and sisal.',
    details: ['Beechwood handle', 'Natural sisal bristles', 'Detachable handle', 'Vegan friendly'],
    category: 'essentials',
    images: ['https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=800&q=80'],
    rating: 4.3,
    reviewCount: 91,
    inStock: true,
  },
];
