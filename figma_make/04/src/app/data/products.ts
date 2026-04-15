export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  rating: number;
  stock: number;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Wireless Headphones',
    description: 'Premium noise-cancelling wireless headphones with 30-hour battery life and superior sound quality.',
    price: 299.99,
    image: 'https://images.unsplash.com/photo-1695634463848-4db4e47703a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3aXJlbGVzcyUyMGhlYWRwaG9uZXN8ZW58MXx8fHwxNzc0OTAzNjM0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Electronics',
    rating: 4.5,
    stock: 25,
  },
  {
    id: '2',
    name: 'Luxury Watch',
    description: 'Elegant timepiece with Swiss movement, sapphire crystal, and water resistance up to 100m.',
    price: 899.99,
    image: 'https://images.unsplash.com/photo-1639564879163-a2a85682410e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB3YXRjaCUyMHRpbWVwaWVjZXxlbnwxfHx8fDE3NzQ4NjI5NTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Accessories',
    rating: 4.8,
    stock: 12,
  },
  {
    id: '3',
    name: 'Leather Backpack',
    description: 'Handcrafted genuine leather backpack with laptop compartment and multiple pockets.',
    price: 189.99,
    image: 'https://images.unsplash.com/photo-1549943872-f7ff0b2b51be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWF0aGVyJTIwYmFja3BhY2t8ZW58MXx8fHwxNzc0OTQ4NjEwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Bags',
    rating: 4.6,
    stock: 18,
  },
  {
    id: '4',
    name: 'Running Shoes',
    description: 'High-performance running shoes with responsive cushioning and breathable mesh upper.',
    price: 129.99,
    image: 'https://images.unsplash.com/photo-1695459468644-717c8ae17eed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxydW5uaW5nJTIwc2hvZXMlMjBzbmVha2Vyc3xlbnwxfHx8fDE3NzQ4NzkyOTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Footwear',
    rating: 4.4,
    stock: 30,
  },
  {
    id: '5',
    name: 'Designer Sunglasses',
    description: 'UV400 protection polarized sunglasses with lightweight frame and scratch-resistant lenses.',
    price: 149.99,
    image: 'https://images.unsplash.com/photo-1718967807816-414e2f9bc95a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdW5nbGFzc2VzJTIwZmFzaGlvbnxlbnwxfHx8fDE3NzQ4MzY3NjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Accessories',
    rating: 4.3,
    stock: 22,
  },
  {
    id: '6',
    name: 'Smartphone Pro',
    description: 'Latest flagship smartphone with 5G, triple camera system, and all-day battery life.',
    price: 999.99,
    image: 'https://images.unsplash.com/photo-1676173646307-d050e097d181?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydHBob25lJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NzQ4OTYxOTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Electronics',
    rating: 4.7,
    stock: 15,
  },
  {
    id: '7',
    name: 'Coffee Maker',
    description: 'Programmable drip coffee maker with thermal carafe and auto-brew function.',
    price: 79.99,
    image: 'https://images.unsplash.com/photo-1762924351870-45981369d87b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBtYWtlciUyMGFwcGxpYW5jZXxlbnwxfHx8fDE3NzQ5NTg5Mzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Home',
    rating: 4.2,
    stock: 40,
  },
  {
    id: '8',
    name: 'Modern Desk Lamp',
    description: 'LED desk lamp with adjustable brightness, color temperature control, and USB charging port.',
    price: 59.99,
    image: 'https://images.unsplash.com/photo-1766411503488-f90eef1124bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNrJTIwbGFtcCUyMG1vZGVybnxlbnwxfHx8fDE3NzQ5MTExMDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Home',
    rating: 4.5,
    stock: 35,
  },
  {
    id: '9',
    name: 'Ceramic Plant Pot',
    description: 'Handmade ceramic planter with drainage hole and saucer, perfect for indoor plants.',
    price: 34.99,
    image: 'https://images.unsplash.com/photo-1629380321590-3b3f75d66dec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcGxhbnQlMjBwb3R8ZW58MXx8fHwxNzc0ODc1ODg0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Home',
    rating: 4.6,
    stock: 50,
  },
  {
    id: '10',
    name: 'Premium Yoga Mat',
    description: 'Non-slip yoga mat with extra cushioning, eco-friendly material, and carrying strap.',
    price: 49.99,
    image: 'https://images.unsplash.com/photo-1746796751590-a8c0f15d4900?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b2dhJTIwbWF0JTIwZml0bmVzc3xlbnwxfHx8fDE3NzQ4NDQ4ODB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Fitness',
    rating: 4.4,
    stock: 28,
  },
  {
    id: '11',
    name: 'Leather Journal',
    description: 'Premium leather-bound notebook with 200 pages of thick, acid-free paper.',
    price: 44.99,
    image: 'https://images.unsplash.com/photo-1611473444663-dcd81eb16e66?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxub3RlYm9vayUyMGpvdXJuYWx8ZW58MXx8fHwxNzc0OTU4OTM5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Stationery',
    rating: 4.7,
    stock: 32,
  },
  {
    id: '12',
    name: 'Stainless Water Bottle',
    description: 'Insulated stainless steel water bottle keeps drinks cold for 24 hours or hot for 12 hours.',
    price: 29.99,
    image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXRlciUyMGJvdHRsZSUyMHN0YWlubGVzc3xlbnwxfHx8fDE3NzQ5NDM4NjJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Fitness',
    rating: 4.5,
    stock: 45,
  },
];

export const categories = [
  'All',
  'Electronics',
  'Accessories',
  'Bags',
  'Footwear',
  'Home',
  'Fitness',
  'Stationery',
];
