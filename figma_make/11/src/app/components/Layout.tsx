import { Outlet, Link, useLocation } from 'react-router';
import { ShoppingCart, Package, Lock, Truck, Shield } from 'lucide-react';
import { useCart } from '../context/CartContext';

export function Layout() {
  const { getTotalItems } = useCart();
  const location = useLocation();
  const cartCount = getTotalItems();

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b sticky top-0 bg-white z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center gap-2">
              <Package className="w-6 h-6" />
              <span className="font-semibold text-xl">ShopClear</span>
            </Link>

            <nav className="hidden md:flex items-center gap-8">
              <Link
                to="/"
                className={`transition-colors ${
                  isActive('/') && location.pathname === '/'
                    ? 'text-black'
                    : 'text-gray-600 hover:text-black'
                }`}
              >
                Home
              </Link>
              <Link
                to="/products"
                className={`transition-colors ${
                  isActive('/products')
                    ? 'text-black'
                    : 'text-gray-600 hover:text-black'
                }`}
              >
                Products
              </Link>
            </nav>

            <Link
              to="/cart"
              className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors relative"
            >
              <ShoppingCart className="w-5 h-5" />
              <span className="hidden sm:inline">Cart</span>
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-black text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="border-t mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 mb-2">
                <Lock className="w-5 h-5" />
                <h3 className="font-semibold">Secure Payment</h3>
              </div>
              <p className="text-sm text-gray-600">
                All transactions encrypted with industry-standard SSL
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 mb-2">
                <Truck className="w-5 h-5" />
                <h3 className="font-semibold">Free Shipping</h3>
              </div>
              <p className="text-sm text-gray-600">
                On orders over $50. Standard delivery 5-7 business days
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 mb-2">
                <Shield className="w-5 h-5" />
                <h3 className="font-semibold">30-Day Returns</h3>
              </div>
              <p className="text-sm text-gray-600">
                Full refund if not satisfied. No questions asked
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 mb-2">
                <Package className="w-5 h-5" />
                <h3 className="font-semibold">Quality Guarantee</h3>
              </div>
              <p className="text-sm text-gray-600">
                Authentic products with manufacturer warranty
              </p>
            </div>
          </div>

          <div className="border-t pt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-semibold mb-3">About ShopClear</h4>
              <p className="text-sm text-gray-600">
                We believe in transparent pricing, clear product information, and respecting your privacy.
                No hidden fees, no tracking, no spam.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-3">Customer Service</h4>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>Contact: support@shopclear.com</li>
                <li>Hours: Mon-Fri 9AM-6PM EST</li>
                <li>Response time: Within 24 hours</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-3">Privacy & Data</h4>
              <p className="text-sm text-gray-600">
                We do not sell your data. We use minimal analytics only to improve service.
                All personal information is encrypted and secure.
              </p>
            </div>
          </div>

          <div className="border-t mt-8 pt-8 text-center text-sm text-gray-600">
            <p>© 2026 ShopClear. All prices shown include applicable taxes.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
