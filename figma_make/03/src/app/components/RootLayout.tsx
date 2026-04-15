import { Outlet, Link, useLocation } from 'react-router';
import { ShoppingCart, Home, Store, Shield, Lock, Info } from 'lucide-react';
import { useCart } from '../context/CartContext';

export function RootLayout() {
  const { getTotalItems } = useCart();
  const location = useLocation();
  const cartItemCount = getTotalItems();

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-8">
              <Link to="/" className="flex items-center gap-2">
                <Store className="w-8 h-8 text-blue-600" />
                <span className="font-bold text-xl text-gray-900">ShopSmart</span>
              </Link>

              <nav className="hidden md:flex gap-6">
                <Link
                  to="/"
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-md transition-colors ${
                    location.pathname === '/'
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                >
                  <Home className="w-4 h-4" />
                  Home
                </Link>
                <Link
                  to="/shop"
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-md transition-colors ${
                    location.pathname === '/shop'
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                >
                  <Store className="w-4 h-4" />
                  Shop
                </Link>
              </nav>
            </div>

            <Link
              to="/cart"
              className="relative flex items-center gap-2 px-4 py-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors"
            >
              <ShoppingCart className="w-5 h-5" />
              <span className="hidden sm:inline">Cart</span>
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-medium">
                  {cartItemCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="bg-gray-50 border-t border-gray-200 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Store className="w-6 h-6 text-blue-600" />
                <span className="font-bold text-lg">ShopSmart</span>
              </div>
              <p className="text-sm text-gray-600">
                Your trusted online marketplace for quality products at fair prices.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Customer Service</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>Contact Us</li>
                <li>Shipping Information</li>
                <li>Returns & Exchanges</li>
                <li>FAQ</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Our Guarantees</h3>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <Shield className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>30-day money-back guarantee on all products</span>
                </li>
                <li className="flex items-start gap-2">
                  <Lock className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>Secure checkout with encryption</span>
                </li>
                <li className="flex items-start gap-2">
                  <Info className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>Transparent pricing with no hidden fees</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Legal</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
                <li>Cookie Policy</li>
                <li>Accessibility</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-200 text-center text-sm text-gray-500">
            <p>&copy; 2026 ShopSmart. All rights reserved. We respect your privacy and never sell your data.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
