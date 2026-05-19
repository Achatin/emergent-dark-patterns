import { Link, Outlet } from 'react-router';
import { ShoppingCart, Search, Menu, User, Heart, X } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useState } from 'react';
import { categories } from '../data/products';

export default function Layout() {
  const { cartCount } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Announcement Bar */}
      <div className="bg-black text-white text-center py-2 text-sm">
        🎉 Free Shipping on Orders Over $75 | Spring Sale - Up to 40% Off!
      </div>

      {/* Header */}
      <header className="sticky top-0 bg-white border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <span className="text-xl font-bold">ShopHub</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link to="/shop" className="hover:text-gray-600 transition-colors">
                Shop All
              </Link>
              <Link to="/shop/electronics" className="hover:text-gray-600 transition-colors">
                Electronics
              </Link>
              <Link to="/shop/clothing" className="hover:text-gray-600 transition-colors">
                Clothing
              </Link>
              <Link to="/shop/accessories" className="hover:text-gray-600 transition-colors">
                Accessories
              </Link>
            </nav>

            {/* Right Actions */}
            <div className="flex items-center space-x-4">
              <button className="hidden sm:block hover:text-gray-600 transition-colors">
                <Search className="w-5 h-5" />
              </button>
              <button className="hidden sm:block hover:text-gray-600 transition-colors">
                <Heart className="w-5 h-5" />
              </button>
              <button className="hidden sm:block hover:text-gray-600 transition-colors">
                <User className="w-5 h-5" />
              </button>
              <Link to="/cart" className="relative hover:text-gray-600 transition-colors">
                <ShoppingCart className="w-5 h-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </Link>
              <button
                className="md:hidden hover:text-gray-600 transition-colors"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200">
              <nav className="flex flex-col space-y-4">
                <Link
                  to="/shop"
                  className="hover:text-gray-600 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Shop All
                </Link>
                {categories.slice(1).map((category) => (
                  <Link
                    key={category.id}
                    to={`/shop/${category.id}`}
                    className="hover:text-gray-600 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {category.name}
                  </Link>
                ))}
                <div className="pt-4 border-t border-gray-200 flex space-x-4">
                  <button className="hover:text-gray-600 transition-colors">
                    <Search className="w-5 h-5" />
                  </button>
                  <button className="hover:text-gray-600 transition-colors">
                    <Heart className="w-5 h-5" />
                  </button>
                  <button className="hover:text-gray-600 transition-colors">
                    <User className="w-5 h-5" />
                  </button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <h3 className="font-bold text-lg mb-4">ShopHub</h3>
              <p className="text-gray-600 text-sm mb-4">
                Your one-stop shop for quality products at amazing prices.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-600 hover:text-black transition-colors">
                  Facebook
                </a>
                <a href="#" className="text-gray-600 hover:text-black transition-colors">
                  Twitter
                </a>
                <a href="#" className="text-gray-600 hover:text-black transition-colors">
                  Instagram
                </a>
              </div>
            </div>

            {/* Shop */}
            <div>
              <h4 className="font-semibold mb-4">Shop</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="/shop" className="text-gray-600 hover:text-black transition-colors">
                    All Products
                  </Link>
                </li>
                <li>
                  <Link to="/shop/electronics" className="text-gray-600 hover:text-black transition-colors">
                    Electronics
                  </Link>
                </li>
                <li>
                  <Link to="/shop/clothing" className="text-gray-600 hover:text-black transition-colors">
                    Clothing
                  </Link>
                </li>
                <li>
                  <Link to="/shop/accessories" className="text-gray-600 hover:text-black transition-colors">
                    Accessories
                  </Link>
                </li>
              </ul>
            </div>

            {/* Customer Service */}
            <div>
              <h4 className="font-semibold mb-4">Customer Service</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="text-gray-600 hover:text-black transition-colors">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-black transition-colors">
                    Shipping Info
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-black transition-colors">
                    Returns
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-black transition-colors">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="font-semibold mb-4">Stay Connected</h4>
              <p className="text-gray-600 text-sm mb-4">
                Subscribe for exclusive deals and updates!
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-black"
                />
                <button className="bg-black text-white px-4 py-2 rounded-r-lg hover:bg-gray-800 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
            <p>&copy; 2026 ShopHub. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-black transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-black transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="border-t border-gray-200 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm text-gray-600">
              <div className="flex flex-col items-center">
                <span className="text-2xl mb-2">🚚</span>
                <span>Free Shipping</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-2xl mb-2">🔒</span>
                <span>Secure Payment</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-2xl mb-2">↩️</span>
                <span>Easy Returns</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-2xl mb-2">💬</span>
                <span>24/7 Support</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
