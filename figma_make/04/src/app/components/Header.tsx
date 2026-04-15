import { Link, useLocation } from 'react-router';
import { ShoppingCart, Menu, Store } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import { Button } from './ui/button';
import { useState } from 'react';

export function Header() {
  const { totalItems } = useCart();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-white border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <Store className="w-6 h-6" />
            <span className="text-xl font-semibold">ShopHub</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link
              to="/"
              className={`transition-colors ${
                isActive('/') ? 'text-black' : 'text-gray-600 hover:text-black'
              }`}
            >
              Home
            </Link>
            <Link
              to="/shop"
              className={`transition-colors ${
                isActive('/shop') ? 'text-black' : 'text-gray-600 hover:text-black'
              }`}
            >
              Shop
            </Link>
          </nav>

          {/* Cart Button */}
          <div className="flex items-center gap-4">
            <Link to="/cart">
              <Button variant="ghost" className="relative">
                <ShoppingCart className="w-5 h-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-black text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </Button>
            </Link>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t">
            <div className="flex flex-col gap-4">
              <Link
                to="/"
                className={`transition-colors ${
                  isActive('/') ? 'text-black' : 'text-gray-600'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/shop"
                className={`transition-colors ${
                  isActive('/shop') ? 'text-black' : 'text-gray-600'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Shop
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
