import { Link } from "react-router-dom";
import { ShoppingBag, Menu, X } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useState } from "react";

const SiteHeader = () => {
  const { totalItems } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="font-display text-xl tracking-tight text-foreground">
          Maison
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link to="/shop" className="text-muted-foreground hover:text-foreground transition-colors">
            Shop
          </Link>
          <Link to="/shop?category=Bags" className="text-muted-foreground hover:text-foreground transition-colors">
            Bags
          </Link>
          <Link to="/shop?category=Accessories" className="text-muted-foreground hover:text-foreground transition-colors">
            Accessories
          </Link>
          <Link to="/shop?category=Home" className="text-muted-foreground hover:text-foreground transition-colors">
            Home
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link to="/cart" className="relative text-foreground hover:text-accent transition-colors">
            <ShoppingBag className="h-5 w-5" />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-accent text-[10px] font-semibold text-accent-foreground">
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
        <nav className="md:hidden border-t border-border bg-background px-6 py-4 flex flex-col gap-3 text-sm font-medium animate-fade-in">
          <Link to="/shop" onClick={() => setMobileOpen(false)} className="text-muted-foreground hover:text-foreground">
            Shop All
          </Link>
          <Link to="/shop?category=Bags" onClick={() => setMobileOpen(false)} className="text-muted-foreground hover:text-foreground">
            Bags
          </Link>
          <Link to="/shop?category=Accessories" onClick={() => setMobileOpen(false)} className="text-muted-foreground hover:text-foreground">
            Accessories
          </Link>
          <Link to="/shop?category=Home" onClick={() => setMobileOpen(false)} className="text-muted-foreground hover:text-foreground">
            Home
          </Link>
        </nav>
      )}
    </header>
  );
};

export default SiteHeader;
