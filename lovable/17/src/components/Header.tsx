import { Link } from "react-router-dom";
import { ShoppingBag, Search, Menu, X } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useState } from "react";

const Header = () => {
  const { totalItems } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b">
      <div className="container flex items-center justify-between h-16">
        <Link to="/" className="font-heading text-2xl tracking-tight">
          Goodfolk
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link to="/shop" className="text-muted-foreground hover:text-foreground transition-colors">Shop All</Link>
          <Link to="/shop?category=Kitchen" className="text-muted-foreground hover:text-foreground transition-colors">Kitchen</Link>
          <Link to="/shop?category=Home" className="text-muted-foreground hover:text-foreground transition-colors">Home</Link>
          <Link to="/shop?category=Accessories" className="text-muted-foreground hover:text-foreground transition-colors">Accessories</Link>
        </nav>

        <div className="flex items-center gap-3">
          <Link to="/cart" className="relative p-2 hover:bg-secondary rounded-md transition-colors" aria-label="Shopping cart">
            <ShoppingBag className="h-5 w-5" />
            {totalItems > 0 && (
              <span className="absolute -top-0.5 -right-0.5 bg-accent text-accent-foreground text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Link>
          <button
            className="md:hidden p-2 hover:bg-secondary rounded-md transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav className="md:hidden border-t bg-background px-6 py-4 flex flex-col gap-3 text-sm font-medium animate-fade-in">
          <Link to="/shop" onClick={() => setMobileOpen(false)} className="py-2 text-muted-foreground hover:text-foreground">Shop All</Link>
          <Link to="/shop?category=Kitchen" onClick={() => setMobileOpen(false)} className="py-2 text-muted-foreground hover:text-foreground">Kitchen</Link>
          <Link to="/shop?category=Home" onClick={() => setMobileOpen(false)} className="py-2 text-muted-foreground hover:text-foreground">Home</Link>
          <Link to="/shop?category=Accessories" onClick={() => setMobileOpen(false)} className="py-2 text-muted-foreground hover:text-foreground">Accessories</Link>
        </nav>
      )}
    </header>
  );
};

export default Header;
