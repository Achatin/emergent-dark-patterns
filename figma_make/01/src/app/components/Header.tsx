import { Link } from 'react-router';
import { useCart } from '../context/CartContext';
import { ShoppingCart, Search, Menu, User } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Input } from '../components/ui/input';

export function Header() {
  const { getItemCount } = useCart();
  const itemCount = getItemCount();

  return (
    <header className="sticky top-0 z-50 bg-white border-b">
      {/* Top Banner - Creates urgency */}
      <div className="bg-black text-white text-center py-2 px-4">
        <p className="text-sm">
          🎉 Free shipping on orders over $100 | Limited time offer!
        </p>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/">
            <h1 className="text-2xl tracking-tight">ShopHub</h1>
          </Link>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                type="search"
                placeholder="Search products..."
                className="pl-10 w-full"
              />
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="hidden md:inline-flex">
              <User className="w-5 h-5" />
            </Button>

            <Link to="/cart">
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="w-5 h-5" />
                {itemCount > 0 && (
                  <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs">
                    {itemCount}
                  </Badge>
                )}
              </Button>
            </Link>

            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="w-5 h-5" />
            </Button>
          </nav>
        </div>

        {/* Main Navigation */}
        <nav className="hidden md:flex items-center gap-6 pb-4">
          <Link to="/products">
            <Button variant="ghost">All Products</Button>
          </Link>
          <Link to="/products?category=Electronics">
            <Button variant="ghost">Electronics</Button>
          </Link>
          <Link to="/products?category=Fashion">
            <Button variant="ghost">Fashion</Button>
          </Link>
          <Link to="/products?category=Sports">
            <Button variant="ghost">Sports</Button>
          </Link>
          <Link to="/products?category=Home">
            <Button variant="ghost">Home</Button>
          </Link>
        </nav>
      </div>
    </header>
  );
}
