import { Outlet, Link, useLocation } from "react-router";
import { ShoppingCart } from "lucide-react";
import { useCart } from "../context/CartContext";
import { motion } from "motion/react";

export function RootLayout() {
  const { items } = useCart();
  const location = useLocation();
  const cartCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <header className="sticky top-0 z-50 bg-white border-b border-neutral-200">
        <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/" className="text-2xl tracking-tight">
            ESSENTIALS
          </Link>

          <div className="flex items-center gap-8">
            <Link
              to="/"
              className={`text-sm transition-colors ${
                location.pathname === "/" ? "text-neutral-900" : "text-neutral-500 hover:text-neutral-900"
              }`}
            >
              Home
            </Link>
            <Link
              to="/shop"
              className={`text-sm transition-colors ${
                location.pathname === "/shop" ? "text-neutral-900" : "text-neutral-500 hover:text-neutral-900"
              }`}
            >
              Shop
            </Link>
            <Link to="/cart" className="relative">
              <ShoppingCart className="w-5 h-5 text-neutral-900" />
              {cartCount > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-2 -right-2 bg-neutral-900 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center"
                >
                  {cartCount}
                </motion.span>
              )}
            </Link>
          </div>
        </nav>
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="bg-neutral-50 border-t border-neutral-200 mt-24">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div>
              <h3 className="text-sm mb-4">About</h3>
              <p className="text-sm text-neutral-600">
                High-quality essentials for modern living. Ethically sourced, transparently priced.
              </p>
            </div>

            <div>
              <h3 className="text-sm mb-4">Customer Service</h3>
              <ul className="space-y-2 text-sm text-neutral-600">
                <li><a href="#" className="hover:text-neutral-900">Contact Us</a></li>
                <li><a href="#" className="hover:text-neutral-900">Shipping Information</a></li>
                <li><a href="#" className="hover:text-neutral-900">Returns & Exchanges</a></li>
                <li><a href="#" className="hover:text-neutral-900">Track Order</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm mb-4">Trust & Privacy</h3>
              <ul className="space-y-2 text-sm text-neutral-600">
                <li><a href="#" className="hover:text-neutral-900">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-neutral-900">Terms of Service</a></li>
                <li><a href="#" className="hover:text-neutral-900">Security</a></li>
                <li><a href="#" className="hover:text-neutral-900">Cookie Settings</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm mb-4">Our Promise</h3>
              <ul className="space-y-2 text-sm text-neutral-600">
                <li>✓ No hidden fees</li>
                <li>✓ Transparent pricing</li>
                <li>✓ 30-day returns</li>
                <li>✓ Secure checkout</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-neutral-200 text-sm text-neutral-500">
            © 2026 Essentials. All rights reserved. • We respect your privacy and never sell your data.
          </div>
        </div>
      </footer>
    </div>
  );
}
