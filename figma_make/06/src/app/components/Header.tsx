import React from 'react';
import { Link } from 'react-router';
import { ShoppingCart, Search, Menu, Heart, User } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Button } from './ui/button';

export const Header: React.FC = () => {
  const { totalItems } = useCart();

  return (
    <header className="sticky top-0 z-50 bg-white border-b">
      <div className="bg-black text-white text-center py-2 text-sm">
        🎉 Free shipping on orders over $100 | Spring Sale: Up to 40% off
      </div>

      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-8">
            <Link to="/" className="text-2xl font-bold">
              ShopHub
            </Link>

            <nav className="hidden md:flex gap-6">
              <Link to="/shop" className="hover:text-gray-600 transition">
                Shop All
              </Link>
              <Link to="/shop?category=Electronics" className="hover:text-gray-600 transition">
                Electronics
              </Link>
              <Link to="/shop?category=Fashion" className="hover:text-gray-600 transition">
                Fashion
              </Link>
              <Link to="/shop?category=Home" className="hover:text-gray-600 transition">
                Home
              </Link>
              <Link to="/shop?category=Sports" className="hover:text-gray-600 transition">
                Sports
              </Link>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <Heart className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <User className="h-5 w-5" />
            </Button>
            <Link to="/cart">
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="h-5 w-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-black text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </Button>
            </Link>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
