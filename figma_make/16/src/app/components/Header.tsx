import { Link } from 'react-router';
import { ShoppingCart, Search, Menu, Store } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Button } from './ui/button';

export function Header() {
  const { totalItems } = useCart();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <Store className="h-8 w-8" />
            <span className="text-xl">ShopHub</span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className="transition-colors hover:text-gray-600">
              Home
            </Link>
            <Link to="/products" className="transition-colors hover:text-gray-600">
              Products
            </Link>
            <Link to="/products?category=Electronics" className="transition-colors hover:text-gray-600">
              Electronics
            </Link>
            <Link to="/products?category=Accessories" className="transition-colors hover:text-gray-600">
              Accessories
            </Link>
          </nav>

          {/* Right side actions */}
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <Search className="h-5 w-5" />
            </Button>
            
            <Link to="/cart">
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="h-5 w-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-black text-white text-xs flex items-center justify-center">
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
}
