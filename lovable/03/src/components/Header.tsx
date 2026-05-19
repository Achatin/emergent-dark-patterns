import { Link } from "react-router-dom";
import { ShoppingBag, Menu, X } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useState } from "react";

const Header = () => {
  const { totalItems } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-md">
      <div className="container-shop flex h-16 items-center justify-between">
        <Link to="/" className="font-display text-2xl tracking-tight text-foreground">
          Goods&Co.
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <Link to="/shop" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            Shop
          </Link>
          <Link to="/shop?category=Bags" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            Bags
          </Link>
          <Link to="/shop?category=Home" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            Home
          </Link>
          <Link to="/shop?category=Accessories" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            Accessories
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link to="/cart" className="relative">
            <ShoppingBag className="h-5 w-5 text-foreground" />
            {totalItems > 0 && (
              <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-accent text-[11px] font-semibold text-accent-foreground">
                {totalItems}
              </span>
            )}
          </Link>
          <button
            className="md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav className="border-t bg-background px-4 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            <Link to="/shop" onClick={() => setMobileOpen(false)} className="text-sm font-medium text-foreground">Shop All</Link>
            <Link to="/shop?category=Bags" onClick={() => setMobileOpen(false)} className="text-sm font-medium text-foreground">Bags</Link>
            <Link to="/shop?category=Home" onClick={() => setMobileOpen(false)} className="text-sm font-medium text-foreground">Home</Link>
            <Link to="/shop?category=Accessories" onClick={() => setMobileOpen(false)} className="text-sm font-medium text-foreground">Accessories</Link>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
