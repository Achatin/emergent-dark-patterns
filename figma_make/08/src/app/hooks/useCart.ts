import { useOutletContext } from 'react-router';
import { CartItem } from '../services/cart';
import { Product } from '../data/products';

interface OutletContext {
  cart: CartItem[];
  onAddToCart: (product: Product, quantity?: number) => void;
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
  onClearCart: () => void;
}

export function useCart() {
  return useOutletContext<OutletContext>();
}
