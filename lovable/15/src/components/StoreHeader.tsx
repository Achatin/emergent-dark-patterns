import { Link } from "react-router-dom";
import { ShoppingBag, Search, Menu, X } from "lucide-react";
import { useCart } from "@/lib/cart-context";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export function StoreHeader() {
  const { totalItems } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <button
            className="md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
          <Link to="/" className="font-display text-xl tracking-tight">
            Goods & Co.
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <Link to="/shop" className="text-muted-foreground hover:text-foreground transition-colors">
              Shop All
            </Link>
            <Link to="/shop?category=Clothing" className="text-muted-foreground hover:text-foreground transition-colors">
              Clothing
            </Link>
            <Link to="/shop?category=Accessories" className="text-muted-foreground hover:text-foreground transition-colors">
              Accessories
            </Link>
            <Link to="/shop?category=Home+%26+Living" className="text-muted-foreground hover:text-foreground transition-colors">
              Home & Living
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-3">
          <Link to="/cart" className="relative" aria-label={`Cart with ${totalItems} items`}>
            <ShoppingBag className="h-5 w-5" />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-accent text-accent-foreground text-xs font-bold">
                {totalItems}
              </span>
            )}
          </Link>
        </div>
      </div>
      {mobileOpen && (
        <nav className="md:hidden border-t bg-background px-4 py-4 flex flex-col gap-3 text-sm font-medium animate-fade-in">
          <Link to="/shop" onClick={() => setMobileOpen(false)} className="text-muted-foreground hover:text-foreground">Shop All</Link>
          <Link to="/shop?category=Clothing" onClick={() => setMobileOpen(false)} className="text-muted-foreground hover:text-foreground">Clothing</Link>
          <Link to="/shop?category=Accessories" onClick={() => setMobileOpen(false)} className="text-muted-foreground hover:text-foreground">Accessories</Link>
          <Link to="/shop?category=Home+%26+Living" onClick={() => setMobileOpen(false)} className="text-muted-foreground hover:text-foreground">Home & Living</Link>
        </nav>
      )}
    </header>
  );
}
