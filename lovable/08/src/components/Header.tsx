import { Link } from "react-router-dom";
import { ShoppingBag, Search, Menu, X } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useState } from "react";

const navLinks = [
  { to: "/shop", label: "Shop All" },
  { to: "/shop?category=clothing", label: "Clothing" },
  { to: "/shop?category=accessories", label: "Accessories" },
  { to: "/shop?category=footwear", label: "Footwear" },
  { to: "/shop?category=home", label: "Home" },
];

export default function Header() {
  const { itemCount, setIsCartOpen } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b">
      {/* Promo banner */}
      <div className="bg-primary text-primary-foreground text-center text-xs py-2 font-body tracking-wide">
        Free shipping on orders over $150 · Use code <span className="font-semibold">WELCOME15</span> for 15% off
      </div>

      <div className="container flex items-center justify-between h-16">
        {/* Mobile menu toggle */}
        <button className="lg:hidden p-2" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Menu">
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

        {/* Logo */}
        <Link to="/" className="font-display text-2xl tracking-tight">
          MAISON
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className="text-sm font-body font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <button className="p-2 hover:text-accent transition-colors" aria-label="Search">
            <Search className="w-5 h-5" />
          </button>
          <button
            className="p-2 hover:text-accent transition-colors relative"
            onClick={() => setIsCartOpen(true)}
            aria-label="Cart"
          >
            <ShoppingBag className="w-5 h-5" />
            {itemCount > 0 && (
              <span className="absolute -top-0.5 -right-0.5 bg-accent text-accent-foreground text-[10px] font-bold w-4.5 h-4.5 rounded-full flex items-center justify-center min-w-[18px] h-[18px]">
                {itemCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <nav className="lg:hidden border-t bg-background p-4 space-y-3 animate-fade-in">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className="block text-sm font-body font-medium text-muted-foreground hover:text-foreground"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
