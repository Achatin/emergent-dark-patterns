import { Link, Outlet, useLocation } from 'react-router';
import { ShoppingCart, Store } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { motion, AnimatePresence } from 'motion/react';

export function Layout() {
  const { cartCount } = useCart();
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center gap-2 group">
              <Store className="w-6 h-6" />
              <span className="font-semibold text-xl">MarketPlace</span>
            </Link>

            <div className="flex items-center gap-8">
              <Link
                to="/"
                className="relative hover:text-primary transition-colors"
              >
                Home
                {location.pathname === '/' && (
                  <motion.div
                    layoutId="underline"
                    className="absolute -bottom-[21px] left-0 right-0 h-0.5 bg-primary"
                  />
                )}
              </Link>
              <Link
                to="/shop"
                className="relative hover:text-primary transition-colors"
              >
                Shop
                {location.pathname === '/shop' && (
                  <motion.div
                    layoutId="underline"
                    className="absolute -bottom-[21px] left-0 right-0 h-0.5 bg-primary"
                  />
                )}
              </Link>
              <Link
                to="/cart"
                className="relative flex items-center gap-2 hover:text-primary transition-colors"
              >
                <ShoppingCart className="w-5 h-5" />
                <AnimatePresence mode="wait">
                  {cartCount > 0 && (
                    <motion.span
                      key={cartCount}
                      initial={{ scale: 0.5, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.5, opacity: 0 }}
                      className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs w-5 h-5 flex items-center justify-center rounded-full"
                    >
                      {cartCount}
                    </motion.span>
                  )}
                </AnimatePresence>
                {location.pathname === '/cart' && (
                  <motion.div
                    layoutId="underline"
                    className="absolute -bottom-[21px] left-0 right-0 h-0.5 bg-primary"
                  />
                )}
              </Link>
            </div>
          </div>
        </nav>
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="border-t border-border mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="mb-4">About MarketPlace</h3>
              <p className="text-muted-foreground text-sm">
                We believe in transparent pricing, honest product information, and respecting your privacy.
              </p>
            </div>
            <div>
              <h4 className="mb-4">Customer Service</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/shop" className="hover:text-foreground transition-colors">Shop</Link></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Shipping Information</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Returns & Exchanges</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Contact Us</a></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4">Privacy & Trust</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Data Protection</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Cookie Settings</a></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4">Trust Signals</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>✓ Secure Checkout (SSL)</li>
                <li>✓ No Hidden Fees</li>
                <li>✓ 30-Day Returns</li>
                <li>✓ Your Data Never Sold</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
            <p>© 2026 MarketPlace. All prices shown include all applicable taxes and fees.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
