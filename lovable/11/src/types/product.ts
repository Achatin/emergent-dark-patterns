export interface Product {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  price: number;
  originalPrice?: number;
  category: string;
  image: string;
  images: string[];
  rating: number;
  reviewCount: number;
  inStock: boolean;
  features: string[];
  materials?: string;
  dimensions?: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}
