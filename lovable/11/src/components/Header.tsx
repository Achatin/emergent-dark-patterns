import { Link } from "react-router-dom";
import { ShoppingBag, Search, Menu, X } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useState } from "react";

export default function Header() {
  const { totalItems } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link to="/" className="font-display text-xl tracking-tight text-foreground">
          Goods&nbsp;<span className="text-primary">&</span>&nbsp;Co.
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link to="/products" className="text-muted-foreground hover:text-foreground transition-colors">
            Shop All
          </Link>
          <Link to="/products?category=Kitchen" className="text-muted-foreground hover:text-foreground transition-colors">
            Kitchen
          </Link>
          <Link to="/products?category=Home" className="text-muted-foreground hover:text-foreground transition-colors">
            Home
          </Link>
          <Link to="/products?category=Apparel" className="text-muted-foreground hover:text-foreground transition-colors">
            Apparel
          </Link>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <Link to="/products" className="text-muted-foreground hover:text-foreground transition-colors">
            <Search className="h-5 w-5" />
          </Link>
          <Link to="/cart" className="relative text-muted-foreground hover:text-foreground transition-colors">
            <ShoppingBag className="h-5 w-5" />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[11px] font-semibold text-primary-foreground">
                {totalItems}
              </span>
            )}
          </Link>
          <button
            className="md:hidden text-muted-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <nav className="md:hidden border-t bg-background px-6 py-4 flex flex-col gap-3 text-sm font-medium animate-fade-in">
          <Link to="/products" onClick={() => setMobileOpen(false)} className="text-foreground">Shop All</Link>
          <Link to="/products?category=Kitchen" onClick={() => setMobileOpen(false)} className="text-foreground">Kitchen</Link>
          <Link to="/products?category=Home" onClick={() => setMobileOpen(false)} className="text-foreground">Home</Link>
          <Link to="/products?category=Apparel" onClick={() => setMobileOpen(false)} className="text-foreground">Apparel</Link>
        </nav>
      )}
    </header>
  );
}
