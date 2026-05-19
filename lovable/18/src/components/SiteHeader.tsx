import { Link } from "react-router-dom";
import { ShoppingBag, Search, Menu, X } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useState } from "react";

const SiteHeader = () => {
  const { totalItems } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <button
            className="md:hidden p-2 -ml-2 text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
          <Link to="/" className="font-display text-xl tracking-tight text-foreground">
            Goodwares
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <Link to="/products" className="text-muted-foreground hover:text-foreground transition-colors">
              Shop All
            </Link>
            <Link to="/products?category=Home+%26+Living" className="text-muted-foreground hover:text-foreground transition-colors">
              Home & Living
            </Link>
            <Link to="/products?category=Kitchen" className="text-muted-foreground hover:text-foreground transition-colors">
              Kitchen
            </Link>
            <Link to="/products?category=Clothing" className="text-muted-foreground hover:text-foreground transition-colors">
              Clothing
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <Link to="/products" className="p-2 text-muted-foreground hover:text-foreground transition-colors" aria-label="Search products">
            <Search className="h-5 w-5" />
          </Link>
          <Link to="/cart" className="relative p-2 text-muted-foreground hover:text-foreground transition-colors" aria-label={`Shopping cart with ${totalItems} items`}>
            <ShoppingBag className="h-5 w-5" />
            {totalItems > 0 && (
              <span className="absolute -top-0.5 -right-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
                {totalItems}
              </span>
            )}
          </Link>
        </div>
      </div>
      {mobileOpen && (
        <nav className="md:hidden border-t bg-background px-4 py-4 space-y-3">
          <Link to="/products" className="block text-sm font-medium text-foreground" onClick={() => setMobileOpen(false)}>Shop All</Link>
          <Link to="/products?category=Home+%26+Living" className="block text-sm text-muted-foreground" onClick={() => setMobileOpen(false)}>Home & Living</Link>
          <Link to="/products?category=Kitchen" className="block text-sm text-muted-foreground" onClick={() => setMobileOpen(false)}>Kitchen</Link>
          <Link to="/products?category=Clothing" className="block text-sm text-muted-foreground" onClick={() => setMobileOpen(false)}>Clothing</Link>
          <Link to="/products?category=Accessories" className="block text-sm text-muted-foreground" onClick={() => setMobileOpen(false)}>Accessories</Link>
        </nav>
      )}
    </header>
  );
};

export default SiteHeader;
