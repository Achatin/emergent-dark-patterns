import { Link } from 'react-router-dom';
import { ShoppingBag, Search, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { useState } from 'react';

const Header = () => {
  const { itemCount } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      {/* Announcement bar */}
      <div className="bg-primary text-primary-foreground text-center py-2 text-xs font-body tracking-widest uppercase">
        Free shipping on orders over $100 · Easy 30-day returns
      </div>

      <div className="container flex items-center justify-between h-16">
        {/* Mobile menu toggle */}
        <button className="lg:hidden p-2" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

        {/* Nav links - desktop */}
        <nav className="hidden lg:flex items-center gap-8 font-body text-sm tracking-wide">
          <Link to="/products" className="text-foreground/70 hover:text-foreground transition-colors">Shop All</Link>
          <Link to="/products?category=clothing" className="text-foreground/70 hover:text-foreground transition-colors">Clothing</Link>
          <Link to="/products?category=accessories" className="text-foreground/70 hover:text-foreground transition-colors">Accessories</Link>
          <Link to="/products?category=home" className="text-foreground/70 hover:text-foreground transition-colors">Home</Link>
        </nav>

        {/* Logo */}
        <Link to="/" className="font-display text-2xl tracking-wider absolute left-1/2 -translate-x-1/2">
          MAISON
        </Link>

        {/* Right icons */}
        <div className="flex items-center gap-4">
          <Link to="/products" className="text-foreground/70 hover:text-foreground transition-colors">
            <Search className="w-5 h-5" />
          </Link>
          <Link to="/cart" className="relative text-foreground/70 hover:text-foreground transition-colors">
            <ShoppingBag className="w-5 h-5" />
            {itemCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-accent text-accent-foreground text-[10px] font-body font-semibold rounded-full w-4 h-4 flex items-center justify-center">
                {itemCount}
              </span>
            )}
          </Link>
        </div>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <nav className="lg:hidden border-t border-border bg-background py-4 px-6 space-y-4 font-body text-sm animate-fade-in-up">
          <Link to="/products" onClick={() => setMobileOpen(false)} className="block text-foreground/70">Shop All</Link>
          <Link to="/products?category=clothing" onClick={() => setMobileOpen(false)} className="block text-foreground/70">Clothing</Link>
          <Link to="/products?category=accessories" onClick={() => setMobileOpen(false)} className="block text-foreground/70">Accessories</Link>
          <Link to="/products?category=home" onClick={() => setMobileOpen(false)} className="block text-foreground/70">Home</Link>
        </nav>
      )}
    </header>
  );
};

export default Header;
