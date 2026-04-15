import { Link } from "react-router";
import { ShoppingCart, Menu, X, Search } from "lucide-react";
import { useCart } from "../context/CartContext";
import { useState } from "react";
import { Button } from "./ui/button";

export function Header() {
  const { getCartCount } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const cartCount = getCartCount();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-black text-white">
            <ShoppingCart className="h-5 w-5" />
          </div>
          <span className="text-xl font-bold">ShopHub</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-sm font-medium hover:text-gray-600 transition-colors">
            Home
          </Link>
          <Link to="/shop" className="text-sm font-medium hover:text-gray-600 transition-colors">
            Shop
          </Link>
          <Link to="/shop?category=Electronics" className="text-sm font-medium hover:text-gray-600 transition-colors">
            Electronics
          </Link>
          <Link to="/shop?category=Sports" className="text-sm font-medium hover:text-gray-600 transition-colors">
            Sports
          </Link>
          <Link to="/shop?category=Home" className="text-sm font-medium hover:text-gray-600 transition-colors">
            Home
          </Link>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="hidden md:flex">
            <Search className="h-5 w-5" />
          </Button>
          
          <Link to="/cart" className="relative">
            <Button variant="ghost" size="icon">
              <ShoppingCart className="h-5 w-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-black text-white text-xs">
                  {cartCount}
                </span>
              )}
            </Button>
          </Link>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="border-t bg-white md:hidden">
          <nav className="container mx-auto flex flex-col gap-4 p-4">
            <Link
              to="/"
              className="text-sm font-medium hover:text-gray-600 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/shop"
              className="text-sm font-medium hover:text-gray-600 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Shop
            </Link>
            <Link
              to="/shop?category=Electronics"
              className="text-sm font-medium hover:text-gray-600 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Electronics
            </Link>
            <Link
              to="/shop?category=Sports"
              className="text-sm font-medium hover:text-gray-600 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Sports
            </Link>
            <Link
              to="/shop?category=Home"
              className="text-sm font-medium hover:text-gray-600 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
