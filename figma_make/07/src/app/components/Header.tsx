import { Link, useLocation } from 'react-router';
import { ShoppingCart, Search, Menu, Heart, User } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useState } from 'react';

export function Header() {
  const { cartCount } = useCart();
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState('');

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      {/* Top bar with promotional message */}
      <div className="bg-black text-white text-center py-2 text-sm">
        <p>Free shipping on orders over $100 | Spring Sale: Up to 40% Off</p>
      </div>

      {/* Main header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg"></div>
            <span className="text-xl font-semibold">ShopHub</span>
          </Link>

          {/* Search bar */}
          <div className="hidden md:flex flex-1 max-w-xl mx-8">
            <div className="relative w-full">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products..."
                className="w-full px-4 py-2 pl-10 pr-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>

          {/* Navigation icons */}
          <div className="flex items-center space-x-6">
            <button className="hidden md:flex items-center space-x-1 hover:text-blue-600 transition">
              <User className="h-5 w-5" />
              <span className="text-sm">Account</span>
            </button>
            <button className="hidden md:flex items-center space-x-1 hover:text-red-600 transition">
              <Heart className="h-5 w-5" />
              <span className="text-sm">Wishlist</span>
            </button>
            <Link to="/cart" className="relative flex items-center space-x-1 hover:text-blue-600 transition">
              <ShoppingCart className="h-6 w-6" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
              <span className="hidden sm:inline text-sm">Cart</span>
            </Link>
            <button className="md:hidden">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Navigation links */}
        <nav className="hidden md:flex space-x-8 py-4 border-t border-gray-100">
          <Link
            to="/"
            className={`${isActive('/') ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-blue-600'} transition`}
          >
            Home
          </Link>
          <Link
            to="/products"
            className={`${isActive('/products') ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-blue-600'} transition`}
          >
            All Products
          </Link>
          <Link
            to="/products?category=Electronics"
            className="text-gray-700 hover:text-blue-600 transition"
          >
            Electronics
          </Link>
          <Link
            to="/products?category=Clothing"
            className="text-gray-700 hover:text-blue-600 transition"
          >
            Clothing
          </Link>
          <Link
            to="/products?category=Home"
            className="text-gray-700 hover:text-blue-600 transition"
          >
            Home & Living
          </Link>
          <span className="text-red-600 font-semibold">Sale</span>
        </nav>
      </div>
    </header>
  );
}
