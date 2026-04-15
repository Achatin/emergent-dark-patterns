import { Link } from 'react-router';
import { ShoppingCart, Search, Menu, Heart, User } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Badge } from './ui/badge';
import { useState } from 'react';

interface HeaderProps {
  cartCount: number;
  onSearchChange?: (query: string) => void;
}

export function Header({ cartCount, onSearchChange }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="size-8 rounded-full bg-gradient-to-r from-blue-600 to-purple-600" />
            <span className="text-xl font-bold">ShopHub</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-sm font-medium hover:text-blue-600 transition-colors">
              Home
            </Link>
            <Link to="/shop" className="text-sm font-medium hover:text-blue-600 transition-colors">
              Shop
            </Link>
            <Link to="/shop?category=new" className="text-sm font-medium hover:text-blue-600 transition-colors">
              New Arrivals
            </Link>
            <Link to="/shop?category=sale" className="text-sm font-medium hover:text-blue-600 transition-colors">
              Sale
            </Link>
          </nav>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-gray-400" />
              <Input
                type="search"
                placeholder="Search products..."
                className="pl-10 w-full"
                onChange={(e) => onSearchChange?.(e.target.value)}
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <Heart className="size-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <User className="size-5" />
            </Button>
            <Link to="/cart">
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="size-5" />
                {cartCount > 0 && (
                  <Badge className="absolute -top-1 -right-1 size-5 flex items-center justify-center p-0 text-xs">
                    {cartCount}
                  </Badge>
                )}
              </Button>
            </Link>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu className="size-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="mb-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-gray-400" />
                <Input
                  type="search"
                  placeholder="Search products..."
                  className="pl-10 w-full"
                  onChange={(e) => onSearchChange?.(e.target.value)}
                />
              </div>
            </div>
            <nav className="flex flex-col space-y-3">
              <Link to="/" className="text-sm font-medium hover:text-blue-600 transition-colors">
                Home
              </Link>
              <Link to="/shop" className="text-sm font-medium hover:text-blue-600 transition-colors">
                Shop
              </Link>
              <Link to="/shop?category=new" className="text-sm font-medium hover:text-blue-600 transition-colors">
                New Arrivals
              </Link>
              <Link to="/shop?category=sale" className="text-sm font-medium hover:text-blue-600 transition-colors">
                Sale
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
