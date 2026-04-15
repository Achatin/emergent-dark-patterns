import { useState, useEffect } from 'react';
import { Outlet } from 'react-router';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { cartService, CartItem } from '../services/cart';
import { Product } from '../data/products';
import { Toaster } from '../components/ui/sonner';
import { toast } from 'sonner';

export function RootLayout() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    // Load cart from localStorage on mount
    const savedCart = cartService.getCart();
    setCart(savedCart);
    setCartCount(cartService.getCartCount());
  }, []);

  const handleAddToCart = (product: Product, quantity: number = 1) => {
    const updatedCart = cartService.addItem(product, quantity);
    setCart(updatedCart);
    setCartCount(cartService.getCartCount());
    toast.success(`Added to cart!`);
  };

  const handleUpdateQuantity = (productId: string, quantity: number) => {
    const updatedCart = cartService.updateQuantity(productId, quantity);
    setCart(updatedCart);
    setCartCount(cartService.getCartCount());
  };

  const handleRemoveItem = (productId: string) => {
    const updatedCart = cartService.removeItem(productId);
    setCart(updatedCart);
    setCartCount(cartService.getCartCount());
    toast.success('Item removed from cart');
  };

  const handleClearCart = () => {
    cartService.clearCart();
    setCart([]);
    setCartCount(0);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header cartCount={cartCount} />
      <main className="flex-1">
        <Outlet
          context={{
            cart,
            onAddToCart: handleAddToCart,
            onUpdateQuantity: handleUpdateQuantity,
            onRemoveItem: handleRemoveItem,
            onClearCart: handleClearCart,
          }}
        />
      </main>
      <Footer />
      <Toaster position="bottom-right" />
    </div>
  );
}
