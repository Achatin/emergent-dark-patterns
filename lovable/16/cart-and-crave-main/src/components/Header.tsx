import { Link } from "react-router-dom";
import { ShoppingBag, Search, Menu, X } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const { itemCount, setIsCartOpen } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { to: "/shop", label: "Shop" },
    { to: "/shop?category=Apparel", label: "Apparel" },
    { to: "/shop?category=Accessories", label: "Accessories" },
    { to: "/shop?category=Home", label: "Home" },
    { to: "/shop?category=Outdoor", label: "Outdoor" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container flex items-center justify-between h-16">
        <button className="md:hidden" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Menu">
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>

        <Link to="/" className="font-serif text-xl tracking-tight">
          Goods & Co.
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link to="/shop" aria-label="Search">
            <Search className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
          </Link>
          <button
            onClick={() => setIsCartOpen(true)}
            className="relative"
            aria-label="Cart"
          >
            <ShoppingBag className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
            {itemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-accent text-accent-foreground text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {itemCount}
              </span>
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden border-t border-border"
          >
            <div className="container py-4 flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  onClick={() => setMobileOpen(false)}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-1"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
