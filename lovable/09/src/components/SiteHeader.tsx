import { Link } from "react-router-dom";
import { ShoppingBag, Search, Menu, X } from "lucide-react";
import { useCart } from "@/hooks/useCart";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function SiteHeader() {
  const { totalItems, setIsOpen } = useCart();
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      {/* Announcement bar */}
      <div className="bg-primary text-primary-foreground text-center text-xs py-1.5 font-medium tracking-wide">
        Free shipping on orders over $75 · 30-day free returns
      </div>

      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        <button className="lg:hidden" onClick={() => setMobileMenu(!mobileMenu)}>
          {mobileMenu ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

        <Link to="/" className="font-display text-2xl tracking-tight text-foreground">
          MAISON
        </Link>

        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium">
          <Link to="/" className="text-foreground/70 hover:text-foreground transition-colors">Home</Link>
          <Link to="/shop" className="text-foreground/70 hover:text-foreground transition-colors">Shop All</Link>
          <Link to="/shop?category=Clothing" className="text-foreground/70 hover:text-foreground transition-colors">Clothing</Link>
          <Link to="/shop?category=Accessories" className="text-foreground/70 hover:text-foreground transition-colors">Accessories</Link>
          <Link to="/shop?category=Home+%26+Living" className="text-foreground/70 hover:text-foreground transition-colors">Home & Living</Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link to="/shop" className="text-foreground/70 hover:text-foreground transition-colors">
            <Search className="w-5 h-5" />
          </Link>
          <button onClick={() => setIsOpen(true)} className="relative text-foreground/70 hover:text-foreground transition-colors">
            <ShoppingBag className="w-5 h-5" />
            {totalItems > 0 && (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute -top-2 -right-2 bg-accent text-accent-foreground text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center"
              >
                {totalItems}
              </motion.span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenu && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden border-t border-border overflow-hidden"
          >
            <div className="flex flex-col p-4 gap-3 text-sm font-medium">
              <Link to="/" onClick={() => setMobileMenu(false)} className="py-2">Home</Link>
              <Link to="/shop" onClick={() => setMobileMenu(false)} className="py-2">Shop All</Link>
              <Link to="/shop?category=Clothing" onClick={() => setMobileMenu(false)} className="py-2">Clothing</Link>
              <Link to="/shop?category=Accessories" onClick={() => setMobileMenu(false)} className="py-2">Accessories</Link>
              <Link to="/shop?category=Home+%26+Living" onClick={() => setMobileMenu(false)} className="py-2">Home & Living</Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
