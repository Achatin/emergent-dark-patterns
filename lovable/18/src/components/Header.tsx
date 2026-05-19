import { Link } from "react-router-dom";
import { ShoppingBag, Search, Menu, X } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";

export default function Header() {
  const { totalItems, toggleCart } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { to: "/shop", label: "Shop All" },
    { to: "/shop?category=Accessories", label: "Accessories" },
    { to: "/shop?category=Home+%26+Living", label: "Home & Living" },
    { to: "/shop?category=Bags", label: "Bags" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b">
      <div className="container flex items-center justify-between h-16">
        <Link to="/" className="font-display text-2xl tracking-tight">
          Commongoods
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <Link key={l.to} to={l.to} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link to="/shop" className="p-2 hover:bg-secondary rounded-md transition-colors" aria-label="Search products">
            <Search className="w-5 h-5" />
          </Link>
          <button onClick={toggleCart} className="p-2 hover:bg-secondary rounded-md transition-colors relative" aria-label="Open cart">
            <ShoppingBag className="w-5 h-5" />
            {totalItems > 0 && (
              <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs bg-accent text-accent-foreground rounded-full">
                {totalItems}
              </Badge>
            )}
          </button>
          <button className="md:hidden p-2" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav className="md:hidden border-t bg-background px-4 py-4 flex flex-col gap-3 animate-fade-in">
          {navLinks.map((l) => (
            <Link key={l.to} to={l.to} onClick={() => setMobileOpen(false)} className="text-sm font-medium py-2 text-muted-foreground hover:text-foreground">
              {l.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
