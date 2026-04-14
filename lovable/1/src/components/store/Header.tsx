import { Link } from "react-router-dom";
import { ShoppingBag, Menu, X } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useState } from "react";

const Header = () => {
  const { totalItems } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container flex items-center justify-between h-16">
        <Link to="/" className="font-heading text-2xl tracking-tight text-foreground">
          Maison
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Home
          </Link>
          <Link to="/shop" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Shop
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link to="/cart" className="relative group">
            <ShoppingBag className="h-5 w-5 text-foreground group-hover:text-primary transition-colors" />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-[10px] font-bold rounded-full h-4 w-4 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Link>
          <button
            className="md:hidden text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-background animate-fade-in">
          <nav className="container py-4 flex flex-col gap-3">
            <Link to="/" onClick={() => setMobileOpen(false)} className="text-sm font-medium text-foreground py-2">Home</Link>
            <Link to="/shop" onClick={() => setMobileOpen(false)} className="text-sm font-medium text-foreground py-2">Shop</Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
