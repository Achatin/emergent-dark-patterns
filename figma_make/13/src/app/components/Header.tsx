import { Link } from 'react-router';
import { ShoppingCart, Heart, User, Search, Menu } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useState } from 'react';

export function Header() {
  const { totalItems } = useCart();
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="bg-black text-white py-2 px-4 text-center text-sm">
        🎉 Free shipping on orders over $50 | 30-day money-back guarantee
      </div>

      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center text-white">
              S
            </div>
            <span className="text-xl font-semibold">ShopHub</span>
          </Link>

          <div className="flex-1 max-w-xl hidden md:flex">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
              />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors hidden md:flex">
              <Heart className="w-5 h-5" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors hidden md:flex">
              <User className="w-5 h-5" />
            </button>
            <Link
              to="/cart"
              className="relative p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <ShoppingCart className="w-5 h-5" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-black text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {totalItems}
                </span>
              )}
            </Link>
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors md:hidden">
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-6 mt-4 text-sm">
          <Link to="/products" className="hover:underline">
            All Products
          </Link>
          <Link to="/products?category=Electronics" className="hover:underline">
            Electronics
          </Link>
          <Link to="/products?category=Accessories" className="hover:underline">
            Accessories
          </Link>
          <Link to="/products?category=Home" className="hover:underline">
            Home
          </Link>
          <Link to="/products?category=Furniture" className="hover:underline">
            Furniture
          </Link>
          <Link to="/products?category=Lifestyle" className="hover:underline">
            Lifestyle
          </Link>
          <span className="text-red-600 font-medium">Sale 🔥</span>
        </nav>
      </div>
    </header>
  );
}
