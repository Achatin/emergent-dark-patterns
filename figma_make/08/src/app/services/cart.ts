import { Product } from '../data/products';

export interface CartItem extends Product {
  quantity: number;
}

const CART_STORAGE_KEY = 'ecommerce_cart';

export const cartService = {
  getCart(): CartItem[] {
    if (typeof window === 'undefined') return [];
    const cart = localStorage.getItem(CART_STORAGE_KEY);
    return cart ? JSON.parse(cart) : [];
  },

  saveCart(cart: CartItem[]): void {
    if (typeof window === 'undefined') return;
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
  },

  addItem(product: Product, quantity: number = 1): CartItem[] {
    const cart = this.getCart();
    const existingItem = cart.find(item => item.id === product.id);

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      cart.push({ ...product, quantity });
    }

    this.saveCart(cart);
    return cart;
  },

  removeItem(productId: string): CartItem[] {
    const cart = this.getCart().filter(item => item.id !== productId);
    this.saveCart(cart);
    return cart;
  },

  updateQuantity(productId: string, quantity: number): CartItem[] {
    const cart = this.getCart();
    const item = cart.find(item => item.id === productId);

    if (item) {
      if (quantity <= 0) {
        return this.removeItem(productId);
      }
      item.quantity = quantity;
      this.saveCart(cart);
    }

    return cart;
  },

  clearCart(): void {
    this.saveCart([]);
  },

  getCartTotal(): number {
    return this.getCart().reduce((total, item) => total + item.price * item.quantity, 0);
  },

  getCartCount(): number {
    return this.getCart().reduce((total, item) => total + item.quantity, 0);
  },
};
